export const manifest = {
  name: "dataview",
  displayName: "Dataview",
  description: "Render simple dataview LIST queries as a recent-notes list; degrade gracefully.",
  version: "1.0.0",
  category: "transformer",
}

// Parse only the shapes we support: LIST [FROM ...] [SORT <field> <asc|desc>] [LIMIT <n>].
// Returns {sort, dir, limit} or null (unsupported -> leave the code block untouched).
function parseQuery(src) {
  const lines = src
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
  if (!lines.length || !/^list\b/i.test(lines[0])) return null
  let sort = "modified"
  let dir = "desc"
  let limit = 0
  for (const line of lines.slice(1)) {
    let m
    if ((m = line.match(/^sort\s+(\w+)\s*(asc|desc)?/i))) {
      sort = m[1].toLowerCase()
      dir = (m[2] || "asc").toLowerCase()
    } else if ((m = line.match(/^limit\s+(\d+)/i))) {
      limit = parseInt(m[1], 10)
    } else if (/^from\b/i.test(line)) {
      // FROM "" = whole vault; only the empty-source form is supported
      if (!/^from\s+""\s*$/i.test(line)) return null
    } else {
      return null // any other clause -> unsupported
    }
  }
  if (sort !== "modified" && sort !== "created" && sort !== "title") return null
  return { sort, dir, limit }
}

const DATAVIEW_CLIENT_JS = `
function renderQuartzDataview() {
  const lists = document.querySelectorAll("ul.dataview-recent")
  if (!lists.length) return
  // Derive the page-relative base from a Quartz-local stylesheet link (relative baseDir).
  // Skip absolute/external hrefs (e.g. Google Fonts) and the protocol-relative form.
  const links = Array.from(document.querySelectorAll('link[rel="stylesheet"][href]'))
  const local = links.find((l) => {
    const h = l.getAttribute("href") || ""
    return !/^(https?:)?\\/\\//i.test(h)
  })
  const base = local ? local.getAttribute("href").replace(/[^/]+$/, "") : ""
  fetch(base + "static/dataviewIndex.json")
    .then((r) => r.json())
    .then((all) => {
      lists.forEach((ul) => {
        const sort = ul.getAttribute("data-sort") || "modified"
        const dir = ul.getAttribute("data-dir") || "desc"
        const limit = parseInt(ul.getAttribute("data-limit") || "0", 10)
        let items = all.slice()
        if (sort === "title") {
          items.sort((a, b) => String(a.title).localeCompare(String(b.title)))
        } else {
          items.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
        }
        if (dir === "asc") items.reverse()
        if (limit > 0) items = items.slice(0, limit)
        ul.innerHTML = ""
        items.forEach((it) => {
          const cleanSlug = String(it.slug).replace(/\\/index$/, "")
          const li = document.createElement("li")
          const a = document.createElement("a")
          a.href = base + cleanSlug
          // Match crawl-links output: the theme only de-highlights links with
          // the internal-link class, so client-generated links need both or
          // they fall back to the gold highlight pill.
          a.className = "internal internal-link"
          a.textContent = it.title || it.slug
          li.appendChild(a)
          ul.appendChild(li)
        })
      })
    })
    .catch(() => {})
}
document.addEventListener("nav", renderQuartzDataview)
`

const Dataview = (_opts) => ({
  name: "Dataview",
  markdownPlugins() {
    return [
      function () {
        return (tree) => {
          const walk = (node) => {
            if (!node || !Array.isArray(node.children)) return
            const out = []
            let changed = false
            for (const child of node.children) {
              if (child.type === "code" && child.lang === "dataview") {
                const q = parseQuery(child.value)
                if (q) {
                  out.push({
                    type: "html",
                    value: `<ul class="dataview-recent" data-sort="${q.sort}" data-dir="${q.dir}" data-limit="${q.limit}"></ul>`,
                  })
                  changed = true
                  continue
                }
                // unsupported -> leave the code block untouched (graceful fallback)
              }
              walk(child)
              out.push(child)
            }
            if (changed) node.children = out
          }
          walk(tree)
        }
      },
    ]
  },
  externalResources() {
    return { js: [{ loadTime: "afterDOMReady", contentType: "inline", script: DATAVIEW_CLIENT_JS }] }
  },
})

export default Dataview

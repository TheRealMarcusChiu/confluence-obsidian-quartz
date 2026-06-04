export const manifest = {
  name: "dataview",
  displayName: "Dataview",
  description: "Render simple dataview LIST queries (recent notes + direct child pages); degrade gracefully.",
  version: "1.0.0",
  category: "transformer",
}

const escapeAttr = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

// Parse only the shapes we support:
//   LIST [FROM ""] [SORT <field> <asc|desc>] [LIMIT <n>]                              -> recent list
//   LIST [FROM ""] WHERE file.folder = <ref>.file.folder + "/" + <name> [...]         -> direct children
//     <ref> is `this` (current page) or `[[Note Title]]` (another page); <name> is
//     `file.name`, `this.file.name`, or `[[…]].file.name` (Obsidian writes any of
//     these). Only the left-hand <ref> decides whose children to list.
// Returns {kind, target, sort, dir, limit} or null (unsupported -> leave the code block untouched).
function parseQuery(src) {
  const lines = src
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
  if (!lines.length || !/^list\b/i.test(lines[0])) return null
  let sort = null
  let dir = null
  let limit = 0
  let children = false
  let target = null // null = this page; otherwise the [[Title]] to resolve
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
    } else if (
      (m = line.match(
        /^where\s+file\.folder\s*=\s*(this|\[\[(.+?)\]\])\.file\.folder\s*\+\s*"\/"\s*\+\s*(?:this\.|\[\[.+?\]\]\.)?file\.name\s*$/i,
      ))
    ) {
      // "direct children of <ref>" predicate; m[2] is set when <ref> is [[Title]]
      children = true
      if (m[2]) target = m[2].split(/[|｜#]/)[0].trim() // drop alias / heading
    } else {
      return null // any other clause -> unsupported
    }
  }
  if (sort && sort !== "modified" && sort !== "created" && sort !== "title") return null
  if (children) return { kind: "children", target, sort: sort || "title", dir: dir || "asc", limit }
  return { kind: "recent", target: null, sort: sort || "modified", dir: dir || "desc", limit }
}

const DATAVIEW_CLIENT_JS = `
function renderQuartzDataview() {
  const lists = document.querySelectorAll("ul.dataview-recent, ul.dataview-children")
  if (!lists.length) return
  // Derive the page-relative base from a Quartz-local stylesheet link (relative baseDir).
  // Skip absolute/external hrefs (e.g. Google Fonts) and the protocol-relative form.
  const links = Array.from(document.querySelectorAll('link[rel="stylesheet"][href]'))
  const local = links.find((l) => {
    const h = l.getAttribute("href") || ""
    return !/^(https?:)?\\/\\//i.test(h)
  })
  const base = local ? local.getAttribute("href").replace(/[^/]+$/, "") : ""
  // Current page slug (e.g. "test-home/index") -> folder prefix ("test-home").
  const bodySlug = (document.body && document.body.getAttribute("data-slug")) || ""
  const selfPrefix = bodySlug.replace(/\\/index$/, "")
  // Resolve a [[Title]] target to its folder prefix: find the indexed note by
  // title (then by slug note-name), and strip its trailing /index.
  function resolvePrefix(all, target) {
    if (!target) return selfPrefix
    let hit = all.find((it) => String(it.title) === target)
    if (!hit) hit = all.find((it) => String(it.title).toLowerCase() === target.toLowerCase())
    if (!hit) {
      hit = all.find((it) => {
        const parts = String(it.slug).split("/")
        const name = parts[parts.length - 1] === "index" ? parts[parts.length - 2] : parts[parts.length - 1]
        return name === target || (name && name.toLowerCase() === target.toLowerCase())
      })
    }
    return hit ? String(hit.slug).replace(/\\/index$/, "") : null
  }
  // A slug is a *direct* child of the prefix when, after stripping "<prefix>/",
  // the remainder is "<name>" (plain page) or "<name>/index" (folder note).
  function isDirectChild(slug, prefix) {
    let rest
    if (prefix === "") {
      rest = slug
    } else {
      if (slug.indexOf(prefix + "/") !== 0) return false
      rest = slug.slice(prefix.length + 1)
    }
    if (rest === "" || rest === "index") return false
    const parts = rest.split("/")
    return parts.length === 1 || (parts.length === 2 && parts[1] === "index")
  }
  fetch(base + "static/dataviewIndex.json")
    .then((r) => r.json())
    .then((all) => {
      lists.forEach((ul) => {
        const isChildren = ul.classList.contains("dataview-children")
        const sort = ul.getAttribute("data-sort") || (isChildren ? "title" : "modified")
        const dir = ul.getAttribute("data-dir") || (isChildren ? "asc" : "desc")
        const limit = parseInt(ul.getAttribute("data-limit") || "0", 10)
        let items = all.slice()
        if (isChildren) {
          const prefix = resolvePrefix(all, ul.getAttribute("data-target") || "")
          if (prefix === null) {
            ul.innerHTML = "" // unresolved [[Title]] -> nothing to list
            return
          }
          items = items.filter((it) => isDirectChild(String(it.slug), prefix))
        }
        // sort ascending by the chosen field, then reverse for desc
        if (sort === "title") {
          items.sort((a, b) =>
            String(a.title).localeCompare(String(b.title), undefined, { numeric: true }),
          )
        } else {
          items.sort((a, b) => new Date(a.date || 0) - new Date(b.date || 0))
        }
        if (dir === "desc") items.reverse()
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
                  const cls = q.kind === "children" ? "dataview-children" : "dataview-recent"
                  let attrs = `data-sort="${q.sort}" data-dir="${q.dir}" data-limit="${q.limit}"`
                  if (q.kind === "children" && q.target) attrs += ` data-target="${escapeAttr(q.target)}"`
                  out.push({ type: "html", value: `<ul class="${cls}" ${attrs}></ul>` })
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

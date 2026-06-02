export const manifest = {
  name: "merge-table",
  displayName: "Merge Table",
  description: "Render ```merge-table JSON blocks as colspan/rowspan/bg tables with Markdown cells.",
  version: "1.0.0",
  category: "transformer",
}

const MAX_DEPTH = 8

const escapeAttr = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

// A merge-table indented inside a list item parses as an indented code block whose
// value is the literal fenced text; pull the JSON back out of it.
const INDENTED_FENCE = /^\s*`{3,}merge-table[ \t]*\r?\n([\s\S]*?)\r?\n\s*`{3,}\s*$/

// Return the JSON string for a node that is a merge-table (fenced or indented-misparsed), else null.
function extractJson(node) {
  if (!node || node.type !== "code" || typeof node.value !== "string") return null
  if (node.lang === "merge-table") return node.value
  if (!node.lang) {
    const m = node.value.match(INDENTED_FENCE)
    if (m) return m[1]
  }
  return null
}

const MergeTable = (_opts) => ({
  name: "MergeTable",
  markdownPlugins() {
    return [
      function () {
        const self = this

        // Parse a cell's markdown and recursively expand any nested merge-tables within it.
        function renderContent(text, depth) {
          const root = self.parse(text)
          return expand(root.children, depth)
        }

        // Walk a child list, replacing merge-table nodes with built tables (depth-capped).
        function expand(children, depth) {
          const out = []
          for (const node of children) {
            const json = extractJson(node)
            if (json != null && depth < MAX_DEPTH) {
              const built = buildTable(json, depth + 1)
              if (built) {
                out.push(...built)
                continue
              }
            }
            if (Array.isArray(node.children)) node.children = expand(node.children, depth)
            out.push(node)
          }
          return out
        }

        // Build the interleaved [raw-html, ...cell mdast, raw-html] node list for one table.
        // Returns null on malformed JSON so the original block is left untouched (graceful).
        function buildTable(jsonText, depth) {
          let data
          try {
            data = JSON.parse(jsonText)
          } catch {
            return null
          }
          if (!data || !Array.isArray(data.rows)) return null

          const nodes = [{ type: "html", value: '<table class="merge-table"><tbody>' }]
          for (const row of data.rows) {
            if (!Array.isArray(row)) continue
            nodes.push({ type: "html", value: "<tr>" })
            for (const cell of row) {
              if (cell == null) continue // covered by a colspan/rowspan
              let tag = "td"
              let attrs = ""
              let content = ""
              if (typeof cell === "string") {
                content = cell
              } else if (typeof cell === "object") {
                tag = cell.header ? "th" : "td"
                content = typeof cell.content === "string" ? cell.content : ""
                const styles = []
                if (cell.bg) styles.push(`background-color:${cell.bg}`)
                if (cell.align) styles.push(`text-align:${cell.align}`)
                if (cell.colspan) attrs += ` colspan="${escapeAttr(cell.colspan)}"`
                if (cell.rowspan) attrs += ` rowspan="${escapeAttr(cell.rowspan)}"`
                if (styles.length) attrs += ` style="${escapeAttr(styles.join(";"))}"`
              }
              nodes.push({ type: "html", value: `<${tag}${attrs}>` })
              if (content) nodes.push(...renderContent(content, depth))
              nodes.push({ type: "html", value: `</${tag}>` })
            }
            nodes.push({ type: "html", value: "</tr>" })
          }
          nodes.push({ type: "html", value: "</tbody></table>" })
          return nodes
        }

        return (tree) => {
          const walk = (node) => {
            if (!node || !Array.isArray(node.children)) return
            const out = []
            let changed = false
            for (const child of node.children) {
              const json = extractJson(child)
              if (json != null) {
                const built = buildTable(json, 1)
                if (built) {
                  // Obsidian nests a merge-table under a bullet via an empty
                  // intermediate bullet (`- \n    ```merge-table`). CommonMark
                  // parses that empty bullet as a setext underline, promoting the
                  // parent bullet's text to a heading (`- hello` → <h2>hello</h2>).
                  // Inside a list item, a heading immediately before the table is
                  // always this artifact — demote it back to a paragraph.
                  const prev = out[out.length - 1]
                  if (node.type === "listItem" && prev && prev.type === "heading") {
                    prev.type = "paragraph"
                    delete prev.depth
                  }
                  out.push(...built)
                  changed = true
                  continue
                }
              }
              walk(child) // recurse to catch merge-tables indented inside lists/quotes
              out.push(child)
            }
            if (changed) node.children = out
          }
          walk(tree)
        }
      },
    ]
  },
})

export default MergeTable

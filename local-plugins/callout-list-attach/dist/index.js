export const manifest = {
  name: "callout-list-attach",
  displayName: "Callout List Attach",
  description:
    "Nest a blockquote/callout that immediately follows a list (no blank line) into that list's last item, so it indents under the bullet.",
  version: "1.0.0",
  category: "transformer",
}

// In Obsidian, a callout written right after a bullet with NO blank line is meant
// to belong to that list item (indented under the bullet); a blank line means a
// separate top-level block. CommonMark parses both the same (list, then sibling
// blockquote), but the difference survives in mdast line positions. Runs before
// OFM (order 29): when a blockquote starts on the line directly after a list ends
// (adjacent, no blank line), move it into the list's last item so it indents.
// An empty bullet (`- ` with no content) directly after a paragraph line is
// not form a list, so a callout meant to sit in it drops to the base level:
//   - an empty `- ` is consumed by CommonMark as a *setext heading underline*
//     (the preceding paragraph becomes a heading, the list is destroyed);
//   - an empty `1. ` can't interrupt the paragraph, so it's absorbed as a lazy
//     continuation (no list at all).
// Inserting a blank line before such an empty bullet makes it start a fresh list
// while staying empty (so the callout still renders inline in it).
const isEmptyBullet = (l) => /^\s*([-*+]|\d+[.)])\s*$/.test(l)
const isPlainText = (l) => {
  const t = l.trim()
  if (t === "") return false
  return (
    !/^([-*+]|\d+[.)])\s/.test(t) && // list item
    !/^>/.test(t) && // blockquote
    !/^#{1,6}\s/.test(t) && // heading
    !/^(```|~~~)/.test(t) && // code fence
    !/^\|/.test(t) && // table row
    !/^([-*+]|\d+[.)])\s*$/.test(t) // empty bullet
  )
}

const CalloutListAttach = () => ({
  name: "CalloutListAttach",
  textTransform(_ctx, src) {
    const text = src.toString()
    const lines = text.split("\n")
    const out = []
    let fence = ""
    for (const line of lines) {
      const fm = line.match(/^\s*(`{3,}|~{3,})/)
      if (fm) {
        const marker = fm[1][0]
        fence = fence === "" ? marker : fence === marker ? "" : fence
        out.push(line)
        continue
      }
      if (!fence && isEmptyBullet(line) && isPlainText(out[out.length - 1] || "")) {
        out.push("") // blank line so the empty bullet starts a list instead of merging into the paragraph
      }
      out.push(line)
    }
    return out.join("\n")
  },
  markdownPlugins() {
    return [
      () => (tree) => {
        const walk = (node) => {
          if (!node || !Array.isArray(node.children)) return
          const kids = node.children
          for (let i = 0; i + 1 < kids.length; i++) {
            const cur = kids[i]
            const next = kids[i + 1]
            if (
              cur.type === "list" &&
              next.type === "blockquote" &&
              cur.position &&
              next.position &&
              next.position.start.line === cur.position.end.line + 1 // adjacent: no blank line
            ) {
              let lastItem
              for (let j = cur.children.length - 1; j >= 0; j--) {
                if (cur.children[j].type === "listItem") {
                  lastItem = cur.children[j]
                  break
                }
              }
              if (lastItem) {
                lastItem.children.push(next)
                kids.splice(i + 1, 1) // remove the blockquote from the sibling list
                i-- // re-check this position (another blockquote may follow)
              }
            }
          }
          for (const k of kids) walk(k)
        }
        walk(tree)
      },
    ]
  },
})

export default CalloutListAttach

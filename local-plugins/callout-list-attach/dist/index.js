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
const CalloutListAttach = () => ({
  name: "CalloutListAttach",
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

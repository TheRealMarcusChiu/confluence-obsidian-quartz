export const manifest = {
  name: "excerpt",
  displayName: "Excerpt",
  description: "Render ```excerpt fenced blocks as a labelled, accent-bordered box with full Markdown body.",
  version: "1.0.0",
  category: "transformer",
}

const escapeAttr = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
const escapeHtml = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

const Excerpt = (opts) => {
  const label = (opts && opts.label) || "Excerpt"
  const accent = (opts && opts.accentColor) || "#0052CC"
  const showLabel = !opts || opts.showLabel !== false

  return {
    name: "Excerpt",
    markdownPlugins() {
      // `this` is the unified processor; `this.parse` parses a string to mdast.
      return [
        function () {
          const self = this
          return (tree) => {
            const walk = (node) => {
              if (!node || !Array.isArray(node.children)) return
              for (let i = 0; i < node.children.length; i++) {
                const child = node.children[i]
                if (child.type === "code" && child.lang === "excerpt") {
                  const inner = self.parse(child.value)
                  const labelHtml = showLabel ? `<div class="excerpt-label">${escapeHtml(label)}</div>` : ""
                  const open = {
                    type: "html",
                    value: `<div class="excerpt" style="--excerpt-accent:${escapeAttr(accent)}">${labelHtml}<div class="excerpt-body">`,
                  }
                  const close = { type: "html", value: "</div></div>" }
                  node.children.splice(i, 1, open, ...inner.children, close)
                  i += inner.children.length + 1
                } else {
                  walk(child)
                }
              }
            }
            walk(tree)
          }
        },
      ]
    },
  }
}

export default Excerpt

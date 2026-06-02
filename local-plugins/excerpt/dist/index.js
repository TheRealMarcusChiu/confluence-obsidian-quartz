export const manifest = {
  name: "excerpt",
  displayName: "Excerpt",
  description: "Render ```excerpt fenced blocks inline (invisible wrapper), preserving the ^excerpt anchor for transclusion.",
  version: "1.0.0",
  category: "transformer",
}

// The Obsidian excerpt plugin draws no box: it renders the fenced body as
// ordinary content. We keep only a styling-free wrapper `<div class="excerpt">`
// — it is `display:contents` in CSS, so it adds nothing visually, but it remains
// the single element the trailing `^excerpt` block-anchor attaches to, so
// `blocks["excerpt"]` captures the *whole* excerpt for `![[note#^excerpt]]`.
const Excerpt = () => {
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
                  const open = { type: "html", value: `<div class="excerpt">` }
                  const close = { type: "html", value: "</div>" }
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

export const manifest = {
  name: "callout-wrapper-fix",
  displayName: "Callout Wrapper Fix",
  description:
    "Move content that leaked into the hidden title of indent/list-indent-undo/wrapper callouts back into the callout body.",
  version: "1.0.0",
  category: "transformer",
}

// The [!indent] / [!list-indent-undo] / [!wrapper] callouts are invisible layout
// wrappers whose `.callout-title` is hidden (display:none in custom.scss). When
// such a callout is *nested* inside another callout, OFM inserts a single-level
// `\n> ` title/body separator that doesn't match the deeper `> >` nesting, so the
// first body line (e.g. an image embed) folds into the title — and then vanishes.
// Runs after OFM (order 35): for these wrappers, relocate any real content from
// `.callout-title-inner` into `.callout-content` (creating it if absent).
const WRAPPERS = ["indent", "list-indent-undo", "wrapper"]

const findChild = (node, cls) =>
  node && Array.isArray(node.children)
    ? node.children.find(
        (c) =>
          c.type === "element" &&
          c.properties &&
          Array.isArray(c.properties.className) &&
          c.properties.className.includes(cls),
      )
    : undefined

const hasReal = (children) =>
  Array.isArray(children) &&
  children.some(
    (c) => c.type === "element" || (c.type === "text" && typeof c.value === "string" && c.value.trim() !== ""),
  )

const CalloutWrapperFix = () => ({
  name: "CalloutWrapperFix",
  htmlPlugins() {
    return [
      () => (tree) => {
        const walk = (node) => {
          if (
            node &&
            node.type === "element" &&
            node.tagName === "blockquote" &&
            node.properties &&
            Array.isArray(node.properties.className) &&
            node.properties.className.includes("callout") &&
            WRAPPERS.some((w) => node.properties.className.includes(w))
          ) {
            const title = findChild(node, "callout-title")
            const inner = title && findChild(title, "callout-title-inner")
            if (inner && hasReal(inner.children)) {
              let content = findChild(node, "callout-content")
              if (!content) {
                content = {
                  type: "element",
                  tagName: "div",
                  properties: { className: ["callout-content"] },
                  children: [],
                }
                node.children.push(content)
              }
              content.children = [...inner.children, ...content.children]
              inner.children = []
            }
          }
          if (node && Array.isArray(node.children)) for (const c of node.children) walk(c)
        }
        walk(tree)
      },
    ]
  },
})

export default CalloutWrapperFix

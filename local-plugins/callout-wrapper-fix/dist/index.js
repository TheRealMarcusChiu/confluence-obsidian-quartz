export const manifest = {
  name: "callout-wrapper-fix",
  displayName: "Callout Wrapper Fix",
  description:
    "Repair nested-callout structure: rescue body content that OFM mis-parsed into the hidden title or left unwrapped outside .callout-content.",
  version: "1.0.0",
  category: "transformer",
}

// When a callout is *nested* inside another callout, OFM's single-level `\n> `
// title/body separator doesn't match the deeper `> >` nesting, producing two
// broken shapes (runs after OFM, order 35):
//   (A) the first body line folds into the callout title (and the [!indent]/
//       [!list-indent-undo]/[!wrapper] CSS hides the title -> content vanishes);
//   (B) the body is emitted as a bare sibling of .callout-title instead of being
//       wrapped in .callout-content (so collapse can't hide it -> it renders
//       "outside" a collapsed callout, e.g. [!expand] inside [!expand-ui]).
// Fix both by relocating the stray content into .callout-content.
const WRAPPERS = ["indent", "list-indent-undo", "wrapper"]

const hasClass = (node, cls) =>
  node &&
  node.type === "element" &&
  node.properties &&
  Array.isArray(node.properties.className) &&
  node.properties.className.includes(cls)

const findChild = (node, cls) =>
  node && Array.isArray(node.children) ? node.children.find((c) => hasClass(c, cls)) : undefined

const isReal = (c) =>
  c.type === "element" || (c.type === "text" && typeof c.value === "string" && c.value.trim() !== "")

const hasReal = (children) => Array.isArray(children) && children.some(isReal)

const textOf = (node) => {
  if (!node) return ""
  if (node.type === "text") return node.value || ""
  if (Array.isArray(node.children)) return node.children.map(textOf).join("")
  return ""
}

// Quartz's auto-generated title for a titleless callout: type with hyphens → spaces,
// first letter capitalized (e.g. "list-indent-undo" → "List indent undo").
const defaultTitleOf = (type) => {
  const s = type.replace(/-/g, " ")
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const CalloutWrapperFix = () => ({
  name: "CalloutWrapperFix",
  htmlPlugins() {
    return [
      () => (tree) => {
        const ensureContent = (node, title) => {
          let content = findChild(node, "callout-content")
          if (content) return content
          content = {
            type: "element",
            tagName: "div",
            properties: { className: ["callout-content"] },
            children: [],
          }
          const ti = title ? node.children.indexOf(title) : -1
          if (ti >= 0) node.children.splice(ti + 1, 0, content)
          else node.children.push(content)
          return content
        }

        const walk = (node) => {
          if (hasClass(node, "callout") && node.tagName === "blockquote") {
            const className = node.properties.className
            const title = findChild(node, "callout-title")

            // (A) body content folded into a hidden wrapper-callout title
            const wrapperType = WRAPPERS.find((w) => className.includes(w))
            if (wrapperType) {
              const inner = title && findChild(title, "callout-title-inner")
              const innerText = textOf(inner).trim()
              const isDefaultTitle =
                innerText !== "" && innerText.toLowerCase() === defaultTitleOf(wrapperType).toLowerCase()
              if (inner && !isDefaultTitle && hasReal(inner.children)) {
                const content = ensureContent(node, title)
                content.children = [...inner.children, ...content.children]
                inner.children = []
              }
            }

            // (B) body emitted as bare siblings of the title (not in .callout-content)
            const stray = node.children.filter(
              (c) => c !== title && !hasClass(c, "callout-content") && isReal(c),
            )
            if (stray.length) {
              const content = ensureContent(node, title)
              node.children = node.children.filter((c) => !stray.includes(c))
              content.children.push(...stray)
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

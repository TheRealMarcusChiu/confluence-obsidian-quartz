export const manifest = {
  name: "transclude-resolve",
  displayName: "Transclude Resolve",
  description:
    "Resolve bare folder-note targets: rewrite data-slug on transclusions and fix the href/data-slug on internal navigation links.",
  version: "1.0.0",
  category: "transformer",
}

// Every note in this vault is a folder note → migrated to `NOTE/index.md`, so its
// slug ends in `/index`. Quartz's shortest-path matcher keys on the last path
// segment (`index`), so a bare/title target (`7`, `Basis Vectors`, `8 - 1`) never
// resolves. Two symptoms, both fixed here (runs after crawl-links, order 65):
//   1. Transclusions: crawl-links leaves `data-slug` as the bare name and
//      renderPage's exact `slug ===` lookup drops the embed — rewrite data-slug.
//   2. Navigation links: crawl-links emits a root-relative href (`../../8---1`)
//      and a bare `data-slug`, so `[[8 - 1]]` points at the site root instead of
//      the nested `…/8/8---1/` page — rewrite both data-slug and href.
// See ADR-0002.
const simplify = (slug) => slug.replace(/\/index$/, "")

// Relative URL from one folder-note page to another (both served as folders).
const relPath = (fromSlug, toSlug) => {
  const from = simplify(fromSlug).split("/").filter(Boolean)
  const to = simplify(toSlug).split("/").filter(Boolean)
  let i = 0
  while (i < from.length && i < to.length && from[i] === to[i]) i++
  const parts = []
  for (let k = i; k < from.length; k++) parts.push("..")
  for (let k = i; k < to.length; k++) parts.push(to[k])
  const rel = parts.join("/")
  return (rel === "" ? "." : rel) + "/"
}

const TranscludeResolve = () => {
  return {
    name: "TranscludeResolve",
    htmlPlugins(ctx) {
      const allSlugs = (ctx && ctx.allSlugs) || []
      const slugSet = new Set(allSlugs)

      const resolve = (target) => {
        if (!target || slugSet.has(target)) return undefined // already a real slug
        const withIndex = target + "/index"
        const suffix = "/" + target + "/index"
        const matches = allSlugs.filter((s) => s === withIndex || s.endsWith(suffix))
        if (matches.length === 1) return matches[0]
        if (matches.length > 1) {
          console.warn(
            `[transclude-resolve] ambiguous target "${target}" → ${matches.join(", ")}; leaving unresolved`,
          )
        }
        return undefined
      }

      return [
        () => {
          return (tree, file) => {
            const curSlug = file && file.data && file.data.slug
            const walk = (node) => {
              if (!node || typeof node !== "object") return
              if (node.type === "element" && node.tagName === "a" && node.properties) {
                const cls = node.properties.className
                const classes = Array.isArray(cls) ? cls : []
                const target = node.properties["data-slug"]
                if (
                  typeof target === "string" &&
                  (classes.includes("internal-link") || classes.includes("transclude-inner"))
                ) {
                  const resolved = resolve(target)
                  if (resolved) {
                    node.properties["data-slug"] = resolved
                    // Regular nav link (not a transclude embed): fix the href too.
                    if (
                      !classes.includes("transclude-inner") &&
                      typeof node.properties.href === "string" &&
                      curSlug
                    ) {
                      node.properties.href = relPath(curSlug, resolved)
                    }
                  }
                }
              }
              if (Array.isArray(node.children)) {
                for (const child of node.children) walk(child)
              }
            }
            walk(tree)
          }
        },
      ]
    },
  }
}

export default TranscludeResolve

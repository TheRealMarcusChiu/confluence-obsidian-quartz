export const manifest = {
  name: "transclude-resolve",
  displayName: "Transclude Resolve",
  description:
    "Rewrite bare transclusion data-slug targets to their real folder-note (…/index) slugs so ![[Note#^block]] embeds resolve.",
  version: "1.0.0",
  category: "transformer",
}

// Every note in this vault is a folder note → migrated to `NOTE/index.md`, so its
// slug ends in `/index`. Quartz's shortest-path matcher keys on the last path
// segment (`index`), so a bare/title embed target (`7`, `Basis Vectors`) never
// resolves: crawl-links leaves `data-slug` as the bare name, and renderPage's
// exact `slug ===` lookup then drops the embed. This transformer runs after
// crawl-links (order 65) and rewrites the `data-slug` on `.transclude` anchors
// to the matching `…/<name>/index` slug. Scoped to transclude anchors only, so
// the (already-working) navigation links are left untouched. See ADR-0002.
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
            `[transclude-resolve] ambiguous transclusion target "${target}" → ${matches.join(
              ", ",
            )}; leaving unresolved`,
          )
        }
        return undefined
      }

      return [
        () => {
          return (tree) => {
            const walk = (node) => {
              if (!node || typeof node !== "object") return
              if (node.type === "element" && node.tagName === "a" && node.properties) {
                const cls = node.properties.className
                if (Array.isArray(cls) && cls.includes("transclude-inner")) {
                  const target = node.properties["data-slug"]
                  if (typeof target === "string") {
                    const resolved = resolve(target)
                    if (resolved) node.properties["data-slug"] = resolved
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

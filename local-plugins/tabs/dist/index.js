export const manifest = {
  name: "tabs",
  displayName: "Tabs",
  description: "Render [!tabs] callouts with === separators as an interactive tab widget.",
  version: "1.0.0",
  category: "transformer",
}

const escapeHtml = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

// Concatenate all text under an mdast node.
function nodeText(node) {
  if (!node) return ""
  if (typeof node.value === "string") return node.value
  if (Array.isArray(node.children)) return node.children.map(nodeText).join("")
  return ""
}

// Is this node a `=== Tab Name` separator paragraph? Returns the label, or null.
function tabSeparatorLabel(node) {
  if (!node || node.type !== "paragraph") return null
  const t = nodeText(node).trim()
  const m = t.match(/^={3,}\s*(.*)$/)
  return m ? m[1].trim() : null
}

// Is this blockquote a [!tabs] callout? (checked before OFM transforms callouts)
function isTabsCallout(node) {
  if (!node || node.type !== "blockquote" || !Array.isArray(node.children)) return false
  const first = node.children[0]
  return !!first && first.type === "paragraph" && /^\[!tabs\]/i.test(nodeText(first).trim())
}

// Build the replacement node list (raw-HTML wrappers interleaved with panel mdast).
function buildTabs(blockquote) {
  const rest = blockquote.children.slice(1) // drop the [!tabs] title paragraph
  const tabs = []
  let current = null
  for (const node of rest) {
    const label = tabSeparatorLabel(node)
    if (label !== null) {
      current = { label, nodes: [] }
      tabs.push(current)
    } else if (current) {
      current.nodes.push(node)
    }
    // content before the first === is ignored
  }
  if (tabs.length === 0) return null // not a real tabs block; leave untouched

  const out = [{ type: "html", value: '<div class="tabs"><div class="tabs-nav" role="tablist">' }]
  tabs.forEach((tab, j) => {
    const active = j === 0 ? " is-active" : ""
    out.push({
      type: "html",
      value: `<button type="button" class="tabs-btn${active}" data-tab="${j}">${escapeHtml(tab.label)}</button>`,
    })
  })
  out.push({ type: "html", value: '</div><div class="tabs-panels">' })
  tabs.forEach((tab, j) => {
    const active = j === 0 ? " is-active" : ""
    out.push({ type: "html", value: `<div class="tabs-panel${active}" data-tab="${j}">` })
    out.push(...tab.nodes)
    out.push({ type: "html", value: "</div>" })
  })
  out.push({ type: "html", value: "</div></div>" })
  return out
}

// This script is emitted once per full page load (rendered after </body> with
// data-persist, so the SPA router never re-executes it); Quartz fires the "nav"
// event on initial load and every SPA navigation, so setupQuartzTabs re-runs over
// fresh .tabs DOM each time. No addCleanup is needed: the click handler is
// idempotent (it sets is-active from an absolute data-tab match), so even a
// duplicate listener would compute the same final state. Keep it idempotent if
// you change it — a stateful handler here WOULD need cleanup.
const TAB_CLIENT_JS = `
function setupQuartzTabs() {
  document.querySelectorAll(".tabs").forEach((root) => {
    const btns = Array.from(root.querySelectorAll(".tabs-btn"))
    const panels = Array.from(root.querySelectorAll(".tabs-panel"))
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = btn.getAttribute("data-tab")
        btns.forEach((b) => b.classList.toggle("is-active", b.getAttribute("data-tab") === idx))
        panels.forEach((p) => p.classList.toggle("is-active", p.getAttribute("data-tab") === idx))
      })
    })
  })
}
document.addEventListener("nav", setupQuartzTabs)
`

const Tabs = (_opts) => ({
  name: "Tabs",
  markdownPlugins() {
    return [
      function () {
        return (tree) => {
          const walk = (node) => {
            if (!node || !Array.isArray(node.children)) return
            const out = []
            let changed = false
            for (const child of node.children) {
              if (isTabsCallout(child)) {
                const built = buildTabs(child)
                if (built) {
                  out.push(...built)
                  changed = true
                  continue
                }
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
    return {
      js: [
        {
          loadTime: "afterDOMReady",
          contentType: "inline",
          script: TAB_CLIENT_JS,
        },
      ],
    }
  },
})

export default Tabs

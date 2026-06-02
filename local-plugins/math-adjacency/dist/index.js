export const manifest = {
  name: "math-adjacency",
  displayName: "Math Adjacency",
  description:
    "Disambiguate adjacent inline math ($a$$b$) so remark-math renders both inline maths, not a display fence.",
  version: "1.0.0",
  category: "transformer",
}

// remark-math treats `$$` as a display-math fence, so two back-to-back inline
// maths written `$a$$b$` (close-of-one immediately followed by open-of-next, as
// Obsidian renders them) get mis-tokenized and leak as raw text. Insert a
// zero-width space between such a `$$` so it reads as two single-`$` delimiters.
//
// Only a `$$` flanked by non-space, non-`$` characters is split — a real display
// fence (`$$ … $$`, on its own or space/newline-delimited) has whitespace/boundary
// on the outside and is left untouched. Fenced code blocks are skipped entirely
// so literal `$$` (shell PIDs, merge-table JSON, code samples) is preserved.
const ADJACENT = /(?<=[^$\s])\$\$(?=[^$\s])/g

// CommonMark-style fence tracking: a closing fence needs the same marker char
// and a length >= the opening fence, so a 4-backtick excerpt wrapping a
// 3-backtick block isn't closed early.
const FENCE = /^(\s*)(`{3,}|~{3,})/

const MathAdjacency = () => ({
  name: "MathAdjacency",
  textTransform(_ctx, src) {
    const text = src.toString()
    if (text.indexOf("$$") === -1) return text
    const lines = text.split("\n")
    let fenceChar = ""
    let fenceLen = 0
    for (let i = 0; i < lines.length; i++) {
      const m = lines[i].match(FENCE)
      if (m) {
        const marker = m[2]
        if (!fenceChar) {
          fenceChar = marker[0]
          fenceLen = marker.length
        } else if (marker[0] === fenceChar && marker.length >= fenceLen) {
          fenceChar = ""
          fenceLen = 0
        }
        continue
      }
      if (fenceChar) continue // inside a code fence
      lines[i] = lines[i].replace(ADJACENT, () => "$​$")
    }
    return lines.join("\n")
  },
})

export default MathAdjacency

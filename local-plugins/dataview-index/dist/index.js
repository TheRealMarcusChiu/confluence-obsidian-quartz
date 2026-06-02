import fs from "fs"
import path from "path"

export const manifest = {
  name: "dataview-index",
  displayName: "Dataview Index",
  description: "Emit static/dataviewIndex.json: listed pages with title + modified date.",
  version: "1.0.0",
  category: "emitter",
}

function getModified(data) {
  const d = data && data.dates
  return d ? d.modified ?? d.created ?? d.published ?? null : null
}

const DataviewIndex = (_opts) => {
  const emitAll = async (ctx, content) => {
    const entries = []
    for (const [, file] of content) {
      const data = file.data ?? {}
      if (data.unlisted === true) continue
      if (!data.slug) continue
      if (data.slug === "index") continue // the site-root/home page, not a note
      const text = data.text
      const date = getModified(data)
      // Skip generated/placeholder pages (no text AND no user date). A genuinely
      // empty *note* still carries created/modified frontmatter, so it stays
      // listed (it's a real child page).
      if ((!text || text === "") && !date) continue
      const fm = data.frontmatter ?? {}
      entries.push({
        slug: data.slug,
        title: fm.title ?? data.slug,
        date: date ? new Date(date).toISOString() : null,
      })
    }
    const outPath = path.join(ctx.argv.output, "static", "dataviewIndex.json")
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, JSON.stringify(entries))
    return [outPath]
  }
  return {
    name: "DataviewIndex",
    emit: (ctx, content) => emitAll(ctx, content),
    partialEmit: (ctx, content) => emitAll(ctx, content),
  }
}

export default DataviewIndex

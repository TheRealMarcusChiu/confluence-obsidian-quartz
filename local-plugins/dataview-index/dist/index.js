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
      const text = data.text
      if (!text || text === "") continue // skip empty/generated pages
      const date = getModified(data)
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

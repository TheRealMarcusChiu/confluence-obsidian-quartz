export declare const manifest: {
  name: string
  displayName: string
  description: string
  version: string
  category: string
}
declare const DataviewIndex: (opts?: unknown) => {
  name: string
  emit: (ctx: unknown, content: unknown) => Promise<string[]>
  partialEmit: (ctx: unknown, content: unknown) => Promise<string[]>
}
export default DataviewIndex

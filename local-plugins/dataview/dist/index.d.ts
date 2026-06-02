export declare const manifest: {
  name: string
  displayName: string
  description: string
  version: string
  category: string
}
declare const Dataview: (opts?: unknown) => {
  name: string
  markdownPlugins(): unknown[]
  externalResources(): { js: unknown[] }
}
export default Dataview

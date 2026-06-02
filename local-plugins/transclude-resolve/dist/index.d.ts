export declare const manifest: {
  name: string
  displayName: string
  description: string
  version: string
  category: string
}

declare const TranscludeResolve: () => {
  name: string
  htmlPlugins(ctx: { allSlugs?: string[] }): unknown[]
}

export default TranscludeResolve

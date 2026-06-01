export declare const manifest: {
  name: string
  displayName: string
  description: string
  version: string
  category: string
}

export interface ExcerptOptions {
  label?: string
  accentColor?: string
  showLabel?: boolean
}

declare const Excerpt: (opts?: ExcerptOptions) => {
  name: string
  markdownPlugins(): unknown[]
}

export default Excerpt

---
title: "Web Search Engines - Web Crawlers／Spider／Robot"
created: 2019-03-15T01:19:04.636-05:00
modified: 2025-10-10T22:25:08.870-05:00
parent: "[[Search Engines - Types]]"
children:
  - "[[Common Crawler]]"
---
###### Web Crawlers/Spider/Robot
````excerpt
- is a program or automated script which browses the World Wide Web in a methodical, automated manner (i.e. this process is called Web crawling or spidering)
````
^excerpt

###### Web Search Engines
````excerpt
- use <strong>web crawlers</strong> as a means of providing up-to-date data
````
^excerpt

# Introduction

![](https://www.youtube.com/watch?v=0eKVizvYSUQ)
# Subpages
- google's web crawler
	- to see the information extracted on your domain use [google's search console](https://search.google.com/search-console/about)
	- or use Chrome DevTool's Lighthouse Tool in the Audits tab
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```

# Web Search Engine Problems
- [[JavaScript]] sometimes determines what is shown several websites, this requires the search engine to execute JavaScript on their end in order to extract the relevant information
	- [creating HTML snapshots](https://developers.google.com/search/docs/ajax-crawling/docs/html-snapshot)
	- [Google starts executing JavaScript](https://webmasters.googleblog.com/2014/05/understanding-web-pages-better.html) - started since 2008
	- [prerender.io](https://prerender.io/) - allows your Javascript website to be crawled perfectly by search engines

# Interfacing With Web Search Engines - Search Engine Optimization (SEO)
- domain.com/any-path-prefix/[sitemap.xml](https://www.sitemaps.org/) - informs search engines
- domain.com/any-path-prefix/[robots.txt](http://www.robotstxt.org/) - tells search engine what can be crawled and/or not

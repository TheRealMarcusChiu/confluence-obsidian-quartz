---
title: "HTTP - Headers - Content-Security-Policy (CSP)"
created: 2021-03-14T17:32:48.052-05:00
modified: 2022-01-03T18:27:53.545-06:00
parent: "[[HTTP - Headers]]"
children: []
---
###### Content-Security-Policy (CSP)
- is an HTTP response header that allows a website to control resources the user agent is allowed to load for a given page
- helps guard against [Cross-Site Scripting (XSS)](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) attacks

# Syntax
- <code>Content-Security-Policy: <font style="color: rgb(153,0,85);"><font style="color: rgb(153,153,153);">\<</font>policy-directive<font style="color: rgb(153,153,153);">\>\[</font></font>; <font style="color: rgb(153,0,85);"><font style="color: rgb(153,153,153);">\<</font>policy-directive<font style="color: rgb(153,153,153);">\>\]\*</font></font></code>

where:
- <code><font style="color: rgb(153,0,85);"><font style="color: rgb(153,153,153);">\<</font>policy-directive<font style="color: rgb(153,153,153);">\></font></font></code> consists of: <code>\<directive\> \<value\></code> with no internal punctuation

# Policy
Your policy should include a [<code>default-src</code>](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src) policy directive, which is a fallback for other resource types when they don't have policies of their own (for a complete list, see the description of the [<code>default-src</code>](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src) directive
# Examples

> [!expand]- Example 1
> A website administrator wants all content to come from the site's own origin (this excludes subdomains.)
> - <code>Content-Security-Policy: default-src 'self'</code>

> [!expand]- Example 2
> A website administrator wants to allow content from a trusted domain and all its subdomains (it doesn't have to be the same domain that the CSP is set on.)
> - <code>Content-Security-Policy: default-src 'self' trusted.com \*.trusted.com</code>

> [!expand]- Example 3
> A website administrator wants to allow users of a web application to include images from any origin in their own content, but to restrict audio or video media to trusted providers, and all scripts only to a specific server that hosts trusted code.
> - <code>Content-Security-Policy: default-src 'self'; img-src \*; media-src media1.com media2.com; script-src userscripts.example.com</code>
>
> Here, by default, content is only permitted from the document's origin, with the following exceptions:
> - Images may load from anywhere (note the "\*" wildcard)
> - Media is only allowed from [media1.com](http://media1.com) and [media2.com](http://media2.com) (and not from subdomains of those sites)
> - Executable script is only allowed from [userscripts.example.com](http://userscripts.example.com)
# Subpages
- [[CSP vs SOP／CORS|CSP vs SOP/CORS]]

# Resources
- [https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

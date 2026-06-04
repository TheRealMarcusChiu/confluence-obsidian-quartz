---
title: "CSP vs SOP／CORS"
created: 2021-03-14T20:27:35.324-05:00
modified: 2021-09-11T20:14:30.744-05:00
parent: "[[HTTP - Headers]]"
children: []
---
# What’s the Difference Between
- [[HTTP - Headers - Content-Security-Policy (CSP)|Content-Security-Policy (CSP)]]
- [[Cross-Origin Request (COR) - Same-Origin Policy (SOP) - Cross-Origin Resource Sharing (CORS) - Cross-Origin Read Blocking (CORB)|Same-Origin Policy (SOP) - Cross-Origin Resource Sharing (CORS)]]

# TL;DR

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>CSP in Action</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <strong>CSP</strong> allows site <code>a.com</code> to prevent itself from loading <code>b.com</code> sources\n- absence of <strong>CSP</strong> allows site <code>a.com</code> to load from <code>b.com</code> sources",
      "![[CSP vs SOP／CORS/csp-vs-sop-and-cors--csp-in-action.png|226]]"
    ],
    [
      {
        "content": "<strong>SOP in Action</strong>\n<strong>(Absence of CORS)</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <strong>SOP</strong> (absence of CORS) prevents site <code>a.com</code> from reading data form site <code>b.com</code>\n- <strong>CORS</strong> allows site <code>b.com</code> to give permission to site <code>a.com</code> to read data from site <code>b.com</code>",
      "![[CSP vs SOP／CORS/csp-vs-sop-and-cors--sop-in-action.png|226]]"
    ]
  ]
}
```
# Not TL;DR

Let's say you are on website <code>a.com</code> and it wants to make a request to <code>b.com</code>, 2 things can prevent that from happening:
- When user visits <code>a.com</code> in browser, <code>a.com</code> server returns a HTTP response which can either contain a CSP HTTP Header or not:
	- Existence of a CSP HTTP Header can POTENTIALLY restrict <code>a.com</code> in browser from issuing request to <code>b.com</code>
	- Non-existence of a CSP HTTP Header allows <code>a.com</code> in browser to issue a request to <code>b.com</code>
- Upon receiving the request, <code>b.com</code> server responds with a HTTP response which can either contain a CORS HTTP Header or not
	- Non-existence of a CORS HTTP Header prevents <code>a.com</code> in browser from loading <code>b.com</code>'s HTTP response
	- Existence of a CORS HTTP Header can POTENTIALLY allow <code>a.com</code> in browser to load <code>b.com</code>'s HTTP response
	- NOTE: by default, SOP will restrict the response from loading, unless otherwise specified by CORS

So, in the example above:
- CSP protects <code>a.com</code>
- SOP (the lack of CORS) protects <code>b.com</code>

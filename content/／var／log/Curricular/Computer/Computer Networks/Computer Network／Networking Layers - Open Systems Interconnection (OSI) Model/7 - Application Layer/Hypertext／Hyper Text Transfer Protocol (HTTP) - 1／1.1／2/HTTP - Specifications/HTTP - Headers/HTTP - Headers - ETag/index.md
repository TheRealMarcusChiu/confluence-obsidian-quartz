---
title: "HTTP - Headers - ETag"
created: 2020-01-07T23:16:38.821-06:00
modified: 2020-01-07T23:25:05.481-06:00
parent: "[[HTTP - Headers]]"
children: []
---
The <strong><code>ETag</code></strong> HTTP response header is an identifier for a specific version of a resource. It lets caches be more efficient and save bandwidth, as a web server does not need to resend a full response if the content has not changed. Additionally, etags help prevent simultaneous updates of a resource from overwriting each other (["mid-air collisions"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag#Caching_of_unchanged_resources)).

If the resource at a given URL changes, a new <code>Etag</code> value <em>must</em> be generated. A comparison of them can determine whether two representations of a resource are the same. Etags are therefore similar to fingerprints, and might also be used for tracking purposes by some servers. They might also be set to persist indefinitely by a tracking server.

```merge-table
{
  "rows": [
    [
      {
        "content": "Header type",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      "[Response header](https://developer.mozilla.org/en-US/docs/Glossary/Response_header)"
    ],
    [
      {
        "content": "[Forbidden header name](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      "no"
    ]
  ]
}
```
## Syntax
```
ETag: W/"<etag_value>"
ETag: "<etag_value>"
```
- <strong>W/</strong> - indicates that a weak validator is used. Weak etags are easy to generate, but are far less useful for comparisons. Strong validators are ideal for comparisons but can be very difficult to generate efficiently. Weak ETag values of two representations of the same resources might be semantically equivalent, but not byte-for-byte identical. This means weak etags prevent caching when byte range requests are used, but strong etags mean range requests can still be cached.
- <strong>"\<etag\_value\>" </strong>- Entity tag uniquely representing the requested resource. They are a string of [[ASCII|ASCII characters]] placed between double quotes, like "675af34563dc-tr34". The method by which ETag values are generated is not specified. Often, a hash of the content, a hash of the last modification timestamp, or just a revision number is used

## Examples
```
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```
### Avoiding mid-air collisions

With the help of the <code>ETag</code> and the [<code>If-Match</code>](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match) headers, you can detect mid-air edit collisions.

For example, when editing MDN, the current wiki content is hashed and put into an <code>Etag</code> in the response:
```
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

When saving changes to a wiki page (posting data), the [<code>POST</code>](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) request will contain the [<code>If-Match</code>](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match) header containing the <code>ETag</code> values to check freshness against.
```
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

If the hashes don't match, it means that the document has been edited in-between and a [<code>412</code>](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412) <code>Precondition Failed</code> error is thrown.
### Caching of unchanged resources

Another typical use of the <code>ETag</code> header is to cache resources that are unchanged. If a user visits a given URL again (that has an <code>ETag</code> set), and it is <em>stale</em> (too old to be considered usable), the client will send the value of its <code>ETag</code> along in an [<code>If-None-Match</code>](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) header field:
```
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

The server compares the client's <code>ETag</code> (sent with <code>If-None-Match</code>) with the <code>ETag</code> for its current version of the resource, and if both values match (that is, the resource has not changed), the server sends back a [<code>304</code>](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304) <code>Not Modified</code> status, without a body, which tells the client that the cached version of the response is still good to use (<em>fresh</em>).

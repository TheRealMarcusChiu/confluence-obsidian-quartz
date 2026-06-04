---
title: "HTTP - Headers"
created: 2019-08-23T21:19:52.814-05:00
modified: 2021-09-11T20:41:36.198-05:00
parent: "[[HTTP - Specifications]]"
children:
  - "[[CSP vs SOP／CORS]]"
  - "[[Cross-Origin Request (COR) - Same-Origin Policy (SOP) - Cross-Origin Resource Sharing (CORS) - Cross-Origin Read Blocking (CORB)]]"
  - "[[HTTP - Headers - Connection & Keep-Alive]]"
  - "[[HTTP - Headers - Content-Security-Policy (CSP)]]"
  - "[[HTTP - Headers - Content-Type]]"
  - "[[HTTP - Headers - ETag]]"
  - "[[HTTP - Headers - Host vs Origin]]"
  - "[[HTTP - Headers - WWW-Authenticate & Authorization]]"
---
<strong>HTTP headers</strong> let the client and the server pass additional information with an HTTP request or response
# Header Example

An HTTP header consists of its case-insensitive name followed by a colon (<code>:</code>), then by its value. Whitespace before the value is ignored
```
GET /tutorials/other/ HTTP/1.1
Host: net.tutsplus.com
User-Agent: Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 (.NET CLR 3.5.30729)
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Keep-Alive: 300
Connection: keep-alive
Cookie: PHPSESSID=r2t5uvjq435r4q7ib3vtdjq120
Pragma: no-cache
Cache-Control: no-cache
```
```
HTTP/1.x 200 OK
Transfer-Encoding: chunked
Date: Sat, 28 Nov 2009 04:36:25 GMT
Server: LiteSpeed
Connection: close
X-Powered-By: W3 Total Cache/0.8
Expires: Sat, 28 Nov 2009 05:36:25 GMT

<!DOCTYPE>
<html>
<head></head><body>EXAMPLE</body>
</html>
```
# Header Types

```merge-table
{
  "rows": [
    [
      {
        "content": "General Header",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Headers applying to both <strong>requests</strong> and <strong>responses</strong> but with no relation to the data eventually transmitted in the body"
    ],
    [
      {
        "content": "Request Header",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Headers containing more information about the resource to be fetched or about the client itself"
    ],
    [
      {
        "content": "Response Header",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Headers with additional information about the response (e.g. server location, server info, etc)"
    ],
    [
      {
        "content": "Entity Header",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Headers containing more information about the body of the entity (e.g. content length, MIME-type, etc)"
    ]
  ]
}
```
# Headers Types (According to How Proxies Handle Them)

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>End-to-End Headers</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "These headers must be transmitted to the final recipient of the message; that is, the server for a request or the client for a response. Intermediate proxies must retransmit end-to-end headers unmodified and caches must store them"
    ],
    [
      {
        "content": "<strong>Hop-by-Hop Headers</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "These headers are meaningful only for a single transport-level connection and must not be retransmitted by proxies or cached. Such headers are: Connection, Keep-Alive, Proxy-Authenticate, Proxy-Authorization, TE, Trailer, Transfer-Encoding and Upgrade. Note that only hop-by-hop headers may be set using the Connection general header"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Header Value Max Size
- [[Apache HTTP Server (Apache)|Apache]] [2.0](http://httpd.apache.org/docs/2.0/mod/core.html#limitrequestfieldsize), [2.2](http://httpd.apache.org/docs/2.2/mod/core.html#limitrequestfieldsize): <strong>8K</strong>
- [Nginx](http://nginx.org/r/large_client_header_buffers): <strong>4K</strong> - 8K
- IIS: [varies by version](https://stackoverflow.com/a/6160643/92629), <strong>8K</strong> - 16K
- [[Apache Tomcat|Tomcat]]: [varies by version](https://stackoverflow.com/a/6160643/92629), <strong>8K</strong> - 48K (?!)

# Header Directives

[https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [[HTTP Cookie (Web Cookie, Internet Cookie, Browser Cookie, or Cookie)]]
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

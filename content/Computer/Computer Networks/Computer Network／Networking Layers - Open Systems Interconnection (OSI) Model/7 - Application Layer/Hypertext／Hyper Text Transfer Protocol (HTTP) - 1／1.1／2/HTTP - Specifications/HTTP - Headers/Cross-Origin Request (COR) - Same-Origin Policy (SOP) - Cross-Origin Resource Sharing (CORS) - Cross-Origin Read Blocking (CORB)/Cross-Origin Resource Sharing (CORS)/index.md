---
title: "Cross-Origin Resource Sharing (CORS)"
created: 2026-05-17T13:02:20.705-05:00
modified: 2026-05-17T13:03:09.900-05:00
parent: "[[Cross-Origin Request (COR) - Same-Origin Policy (SOP) - Cross-Origin Resource Sharing (CORS) - Cross-Origin Read Blocking (CORB)]]"
children: []
---
# Cross-Origin Resource Sharing (CORS)
CORS is a mechanism that circumvents SOP (i.e. allowing resources on a web page to be requested from another domain outside the domain from which the first resource was served)

this is done by introducing a new set of [[HTTP - Headers|HTTP Headers]]:
###### CORS Response Headers

```merge-table
{
  "rows": [
    [
      {
        "content": "Response Headers",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example Values",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[<code>Access-Control-Allow-Credentials</code>](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials)",
        "bg": "#F4F5F7"
      },
      "true or false"
    ],
    [
      {
        "content": "[<code>Access-Control-Allow-Headers</code>](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers)",
        "bg": "#F4F5F7"
      },
      "status,content-encoding,cache-control,content-type,date,etag,expires,last-modified,server,vary,x-cache,content-length"
    ],
    [
      {
        "content": "<code>[Access-Control-Allow-Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods)</code>",
        "bg": "#F4F5F7"
      },
      "GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH"
    ],
    [
      {
        "content": "<code>[Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)</code>",
        "bg": "#F4F5F7"
      },
      "*"
    ],
    [
      {
        "content": "<code>[Access-Control-Expose-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers)</code>",
        "bg": "#F4F5F7"
      },
      "status, content-encoding, cache-control, content-type, date, etag, expires, last-modified, server, vary, x-cache, content-length"
    ],
    [
      {
        "content": "<code>[Access-Control-Max-Age](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age)</code>",
        "bg": "#F4F5F7"
      },
      ""
    ]
  ],
  "tableStyle": "width: 99.8325%;"
}
```

if a server wants to allow its response to be seen in a browser from a different site, then it would have to send at least 2 Response Headers (correctly valued):
- Access-Control-Allow-Methods: GET
- Access-Control-Allow-Origin: \*

when the browser receives the response, it checks if the [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) contains a match of the origin/website of request made. If so, then the response is made visible to that website. Otherwise, the response is kept hidden
###### CORS Request Headers

```merge-table
{
  "rows": [
    [
      {
        "content": "Request Headers",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "<code>[Access-Control-Request-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers)</code>",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "[<code>Access-Control-Request-Method</code>](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Method)",
        "bg": "#F4F5F7"
      },
      ""
    ]
  ],
  "tableStyle": "width: 99.8325%;"
}
```

these CORS Request Headers are used in the Preflight OPTIONS Request
# Allowing a Cross-Origin Request (COR)

2 ways to allow a COR to go through:
- configure server to respond with the CORS Response Headers
- hack browser to intercept cross-origin response and inject spoofed CORS Response Headers (making the browser think that the server sent it)

###### Hacking Browser to Accept Cross-Origin Response
- download chrome plugin: [Moesif Orign & CORS Changer](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc?hl=en-US)
- turn on CORS
- open chrome browser to any website (e.g. [https://google.com](https://google.com/))
- open [google's developer tools](https://developers.google.com/web/tools/chrome-devtools/open)
- paste the following in the console prompt and press enter
    ```js
    function reqListener () {
      console.log(this.responseText);
    }
    
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://www.example.org/");
    oReq.send();
    ```

the reason why there is no error is because the plugin intercepted the response and prepended some CORS Response Headers. The values of those headers allows the website to see the response

check the network tab to see those headers

![[Cross-Origin Resource Sharing (CORS)/cross-origin-resource-sharing-response-headers.png|400]]

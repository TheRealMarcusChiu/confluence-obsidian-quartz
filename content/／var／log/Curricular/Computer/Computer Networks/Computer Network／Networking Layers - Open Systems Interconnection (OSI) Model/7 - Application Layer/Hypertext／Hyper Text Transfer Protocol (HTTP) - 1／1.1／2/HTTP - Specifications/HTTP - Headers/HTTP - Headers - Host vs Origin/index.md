---
title: "HTTP - Headers - Host vs Origin"
created: 2019-12-21T14:41:47.666-06:00
modified: 2022-01-03T17:53:48.395-06:00
parent: "[[HTTP - Headers]]"
children: []
---
# HTTP Headers - Host vs Origin
<span style="white-space: pre-wrap"><code>   browser tab                http request                google.com server</code></span>

<span style="white-space: pre-wrap"><code> \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_         \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_         \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_</code><br><code>| marcuschiu.com |       |  Host: google.com     |       |                 |</code><br><code>|                | ----- |Origin: marcuschiu.com | ----\> |                 |</code><br><code>|                |       |      ....             |       |                 |</code><br><code>|\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_|       |\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_|       |\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_|</code></span>

```merge-table
{
  "rows": [
    [
      {
        "content": "Host Header",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Origin Header",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "specifies the [[Host Name ／ Hostname - Domain Name - Fully Qualified Domain Name (FQDN) - Absolute Domain Name (ADN) - Partially Qualified Domain Name (PQDN) - Relative Domain Name (RDN)|domain]] to which the request IS TO BE SENT TO",
      "specifies the [[Host Name ／ Hostname - Domain Name - Fully Qualified Domain Name (FQDN) - Absolute Domain Name (ADN) - Partially Qualified Domain Name (PQDN) - Relative Domain Name (RDN)|domain]] from which the request ORIGINATED FROM"
    ],
    [
      "was introduced so hosting sites could include multiple domains on a single [[IPv4 - Address|IP address]]",
      "was introduced to mitigate against Cross-Site Request Forgery (CSRF) vulnerabilities"
    ],
    [
      "is ALWAYS included",
      "is SOMETIMES included:\n- all browsers by default included in every [[Cross-Origin Request (COR) - Same-Origin Policy (SOP) - Cross-Origin Resource Sharing (CORS) - Cross-Origin Read Blocking (CORB)|cross-origin requests]]\n- same-origin request:\n\t- always included on [[Cross-Origin Request (COR) - Same-Origin Policy (SOP) - Cross-Origin Resource Sharing (CORS) - Cross-Origin Read Blocking (CORB)|same-origin]] PUT/POST/DELETE requests\n\t- not included on same-origin GET requests"
    ]
  ],
  "tableStyle": "width: 95.6157%;"
}
```

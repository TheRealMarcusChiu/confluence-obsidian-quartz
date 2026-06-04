---
title: "Forward Proxy (Proxy)"
created: 2020-01-06T15:45:36.801-06:00
modified: 2025-06-21T15:12:30.888-05:00
parent: "[[Proxy (Forward／Reverse Proxy Chains)]]"
children:
  - "[[Burp Suite]]"
---
###### Forward Proxy
````excerpt
- is what most people call a [[Proxy (Forward／Reverse Proxy Chains)|proxy]]
````
^excerpt

# Forward Proxy Diagram

```merge-table
{
  "rows": [
    [
      "![[Forward Proxy (Proxy)/forward-proxy-diagram.png|400]]",
      "1. a client sends a request to the forward proxy\n2. the forward proxy then sends a request to the specified server\n3. server responds back to the forward proxy\n4. the forward proxy then forwards the response back to the client"
    ]
  ]
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

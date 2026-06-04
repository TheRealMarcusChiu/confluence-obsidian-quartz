---
title: "Virtual Private Network (VPN)"
created: 2019-03-16T23:07:15.434-05:00
modified: 2026-05-27T11:37:46.057-05:00
parent: "[[？ - Mixed／Other Layers]]"
children:
  - "[[L2TP／IPSec]]"
  - "[[NetBird]]"
  - "[[OpenVPN]]"
  - "[[Point-to-Point Tunneling Protocol (PPTP)]]"
  - "[[Secure Socket Tunneling Protocol (SSTP)]]"
  - "[[Tailscale]]"
  - "[[VPN - Comparisons]]"
  - "[[WireGuard]]"
---
###### Virtual Private Network (VPN)
````excerpt
- is a technology that creates a secure, [[Encryption|encrypted]] connection (“tunnel”) over an untrusted network like the internet
- is NOT a single protocol, thus under the OSI model it can operate at the:
	- [[2 - Data Link Layer|Data Link layer]] (e.g., [[L2TP／IPSec|L2TP/IPsec]])
	- [[3 - Network Layer|Network layer]] (e.g., [[WireGuard]], [[OpenVPN]] in TUN mode)
	- [[4 - Transport Layer|Transport]]/[[5 - Session Layer|Session layers]] (e.g., [[Secure Sockets Layer (SSL) - Transport Layer Security (TLS)|SSL/TLS]]-based VPNs)
````
^excerpt

# VPN - Use Cases

```merge-table
{
  "rows": [
    [
      {
        "content": "Host-to-Site VPN \n(Remote Access)",
        "bg": "#F4F5F7",
        "align": "left"
      },
      "- user connects securely to a company network from anywhere"
    ],
    [
      {
        "content": "Site–to–Site VPN\nRouter-to-Router VPN",
        "bg": "#F4F5F7",
        "align": "left"
      },
      "- two networks (e.g., branch offices) securely connect over the internet\n- 2 types of Site-to-Site VPN:\n\t- Intranet VPN - connects multiple sites of the <em>same company</em>\n\t- Extranet VPN - connects different organizations (e.g., business partners) securely"
    ],
    [
      {
        "content": "Host-to-Host",
        "bg": "#F4F5F7",
        "align": "left"
      },
      "- user connects securely to a device from anywhere (e.g. [[Tailscale]])"
    ],
    [
      {
        "content": "Personal VPN",
        "bg": "#F4F5F7",
        "align": "left"
      },
      "- individuals use it to protect privacy and bypass censorship (e.g., NordVPN, ProtonVPN)"
    ]
  ],
  "tableStyle": "width: 100.0%;letter-spacing: 0.0px;"
}
```
# VPN - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Point-to-Point Tunneling Protocol (PPTP)]]",
        "bg": "#F4F5F7"
      },
      "- an <font style=\"color: rgb(255,0,0);\">OBSOLETE</font> method for implementing virtual private networks, with many known security issues"
    ],
    [
      {
        "content": "[[L2TP／IPSec|L2TP/IPSec]]",
        "bg": "#F4F5F7"
      },
      "- is a good balance between security and speed. slower but more secure than PPTP\n- e.g. [[L2TP／IPSec|L2TP/IPSec]] VPN"
    ],
    [
      {
        "content": "[[Secure Sockets Layer (SSL) - Transport Layer Security (TLS)|SSL/TLS]]",
        "bg": "#F4F5F7"
      },
      "- utilizes SSL/TLS for encryption\n- e.g. [[Secure Socket Tunneling Protocol (SSTP)|SSTP]]"
    ],
    [
      {
        "content": "[[WireGuard]]",
        "bg": "#F4F5F7"
      },
      "- modern\n- e.g. [[WireGuard]], [[Tailscale]], [[OpenVPN]] in TUN mode"
    ]
  ],
  "tableStyle": "width: 86.4117%;"
}
```
# VPN - Comparisons
```dataview
LIST
FROM ""
WHERE file.folder = [[VPN - Comparisons]].file.folder + "/" + [[VPN - Comparisons]].file.name
```

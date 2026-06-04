---
title: "SPDY (Deprecated)"
created: 2019-03-16T21:46:14.119-05:00
modified: 2023-11-16T16:56:10.878-06:00
parent: "[[7 - Application Layer]]"
children: []
---
###### SPDY (pronounced "speedy")
````excerpt
- is a <strong><font style="color: rgb(255,0,0);">DEPRECATED</font></strong> open-specification [[7 - Application Layer|application layer]] [[Computer Network／Networking Communication Protocols|network protocol]] that was developed primarily at Google for transporting web content
- manipulates [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]] traffic, with particular goals of reducing web page load latency and improving web security
- achieves reduced latency through compression, multiplexing, and prioritization, although this depends on a combination of network and website deployment conditions
- the name "SPDY" is a trademark of Google and is not an acronym
- SPDY does not replace [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]]; it modifies the way HTTP requests and responses are sent over the wire. This means that all existing server-side applications can be used without modification if a SPDY-compatible translation layer is put in place
- SPDY is effectively a tunnel for the HTTP and HTTPS protocols. When sent over SPDY, HTTP requests are processed, tokenized, simplified, and compressed. For example, each SPDY endpoint keeps track of which headers have been sent in past requests and can avoid resending the headers that have not changed; those that must be sent are compressed.
- The IETF working group for HTTPbis has released the draft of HTTP/2. SPDY was chosen as the starting point
- Throughout the process, the core developers of SPDY have been involved in the development of HTTP/2. In February 2015, Google announced that following the recent final ratification of the HTTP/2 standard, support for SPDY would be deprecated, and that support for SPDY would be withdrawn. Google removed SPDY support in Google Chrome 51. Mozilla removed it in Firefox 50.
````
^excerpt

# Resources
- [https://en.wikipedia.org/wiki/SPDY](https://en.wikipedia.org/wiki/SPDY)

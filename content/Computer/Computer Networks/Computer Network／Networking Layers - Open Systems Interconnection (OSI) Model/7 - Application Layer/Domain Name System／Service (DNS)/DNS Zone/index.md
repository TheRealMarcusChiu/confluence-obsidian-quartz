---
title: "DNS Zone"
created: 2019-11-11T10:30:16.558-06:00
modified: 2019-12-04T11:47:30.154-06:00
parent: "[[Domain Name System／Service (DNS)]]"
children: []
---
- a common mistake is to associate a <strong>DNS Zone</strong> with a [[Host Name ／ Hostname - Domain Name - Fully Qualified Domain Name (FQDN) - Absolute Domain Name (ADN) - Partially Qualified Domain Name (PQDN) - Relative Domain Name (RDN)|domain name]] or a single [[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)|DNS server]]
- a <strong>DNS Zone</strong> can contain multiple subdomains and multiple zones can exist on the same server

### DNS Zone Example

imagine a hypothetical zone for the [cloudflare.com](http://cloudflare.com/) domain and three of its subdomains: [support.cloudflare.com](http://support.cloudflare.com/), [community.cloudflare.com](http://community.cloudflare.com/), and [blog.cloudflare.com](http://blog.cloudflare.com/). Suppose the blog is a robust, independent site that needs separate administration, but the support and community pages are more closely associated with [cloudflare.com](http://cloudflare.com/) and can be managed in the same zone as the primary domain. In this case, [cloudflare.com](http://cloudflare.com/) as well as the support and community sites would all be in one zone, while [blog.cloudflare.com](http://blog.cloudflare.com/) would exist in its own zone

![[DNS Zone/dns-zone.png|500]]

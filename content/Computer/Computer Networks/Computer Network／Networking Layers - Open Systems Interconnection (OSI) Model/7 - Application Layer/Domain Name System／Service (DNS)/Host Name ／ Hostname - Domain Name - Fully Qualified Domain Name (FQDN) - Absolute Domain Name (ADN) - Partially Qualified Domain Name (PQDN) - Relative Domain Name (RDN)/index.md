---
title: "Host Name ／ Hostname - Domain Name - Fully Qualified Domain Name (FQDN) - Absolute Domain Name (ADN) - Partially Qualified Domain Name (PQDN) - Relative Domain Name (RDN)"
created: 2019-11-09T21:16:15.839-06:00
modified: 2024-09-05T11:15:24.827-05:00
parent: "[[Domain Name System／Service (DNS)]]"
children: []
---
# <strong>Fully Qualified Domain Name (FQDN) </strong>or <strong>Absolute Domain Name (ADN)</strong>
- contains both a <em>host name</em> and a <em>domain name</em> (which are separated by a period)
- a domain name that includes the top-level domain
- example: a device with the hostname <em><code>myhost</code></em> in the parent domain <em><code>[example.com](http://example.com/)</code></em> has the fully qualified domain name <em><code>[myhost.example.com](http://myhost.example.com/)</code></em>

# <strong>Partially Qualified Domain Name (PQDN) </strong>or <strong>Relative Domain Name (RDN)</strong>
- a domain name that doesn't include the top-level domain
- types of PQDN:
	- <strong>Host Name </strong>or <strong>Hostname</strong>
		- the left-most label in a FQDN
		- the host name represents the network or system used to deliver a user to a certain address or location
	- <strong>Domain Name</strong>
		- the domain name represents the site or project that the user is accessing

related to: [[Uniform Resource Locator (URL) - Uniform Resource Identifier (URI) - Uniform Resource Name (URN) - Path／Query／Anchor|URL, URI, and URN]]
# <strong>FQDN Syntax</strong>

A fully qualified domain name consists of a list of domain labels representing the hierarchy from the lowest relevant level in the DNS to the [[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)|top-level domain (TLD)]]. The domain labels are concatenated using the [full stop](https://en.wikipedia.org/wiki/Full_stop) “<code>.</code>” character (<em>dot</em> or <em>period</em>) as a separator between labels.

The [[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)|DNS root]] is unnamed, expressed as the empty label terminated by the dot. This is most notable in DNS [zone files](https://en.wikipedia.org/wiki/Zone_file) in which a fully qualified domain name must be specified with a trailing dot. For example, <em><code>[somehost.example.com](http://somehost.example.com).</code></em> explicitly specifies an absolute domain name that ends with the empty top level domain label.

![[Host Name ／ Hostname - Domain Name - Fully Qualified Domain Name (FQDN) - Absolute Domain Name (ADN) - Partially Qualified Domain Name (PQDN) - Relative Domain Name (RDN)/protocol-hostname-domainname-tld-file-path.png|500x231]]![[Host Name ／ Hostname - Domain Name - Fully Qualified Domain Name (FQDN) - Absolute Domain Name (ADN) - Partially Qualified Domain Name (PQDN) - Relative Domain Name (RDN)/dns-schema.png|500x278]]

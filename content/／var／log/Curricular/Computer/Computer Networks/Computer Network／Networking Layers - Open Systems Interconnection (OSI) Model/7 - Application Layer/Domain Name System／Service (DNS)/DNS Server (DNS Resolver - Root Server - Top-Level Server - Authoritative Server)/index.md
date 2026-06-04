---
title: "DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)"
created: 2019-03-16T22:57:39.201-05:00
modified: 2026-05-24T20:10:53.925-05:00
parent: "[[Domain Name System／Service (DNS)]]"
children:
  - "[[CoreDNS]]"
  - "[[OpenDNS]]"
  - "[[bind9 - Berkley Internet Naming Domain／Daemon (BIND)]]"
  - "[[dnsmasq]]"
  - "[[unbound]]"
---
<strong>DNS Servers</strong> contains [[DNS Resource Records／Entries (DNS RR)|DNS Records]]
# DNS Server Types
- <strong>DNS Resolver</strong> - answers [[DNS Query (Lookup - Recursive - Iterative - Non-Recursive)|DNS queries]] by querying the High-Level Domain Servers and Authoritative Name Servers itself
- <strong>High-Level Domain Servers</strong> - define which DNS Server is the Authoritative Name Server for a specific [[Host Name ／ Hostname - Domain Name - Fully Qualified Domain Name (FQDN) - Absolute Domain Name (ADN) - Partially Qualified Domain Name (PQDN) - Relative Domain Name (RDN)|hostname/domain name]]
	- <strong>Root Domain Servers</strong> -
	- <strong>Top-Level Domain Servers</strong> -
- <strong>Authoritative Name Servers (Name Server)</strong> - holds the up-to-date information for that hostname/domain name
```merge-table
{
  "rows": [
    [
      {
        "content": "DNS Server Type",
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
        "content": "DNS Resolver",
        "bg": "#F4F5F7"
      },
      "- answers [[DNS Query (Lookup - Recursive - Iterative - Non-Recursive)|DNS queries]] by querying the High-Level Domain Servers and Authoritative Name Servers itself for the appropriate [[IPv4 - Address|IP Address]]\n- thus, a DNS Resolver is both a client and server\n- types:\n\t- DNS iterator - an [[DNS Query (Lookup - Recursive - Iterative - Non-Recursive)|iterative query]] DNS resolver\n\t- DNS recursor - a [[DNS Query (Lookup - Recursive - Iterative - Non-Recursive)|recursive query]] DNS resolver"
    ],
    [
      {
        "content": "Root Domain (RD) Server",
        "bg": "#F4F5F7"
      },
      "- the <strong>Root Server</strong> is the first step in the journey from hostname to IP address\n- the <strong>Root Server</strong> is a nameless domain (i.e \".\")\n- the <strong>Root Server</strong> extracts the top-level domain from the [[DNS Query (Lookup - Recursive - Iterative - Non-Recursive)|DNS query]]'s [[Host Name ／ Hostname - Domain Name - Fully Qualified Domain Name (FQDN) - Absolute Domain Name (ADN) - Partially Qualified Domain Name (PQDN) - Relative Domain Name (RDN)|FQDN]] — for example, the top-level domain of <font style=\"color: rgb(128,128,128);\">www.example.com</font> is <font style=\"color: rgb(128,128,128);\">.com </font>— and the Root Server provides details of the <font style=\"color: rgb(128,128,128);\">.com</font> <strong>TLD Server </strong>to the <strong>DNS Resolver</strong>. In turn, that TLD Server will provide details of the domains with the <font style=\"color: rgb(128,128,128);\">.com</font> DNS zone, such as “<font style=\"color: rgb(128,128,128);\">example.com</font>” to the <strong>DNS Resolver</strong>\n- there are [13 root servers worldwide](https://en.wikipedia.org/wiki/Root_name_server), indicated by the letters A through M"
    ],
    [
      {
        "content": "Top-Level Domain (TLD) Server",
        "bg": "#F4F5F7"
      },
      "- the top-level server sits between the <strong>Root Server</strong> and <strong>Authoritative Server</strong>\n- top-level domain types:\n\t- <strong>Generic Top-Level Domains (gTLD)</strong> - e.g. [com](https://en.wikipedia.org/wiki/.com), [info](https://en.wikipedia.org/wiki/.info), [net](https://en.wikipedia.org/wiki/.net), [edu](https://en.wikipedia.org/wiki/.edu), [org](https://en.wikipedia.org/wiki/.org), etc\n\t- <strong>Country Code Top-Level Domains (ccTLD)</strong> - e.g. [au](https://en.wikipedia.org/wiki/.au), [de](https://en.wikipedia.org/wiki/.de), [fi](https://en.wikipedia.org/wiki/.fi), [fr](https://en.wikipedia.org/wiki/.fr), [jp](https://en.wikipedia.org/wiki/.jp), [kr](https://en.wikipedia.org/wiki/.kr), [nl](https://en.wikipedia.org/wiki/.nl), [se](https://en.wikipedia.org/wiki/.se), etc"
    ],
    [
      {
        "content": "Authoritative Name Server\n\nName Server (NS)",
        "bg": "#F4F5F7"
      },
      "- the <strong>Authoritative Server</strong> is the last stop in the name server query—it takes the hostname and returns the correct [[IPv4 - Address|IP address]] to the <strong>DNS Resolver</strong> (or if it cannot find the domain, returns the message NXDOMAIN for non-existent domain)"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# How a DNS Query Resolves

The DNS Resolver is pre-configured with a set of 13 root server IP addresses which are permanently assigned. The resolving process for “[example.com](http://example.com)” would be as follows:
1. DNS Resolver randomly selects one root server from the pre-configured root servers list and queries it.
2. the Root Servers only maintain list of top level domain (TLD) with NS records. So, the response for the query will list out NS records for “com” TLD.
3. the Resolver will read the NS records from the response and randomly pick one and repeat the same query.
4. The “com” TLD server maintains list of NS records for the next level i.e. “[example.com](http://example.com)” and returns a new set of NS records which host the “[example.com](http://example.com)” zone.
5. The resolver will then select a NS record and repeat the same query.
6. The “[example.com](http://example.com)” DNS server which is hosting the zone will have the IP address configured for the zone as A record and will return the record as the final response.

# Server Implementations
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# DNS Domain Servers Hierarchy
![[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)/protocol-hostname-domainname-tld-file-path.png|360]]![[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)/dns-schema.png|301]]
# DNS Query Types

```merge-table
{
  "rows": [
    [
      "###### Recursive DNS Query\n![[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)/dns-recursive-query.png|208x250]]",
      "###### Iterative DNS Query\n![[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)/dns-iterative-query.png|208x250]]"
    ]
  ]
}
```

for more details of [[DNS Query (Lookup - Recursive - Iterative - Non-Recursive)|DNS queries]]

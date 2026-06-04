---
title: "DNS Resource Records／Entries (DNS RR)"
created: 2019-09-03T13:08:34.683-05:00
modified: 2025-07-14T17:07:44.082-05:00
parent: "[[Domain Name System／Service (DNS)]]"
children:
  - "[[DNS - CNAME vs ALIAS]]"
---
###### DNS Resource Records/Entries (DNS RR)
````excerpt
- are entries are stored in a [[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)]]
````
^excerpt

# DNS RR Entry - Components

a DNS RR entry contains the following components:
- <strong>name</strong> = domain or sub-domain (e.g. <font style="color: rgb(128,128,128);"><em>marcuschiu.com.</em></font> or <font style="color: rgb(128,128,128);"><em>confluence.marcuschiu.com.</em></font>)
- <strong>value</strong> = (e.g. <font style="color: rgb(128,128,128);"><em>3.95.18.164</em></font> or <font style="color: rgb(128,128,128);"><em>example.com</em></font>)
- <strong>type</strong> = DNS RR Type (e.g. <font style="color: rgb(128,128,128);"><em>A</em></font>, <font style="color: rgb(128,128,128);"><em>CNAME</em></font>, <font style="color: rgb(128,128,128);"><em>TXT</em></font>, etc)
- <strong>ttl</strong> = time-to-live in seconds (e.g. <font style="color: rgb(128,128,128);"><em>300</em></font>)

# DNS RR Types

```merge-table
{
  "rows": [
    [
      {
        "content": "DNS Record Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "RR Name",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "RR Value",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[A](https://simpledns.com/help/a-records) (Host address - Address Mapping record - DNS Host Record)",
        "bg": "#F4F5F7"
      },
      "stores a hostname and its corresponding [[IPv4 - Address|IPv4 address]]",
      "hostname",
      "IPv4 address"
    ],
    [
      {
        "content": "[AAAA](https://simpledns.com/help/aaaa-records) (IPv6 host address)",
        "bg": "#F4F5F7"
      },
      "stores a hostname and its corresponding IPv6 address",
      "hostname",
      "IPv6 address"
    ],
    [
      {
        "content": "[ALIAS](https://simpledns.com/help/alias-records) (Auto resolved alias)",
        "bg": "#F4F5F7"
      },
      "are virtual alias records resolved by Simple DNS Plus at at the time of each request - providing \"flattened\" (no CNAME-record chain) synthesized records with data from a hidden source name",
      "",
      ""
    ],
    [
      {
        "content": "[CNAME](https://simpledns.com/help/cname-records) (Canonical name for an alias)",
        "bg": "#F4F5F7"
      },
      "can be used to alias a hostname to another hostname. When a DNS client requests a record that contains a CNAME, which points to another hostname, the DNS resolution process is repeated with the new hostname",
      "alias name\n\ne.g. [www.ibm.com](http://www.ibm.com)",
      "canonical name\n\ne.g. [servereast.backup2.ibm.com](http://servereast.backup2.ibm.com/)"
    ],
    [
      {
        "content": "[MX](https://simpledns.com/help/mx-records) (Mail eXchange)",
        "bg": "#F4F5F7"
      },
      "- records are used by mail servers to determine where to deliver email\n- specifies an [[Simple Mail Transfer Protocol (SMTP)]] [[Email Server|email server]]'s hostname for the given domain name",
      "domain\n\ne.g. google.com",
      "hostname of mail server of domain\n\ne.g. [aspmx.l.google.com](http://aspmx.l.google.com)."
    ],
    [
      {
        "content": "[NS](https://simpledns.com/help/ns-records) (Name Server)",
        "bg": "#F4F5F7"
      },
      "specifies that a [[DNS Zone]], such as “[example.com](http://example.com/)” is delegated to a specific [[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)|Authoritative Name Server]], and provides the address of the name server",
      "[[Host Name ／ Hostname - Domain Name - Fully Qualified Domain Name (FQDN) - Absolute Domain Name (ADN) - Partially Qualified Domain Name (PQDN) - Relative Domain Name (RDN)|domain name]]\n\ne.g. foo.com",
      "[[Host Name ／ Hostname - Domain Name - Fully Qualified Domain Name (FQDN) - Absolute Domain Name (ADN) - Partially Qualified Domain Name (PQDN) - Relative Domain Name (RDN)|hostname]] of [[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)|authoritative name server]] for the domain name"
    ],
    [
      {
        "content": "[PTR](https://simpledns.com/help/ptr-records) (Reverse-Lookup Pointer)",
        "bg": "#F4F5F7"
      },
      "allows a [[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)|DNS resolver]] to provide an IP address and receive a hostname (reverse DNS lookup)",
      "",
      ""
    ],
    [
      {
        "content": "[SOA](https://simpledns.com/help/soa-records) (Start Of Authority)",
        "bg": "#F4F5F7"
      },
      "this record appears at the beginning of a DNS zone file, and indicates the [[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)|Authoritative Name Server]] for the current DNS zone, contact details for the domain administrator, domain serial number, and information on how frequently DNS information for this zone should be refreshed",
      "",
      ""
    ],
    [
      {
        "content": "[SRV](https://simpledns.com/help/srv-records) (Service Location - location of service)",
        "bg": "#F4F5F7"
      },
      "a service location record, like MX but for other communication protocols",
      "",
      ""
    ],
    [
      {
        "content": "[TXT](https://simpledns.com/help/txt-records) (Descriptive text)",
        "bg": "#F4F5F7"
      },
      "typically carries machine-readable data such as opportunistic encryption, sender policy framework, DKIM, DMARC, etc.",
      "",
      ""
    ],
    [
      {
        "content": "[CERT](https://simpledns.com/help/cert-records) (Certificate)",
        "bg": "#F4F5F7"
      },
      "stores encryption certificates—PKIX, SPKI, PGP, and so on",
      "",
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# DNS Records Types Used For DNSSEC

```merge-table
{
  "rows": [
    [
      {
        "content": "Record Type",
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
        "content": "[DNSKEY](https://simpledns.com/help/dnskey-records) (DNSSEC public key)",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "[DS](https://simpledns.com/help/ds-records) (Delegation Signer)",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "[NSEC](https://simpledns.com/help/nsec-records) (Next Secure)",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "[NSEC3](https://simpledns.com/help/nsec3-records) (Next Secure v. 3)",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "[NSEC3PARAM](https://simpledns.com/help/nsec3param-records) (NSEC3 Parameters)",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "[RRSIG](https://simpledns.com/help/rrsig-records) (RRset Signature)",
        "bg": "#F4F5F7"
      },
      ""
    ]
  ],
  "tableStyle": "width: 62.7339%;"
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

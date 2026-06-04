---
title: "DNS Query (Lookup - Recursive - Iterative - Non-Recursive)"
created: 2019-11-10T18:05:15.834-06:00
modified: 2019-12-04T11:46:24.828-06:00
parent: "[[Domain Name System／Service (DNS)]]"
children: []
---
### DNS Lookup Types
- <strong>forward lookup</strong> - given [[Host Name ／ Hostname - Domain Name - Fully Qualified Domain Name (FQDN) - Absolute Domain Name (ADN) - Partially Qualified Domain Name (PQDN) - Relative Domain Name (RDN)|FQDN]] find [[IPv4 - Address|IP Address]]
- <strong>reverse/inverse lookup</strong> - given IP Address find FQDN

### DNS Lookup Commands
- [[DNS Client]]

### DNS Query Resolver Methods

a<em> lookup query</em> can be answered/resolved in 1 of 3 different ways:
- recursive query
- iterative query
- non-recursive query

usually, a <em>lookup query</em> is sent to a [[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)|DNS Resolver]] which handles all these cases

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Recursive Query</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Iterative Query</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Non-Recursive Query</strong>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "<strong>Description</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "In a recursive query, a DNS client provides a hostname, and the [[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)|DNS Resolver]] “must” provide an answer—it responds with either a relevant resource record, or an error message if it can't be found. The resolver starts a recursive query process, starting from the [[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)|DNS Root Server]], until it finds the [[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)|Authoritative Name Server]]",
      "In an iterative query, a DNS client provides a hostname, and the DNS Resolver returns the best answer it can. If the DNS resolver has the relevant DNS records in its cache, it returns them. If not, it refers the DNS client to the Root Server, or another Authoritative Name Server which is nearest to the required DNS zone. The DNS client must then repeat the query directly against the DNS server it was referred to.",
      "A non-recursive query is a query in which the DNS Resolver already knows the answer. It either immediately returns a DNS record because it already stores it in local cache, or queries a DNS Name Server which is authoritative for the record, meaning it definitely holds the correct IP for that hostname. In both cases, there is no need for additional rounds of queries (like in recursive or iterative queries). Rather, a response is immediately returned to the client."
    ],
    [
      {
        "content": "Diagram",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[DNS Query (Lookup - Recursive - Iterative - Non-Recursive)/dns-recursive-query.png|208x250]]",
      "![[DNS Query (Lookup - Recursive - Iterative - Non-Recursive)/dns-iterative-query.png|208x250]]",
      "![[DNS Query (Lookup - Recursive - Iterative - Non-Recursive)/dns-record-cached.png|136x250]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

---
title: "DNS - CNAME vs ALIAS"
created: 2019-11-11T13:12:41.940-06:00
modified: 2025-07-14T17:08:13.422-05:00
parent: "[[DNS Resource Records／Entries (DNS RR)]]"
children: []
---
The chief difference between a <strong>CNAME</strong> record and an <strong>ALIAS</strong> record is not in the result—both point to another [[DNS Resource Records／Entries (DNS RR)|DNS record]]—but in how they resolve the target DNS record when queried.  As a result of this difference, one is safe to use at the zone apex (e.g., naked domain, such as [example.com](http://example.com)) and the other is not.
# CNAME

Let’s start with the CNAME record type. It simply points a DNS name, like [www.example.com](http://www.example.com), at another DNS name, like [lb.example.net](http://lb.example.net). This introduces a performance penalty, since at least one additional DNS lookup must be performed to resolve the target ([lb.example.net](http://lb.example.net)). In the case of neither record ever having been queried before by your recursive resolver, it’s even more expensive time-wise, as the full DNS hierarchy must be traversed for both records:
1. You as the DNS client (or stub resolver) query your recursive resolver for [www.example.com](http://www.example.com).
2. Your recursive resolver queries the root name server for [www.example.com](http://www.example.com).
3. The root name server refers your recursive resolver to the .com Top-Level Domain (TLD) authoritative server.
4. Your recursive resolver queries the .com TLD authoritative server for [www.example.com](http://www.example.com).
5. The .com TLD authoritative server refers your recursive server to the authoritative servers for [example.com](http://example.com).
6. Your recursive resolver queries the authoritative servers for [www.example.com](http://www.example.com), and receives [lb.example.net](http://lb.example.net) as the answer.
7. Your recursive resolver caches the answer, and returns it to you.
8. You now issue a second query to your recursive resolver for [lb.example.net](http://lb.example.net).
9. Your recursive resolver queries the root name server for [lb.example.net](http://lb.example.net).
10. The root name server refers your recursive resolver to the .net Top-Level Domain (TLD) authoritative server.
11. Your recursive resolver queries the .net TLD authoritative server for [lb.example.net](http://lb.example.net).
12. The .net TLD authoritative server refers your recursive server to the authoritative servers for [example.net](http://example.net).
13. Your recursive resolver queries the authoritative servers for [lb.example.net](http://lb.example.net), and receives an IP address as the answer.
14. Your recursive resolver caches the answer, and returns it to you.

Each of these steps consumes at least several milliseconds, often more, depending on network conditions. This can add up to a considerable amount of time that you spend waiting for the final, actionable answer of an IP address.
# ALIAS

In the case of an ALIAS record, all of the same actions are taken as with the CNAME, except the authoritative server for [example.com](http://example.com) performs steps six through thirteen for you, and returns the final answer of an IP address. This offers two advantages and one significant drawback:
###### ALIAS Advantages
- Faster final answer resolution speed. In most cases, the authoritative servers for [example.com](http://example.com) are more powerful and have faster Internet connectivity than your own computer and connection. They can therefore traverse the DNS hierarchy and retrieve the final answer much faster than you can.
- Answer looks like an A record. Since an ALIAS record returns the final answer consisting of one or more IP addresses, it can be used anywhere an A record can be used—including the zone apex. This makes it more flexible than a CNAME, which cannot be used at the zone apex.

###### ALIAS Disadvantages
- Geotargeting information is lost. Since it is the authoritative server for [example.com](http://example.com) that is issuing the queries for [lb.example.net](http://lb.example.net), then any intelligent routing functionality on the [lb.example.net](http://lb.example.net) record will act upon the location of the authoritative server, not on your location. The EDNS0 edns-client-subnet option does not apply here. This means that you may be potentially mis-routed: for example, if you are in New York, and the authoritative server for [example.com](http://example.com) is in California, then [lb.example.com](http://lb.example.com) will believe you to be in California and will return an answer that is distinctly sub-optimal for you in New York.

One important thing to note is that NS1 collapses CNAME records provided they all fall within the NS1 system, i.e., NS1’s name servers are authoritative for both the CNAME and the target record.  Collapsing simply means that the NS1 name server will return the full chain of records, from CNAME to final answer, in a single response. This eliminates all the additional lookup steps, and allows you to use CNAME records, even in a nested configuration, without any performance penalty.

And even better, NS1 supports a unique record type called a Linked Record. This is basically a symbolic link within our platform that acts as an ALIAS record might, except with sub-microsecond resolution speed.  To use a Linked Record, simply create the target record as you usually would (it can be of any type) and then create a second record to point to it, and select the Linked Record option.  Note that Linked Records can cross domain (zone) boundaries and even account boundaries within NS1, and offer a powerful way to organize and optimize your DNS record structure.

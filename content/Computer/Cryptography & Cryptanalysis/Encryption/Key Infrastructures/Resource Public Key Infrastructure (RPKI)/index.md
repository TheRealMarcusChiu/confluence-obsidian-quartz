---
title: "Resource Public Key Infrastructure (RPKI)"
created: 2019-11-21T15:34:33.157-06:00
modified: 2022-11-26T02:55:57.947-06:00
parent: "[[Key Infrastructures]]"
children:
  - "[[Route Origin Authorization (ROA)]]"
---
###### Resource Public Key Infrastructure (RPKI)
- a [[Key Infrastructures|Key Infrastructure]] similar to the [[Public Key Infrastructure (PKI)]]
- used for securing [[Border Gateway Protocol (BGP)|BGP]] updates (one of several [[BGP - Secure Variants|other ways]])
- secures the route origin (associating a route with an originating [[Autonomous System (AS) - Domain|AS number]])
- doesn't secure the [[Autonomous System (AS) - Domain|autonomous system]] path

# RPKI Components

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Key Infrastructures|Key Infrastructure]] Component",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "RPKI Component",
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
        "content": "certificates",
        "bg": "#F4F5F7"
      },
      "[[Route Origin Authorization (ROA)]]",
      "![[Route Origin Authorization (ROA)#^excerpt]]"
    ],
    [
      {
        "content": "certificate authorities",
        "bg": "#F4F5F7"
      },
      "Trusted Anchors (TA) aka Regional Internet Registry (RIR)",
      "- is an organization that manages the allocation and registration of [Internet number](https://en.wikipedia.org/wiki/Internet_number) resources within a region of the world. Internet number resources include [[IPv4 - Address|IP addresses]] and [[Autonomous System (AS) - Domain|Autonomous System Numbers (ASN)]]\n- presently the five RIRs (AFRINIC, APNIC, ARIN, LACNIC & RIPE) provide a method for members to take an [[IPv4 - Address|IP]]/[[Autonomous System (AS) - Domain|ASN]] pair and sign a ROA record."
    ],
    [
      {
        "content": "certificate repository",
        "bg": "#F4F5F7"
      },
      "Internet Routing Registry (IRR)",
      "- (aka ROA database) is a database of IRR route objects for determining, and sharing route and related information used for configuring routers, with a view to avoiding problematic issues between Internet service providers"
    ],
    [
      {
        "content": "certificate revocation mechanisms",
        "bg": "#F4F5F7"
      },
      "NONE",
      "NONE"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# RPKI Pros and Challenges
pros:
- offline crypto to verify ROA chains
- use a whitelist to filter hijacked BGP routes
- more effective than prefix filtering
	- prefix filtering is on customer prefixes, RPKI is on neighbors
- more incentives to avoid prefixes being hijacked

challenges:
- can be misconfigured
- partial deployment of ROV-related issues
- can be circumvented
	- route leaks
	- path alteration/shortening attacks

# RPKI Deployment Challenges
###### ASPATH Manipulation
- ASPATH = Autonomous System Path
- ASPATH manipulation more difficult to succeed
	- the attacker's (AS 666) ASPATH likely to be longer than the authentic (AS A) ASPATH, and therefore AS X would direct all data through the authentic ASPATH

![[Resource Public Key Infrastructure (RPKI)/RPKI-and-route-manipulation-attack.png|600]]
###### Loose ROA problem
![[Resource Public Key Infrastructure (RPKI)/RPKI-and-loose-ROA-problem.png|600]]
# Impact of Partial ROV Adoption
- <strong>collateral benefit</strong> - adopters of ROV protect [[Autonomous System (AS) - Domain|autonomous systems]] (that do not adopt ROV) behind them by discarding invalid routes
- <strong>collateral damage</strong> - autonomous systems not doing ROV might cause autonomous systems that do ROV to fall victim to attacks
	- <strong>disconnection</strong> - adopters of ROV might be offered only bad routes
	- <strong>control-plane-data-plane mismatch</strong> - data flows to the attacker, although AS 3 discarded it

###### collateral benefit
<strong>![[Resource Public Key Infrastructure (RPKI)/rpki-collatera-benefit.png|600]]</strong>
###### collateral damage - disconnection
<strong>![[Resource Public Key Infrastructure (RPKI)/rpki-collateral-damage-disconnect.png|600]]</strong>
###### collateral damage - control-plane-data-plane mismatch
![[Resource Public Key Infrastructure (RPKI)/rpki-collateral-damage-control-plane-data-plane-mismatch.png|600]]

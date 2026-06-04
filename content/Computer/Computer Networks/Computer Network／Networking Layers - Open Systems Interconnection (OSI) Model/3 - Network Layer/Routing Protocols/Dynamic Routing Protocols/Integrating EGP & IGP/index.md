---
title: "Integrating EGP & IGP"
created: 2019-09-10T19:41:20.679-05:00
modified: 2019-10-23T11:12:07.772-05:00
parent: "[[Dynamic Routing Protocols]]"
children: []
---
prerequisites:
- [[Interior Gateway Protocols (IGP) or Intra-Domain Routing Protocols (IDRP)]]
- [[Exterior Gateway Protocols (EGPs) or Inter-Domain Routing Protocols (IDRP)]]

### Integrating EGP & IGP

we explained how BGP speakers exchanged information from each other, but how do all other routers within an [[Autonomous System (AS) - Domain|autonomous system (AS)]] get this information?
###### 3 Possible Ways:
1. in the case of a [Stub AS](http://confluence.marcuschiu.com/display/NOT/Autonomous+System+-+Domain), the <em>border router</em> is the only choice for all routes outside the AS. This router can inject a default route into the intra-domain routing protocol. this default entry comes after all the more specific entries
2. next in complexity: have border routers inject specific routes into their own AS as they learned from outside the AS
	- example: the border router of a provider AS that connects to a customer AS. That router could learn that the network prefix 192.4.54/24 is located inside the customer AS, either through BGP or because the information is configured into the border router. It could inject a route to that prefix into the routing protocol running inside the provider AS. This would be an advertisement of the sort, “I have a link to 192.4.54/24 of cost X.” This would cause other routers in the provider AS to learn that this border router is the place to send packets destined for that prefix
3. next in complexity: <em>backbone networks</em> uses a variant of [[Border Gateway Protocol (BGP)|BGP]] called <strong>[[Internal BGP (iBGP)]]</strong> because <em>border routers </em>learn way too much routing information that it becomes too costly to inject it into [[Interior Gateway Protocols (IGP) or Intra-Domain Routing Protocols (IDRP)|intra-domain protocol]]

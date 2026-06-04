---
title: "Rendezvous Hashing - Highest Random Weight (HRW) Hashing"
created: 2021-09-13T05:29:34.892-05:00
modified: 2021-12-29T15:05:37.310-06:00
parent: "[[Hash Function - Hashing]]"
children:
  - "[[Consistent Hashing]]"
  - "[[Controlled Replication Under Scalable Hashing (CRUSH)]]"
---
###### Rendezvous Hashing - Highest Random Weight (HRW) Hashing
- is an algorithm that allows clients to achieve distributed agreement on a set of 𝑘 options out of a possible set of 𝑛 options. A typical application is when clients need to agree on which sites (or proxies) objects are assigned to
- is more general than [[Consistent Hashing|consistent hashing]], which becomes a special case (for 𝑘=1) of rendezvous hashing

# HRW - High Level

Rendezvous hashing solves the [distributed hash table](https://en.wikipedia.org/wiki/Distributed_hash_table) problem: How can a set of clients, given an object 𝑂, agree on wherein a set of 𝑛 sites (servers, say) to place 𝑂? Each client is to select a site independently, but all clients must end up picking the same site. This is non-trivial if we add a <em>minimal disruption</em> constraint, and require that only objects mapping to a removed site may be reassigned to other sites.

The basic idea is to give each site <em>𝑆<sub>𝑗</sub></em> a score (a <em>weight</em>) for each object <em>𝑂<sub>𝑖</sub></em> and assign the object to the highest scoring site. All clients first agree on a hash function ℎ(). For object 𝑂<em><sub>𝑖</sub></em>, the site <em>𝑆<sub>𝑗</sub></em> is defined to have weight <em>𝑤<sub>𝑖,𝑗</sub> = ℎ(𝑂<sub>𝑖</sub>,𝑆<sub>𝑗</sub>)</em>. HRW assigns <em>𝑂<sub>𝑖</sub></em> to the site <em>𝑆<sub>𝑚</sub></em> whose weight <em>𝑤<sub>𝑖,𝑚</sub></em> is the largest. Since ℎ<em>()</em> is agreed upon, each client can independently compute the weights <em>𝑤<sub>𝑖,1</sub>, 𝑤<sub>𝑖,2</sub>, ..., 𝑤<sub>𝑖,𝑛</sub></em> and pick the largest. If the goal is distributed 𝑘-agreement, the clients can independently pick the sites with the 𝑘 largest hash values.

If a site 𝑆 is added or removed, only the objects mapping to 𝑆 are remapped to different sites, satisfying the minimal disruption constraint above. The HRW assignment can be computed independently by any client, since it depends only on the identifiers for the set of sites <em>𝑆<sub>1</sub>, 𝑆<sub>2</sub>, ..., 𝑆<sub>𝑛</sub></em> and the object being assigned.

HRW easily accommodates different capacities among sites. If site <em>𝑆<sub>𝑘</sub></em> has twice the capacity of the other sites, we simply represent <em>𝑆<sub>𝑘</sub></em> twice in the list, say, as <em>𝑆<sub>𝑘,1</sub></em> and <em>𝑆<sub>𝑘,2</sub></em>. Clearly, twice as many objects will now map to <em>𝑆<sub>𝑘</sub></em> as to the other sites.
# HRW - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

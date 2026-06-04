---
title: "Distributed Hash Tables (DHT)"
created: 2021-12-30T00:45:59.611-06:00
modified: 2021-12-30T00:54:52.819-06:00
parent: "[[Hash Tables (Hash Map)]]"
children: []
---
###### Distributed Hash Tables (DHT)
- DHT is a type of [[Distributed - Data Structures (DDS)|Distributed Data Structure (DDS)]] that functions as a [[Hash Tables (Hash Map)|Hash Table]]
- In 2001, four DHT implementations: [CAN](https://en.wikipedia.org/wiki/Content_addressable_network),[Chord](https://en.wikipedia.org/wiki/Chord_(peer-to-peer)),[Pastry](https://en.wikipedia.org/wiki/Pastry_(DHT)), and [Tapestry](https://en.wikipedia.org/wiki/Tapestry_(DHT)), ignited DHTs as a popular research topic
- Most DHTs use some variant of [[Consistent Hashing|consistent hashing]] or [[Rendezvous Hashing - Highest Random Weight (HRW) Hashing|rendezvous hashing]] to map keys to nodes

# DHT - Subpages
- [CAN](https://en.wikipedia.org/wiki/Content_addressable_network)
- [Chord](https://en.wikipedia.org/wiki/Chord_(peer-to-peer))
- [Pastry](https://en.wikipedia.org/wiki/Pastry_(DHT))
- [Tapestry](https://en.wikipedia.org/wiki/Tapestry_(DHT))
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```

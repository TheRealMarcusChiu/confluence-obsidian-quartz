---
title: "Hash Tables (Hash Map)"
created: 2019-11-15T09:50:46.368-06:00
modified: 2021-12-30T00:45:57.856-06:00
parent: "[[Data Structures]]"
children:
  - "[[Distributed Hash Tables (DHT)]]"
---
###### Hash Table (Hash Map)
- is a [[Data Structures|data structure]] that implements an [[Associative Array - Map - Symbol Table - Dictionary|associative array]] (i.e. maps or dictionaries, an abstract data type that can hold data in ⟨key, value⟩ pairs)
- uses a [[Hash Function - Hashing|hash function]] (usually [[Consistent Hashing]]) to "hash" the <em>value</em> in order to compute a <em>key (index)</em>to be placed into an associative array

TODO read [https://en.wikipedia.org/wiki/Hash_table#Hashing](https://en.wikipedia.org/wiki/Hash_table#Hashing)
# Fill Factor & Growth Factor
- <strong>fill factor</strong> - the percentage of capacity representing the maximum number of items before the table will grow (not filled keys/indices but items)
- <strong>growth factor</strong> - the percentage to increase the capacity when fill factor has been exceeded

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

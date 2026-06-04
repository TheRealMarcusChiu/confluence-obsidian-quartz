---
title: "Key-Value Database／Store"
created: 2019-03-16T01:15:41.837-05:00
modified: 2025-04-25T17:54:01.975-05:00
parent: "[[NoSQL (Non-Relational) Databases]]"
children:
  - "[[Apache Geode]]"
  - "[[Etcd]]"
  - "[[Riak]]"
  - "[[RocksDB]]"
  - "[[VMware GemFire]]"
---
###### Key-Value Database/Store
````excerpt
- is a type of [[NoSQL (Non-Relational) Databases]] that has a big [[Hash Tables (Hash Map)|hash table]] of keys & values
- are well-suited to applications that have frequent small reads and writes along with simple data models. These records are stored and retrieved using a key that uniquely identifies the record, and is used to quickly find the data within the database
````
^excerpt

# Implementations
- [[Redis]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```

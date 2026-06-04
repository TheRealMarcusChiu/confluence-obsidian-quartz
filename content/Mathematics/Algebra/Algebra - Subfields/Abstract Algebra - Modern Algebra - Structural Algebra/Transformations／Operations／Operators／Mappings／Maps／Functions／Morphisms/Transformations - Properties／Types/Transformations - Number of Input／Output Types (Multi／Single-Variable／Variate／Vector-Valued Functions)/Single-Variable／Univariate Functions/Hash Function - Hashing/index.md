---
title: "Hash Function - Hashing"
created: 2021-09-13T05:29:34.583-05:00
modified: 2026-01-15T14:32:18.303-06:00
parent: "[[Single-Variable／Univariate Functions]]"
children:
  - "[[MurmurHash]]"
  - "[[Rendezvous Hashing - Highest Random Weight (HRW) Hashing]]"
---
###### Hash Function - Hashing
````excerpt
- is any [[Functions (Domain - Codomain - Preimage - Image - Range)|function]] that can be used to map data of arbitrary size to fixed-size values (these values are called hash values, hash codes, digests, or simply hashes)
````
^excerpt

# Hash Functions
- [[Cryptographic Hash Function - Message Digest Function|Cryptographic Hash Functions]]
	- [[Message Digest (MD)]]
	- [[Secure Hash Algorithms (SHA)]]
- Non-Cryptographic Hash Functions
	- [[MurmurHash|murmur]]
	- [fnv](http://isthe.com/chongo/tech/comp/fnv/) series of hashes
	- [HashMix](http://www.google.com/codesearch/url?ct=ext&url=http://www.concentric.net/~Ttwang/tech/inthash.htm&usg=AFQjCNEBOwEAd_jb5vYSckmG7OxrkeQhLA)
	- modulo hashing
	- [xxHash](https://github.com/cespare/xxhash)
	- [MetroHash](https://github.com/dgryski/go-metro)
	- [SipHash1–3](https://github.com/dgryski/go-sip13)
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```

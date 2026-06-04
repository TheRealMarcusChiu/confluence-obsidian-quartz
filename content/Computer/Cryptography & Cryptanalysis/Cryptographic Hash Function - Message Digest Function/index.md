---
title: "Cryptographic Hash Function - Message Digest Function"
created: 2019-03-16T03:08:26.145-05:00
modified: 2025-12-19T23:32:47.995-06:00
parent: "[[Cryptography & Cryptanalysis]]"
children:
  - "[[Message Digest (MD)]]"
  - "[[Password Hashing Functions]]"
  - "[[Secure Hash Algorithms (SHA)]]"
---
###### Cryptographic Hash Function (also called Message Digest Function)
````excerpt
- is a [[Hash Function - Hashing|hash function]] with the following properties:
	- <strong>pre-image resistance</strong> - given ℎ𝑎𝑠ℎ-𝑣𝑎𝑙𝑢𝑒, it is infeasible to find 𝑥 such that 𝐻(𝑥)=ℎ𝑎𝑠ℎ-𝑣𝑎𝑙𝑢𝑒
	- <strong>weak collision resistance</strong> - given 𝑥, it is infeasible to find 𝑦 such that 𝐻(𝑦)=𝐻(𝑥)
	- <strong>strong collision resistance</strong> - it is infeasible to find any 𝑥,𝑦 such that 𝐻(𝑦)=𝐻(𝑥)
- cryptographic hash functions are <strong><font style="color: rgb(255,0,0);">not</font></strong> used for:
	- [[Encryption|encryption]]
	- [[Authentication (AuthN)|authentication]]
	- [[Digital Signatures|digital signature]] generation (a digital signature verifies the <em>authenticity</em> and <em>integrity</em> of a <em>message</em>). This is because cryptographic hash functions use no secret/private keys to generate hashes. For enforcing <em>integrity</em> and <em>authentication</em>, use [[Asymmetric／Two／Public-Private Key Function|Asymmetric-Key Functions]] or [[Secure／Keyed Cryptographic Hash Function|Keyed Hash Functions]]
````
^excerpt

# Cryptographic Hash Function - Properties

a cryptographic hash function, 𝐻(𝑥) = ℎ𝑎𝑠ℎ-𝑣𝑎𝑙𝑢𝑒, should have the following properties:
- compression:
	- the input 𝑥 can be of any length
	- the output h has a fixed length
	- 𝐻(𝑥) is relatively easy to compute for any given 𝑥
	- 𝐻(𝑥) uses no keys: secret, private, nor public
- <strong>pre-image resistance (one-way property)</strong> - given hash-value, it is infeasible to find x such that 𝐻(𝑥)=hash-value
- collision-free:

# Cryptographic Hash Function - Use Cases
###### Use Cases
- to assign inputs to buckets of a hash table. If I have to guess (and this is just a guess), I would say that this is why cryptographic hash functions were invented in the first place - as hash table functions (hence the name <em>hash</em>). A cryptographic hash function is in many ways the perfect hash function, as it exhibits secure pseudo randomness and therefore it is very difficult to determine a pathological input data-set for the hash table. Unfortunately, it is quite slow compared to what is needed for hash table functions.
- to check Integrity from a <font style="color: rgb(51,153,102);">Trusted Source</font>. For example, you download a file from a website you trust. This trusted website has an SHA cryptographic hash signature. You calculate your own hash on the file you have just downloaded, and then compare. If they match (again, it is so important that you trust the website), then you know your code has not been altered.
- to discover changes in files. Due to <em>collision resistance</em>, if a file changes, its hash will also change (with high probability). This is used to detect changes in such applications as [[git (Global Information Tracker)]].

###### Not Use Case

cryptographic hash functions are <font style="color: rgb(255,0,0);">not</font> used for:
- [[Encryption|encryption]]
- [[Authentication (AuthN)|authentication]]
- <font style="color: rgb(255,0,0);"><font style="color: rgb(51,51,51);">generating</font> [[Digital Signatures|digital signatures]]</font> (a digital signature verifies the <em>authenticity</em> of a <em>message</em>). This is because cryptographic hash functions use no secret/private keys to generate hashes. For enforcing <em>integrity</em> and <em>authentication</em>, use [[Asymmetric／Two／Public-Private Key Function|Asymmetric-Key Functions]] or [[Secure／Keyed Cryptographic Hash Function|Keyed Hash Functions]]

# Cryptographic Hash Function - Implementations
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Cryptographic Hash Function - Attacks
###### Pre-Image Attack
- on cryptographic hash functions tries to find a message that has a specific hash value
- there are two types of pre-image resistance:
	- pre-image resistance: for essentially all pre-specified outputs, it is computationally infeasible to find any input that hashes to that output, i.e., given 𝑦, it is difficult to find an 𝑥 such that 𝐻(𝑥) = 𝑦
	- second-pre-image resistance: it is computationally infeasible to find any second input which has the same output as that of a specified input, i.e., given 𝑥, it is difficult to find a second pre-image 𝑥′ ≠ 𝑥 such that 𝐻(𝑥) = ℎ(𝑥′)

###### Collision Attack
- on a cryptographic hash tries to find two inputs producing the same hash value, i.e. a hash collision. In contrast to a pre-image attack, the hash value is not specified

- There are roughly two types of collision attacks:
	- <strong>Collision attack</strong> - Find two different messages 𝑥 and 𝑦 such that 𝐻(𝑥)=𝐻(𝑦)
	- <strong>Chosen-prefix collision attack</strong> - Given two different prefixes 𝑎,𝑏 find two appendages 𝑥 and 𝑦 such that 𝐻(𝑎∥𝑥) = 𝐻(𝑏∥𝑦) (where ∥ is the concatenation operation)

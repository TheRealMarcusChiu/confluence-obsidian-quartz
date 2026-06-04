---
title: "hashcat"
created: 2019-03-16T02:42:35.098-05:00
modified: 2019-10-22T12:39:51.695-05:00
parent: "[[Password Cracker]]"
children: []
---
![](https://www.youtube.com/watch?v=7U-RbOKanYs)

[https://hashcat.net/hashcat/](https://hashcat.net/hashcat/)

advanced password recovery and also used for bad things
# Installation

> [!expand]- homebrew
> <strong>1. install hashcat via brew</strong>
> <span style="white-space: pre-wrap"><code>  brew install hashcat</code></span>
>
> <strong>2. in this path are docs</strong>
> <span style="white-space: pre-wrap"><code>  /usr/local/Cellar/hashcat/3.40/share/doc/hashcat</code></span>
>
> <strong>3. more hashcat wiki</strong>
> <span style="white-space: pre-wrap"><code>  [https://hashcat.net/wiki/](https://hashcat.net/wiki/)</code></span>

> [!expand]- manual
> 1. go to [https://hashcat.net/hashcat/](https://hashcat.net/hashcat/) to download binary
# Example Use

> [!expand]- Click here to expand...
> <strong>1. get a md5 hash of string marcus and save it to a file</strong>
> <span style="white-space: pre-wrap"><code>  echo -n “marcus” | md5 \> example.hash</code><br><code>  echo -n - appends ⏎ to the end of marcus, without it the hash result will be different</code></span>
>
> <strong>2. execute the hashcat</strong>
> <span style="white-space: pre-wrap"><code>  hashcat -a 3 example.hash '?l?l?l?l?l?l'</code></span>
>
> - a - attack-mode. 3 meaning brute force
> - example.hash - input file of hashes
> - ‘?l?l?l?l?l?l’ - mask. this example is a character-set of 6 lowercase letters
>
> example.hash contents
> ```
> 49c167d7cd66dc64a474c261860ba50f
> 49c167d7cd66dc64a474c261860ba50f
> 066e7118a17e9218c0ed60891a6c6260
> 49c167d7cd66dc64a474c261860ba50f
> 3f34cc1a190de4abb685afabf56f758a
> 49c167d7cd66dc64a474c261860ba50f
> 49c167d7cd66dc64a474c261860ba50f
> 6f33e764b910cd663ba9a03a6d5666f8
> 110d46fcd978c24f306cd7fa23464d73
> a4757d7419ff3b48e92e90596f0e7548
> ```

hashcat -m 1800 -a 3 hashes.txt -o cracked.txt

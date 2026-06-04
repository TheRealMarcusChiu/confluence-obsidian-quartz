---
title: "Redis"
created: 2019-03-16T00:50:59.833-05:00
modified: 2026-01-15T15:03:30.429-06:00
parent: "[[Cache／Caching Servers]]"
children: []
---
###### Redis
````excerpt
- is an open source (BSD licensed) single-threaded in-memory data structure store
- used as a:
	- database
	- cache
	- message broker
- it supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries
- has built-in replication, [[Lua]] scripting, LRU eviction, transactions and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster
````
^excerpt

# Installation

> [!expand]- homebrew
> # Install
>
> <strong>0. search for redis version</strong>
> <span style="white-space: pre-wrap"><code>  brew search redis</code></span>
>
> <strong>1. install using brew in terminal</strong>
> <span style="white-space: pre-wrap"><code>  brew install \<redis version\></code></span>
>
> configuration: /usr/local/etc/redis.conf
>
> <strong>2. test if was installed correctly</strong>
> <span style="white-space: pre-wrap"><code>  which \<redis version\></code></span>
>
> # Start Stop Restart
> <span style="white-space: pre-wrap"><code>  brew services start redis</code><br><code>  brew services stop redis</code><br><code>  brew services restart redis</code></span>

> [!expand]- manual
> <strong>1. download redis package</strong>
> <span style="white-space: pre-wrap"><code>  wget [http://download.redis.io/releases/redis-VERSION.tar.gz](http://download.redis.io/releases/redis-VERSION.tar.gz)</code></span>
>
> or go to [https://redis.io/download](https://redis.io/download)
>
> <strong>2. extract redis tarball</strong>
> <span style="white-space: pre-wrap"><code>  tar vxzf redis-VERSION.tar.gz</code></span>
>
> - f: this must be the last flag of the command, and the tar file must be immediately after. It tells tar the name and path of the compressed file.
> - z: tells tar to decompress the archive using gzip
> - x: tar can collect files or extract them. x does the latter.
> - v: makes tar talk a lot. Verbose output shows you all the files being extracted.
>
> <strong>3. make it</strong>
> <span style="white-space: pre-wrap"><code>  cd redis-4.0.4</code><br><code>  make</code></span>
# Commands
- [https://redis.io/commands](https://redis.io/commands)
- [https://redis.io/](https://redis.io/)

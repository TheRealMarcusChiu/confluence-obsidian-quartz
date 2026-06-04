---
title: "Memcached"
created: 2019-03-16T00:54:08.698-05:00
modified: 2019-03-16T00:55:14.891-05:00
parent: "[[Cache／Caching Servers]]"
children: []
---
[https://memcached.org/](https://memcached.org/)

Free & open source, high-performance, distributed memory object caching system, generic in nature, but intended for use in speeding up dynamic web applications by alleviating database load.

Memcached is an in-memory key-value store for small chunks of arbitrary data (strings, objects) from results of database calls, API calls, or page rendering.
# Installation

> [!expand]- homebrew
> # Install
>
> <strong>1. install using brew in terminal</strong>
> <span style="white-space: pre-wrap"><code>  brew install memcached</code></span>
>
> <strong>2. test if memcached was installed correctly</strong>
> <span style="white-space: pre-wrap"><code>  which memcached</code></span>
>
> # Start Stop Restart
> <span style="white-space: pre-wrap"><code> brew services start memcached</code><br><code> brew services stop memcached</code></span>

> [!expand]- yum
> # Install
>
> <strong>1. install using yum in terminal</strong>
> <span style="white-space: pre-wrap"><code>  yum install memcached</code></span>
>
> <strong>2. test if memcached was installed correctly</strong>
> <span style="white-space: pre-wrap"><code>  which memcached</code></span>
>
> # Start Stop Restart
>
> <strong>1. Start</strong>
> <span style="white-space: pre-wrap"><code>  memcached -p 11111 -U 11111 -u user -d</code></span>
>
> - -p is for TCP port number
> - -U is for UDP port number
> - -u is for username
> - -d runs memcached as daemon process
>
> <strong>2. Stop</strong>
> <span style="white-space: pre-wrap"><code>  kill \<process-id\></code></span>
# Commands

> [!expand]- Click here to expand...
> # Connect to Server
> <span style="white-space: pre-wrap"><code>  telnet HOST PORT</code></span>
>
> # Basic Commands
>
> [https://www.tutorialspoint.com/memcached/](https://www.tutorialspoint.com/memcached/)
>
> <strong>Arguments:</strong>
> - key - name of unique key
> - flag - It is the 32-bit unsigned integer that the server stores with the data provided by the user, and returns along with the data when the item is retrieved.
> - exptime - expiration time in seconds (0 means "never expire")
> - bytes - length of the data in bytes needed to be stored in memcached
> - noreply (optional) - informs the server not to send any replies
> - value - the data to be stored
>
> <strong>2. GET</strong>
> - used to get the value stored at key. No value returned if key does not exist
> 	- syntax - get
> 	- example - get my\_key
> 	- example - get key1 key2 key3
>
> <strong>2. GETS</strong>
> - used to get value with CAS token. No value returned if key does not exist
> 	- syntax - gets
> 	- example - gets my\_key
> 	- example - gets key1 key2 key3
>
> <strong>3. SET</strong>
> - set a value to key; if key does not exist, a new key is created and value is assigned to that key
> 	- syntax - set key flags exptime bytes \[noreply\] value
> 	- example - set new\_key 0 900 10 data\_value
>
> <strong>4. ADD</strong>
> - set a value to a new key; if key already exists, then it gives the output NOT\_STORED
> 	- syntax - add key flags exptime bytes \[noreply\] value
> 	- example - add new\_key 0 900 10 data\_value
>
> <strong>5. REPLACE</strong>
> - replace the value of existing key. if key does not exist, then it gives the output NOT\_STORED
> 	- syntax - replace key flags exptime bytes \[noreply\] value
> 	- example - replace mykey 0 900 16 some\_other\_value
>
> <strong>6. APPEND</strong>
> - add data to existing key. this data is added at the end of the previous value
> 	- syntax - append key flags exptime bytes \[noreply\] value
> 	- example - append tutorials 0 900 5 value
>
> <strong>7. Prepend Data</strong>
> - add data in an existing key. this data is added before the existing data of the key
> 	- syntax - prepend key flags exptime bytes \[noreply\] value
> 	- example - prepend tutorials 0 900 5 value
>
> <strong>8. CAS</strong>
> - “check-and-set” or “compare-and-swap”
> - checks and set data item if and only if, no other client process has updated it since last read by this client
> 	- syntax - can key flags exptime bytes unique\_cas\_token \[noreply\]
> 	- example - can tp 0 900 9
>
> <strong>9. DELETE</strong>
> - syntax - delete key \[noreply\]
> - example - delete my\_key
>
> <strong>10. INCREMENT/DECREMENT</strong>
> - syntax - incr key increment\_value
> - example - incr key 5
> - syntax - decr key decrement\_value
> - example - decr key 5
>
> <strong>11. STATS</strong>
> - used to return server statistics
> - syntax - stats
>
> <strong>12. STATS ITEM</strong>
> - used to get items statistics (count, age, eviction, etc)
> - syntax - stats items
>
> <strong>13. STATS SLABS</strong>
> - displays slabs statistics (size, memory usage, commands, count, etc)
> - syntax - stats slabs
>
> <strong>14. STATS SIZES</strong>
> - provides information about the sizes and number of items of each size within the cache.
> - syntax - stats sizes
>
> <strong>15. CLEAR DATA</strong>
> - deletes all data
> - syntax - flush\_all \[time\] \[noreply\]
> - example - flush\_all

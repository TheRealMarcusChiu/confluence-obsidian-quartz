---
title: "Consistent Hashing"
created: 2021-09-13T05:29:35.076-05:00
modified: 2026-01-15T16:47:36.075-06:00
parent: "[[Rendezvous Hashing - Highest Random Weight (HRW) Hashing]]"
children: []
---
###### Consistent Hashing
- is a special kind of [[Hash Function - Hashing|hashing]] such that when a [[Hash Tables (Hash Map)|hash table]] is resized, only 𝐾/𝑛 keys need to be remapped on average, where:
	- 𝐾 is the number of keys
	- 𝑛 is the number of slots/nodes

# Consistent Hashing vs Traditional Hashing vs Rendezvous Hashing

In contrast, in most traditional hash tables, a change in the number of array slots causes nearly all keys to be remapped because the mapping between the keys and the slots is defined by a [modular operation](https://en.wikipedia.org/wiki/Modular_arithmetic).
- <em>[[Hash Function - Hashing|traditional hashing]]</em> is a more general version of <em>[[Rendezvous Hashing - Highest Random Weight (HRW) Hashing|rendezvous hashing]]</em>
- <em>[[Rendezvous Hashing - Highest Random Weight (HRW) Hashing|rendezvous hashing]]</em> is more general than <em>consistent hashing</em>

# Understanding Consistent Hashing

![](https://www.youtube.com/watch?v=vccwdhfqIrI)
## Scaling Out: Distributed Hashing

In some situations, it may be necessary or desirable to split a [[Hash Tables (Hash Map)|hash table]] into several parts, hosted by different servers. One of the main motivations for this is to bypass the memory limitations of using a single computer, allowing for the construction of arbitrarily large hash tables (given enough servers).

In such a scenario, the objects (and their keys) are <em>distributed</em> among several servers, hence the name.

A typical use case for this is the implementation of in-memory caches, such as [[Memcached]].

Such setups consist of a pool of caching servers that host many key/value pairs and are used to provide fast access to data originally stored (or computed) elsewhere. For example, to reduce the load on a database server and at the same time improve performance, an application can be designed to first fetch data from the cache servers, and only if it’s not present there—a situation is known as <em>cache miss</em>—resort to the database, running the relevant query and caching the results with an appropriate key, so that it can be found next time it’s needed.

Now, how does distribution take place? What criteria are used to determine which keys to host in which servers?

The simplest way is to take the hash <em>modulo</em> of the number of servers. That is, <code>server = hash(key) mod N</code>, where <code>N</code> is the size of the pool. To store or retrieve a key, the client first computes the hash, applies a <code>modulo N</code> operation, and uses the resulting index to contact the appropriate server (probably by using a lookup table of IP addresses). Note that the hash function used for key distribution must be the same one across all clients, but it need not be the same one used internally by the caching servers.

Let’s see an example. Say we have three servers, <code>A</code>, <code>B</code> and <code>C</code>, and we have some string keys with their hashes:

```merge-table
{
  "rows": [
    [
      {
        "content": "KEY",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "HASH",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "HASH mod 3",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "\"john\"",
      "1633428562",
      "2"
    ],
    [
      "\"bill\"",
      "7594634739",
      "0"
    ],
    [
      "\"jane\"",
      "5000799124",
      "1"
    ],
    [
      "\"steve\"",
      "9787173343",
      "0"
    ],
    [
      "\"kate\"",
      "3421657995",
      "2"
    ]
  ]
}
```

A client wants to retrieve the value for key <code>john</code>. Its <code>hash modulo 3</code> is <code>2</code>, so it must contact server <code>C</code>. The key is not found there, so the client fetches the data from the source and adds it. The pool looks like this:

```merge-table
{
  "rows": [
    [
      {
        "content": "A",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "B",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "C",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "",
      "",
      "\"john\""
    ]
  ]
}
```

Next another client (or the same one) wants to retrieve the value for key <code>bill</code>. Its <code>hash modulo 3</code> is <code>0</code>, so it must contact server <code>A</code>. The key is not found there, so the client fetches the data from the source and adds it. The pool looks like this now:

```merge-table
{
  "rows": [
    [
      {
        "content": "A",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "B",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "C",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "\"bill\"",
      "",
      "\"john\""
    ]
  ]
}
```

After the remaining keys are added, the pool looks like this:

```merge-table
{
  "rows": [
    [
      {
        "content": "A",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "B",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "C",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "\"bill\"",
      "\"jane\"",
      "\"john\""
    ],
    [
      "\"steve\"",
      "",
      "\"kate\""
    ]
  ]
}
```
## The Rehashing Problem

This distribution scheme is simple, intuitive, and works fine. That is, until the number of servers changes. What happens if one of the servers crashes or becomes unavailable? Keys need to be redistributed to account for the missing server, of course. The same applies if one or more new servers are added to the pool;keys need to be redistributed to include the new servers. This is true for any distribution scheme, but the problem with our simple modulo distribution is that when the number of servers changes, most <code>hashes modulo N</code> will change, so most keys will need to be moved to a different server. So, even if a single server is removed or added, all keys will likely need to be rehashed into a different server.

From our previous example, if we removed server <code>C</code>, we’d have to rehash all the keys using <code>hash modulo 2</code> instead of <code>hash modulo 3</code>, and the new locations for the keys would become:

```merge-table
{
  "rows": [
    [
      {
        "content": "KEY",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "HASH",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "HASH mod 2",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "\"john\"",
      "1633428562",
      "0"
    ],
    [
      "\"bill\"",
      "7594634739",
      "1"
    ],
    [
      "\"jane\"",
      "5000799124",
      "0"
    ],
    [
      "\"steve\"",
      "9787173343",
      "1"
    ],
    [
      "\"kate\"",
      "3421657995",
      "1"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "A",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "B",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "\"john\"",
      "\"bill\""
    ],
    [
      "\"jane\"",
      "\"steve\""
    ],
    [
      "",
      "\"kate\""
    ]
  ]
}
```

Note that all key locations changed, not only the ones from server <code>C</code>.

In the typical use case we mentioned before (caching), this would mean that, all of a sudden, the keys won’t be found because they won’t yet be present at their new location.

So, most queries will result in misses, and the original data will likely need retrieving again from the source to be rehashed, thus placing a heavy load on the origin server(s) (typically a database). This may very well degrade performance severely and possibly crash the origin servers.
## The Solution: Consistent Hashing

So, how can this problem be solved? We need a distribution scheme that does <em>not</em> depend directly on the number of servers, so that, when adding or removing servers, the number of keys that need to be relocated is minimized. One such scheme—a clever, yet surprisingly simple one—is called <em>consistent hashing</em>, and was first described by [Karger et al. at MIT](http://courses.cse.tamu.edu/caverlee/csce438/readings/consistent-hashing.pdf) in an academic paper from 1997 (according to Wikipedia).

Consistent Hashing is a distributed hashing scheme that operates independently of the number of servers or objects in a distributed <em>hash table</em> by assigning them a position on an abstract circle, or <em>hash ring</em>. This allows servers and objects to scale without affecting the overall system.

Imagine we mapped the hash output range onto the edge of a circle. That means that the minimum possible hash value, zero, would correspond to an angle of zero, the maximum possible value (some big integer we’ll call <code>INT\_MAX</code>) would correspond to an angle of 2𝝅 radians (or 360 degrees), and all other hash values would linearly fit somewhere in between. So, we could take a key, compute its hash, and find out where it lies on the circle’s edge. Assuming an <code>INT\_MAX</code> of 1010 (for example’s sake), the keys from our previous example would look like this:

![[Consistent Hashing/1-consistent-hashing.png|547x400]]

```merge-table
{
  "rows": [
    [
      {
        "content": "KEY",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "HASH",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "ANGLE (DEG)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "\"john\"",
      "1633428562",
      "58.8"
    ],
    [
      "\"bill\"",
      "7594634739",
      "273.4"
    ],
    [
      "\"jane\"",
      "5000799124",
      "180"
    ],
    [
      "\"steve\"",
      "9787173343",
      "352.3"
    ],
    [
      "\"kate\"",
      "3421657995",
      "123.2"
    ]
  ]
}
```

Now imagine we also placed the servers on the edge of the circle, by pseudo-randomly assigning them angles too. This should be done in a repeatable way (or at least in such a way that all clients agree on the servers’ angles). A convenient way of doing this is by hashing the server name (or IP address, or some ID)—as we’d do with any other key—to come up with its angle.

In our example, things might look like this:

![[Consistent Hashing/2-consistent-hashing.png]]

```merge-table
{
  "rows": [
    [
      {
        "content": "KEY",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "HASH",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "ANGLE (DEG)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "\"john\"",
      "1633428562",
      "58.8"
    ],
    [
      "\"bill\"",
      "7594634739",
      "273.4"
    ],
    [
      "\"jane\"",
      "5000799124",
      "180"
    ],
    [
      "\"steve\"",
      "9787173343",
      "352.3"
    ],
    [
      "\"kate\"",
      "3421657995",
      "123.2"
    ],
    [
      "\"A\"",
      "5572014558",
      "200.6"
    ],
    [
      "\"B\"",
      "8077113362",
      "290.8"
    ],
    [
      "\"C\"",
      "2269549488",
      "81.7"
    ]
  ]
}
```

Since we have the keys for both the objects and the servers on the same circle, we may define a simple rule to associate the former with the latter: Each object key will belong in the server whose key is closest, in a counterclockwise direction (or clockwise, depending on the conventions used). In other words, to find out which server to ask for a given key, we need to locate the key on the circle and move in the ascending angle direction until we find a server.

In our example:

![[Consistent Hashing/3-consistent-hashing.png]]

```merge-table
{
  "rows": [
    [
      {
        "content": "KEY",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "HASH",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "ANGLE (DEG)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "\"john\"",
      "1633428562",
      "58.7"
    ],
    [
      "\"C\"",
      "2269549488",
      "81.7"
    ],
    [
      "\"kate\"",
      "3421657995",
      "123.1"
    ],
    [
      "\"jane\"",
      "5000799124",
      "180"
    ],
    [
      "\"A\"",
      "5572014557",
      "200.5"
    ],
    [
      "\"bill\"",
      "7594634739",
      "273.4"
    ],
    [
      "\"B\"",
      "8077113361",
      "290.7"
    ],
    [
      "\"steve\"",
      "787173343",
      "352.3"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "KEY",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "HASH",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "ANGLE (DEG)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "LABEL",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "SERVER",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "\"john\"",
      "1632929716",
      "58.7",
      "\"C\"",
      "C"
    ],
    [
      "\"kate\"",
      "3421831276",
      "123.1",
      "\"A\"",
      "A"
    ],
    [
      "\"jane\"",
      "5000648311",
      "180",
      "\"A\"",
      "A"
    ],
    [
      "\"bill\"",
      "7594873884",
      "273.4",
      "\"B\"",
      "B"
    ],
    [
      "\"steve\"",
      "9786437450",
      "352.3",
      "\"C\"",
      "C"
    ]
  ]
}
```

From a programming perspective, what we would do is keep a sorted list of server values (which could be angles or numbers in any real interval), and walk this list (or use a binary search) to find the first server with a value greater than, or equal to, that of the desired key. If no such value is found, we need to wrap around, taking the first one from the list.

To ensure object keys are evenly distributed among servers, we need to apply a simple trick: To assign not one, but many labels (angles) to each server. So instead of having labels <code>A</code>, <code>B</code> and <code>C</code>, we could have, say, <code>A0 .. A9</code>, <code>B0 .. B9</code> and <code>C0 .. C9</code>, all interspersed along the circle. The factor by which to increase the number of labels (server keys), known as <em>weight</em>, depends on the situation (and may even be different for each server) to adjust the probability of keys ending up on each. For example, if server <code>B</code> were twice as powerful as the rest, it could be assigned twice as many labels, and as a result, it would end up holding twice as many objects (on average).

For our example we’ll assume all three servers have an equal weight of 10 (this works well for three servers, for 10 to 50 servers, a weight in the range 100 to 500 would work better, and bigger pools may need even higher weights):

![[Consistent Hashing/4-consistent-hashing.png]]

```merge-table
{
  "rows": [
    [
      {
        "content": "KEY",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "HASH",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "ANGLE (DEG)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "\"C6\"",
      "408965526",
      "14.7"
    ],
    [
      "\"A1\"",
      "473914830",
      "17"
    ],
    [
      "\"A2\"",
      "548798874",
      "19.7"
    ],
    [
      "\"A3\"",
      "1466730567",
      "52.8"
    ],
    [
      "\"C4\"",
      "1493080938",
      "53.7"
    ],
    [
      "\"john\"",
      "1633428562",
      "58.7"
    ],
    [
      "\"B2\"",
      "1808009038",
      "65"
    ],
    [
      "\"C0\"",
      "1982701318",
      "71.3"
    ],
    [
      "\"B3\"",
      "2058758486",
      "74.1"
    ],
    [
      "\"A7\"",
      "2162578920",
      "77.8"
    ],
    [
      "\"B4\"",
      "2660265921",
      "95.7"
    ],
    [
      "\"C9\"",
      "3359725419",
      "120.9"
    ],
    [
      "\"kate\"",
      "3421657995",
      "123.1"
    ],
    [
      "\"A5\"",
      "3434972143",
      "123.6"
    ],
    [
      "\"C1\"",
      "3672205973",
      "132.1"
    ],
    [
      "\"C8\"",
      "3750588567",
      "135"
    ],
    [
      "\"B0\"",
      "4049028775",
      "145.7"
    ],
    [
      "\"B8\"",
      "4755525684",
      "171.1"
    ],
    [
      "\"A9\"",
      "4769549830",
      "171.7"
    ],
    [
      "\"jane\"",
      "5000799124",
      "180"
    ],
    [
      "\"C7\"",
      "5014097839",
      "180.5"
    ],
    [
      "\"B1\"",
      "5444659173",
      "196"
    ],
    [
      "\"A6\"",
      "6210502707",
      "223.5"
    ],
    [
      "\"A0\"",
      "6511384141",
      "234.4"
    ],
    [
      "\"B9\"",
      "7292819872",
      "262.5"
    ],
    [
      "\"C3\"",
      "7330467663",
      "263.8"
    ],
    [
      "\"C5\"",
      "7502566333",
      "270"
    ],
    [
      "\"bill\"",
      "7594634739",
      "273.4"
    ],
    [
      "\"A4\"",
      "8047401090",
      "289.7"
    ],
    [
      "\"C2\"",
      "8605012288",
      "309.7"
    ],
    [
      "\"A8\"",
      "8997397092",
      "323.9"
    ],
    [
      "\"B7\"",
      "9038880553",
      "325.3"
    ],
    [
      "\"B5\"",
      "9368225254",
      "337.2"
    ],
    [
      "\"B6\"",
      "9379713761",
      "337.6"
    ],
    [
      "\"steve\"",
      "9787173343",
      "352.3"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "KEY",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "HASH",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "ANGLE (DEG)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "LABEL",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "SERVER",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "\"john\"",
      "1632929716",
      "58.7",
      "\"B2\"",
      "B"
    ],
    [
      "\"kate\"",
      "3421831276",
      "123.1",
      "\"A5\"",
      "A"
    ],
    [
      "\"jane\"",
      "5000648311",
      "180",
      "\"C7\"",
      "C"
    ],
    [
      "\"bill\"",
      "7594873884",
      "273.4",
      "\"A4\"",
      "A"
    ],
    [
      "\"steve\"",
      "9786437450",
      "352.3",
      "\"C6\"",
      "C"
    ]
  ]
}
```

So, what’s the benefit of all this circle approach? Imagine server <code>C</code> is removed. To account for this, we must remove labels <code>C0 .. C9</code> from the circle. This results in the object keys formerly adjacent to the deleted labels now being randomly labeled <code>Ax</code> and <code>Bx</code>, reassigning them to servers <code>A</code> and <code>B</code>.

But what happens with the other object keys, the ones that originally belonged in <code>A</code> and <code>B</code>? Nothing! That’s the beauty of it: The absence of <code>Cx</code> labels does not affect those keys in any way. So, removing a server results in its object keys being randomly reassigned to the rest of the servers, leaving all other keys untouched:

![[Consistent Hashing/5-consistent-hashing.png]]

```merge-table
{
  "rows": [
    [
      {
        "content": "KEY",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "HASH",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "ANGLE (DEG)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "\"A1\"",
      "473914830",
      "17"
    ],
    [
      "\"A2\"",
      "548798874",
      "19.7"
    ],
    [
      "\"A3\"",
      "1466730567",
      "52.8"
    ],
    [
      "\"john\"",
      "1633428562",
      "58.7"
    ],
    [
      "\"B2\"",
      "1808009038",
      "65"
    ],
    [
      "\"B3\"",
      "2058758486",
      "74.1"
    ],
    [
      "\"A7\"",
      "2162578920",
      "77.8"
    ],
    [
      "\"B4\"",
      "2660265921",
      "95.7"
    ],
    [
      "\"kate\"",
      "3421657995",
      "123.1"
    ],
    [
      "\"A5\"",
      "3434972143",
      "123.6"
    ],
    [
      "\"B0\"",
      "4049028775",
      "145.7"
    ],
    [
      "\"B8\"",
      "4755525684",
      "171.1"
    ],
    [
      "\"A9\"",
      "4769549830",
      "171.7"
    ],
    [
      "\"jane\"",
      "5000799124",
      "180"
    ],
    [
      "\"B1\"",
      "5444659173",
      "196"
    ],
    [
      "\"A6\"",
      "6210502707",
      "223.5"
    ],
    [
      "\"A0\"",
      "6511384141",
      "234.4"
    ],
    [
      "\"B9\"",
      "7292819872",
      "262.5"
    ],
    [
      "\"bill\"",
      "7594634739",
      "273.4"
    ],
    [
      "\"A4\"",
      "8047401090",
      "289.7"
    ],
    [
      "\"A8\"",
      "8997397092",
      "323.9"
    ],
    [
      "\"B7\"",
      "9038880553",
      "325.3"
    ],
    [
      "\"B5\"",
      "9368225254",
      "337.2"
    ],
    [
      "\"B6\"",
      "9379713761",
      "337.6"
    ],
    [
      "\"steve\"",
      "9787173343",
      "352.3"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "KEY",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "HASH",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "ANGLE (DEG)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "LABEL",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "SERVER",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "\"john\"",
      "1632929716",
      "58.7",
      "\"B2\"",
      "B"
    ],
    [
      "\"kate\"",
      "3421831276",
      "123.1",
      "\"A5\"",
      "A"
    ],
    [
      "\"jane\"",
      "5000648311",
      "180",
      "\"B1\"",
      "B"
    ],
    [
      "\"bill\"",
      "7594873884",
      "273.4",
      "\"A4\"",
      "A"
    ],
    [
      "\"steve\"",
      "9786437450",
      "352.3",
      "\"A1\"",
      "A"
    ]
  ]
}
```

Something similar happens if, instead of removing a server, we add one. If we wanted to add server <code>D</code> to our example (say, as a replacement for <code>C</code>), we would need to add labels <code>D0 .. D9</code>. The result would be that roughly one-third of the existing keys (all belonging to <code>A</code> or <code>B</code>) would be reassigned to <code>D</code>, and, again, the rest would stay the same:

![[Consistent Hashing/6-consistent-hashing.png]]

```merge-table
{
  "rows": [
    [
      {
        "content": "KEY",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "HASH",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "ANGLE (DEG)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "\"D2\"",
      "439890723",
      "15.8"
    ],
    [
      "\"A1\"",
      "473914830",
      "17"
    ],
    [
      "\"A2\"",
      "548798874",
      "19.7"
    ],
    [
      "\"D8\"",
      "796709216",
      "28.6"
    ],
    [
      "\"D1\"",
      "1008580939",
      "36.3"
    ],
    [
      "\"A3\"",
      "1466730567",
      "52.8"
    ],
    [
      "\"D5\"",
      "1587548309",
      "57.1"
    ],
    [
      "\"john\"",
      "1633428562",
      "58.7"
    ],
    [
      "\"B2\"",
      "1808009038",
      "65"
    ],
    [
      "\"B3\"",
      "2058758486",
      "74.1"
    ],
    [
      "\"A7\"",
      "2162578920",
      "77.8"
    ],
    [
      "\"B4\"",
      "2660265921",
      "95.7"
    ],
    [
      "\"D4\"",
      "2909395217",
      "104.7"
    ],
    [
      "\"kate\"",
      "3421657995",
      "123.1"
    ],
    [
      "\"A5\"",
      "3434972143",
      "123.6"
    ],
    [
      "\"D7\"",
      "3567129743",
      "128.4"
    ],
    [
      "\"B0\"",
      "4049028775",
      "145.7"
    ],
    [
      "\"B8\"",
      "4755525684",
      "171.1"
    ],
    [
      "\"A9\"",
      "4769549830",
      "171.7"
    ],
    [
      "\"jane\"",
      "5000799124",
      "180"
    ],
    [
      "\"B1\"",
      "5444659173",
      "196"
    ],
    [
      "\"D6\"",
      "5703092354",
      "205.3"
    ],
    [
      "\"A6\"",
      "6210502707",
      "223.5"
    ],
    [
      "\"A0\"",
      "6511384141",
      "234.4"
    ],
    [
      "\"B9\"",
      "7292819872",
      "262.5"
    ],
    [
      "\"bill\"",
      "7594634739",
      "273.4"
    ],
    [
      "\"A4\"",
      "8047401090",
      "289.7"
    ],
    [
      "\"D0\"",
      "8272587142",
      "297.8"
    ],
    [
      "\"A8\"",
      "8997397092",
      "323.9"
    ],
    [
      "\"B7\"",
      "9038880553",
      "325.3"
    ],
    [
      "\"D3\"",
      "9048608874",
      "325.7"
    ],
    [
      "\"D9\"",
      "9314459653",
      "335.3"
    ],
    [
      "\"B5\"",
      "9368225254",
      "337.2"
    ],
    [
      "\"B6\"",
      "9379713761",
      "337.6"
    ],
    [
      "\"steve\"",
      "9787173343",
      "352.3"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "KEY",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "HASH",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "ANGLE (DEG)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "LABEL",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "SERVER",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "\"john\"",
      "1632929716",
      "58.7",
      "\"B2\"",
      "B"
    ],
    [
      "\"kate\"",
      "3421831276",
      "123.1",
      "\"A5\"",
      "A"
    ],
    [
      "\"jane\"",
      "5000648311",
      "180",
      "\"B1\"",
      "B"
    ],
    [
      "\"bill\"",
      "7594873884",
      "273.4",
      "\"A4\"",
      "A"
    ],
    [
      "\"steve\"",
      "9786437450",
      "352.3",
      "\"D2\"",
      "D"
    ]
  ]
}
```

This is how consistent hashing solves the rehashing problem.

In general, only <code>k/N</code> keys need to be remapped when <code>k</code> is the number of keys and <code>N</code> is the number of servers (more specifically, the maximum of the initial and final number of servers).

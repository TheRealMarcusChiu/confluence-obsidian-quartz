---
title: "Java - Hibernate Cache - First／Second／Query-Level Cache"
created: 2022-12-19T18:12:26.930-06:00
modified: 2022-12-19T18:32:55.844-06:00
parent: "[[Java - Hibernate]]"
children: []
---
# Hibernate Cache - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>first-level cache</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- is associated with the Session object\n- is enabled by default and there is no way to disable it. However, hibernate provides methods through which we can delete selected objects from the cache or clear the cache completely.\n- any object cached in a session will not be visible to other sessions and when the session is closed, all the cached objects will also be lost"
    ],
    [
      {
        "content": "second-level cache",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- is disabled by default but we can enable it through configuration\n- currently, [[EhCache|EHCache]] and Infinispan provide an implementation for Hibernate Second level cache"
    ],
    [
      {
        "content": "query-level cache",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Hibernate can also cache the result set of a query\n- doesn’t cache the state of the actual entities in the cache; it caches only identifier values and results of the value type. So it should always be used in conjunction with the second-level cache"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Hibernate Cache - When an Entity is Looked up By its ID

When an entity instance is looked up by its id (either by application logic or by Hibernate internally, e.g. when it loads associations to that entity from other entities), and second-level caching is enabled for that entity, the following happens:
- If an instance is already present in the first-level cache, it's returned from there.
- If an instance isn't found in the first-level cache, and the corresponding instance state is cached in the second-level cache, then the data is fetched from there and an instance is assembled and returned.
- Otherwise, the necessary data are loaded from the database and an instance is assembled and returned.

Once the instance is stored in the persistence context (first-level cache), it's returned from there in all subsequent calls within the same session until the session is closed, or the instance is manually evicted from the persistence context. The loaded instance state is also stored in the L2 cache if it wasn't already there
# First-Level Cache
- Hibernate First Level cache is enabled by default, there are no configurations needed for this.
- We can use the session <code><font style="color: rgb(122,134,154);">evict()</font></code> method to remove a single object from the hibernate first-level cache.
- We can use the session <code><font style="color: rgb(122,134,154);">clear()</font></code> method to clear the cache i.e to delete all the objects from the cache.
- We can use the session <code><font style="color: rgb(122,134,154);">contains()</font></code> method to check if an object is present in the hibernate cache or not, if the object is found in the cache, it returns true, or else it returns false.
- Since Hibernate caches all the objects into a first-level cache. Then during bulk queries or batch updates, it’s necessary to clear the cache at certain intervals to avoid memory issues

# Second-Level Cache

see: [https://www.baeldung.com/hibernate-second-level-cache](https://www.baeldung.com/hibernate-second-level-cache)

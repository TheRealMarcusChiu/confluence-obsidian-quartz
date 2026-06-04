---
title: "Java - WeakHashMap"
created: 2022-06-05T22:31:57.815-05:00
modified: 2022-06-05T22:34:41.092-05:00
parent: "[[Java - Map (Associative Array)]]"
children: []
---
###### WeakHashMap
- TODO

# Example Code
```
WeakHashMap<UniqueImageName, BigImage> map = new WeakHashMap<>();

BigImage bigImage1 = new BigImage("foo_1");
UniqueImageName imageName1 = new UniqueImageName("name_of_big_image_2");
BigImage bigImage2 = new BigImage("foo_2");
UniqueImageName imageName2 = new UniqueImageName("name_of_big_image_2");

map.put(imageName1, bigImage1);
map.put(imageName2, bigImage2);
 
assertTrue(map.containsKey(imageName1));
assertTrue(map.containsKey(imageName2));

imageNameFirst = null;
System.gc(); // garbage collect

await().atMost(10, TimeUnit.SECONDS).until(() -> map.size() == 1);
await().atMost(10, TimeUnit.SECONDS).until(() -> map.containsKey(imageName2));
```
# Resources
- [https://www.baeldung.com/java-weakhashmap](https://www.baeldung.com/java-weakhashmap)

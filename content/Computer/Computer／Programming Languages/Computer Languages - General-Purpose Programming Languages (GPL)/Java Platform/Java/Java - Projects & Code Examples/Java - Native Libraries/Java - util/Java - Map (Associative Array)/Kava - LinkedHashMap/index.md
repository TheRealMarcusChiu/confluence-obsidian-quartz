---
title: "Kava - LinkedHashMap"
created: 2022-06-05T22:38:32.979-05:00
modified: 2022-06-05T22:49:50.733-05:00
parent: "[[Java - Map (Associative Array)]]"
children: []
---
###### LinkedHashMap
- a subclass of [[Java - HashMap|HashMap]] that maintains the insertion and/or access order of keys

# Insertion-Ordered LinkedHashMap

A <code><font style="color: rgb(122,134,154);">LinkedHashMap</font></code>'s insertion order will always be maintained. We cannot make the same guarantee for a <code><font style="color: rgb(122,134,154);">HashMap</font></code>
```
@Test
public void givenLinkedHashMap_whenGetsOrderedKeyset_thenCorrect() {
    LinkedHashMap<Integer, String> map = new LinkedHashMap<>();
    map.put(1, null);
    map.put(2, null);
    map.put(3, null);
    map.put(4, null);
    map.put(5, null);

    Set<Integer> keys = map.keySet();
    Integer[] arr = keys.toArray(new Integer[0]);

    for (int i = 0; i < arr.length; i++) {
        assertEquals(new Integer(i + 1), arr[i]);
    }
}
```
# Access-Ordered LinkedHashMap

LinkedHashMap provides a special constructor which enables us to specify:
- load factor (LF)
- initial capacity
- a different ordering mechanism/strategy called access-order

See code below, notice how the order of elements in the key set is transformed as we perform access operations on the map
```
@Test
public void givenLinkedHashMap_whenAccessOrderWorks_thenCorrect() {
    LinkedHashMap<Integer, String> map 
      = new LinkedHashMap<>(16, .75f, true);
    map.put(1, null);
    map.put(2, null);
    map.put(3, null);
    map.put(4, null);
    map.put(5, null);

    Set<Integer> keys = map.keySet();
    assertEquals("[1, 2, 3, 4, 5]", keys.toString());
 
    map.get(4);
    assertEquals("[1, 2, 3, 5, 4]", keys.toString());
 
    map.get(1);
    assertEquals("[2, 3, 5, 4, 1]", keys.toString());
 
    map.get(3);
    assertEquals("[2, 5, 4, 1, 3]", keys.toString());
}
```

---
title: "Adapter Pattern vs Facade Pattern"
created: 2022-02-28T05:47:46.410-06:00
modified: 2026-01-10T23:09:14.161-06:00
parent: "[[SDP - Comparisons]]"
children: []
---
````excerpt
[[Adapter Pattern]] vs [[Facade Pattern]]
- <font style="color: rgb(122,134,154);">Facade</font> defines a new interface, whereas <font style="color: rgb(122,134,154);">Adapter</font> uses an old interface. Remember that Adapter makes two existing interfaces work together as opposed to defining an entirely new one.
	- Adapter and Facade are both wrappers, but they are different kinds of wrappers. The intent of Facade is to produce a simpler interface, and the intent of Adapter is to design an existing interface. While Facade routinely wraps multiple objects and Adapter wraps a single object; Facade could front-end a single complex object and Adapter could wrap several legacy objects
- <font style="color: rgb(122,134,154);">Adapter</font> and <font style="color: rgb(122,134,154);">Facade</font> both have a different interface than what they wrap. But the adapter derives from an existing interface, whereas the facade creates a new interface
````
^excerpt

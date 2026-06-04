---
title: "Abstract Factory Pattern vs Factory Method Pattern"
created: 2023-06-02T11:32:04.797-05:00
modified: 2026-01-10T15:04:44.980-06:00
parent: "[[SDP - Comparisons]]"
children: []
---
````excerpt
[[Abstract Factory Pattern]] vs [[Factory Method Pattern]]
- the main difference is that the <font style="color: rgb(122,134,154);">factory method</font> is a method, and an <font style="color: rgb(122,134,154);">abstract factory</font> is an object
	- the intended purpose of the <font style="color: rgb(122,134,154);">class containing a factory method</font> is NOT to create objects
	- the intended purpose of an <font style="color: rgb(122,134,154);">abstract factory</font> should ONLY be used to create objects
- <font style="color: rgb(122,134,154);">abstract factory</font> is implemented by composition, but <font style="color: rgb(122,134,154);">factory method</font> is implemented by Inheritance
- goals:
	- <font style="color: rgb(122,134,154);">abstract factory</font>'s goal is to create a family of objects that are designed to work together
	- <font style="color: rgb(122,134,154);">factory method</font>'s goal is to encapsulate object creation in a separate method, allowing subclasses to provide the implementation for creating specific objects
- one should take care when using <font style="color: rgb(122,134,154);">factory methods</font> since it's easy to break the [[Liskov Substitution Principle (LSP) - Subtype|Liskov Substitution Principle (LSP)]] when creating objects
````
^excerpt

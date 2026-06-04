---
title: "List - Self Organizing"
created: 2020-03-30T20:00:47.624-05:00
modified: 2020-03-30T20:02:18.380-05:00
parent: "[[Data Structures]]"
children: []
---
<strong>Self Organizing List</strong> the idea is to place frequently accessed nodes at front of list
### Methods
- move-to-front method
	- whenever node is searched instant move it to the front
- count method
	- keep count of search times per node
	- order by search count
- transpose method
	- any node searched is swapped with preceding node

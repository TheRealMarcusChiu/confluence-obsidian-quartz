---
title: "G／N-DDP - Data Modeling"
created: 2021-06-27T22:04:09.261-05:00
modified: 2021-06-27T22:15:25.651-05:00
parent: "[[Graph／Network Database Design Patterns (G／N-DDP)]]"
children: []
---
# Graph/Network Building Blocks
- <strong>nodes</strong> - are entities
- <strong>relationships/edges</strong> - connect nodes (defines structure)

adding details to nodes and relationships:
- properties - attributes and metadata to both nodes and relationships
- labels - used for grouping nodes and relationships

# Use Relationships When...

you need to specify either:
- weight, strength, or other quality of the relationship:
	- friendship strength
	- proficiency skill
- attribute value comprises a complex value type
	- address (first line, second line, zip code, etc)
- attribute values are interconnected
	- taxonomy of skills

# Use Properties When

There is no need to qualify the relationship AND attribute value is a simple value type
# Reasons for Intermediate Nodes
- connect more than 2 nodes in a single context
	- e.g. Ian bought a book in Barnes and Noble
- n-ary relationships
	- e.g. Sure invited Sarah, Bob and Charlie to her party
- relate something to a relationship
> [!list-indent-undo]
> > [!indent]
> > ![[G／N-DDP - Data Modeling/reasons-for-intermediate-nodes.png|301]]

# Resources

![](https://www.youtube.com/watch?v=78r0MgH0u0w)

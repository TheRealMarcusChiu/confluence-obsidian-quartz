---
title: "Association - Aggregation - Composition - Generalization - Specialization - Realization"
created: 2022-03-06T18:41:11.376-06:00
modified: 2022-03-06T18:51:15.313-06:00
parent: "[[Vocab - Vocabulary - Terms - Terminology - Words - Phrases - Vernacular - Jargon - Verbiage]]"
children: []
---
- <strong>association</strong> - is a relationship between two objects (e.g. owners feed pets, pets please owners)
- <strong>aggregation</strong> or <strong>composition</strong> - are subsets/special-cases of association (e.g. a tail is a part of both dogs and cats)
	- <strong>aggregation</strong> implies a relationship where the child CAN exist independently of the parent (e.g. Class (parent) and Student (child). Delete the Class and the Students still exist)
	- <strong>composition</strong> implies a relationship where the child CANNOT exist independent of the parent (e.g. House (parent) and Room (child). Rooms don't exist separate to a House)
		- is a subset/special-case of aggregation
- <strong>generalization</strong> - uses "is-a" relationship (e.g. cat is a kind of pet)
- <strong>specialization</strong> - opposite of generalization
- <strong>realization</strong> - is a relationship between the blueprint class and the object containing its respective implementation level details

---
title: "Descriptive／Description Logic (DL)"
created: 2021-09-13T04:44:25.008-05:00
modified: 2021-09-13T04:44:25.008-05:00
parent: "[[Formal Logical Systems／Languages or Logic Classes]]"
children:
  - "[[Ontology Languages]]"
---
###### <strong>Descriptive/Description Logic (DL)</strong>
- syntax of Descriptive/Description Logic makes it easy to say things about objects
- many but not all DLs are more expressive than [[Propositional Logic - Propositional Calculus - Sentential Logic - Statement Logic|propositional logic]] but less expressive than [[First-Order Logic - Predicate Logic - Predicate Calculus - Quantification Theory|first-order logic]]
- are notations that make it easier to describe definitions and properties of categories/objects
- evolved from semantic networks in response to pressure to formalizing what networks mean while retaining emphasis on taxonomic structure
- the principle inference tasks of description logics are:
	- <strong>subsumption</strong> - checking if one category is a subset of another by comparing their definitions
	- <strong>classification</strong> - checking whether an object belongs to a category
	- <strong>consistency</strong> - some description logic system includes consistency of a category definition (whether the membership criteria are logically satisfiable)

###### Syntax of CLASSIC Descriptions
![[Descriptive／Description Logic (DL)/12.7.png|350]]

for example, to say "bachelors are unmarried adult males":
```
Bachelor = And(Unmarried, Adult, Male).
```

the equivalent in first-order logic:
```
Bachelor(x) ⇔ Unmarried(x) ʌ Adult(x) ʌ Male(x)
```

any description in CLASSIC description logic can be translated into an equivalent first-order logic sentence. but some are more straightforward in CLASSIC description logic. for example, to describe the set of men with at least 3 sons who are all unemployed and married to doctors, and at most 2 daughters who are all professors in physics or math departments:
```
And(Man, AtLeast(3,Son), AtMost(2,Daughter),
    All(Son, And(Unemployed, Married, All(Spouse, Doctor))),
    All(Daughter, And(Professor, Fills(Department, Physics, Math))))
```
### Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

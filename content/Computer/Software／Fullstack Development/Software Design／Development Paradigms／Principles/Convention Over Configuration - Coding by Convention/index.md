---
title: "Convention Over Configuration - Coding by Convention"
created: 2023-06-07T15:20:17.972-05:00
modified: 2023-06-07T15:42:19.469-05:00
parent: "[[Software Design／Development Paradigms／Principles]]"
children: []
---
###### Convention Over Configuration (also known as coding by convention)
````excerpt
- is a [[Software Design／Development Paradigms／Principles|software design paradigm]] used by software frameworks that attempts to decrease the number of decisions that a developer using the framework is required to make without necessarily losing flexibility and [[DAMP vs DRY - Descriptive and Meaningful Phrases vs Don't Repeat Yourself|don't repeat yourself (DRY)]] principles
- the phrase essentially means a developer only needs to specify unconventional aspects of the application. For example, if there is a class Sales in the model, the corresponding table in the database is called "sales" by default. It is only if one deviates from this convention, such as the table "product sales", that one needs to write code regarding these names
````
^excerpt

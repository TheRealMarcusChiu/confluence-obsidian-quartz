---
title: "Model-View-Adaptor (MVA)"
created: 2019-12-23T00:15:36.030-06:00
modified: 2025-10-20T22:45:43.572-05:00
parent: "[[Model-View-Whatever (MVW)]]"
children: []
---
###### Model-View-Adaptor (MVA) or Mediating-Controller MVC
````excerpt
- is a software [architectural pattern](https://en.wikipedia.org/wiki/Architectural_pattern_(computer_science)) and [multitier architecture](https://en.wikipedia.org/wiki/Multitier_architecture). In complex computer applications that present large amounts of data to users, developers often wish to separate data (model) and [[User Interface (UI)|user interface]] (view) concerns so that changes to the user interface will not affect data handling and that the data can be reorganized without changing the user interface. MVA and traditional [[Model-View-Controller (MVC)|MVC]] both attempt to solve this same problem, but with two different styles of solution. Traditional MVC arranges model (e.g., data structures and storage), view (e.g., user interface), and controller (e.g., business logic) in a triangle, with model, view, and controller as vertices, so that some information flows between the model and views outside of the controller's direct control. The MVA solves this rather differently from the MVC by arranging model, adapter or mediating controller and view linearly without any connections whatsoever directly between model and view
````
^excerpt

# Multiple Adapters Between The Same Model-View Pair

Additionally, multiple adapters may be created to change the way one view presents data for a given model. For example, different governments (either among different states of the United States or different nation-states internationally) may impose different codes of law, that in turn impose different business logic for the same underlying database and for the same outwardly presented website. In this scenario, a class of various adapters or mediating controllers can represent the variations in business logic among these jurisdictions in between the same database model and the same website view.

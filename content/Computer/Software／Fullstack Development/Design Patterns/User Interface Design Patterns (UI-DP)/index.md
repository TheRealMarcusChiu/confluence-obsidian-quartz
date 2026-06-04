---
title: "User Interface Design Patterns (UI-DP)"
created: 2019-12-14T22:20:50.676-06:00
modified: 2025-10-20T22:44:00.123-05:00
parent: "[[Design Patterns]]"
children:
  - "[[(Server-Side vs Client-Side) MVW／Rendering]]"
  - "[[Front-End Microservice (FEM) - Modular Frontend - Micro Frontend]]"
  - "[[Model-View-Whatever (MVW)]]"
---
###### User Interface Design Patterns (UI-DP)
````excerpt
- are [[Design Patterns]] that deals with the behavior of a [[User Interface (UI)|User Interface]]/presentation (closely related to [[Behavioral Design Patterns]] especially [[Mediator Pattern|Mediator]] & [[Observer Pattern (Publisher-Subscriber Pattern)|Observer]] Pattern)
````
^excerpt

---
# UI Design Patterns

![[Model-View-Whatever (MVW)#^excerpt]]
# UI Design Patterns - History
In 1978, Trygve Reenskaugh and Adele Goldberg coined the name [[Model-View-Controller (MVC)]]

Real and Pure MVC is unidirectional

More than a decade ago, when server side frameworks like Apache Struts implemented a variant of MVC called [[Model-View-Presenter (MVP)]] pattern, they made every request go through controller and every response come back through controller. Everyone continued calling it MVC. Due to inherent nature of the web, any changes in the model cannot be propagated to the view without view sending a request or update. So Pure MVC is not implemented. Rather MVP is implemented.

Few years back, when frameworks like Angular, Ember, Knockout implemented MVC on front end, they implemented another variant of MVC called [[Model-View-ViewModel (MVVM) - Model-View-Binder (MVB)|Model-View-ViewModel (MVVM)]] pattern which introduced databinding. A few folks continued called it MVC. (and few realized that terminology is not important and called it [[Model-View-Whatever (MVW)]]), none of them implemented pure MVC.

When React was born, they took the opportunity to implement pure MVC (not MVP or MVVM), and renamed it as Flux with few changes.
---
# UI Design Other
- [[(Server-Side vs Client-Side) MVW／Rendering|(Server-Side vs Client-Side) MVW/Rendering]]
- [[Front-End Microservice (FEM) - Modular Frontend - Micro Frontend]]

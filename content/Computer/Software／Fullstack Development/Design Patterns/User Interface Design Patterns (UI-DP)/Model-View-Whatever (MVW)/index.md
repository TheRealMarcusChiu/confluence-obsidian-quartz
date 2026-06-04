---
title: "Model-View-Whatever (MVW)"
created: 2019-12-23T01:00:14.099-06:00
modified: 2026-05-21T19:05:07.693-05:00
parent: "[[User Interface Design Patterns (UI-DP)]]"
children:
  - "[[MVW - Comparisons]]"
  - "[[Model-View-Adaptor (MVA)]]"
  - "[[Model-View-Controller (MVC)]]"
  - "[[Model-View-Presenter (MVP)]]"
  - "[[Model-View-ViewModel (MVVM) - Model-View-Binder (MVB)]]"
---
````excerpt
<strong>[[Model-View-Whatever (MVW)]]</strong> - is not an actual [[User Interface Design Patterns (UI-DP)|UI Design Pattern]] but a term coined to refer to the various Model-View-\* patterns. MVW is sometimes mistakenly referred as [[Model-View-Controller (MVC)]]
- <strong>[[Model-View-Controller (MVC)]]</strong> - unidirectional flow of events/data (i.e. Controller → Model → View → Back to Controller) (e.g. [[React - React.js - ReactJS|React.js]])
- <strong>[[Model-View-Adaptor (MVA)]]</strong> - the Adaptors sits between Model and View (i.e. View ↔ Adaptors ↔ Model)
- <strong>[[Model-View-Presenter (MVP)]]</strong> - a MVA with only 1 adaptor (e.g. [[Java - Spring Family|Spring]], [[Ruby on Rails|Rails]], [[PHP (PHP： Hypertext Preprocessor)|PHP PHP]], [ASP.net](http://asp.net/))
- <strong>[[Model-View-ViewModel (MVVM) - Model-View-Binder (MVB)]]</strong> - MVP/MVA but with data-binding between ViewModel/Binder and the View (e.g. [[Angular]], [[Vue - Vue.js - VueJS|Vue.js]])

###### Model-View-\* Hierarchy
<span style="white-space: pre-wrap"><code>            MVW</code><br><code>           /   \\</code><br><code>        MVA     MVC\_\_\_\_\_</code><br><code>         |     /   \\    \\   </code><br><code>        MVP  Flux  MVC1 MVC2 </code><br><code>         |    |?</code><br><code>   MVVM/MVB  Redux</code></span>
````
^excerpt

# MVW Comparisons
```dataview
LIST
FROM ""
WHERE file.folder = [[MVW - Comparisons]].file.folder + "/" + [[MVW - Comparisons]].file.name
```

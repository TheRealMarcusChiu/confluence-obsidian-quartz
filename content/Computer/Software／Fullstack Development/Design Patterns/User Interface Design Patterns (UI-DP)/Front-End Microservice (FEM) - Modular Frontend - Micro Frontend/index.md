---
title: "Front-End Microservice (FEM) - Modular Frontend - Micro Frontend"
created: 2019-03-15T00:28:25.018-05:00
modified: 2021-07-24T16:42:02.150-05:00
parent: "[[User Interface Design Patterns (UI-DP)]]"
children: []
---
###### Front-End Microservice (FEM) - Modular Frontend - Micro Frontend
- an architectural style where independently deliverable frontend applications are composed into a greater whole
- combining multiple frameworks (e.g. [[Angular]], [[React - React.js - ReactJS|React]], [[Vue - Vue.js - VueJS|Vue.js]], etc) into a Single Page Application (SPA)

# FEM - Pros
- <strong>smaller decoupled cohesive codebases</strong> - by drawing thicker lines around the bounded contexts of the application, we make it harder for such accidental coupling to arise
- <strong>incremental independent upgrades</strong> -
- <strong>independent deployment</strong> -

# FEM - Cons
- can lead to duplication of dependencies, increasing the number of bytes our users must download
- the dramatic increase in team autonomy can cause fragmentation in the way your teams work

# Resources
- [https://martinfowler.com/articles/micro-frontends.html](https://martinfowler.com/articles/micro-frontends.html)
- [single-spa](https://single-spa.js.org/)
- [Ebay 2014](https://www.ebayinc.com/stories/blogs/tech/dont-build-pages-build-modules/) - LOL wasn't really into it that day

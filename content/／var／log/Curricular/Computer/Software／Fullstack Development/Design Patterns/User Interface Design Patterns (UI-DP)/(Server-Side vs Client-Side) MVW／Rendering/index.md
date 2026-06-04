---
title: "(Server-Side vs Client-Side) MVW／Rendering"
created: 2019-12-14T14:46:34.006-06:00
modified: 2025-10-20T22:49:33.172-05:00
parent: "[[User Interface Design Patterns (UI-DP)]]"
children: []
---
- <strong>Server-Side Rendering</strong> - usually follows the [[Model-View-Presenter (MVP)|MVP]] pattern (e.g. [[Java - Spring Family|Spring]], Rails, [[PHP (PHP： Hypertext Preprocessor)|PHP (PHP: Hypertext Preprocessor)]], and [ASP.net](http://asp.net/))
- <strong>Client-Side Rendering</strong> - usually follows the [[Model-View-ViewModel (MVVM) - Model-View-Binder (MVB)|MVVM]] or [[Model-View-Controller (MVC)|MVC]]/[[Flux]] pattern (e.g. [[Angular]], [[Vue - Vue.js - VueJS|Vue.js]], [[React - React.js - ReactJS]]). used with [[Representational State Transfer (REST) - RESTful|RESTful APIs]]

# History: Server-Side Rendering → Client-Side Rendering
- early 2000s, websites were simple pages and JavaScript was tedious
- in 2006, [[jQuery]] revolutionized the way we work with JavaScript by letting us manipulate DOM in a relatively easy way
- most websites are server-side rendered (e.g. [[Java - Spring Family|Spring]], Rails, [ASP.net](http://ASP.net))
- in 2010, [[AngularJS (Angular 1)|AngularJS]] introduced client-side rendering
- 2010 - 2020, new client-side frameworks were introduced (e.g. [[Vue - Vue.js - VueJS]], [[Angular]], [[React - React.js - ReactJS]])

# Server-Side Rendering
- added new responsibility for the controller: handling the initial HTTP request
	- the controller is now entry point instead of view
	- note: there is no presence of [[Model-View-Whatever (MVW)|MVW]] pattern within browser/client
- examples: [[Java - Spring Family|Spring]], Rails, [[PHP (PHP： Hypertext Preprocessor)|PHP (PHP: Hypertext Preprocessor)]], & [ASP.net](http://asp.net/)

# Server-Side MVW (MVP)
![[(Server-Side vs Client-Side) MVW／Rendering/server-side mvc.png|400]]
# Client-Side Rendering
- client-side frameworks helped organize the complexity of complicated websites (aka SPAs)
- client-side frameworks often introduced extra steps to create a static bundle(s) of HTML, JS, and CSS
- the static nature allows:
	- cache-control HTTP headers
	- CDNs to serve faster
- the Controller within the bundle is usually divided into:
	- View Controller -
	- API Controller -

# Client-Side MVW (MVVM)
![[(Server-Side vs Client-Side) MVW／Rendering/client-side mvc.png|400]]
# Client-Side Rendering - Cons
- slower page rendering:
	- extra DOM manipulation
	- do extra API requests to a back-end server
	- watch for changes in bind data
- compatibility with older browsers is hard to accomplish
- SEO problem

# Client-Side Rendering - Pros
- server performance increases:
	- amount of traffic between client and server is reduced
	- server does not need to create page to send to client
- decouples architecture: back-end and front-end are independent
- easier to test front-end code
- does not require knowledge of server-side languages in order to program front-end

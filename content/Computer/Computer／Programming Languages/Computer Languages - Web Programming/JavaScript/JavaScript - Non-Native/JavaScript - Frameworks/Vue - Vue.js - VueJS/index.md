---
title: "Vue - Vue.js - VueJS"
created: 2019-12-15T14:17:02.411-06:00
modified: 2025-04-13T21:14:10.987-05:00
parent: "[[JavaScript - Frameworks]]"
children: []
---
###### Vue - Vue.js - VueJS
````excerpt
- is a [[User Interface Design Patterns (UI-DP)|MVVM Pattern]][[JavaScript]] framework for building User Interfaces (UI) and Single-Page Applications (SPA)
````
^excerpt

# Setup

2 ways to set up Vue:
- [[Node.js]] project
- static [[HyperText Markup Language (HTML)|HTML]] file

# Static HTML File

> [!expand]- Click here to expand...
> ```xml
> <!DOCTYPE html>
> <html>
> <head>
> 	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
> </head>
> <body>
> 	<div id="app">{{message}}</div>
>  	<script>
> 		const App = new Vue({
> 			el: '#app',
> 			data: {
> 				message: 'Hello Vue!',
> 			},
> 		})
>     </script>
> </body>
> </html>
> ```
# Node.js Project

> [!expand]- Click here to expand...
> install vue-cli
> ```bash
> npm i -g @vue/cli @vue/cli-service-global
> ```
>
> create Vue App
> ```bash
> vue create vue-app
> ```
>
> run vue app
> ```bash
> cd vue-app
> npm run serve
> ```
# Tutorial
- [https://www.taniarascia.com/getting-started-with-vue/](https://www.taniarascia.com/getting-started-with-vue/)

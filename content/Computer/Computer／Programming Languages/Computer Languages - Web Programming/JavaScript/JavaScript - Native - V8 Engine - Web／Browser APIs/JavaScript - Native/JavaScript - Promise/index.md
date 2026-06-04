---
title: "JavaScript - Promise"
created: 2019-12-18T15:54:04.377-06:00
modified: 2022-02-14T20:18:50.933-06:00
parent: "[[JavaScript - Native]]"
children: []
---
Promises are an abstraction of the flow of program execution which can be summed up as follows:
- Asker: Whenever you're done doing what you're doing, would you call me back?
- Answerer: Sure thing, I <strong>promise</strong>

A JavaScript Promise can be:
- <strong>fulfilled</strong> - the action relating to the promise succeeded
- <strong>rejected</strong> - the action relating to the promise failed
- <strong>pending</strong> - hasn't been fulfilled or rejected yet
- <strong>settled</strong> - has fulfilled or rejected

# Simple Promise

> [!expand]- Click here to expand...
> ```js
> function simple_promise(random_message) {
>   return new Promise(function(resolve, reject) {
> 	if (confirm("press a button! random message: " + random_message)) {
>   		resolve("okay clicked");
> 	} else {
>   		reject(Error("cancel clicked"));
> 	}
>   });
> }
> ```
>
> using it
> ```js
> simple_promise('hello marcus').then(function(response) {
>     console.log("PROMISE SUCCESS!", response);
> }, function(error) {
>     console.error("PROMISE FAILED!", error);
> });
> ```
# Complex Promise - Promisfying an XMLHttpRequest

> [!expand]- Click here to expand...
> ```js
> function get(url) {
>   // Return a new promise.
>   return new Promise(function(resolve, reject) {
>     // Do the usual XHR stuff
>     var req = new XMLHttpRequest();
>     req.open('GET', url);
>
>     req.onload = function() {
>       // This is called even on 404 etc
>       // so check the status
>       if (req.status == 200) {
>         // Resolve the promise with the response text
>         resolve(req.response);
>       }
>       else {
>         // Otherwise reject with the status text
>         // which will hopefully be a meaningful error
>         reject(Error(req.statusText));
>       }
>     };
>
>     // Handle network errors
>     req.onerror = function() {
>       reject(Error("Network Error"));
>     };
>
>     // Make the request
>     req.send();
>   });
> }
> ```
>
> using it
> ```js
> get('/web/fundamentals/primers/promises').then(function(response) {
>     console.log("SUCCESS!", response);
> }, function(error) {
>     console.error("FAILED!", error);
> });
> ```
# Sugar Coating Error Handling

> [!expand]- Click here to expand...
> instead of
> ```js
> simple_promise('hello marcus').then(function(response) {
>     console.log("PROMISE SUCCESS!", response);
> }, function(error) {
>     console.error("PROMISE FAILED!", error);
> });
> ```
>
> you can do this
> ```js
> simple_promise('hello marcus').then(function(response) {
>     console.log("PROMISE SUCCESS!", response);
> }).catch(function(error) {
>     console.error("PROMISE FAILED!", error);
> });
> ```
# Chaining then()'s

> [!expand]- transforming values
> transforming values
> ```
> var promise = new Promise(function(resolve, reject) {
>   resolve(1);
> });
>
> promise.then(function(val) {
>   console.log(val); // 1
>   return val + 2;
> }).then(function(val) {
>   console.log(val); // 3
> })
> ```

> [!expand]- chaining multiple async things back-to-back
> ```
> asyncThing1().then(function() {
>   return asyncThing2();
> }).then(function() {
>   return asyncThing3();
> }).catch(function(err) {
>   return asyncRecovery1();
> }).then(function() {
>   return asyncThing4();
> }, function(err) {
>   return asyncRecovery2();
> }).catch(function(err) {
>   console.log("Don't worry about it");
> }).then(function() {
>   console.log("All done!");
> })
> ```
>
> flow chart
>
> ![[JavaScript - Promise/promise-chaining-async-with-catch.jpg|350]]

---
title: "JavaScript - Regular Functions ／ Function Declarations - Anonymous Functions ／ Function Expressions - Arrow Functions"
created: 2019-12-18T17:06:39.847-06:00
modified: 2024-01-06T17:35:26.950-06:00
parent: "[[JavaScript - Native]]"
children: []
---
- <strong>Regular Functions / Function Declarations </strong>-
- <strong>Anonymous Functions / Function Expressions</strong> are just function declarations without a name. Every time you write the function keyword, anywhere in your code, giving it a name right after is optional. Omitting the name makes the function, well, anonymous.
- <strong>Arrow Functions</strong> provide lexical binding, meaning you get the control back on the value of this inside the function’s body. By getting the control back, I mean that it’s fairly easy to know which object this refers to just by looking at the code where your arrow function is defined (and not called)

# Code Examples
> [!tabs]
>
> === Intro
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Function Type",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Code Example",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": "Regular Function\nFunction Declaration",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "```js\nfunction regular(a, b) { return a + b; }\nregular(1, 2); // returns 3\n```"
>     ],
>     [
>       {
>         "content": "Anonymous Function\nFunction Expression",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "```js\nvar anon = function (a, b) { return a + b; };\nanon(1, 2);    // outputs 3\n\n```"
>     ],
>     [
>       {
>         "content": "Arrow Function",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "```js\nvar arrow = (a, b) => { return a + b; };\narrow(1, 2);   // outputs 3\n```\n```js\nvar arrow = (a, b) => a + b;\narrow(1, 2);   // outputs 3\n```"
>     ]
>   ],
>   "tableStyle": "width: 99.9012%;"
> }
> ```
>
> === Simultaneously Function Define & Call
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Function Type",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Code Example",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": "Regular Function\nFunction Declaration",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "```js\n(function regular(a, b) {\n\tconsole.log(a + b);\n})(1, 2);                     // outputs 3\nregular(1, 2);                // ReferenceError: regular is not defined\n```"
>     ],
>     [
>       {
>         "content": "Anonymous Function\nFunction Expression",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "```js\n(function (a, b) {\n\tconsole.log(a + b)\n})(1, 2);                     // outputs 3\n```"
>     ],
>     [
>       {
>         "content": "Arrow Function",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "```js\n((a, b) => { \n\tconsole.log(a + b)\n})(1, 2);                     // outputs 3\n```"
>     ]
>   ],
>   "tableStyle": "width: 99.9012%;"
> }
> ```
>
> === Simultaneously Function Define & Call & Capture
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Function Type",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Code Example",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": "Regular Function\nFunction Declaration",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "```js\nvar regular_response = (function regular(a, b) {\n\treturn a + b;\n})(1, 2);                     \nconsole.log(regular_response);    // outputs 3\n```"
>     ],
>     [
>       {
>         "content": "Anonymous Function\nFunction Expression",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "```js\nvar anon_response = (function (a, b) {\n\treturn a + b;\n})(1, 2);\nconsole.log(anon_response);       // outputs 3\n\n```"
>     ],
>     [
>       {
>         "content": "Arrow Function",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "```js\nvar arrow_response = ((a, b) => { \n\treturn a + b;\n})(1, 2);\nconsole.log(arrow_response);      // outputs 3\n```"
>     ]
>   ],
>   "tableStyle": "width: 99.9012%;"
> }
> ```

# Differences Between Them

arrow function does not do 'this' binding, as shown below
```js
var user = { 
    name: "Marcus Chiu", 
    regular() {    
        console.log(this.name); // 'this' binding works here
    },
	anon: function () {
		console.log(this.name); // 'this' binding works here
	},
	arrow: () => { 
        console.log(this.name); // 'this' binding FAILS here
    },
};

user.regular(); // outputs 'Marcus Chiu'
user.anon();    // outputs 'Marcus Chiu'
user.arrow();   // outputs nothing
```

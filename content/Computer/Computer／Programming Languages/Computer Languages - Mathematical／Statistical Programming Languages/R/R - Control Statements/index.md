---
title: "R - Control Statements"
created: 2021-08-18T23:10:46.756-05:00
modified: 2021-08-18T23:14:17.817-05:00
parent: "[[R]]"
children: []
---
- [<code>if</code> statement](http://uc-r.github.io/control_statements#if_statement) for conditional programming
- [<code>if...else</code> statement](http://uc-r.github.io/control_statements#ifelse_statement) for conditional programming
- [<code>for</code> loop](http://uc-r.github.io/control_statements#for_loop) to iterate over a fixed number of iterations
- [<code>while</code> loop](http://uc-r.github.io/control_statements#while_loop) to iterate until a logical statement returns FALSE
- [<code>repeat</code> loop](http://uc-r.github.io/control_statements#repeat_loop) to execute until told to break
- [<code>break</code>/<code>next</code> arguments](http://uc-r.github.io/control_statements#break_skip) to exit and skip iterations in a loop

> [!expand-ui]- if
> ```
> if (test_expression) { statement }
> ```

> [!expand-ui]- if else
> ```
> if (test_expression) {
>         statement 1
> } else {
>         statement 2
> }
> ```

> [!expand-ui]- for loop
> ```
> for(i in 1:100) {
>         <do stuff here with i>
> }
> ```

> [!expand-ui]- while loop
> ```
> counter <- 1
>
> while(test_expression) {
>         statement
>         counter <- counter + 1
> }
> ```

> [!expand-ui]- repeat loop
> ```
> counter <- 1
>
> repeat {
>         statement
>         
>         if(test_expression){
>                 break
>         }
>         counter <- counter + 1
> }
> ```

> [!expand-ui]- break/next arguments
> ```
> x <- 1:5
>
> for (i in x) {
>         if (i == 3){
>                 break
>                 }
>         print(i)
> }
> ## [1] 1
> ## [1] 2
> ```
> ```
> x <- 1:5
>
> for (i in x) {
>         if (i == 3){
>                 next
>                 }
>         print(i)
> }
> ## [1] 1
> ## [1] 2
> ## [1] 4
> ## [1] 5
> ```

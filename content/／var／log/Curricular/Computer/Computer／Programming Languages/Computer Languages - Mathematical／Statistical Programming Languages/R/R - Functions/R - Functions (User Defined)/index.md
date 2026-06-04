---
title: "R - Functions (User Defined)"
created: 2021-08-18T22:56:56.398-05:00
modified: 2021-08-21T13:06:13.822-05:00
parent: "[[R - Functions]]"
children: []
---
```
rescale01 <- function(x) {
  rng <- range(x, na.rm = TRUE)
  (x - rng[1]) / (rng[2] - rng[1])
}

rescale01(c(0, 5, 10))
## [1] 0.0 0.5 1.0
```
# Understanding Functions

> [!expand-ui]- Function Components
> With the exception of [primitive functions](https://cran.r-project.org/doc/manuals/r-release/R-ints.html#g_t_002eInternal-vs-_002ePrimitive) all R functions have three parts:
> - <code>body()</code>: the code inside the function
> - <code>formals()</code>: the list of arguments used to call the function
> - <code>environment()</code>: the mapping of the location(s) of the function’s variables
>
> For example, let’s build a function that calculates the present value (PV) of a single future sum. The equation for a single sum PV is: <em>PV = FV/(1+r)<sup>n</sup></em> where FV is future value, r is the interest rate, and n is the number of periods. In the function that follows the <code>body</code> of the function includes the equation <em>FV/(1+r)<sup>n</sup></em> and then rounding the output to two decimals. The <code>formals</code> (or arguments) required for the function include <code>FV</code>, <code>r</code>, and <code>n</code>. And the <code>environment</code> shows that function operates in the global environment
> ```
> PV <- function(FV, r, n) {
>         PV <- FV/(1+r)^n
>         round(PV, 2)
> }
>
> body(PV)
> ## {
> ##     PV <- FV/(1 + r)^n
> ##     round(PV, 2)
> ## }
>
> formals(PV)
> ## $FV
> ## 
> ## 
> ## $r
> ## 
> ## 
> ## $n
>
> environment(PV)
> ## <environment: R_GlobalEnv>
> ```

> [!expand-ui]- Scoping Rules
> Scoping refers to the set of rules a programming language uses to lookup the value to variables and/or symbols. The following illustrates the basic concept behind the lexical scoping rules that R follows.
>
> A function will first look inside the function to identify all the variables being called. If all variables exist then their is no additional search required to identify variables.
> ```
> PV1 <- function() {
>         FV <- 1000 
>         r <- .08
>         n <- 5
>         FV/(1+r)^n
> }
>
> PV1()
> ## [1] 680.5832
> ```
>
> However, if a variable does not exist within the function, R will look one level up to see if the variable exists.
> ```
> # the FV variable is outside the function environment
> FV <- 1000 
>
> PV2 <- function() {
>         r <- .08
>         n <- 5
>         FV/(1+r)^n
> }
>
> PV2()
> ## [1] 680.5832
> ```
>
> This same concept applies if you have functions embedded within functions:
> ```
> FV <- 1000 
>
> PV3 <- function() {
>         r <- .08
>         n <- 5
>         denominator <- function() {
>                 (1+r)^n
>         }
>         FV/denominator()
> }
>
> PV3()
> ## [1] 680.5832
> ```
>
> This also applies for functions in which some arguments are called but not all variables used in the body are identified as arguments:
> ```
> # n is specified within the function
> PV4 <- function(FV, r) {
>         n <- 5
>         FV/(1+r)^n
> }
>
> PV4(1000, .08)
> ## [1] 680.5832
>
> # n is specified within the function and
> # r is specified outside the function
> r <- 0.08
>
> PV5 <- function(FV) {
>         n <- 5
>         FV/(1+r)^n
> }
>
> PV5(1000)
> ## [1] 680.5832
> ```

> [!expand-ui]- Lazy Evaluation
> R functions perform “lazy” evaluation in which arguments are only evaluated if required in the body of the function
> ```
> # the y argument is not used so not included it causes
> # no harm
> lazy <- function(x, y){
>         x*2
> }
> lazy(4)
> ## [1] 8
>
> # however, if both arguments are required in the body
> # an error will result if an argument is missing
> lazy2 <- function(x, y){
>         (x+y)*2
> }
> lazy2(4)
> ## Error in lazy2(4): argument "y" is missing, with no default
> ```

> [!expand-ui]- Returning Multiple Outputs
> ```
> bad <- function(x, y) {
>         2*x + y
>         x + 2*y
>         2*x + 2*y
>         x/y
> }
> bad(1, 2)
> ## [1] 0.5
>
> good <- function(x, y) {
>         output1 <- 2*x + y
>         output2 <- x + 2*y
>         output3 <- 2*x + 2*y
>         output4 <- x/y
>         c(output1, output2, output3, output4)
> }
> good(1, 2)
> ## [1] 4.0 5.0 6.0 0.5
> ```

> [!expand-ui]- Dealing With Invalid Arguments
> ```
> PV <- function(FV, r, n) {
>         if(!is.numeric(FV) | !is.numeric(r) | !is.numeric(n)){
>                 stop('This function only works for numeric inputs!\n', 
>                      'You have provided objects of the following classes:\n', 
>                      'FV: ', class(FV), '\n',
>                      'r: ', class(r), '\n',
>                      'n: ', class(n))
>         }
>         
>         PV <- FV/(1+r)^n
>         round(PV, 2)
> }
>
> PV("1000", 0.08, "5")
> ## Error in PV("1000", 0.08, "5"): This function only works for numeric inputs!
> ## You have provided objects of the following classes:
> ## FV: character
> ## r: numeric
> ## n: character
> ```

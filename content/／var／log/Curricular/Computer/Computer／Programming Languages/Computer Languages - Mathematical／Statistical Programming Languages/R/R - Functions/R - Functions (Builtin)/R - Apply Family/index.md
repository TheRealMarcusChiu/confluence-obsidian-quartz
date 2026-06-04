---
title: "R - Apply Family"
created: 2021-08-18T23:14:45.471-05:00
modified: 2021-08-18T23:19:48.939-05:00
parent: "[[R - Functions (Builtin)]]"
children: []
---
The apply family consists of vectorized functions which minimize your need to explicitly create loops. These functions will apply a specified function to a data object and their primary difference is in the object class in which the function is applied to (list vs. matrix, etc) and the object class that will be returned from the function.
- [<code>apply()</code>](http://uc-r.github.io/apply_family#apply_function) for matrices and data frames
- [<code>lapply()</code>](http://uc-r.github.io/apply_family#lapply_function) for lists…output as list
- [<code>sapply()</code>](http://uc-r.github.io/apply_family#sapply_function) for lists…output simplified
- [<code>tapply()</code>](http://uc-r.github.io/apply_family#tapply_function) for vectors
- Other useful [“apply-like” functions](http://uc-r.github.io/apply_family#loop_like) (e.g. <code>mapply</code>, <code>rapply</code>, & <code>vapply</code>)

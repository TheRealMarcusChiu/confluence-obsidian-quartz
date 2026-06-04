---
title: "R - Data Structure"
created: 2021-08-18T22:53:43.597-05:00
modified: 2021-08-18T22:55:36.098-05:00
parent: "[[R]]"
children: []
---
# Identifying Data Structure
```
# different data structures
vector <- 1:10
list <- list(item1 = 1:10, item2 = LETTERS[1:18])
matrix <- matrix(1:12, nrow = 4)   
df <- data.frame(item1 = 1:18, item2 = LETTERS[1:18])

# identify the structure of each object
str(vector)
##  int [1:10] 1 2 3 4 5 6 7 8 9 10

str(list)
## List of 2
##  $ item1: int [1:10] 1 2 3 4 5 6 7 8 9 10
##  $ item2: chr [1:18] "A" "B" "C" "D" ...

str(matrix)
##  int [1:4, 1:3] 1 2 3 4 5 6 7 8 9 10 ...

str(df)
## 'data.frame':	18 obs. of  2 variables:
##  $ item1: int  1 2 3 4 5 6 7 8 9 10 ...
##  $ item2: Factor w/ 18 levels "A","B","C","D",..: 1 2 3 4 5 6 7 8 9 10 ...
```
# Data Structure - Attributes
```
# assess attributes of an object
attributes(df)
## $names
## [1] "item1" "item2"
## 
## $row.names
##  [1]  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18
## 
## $class
## [1] "data.frame"

attributes(matrix)
## $dim
## [1] 4 3

# assess names of an object
names(df)
## [1] "item1" "item2"

# assess the dimensions of an object
dim(matrix)
## [1] 4 3

# assess the class of an object
class(list)
## [1] "list"

# access the length of an object
length(vector)
## [1] 10

# note that length will measure the number of items in
# a list or number of columns in a data frame
length(list)
## [1] 2

length(df)
## [1] 2
```

---
title: "for-loop - for-each - (map - reduce - filter - find)"
created: 2020-01-14T19:01:03.103-06:00
modified: 2020-01-14T20:04:23.012-06:00
parent: "[[Computer／Programming Languages - Constructs]]"
children: []
---
### For-Loop
```js
let nums = [1, 4, 9, 16, 25, 36];
let result = 0;
for (i = 0; i < nums.length; i++) {
  result += numbers[i];
}
// result = 91
```
### For-Each
```js
let nums = [1, 4, 9, 16, 25, 36];
let result = 0;
for each (var num in nums) {
  result += num;
}
// result = 91
```
### Reduce
```js
let nums = [1, 4, 9, 16, 25, 36]
let result = nums.reduce(function(accumulator, num) {
    return accumulator + num;
})
// result = 91
```
### Map
```js
let nums = [1, 4, 9, 16, 25, 36]
let results = nums.map(function(num) {
    return Math.sqrt(num)
})
// results = [1, 2, 3, 4, 5, 6]
```
### Filter
```js
let nums = [1, 4, 9, 16, 25, 36]
let results = nums.filter(function(num) {
    return num > 10
})
// results = [16, 25, 36]
```
### Find
```js
let nums = [1, 4, 9, 16, 25, 36]
let result = nums.find(function(num) {
    return num > 10
})
// result = 16
```
### Mixed (Map - Reduce - Filter - Find)
```js
let numbers = [1, 4, 9, 16, 25, 36]
let result = numbers
	.map(function(num) {
    	return Math.sqrt(num)
	}) // returns [1, 2, 3, 4, 5, 6]
	.filter(function(num) {
		return num > 3
	}) // returns [4, 5, 6]
	.reduce(function(accumulator, num) {
		return accumulator += num
	}) // returns 15
// result = 15
```

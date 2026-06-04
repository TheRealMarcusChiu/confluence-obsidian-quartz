---
title: "Test Driven Development (TDD) - Red-Green Refactor - Test-First Programming"
created: 2021-03-03T20:24:52.651-06:00
modified: 2021-07-20T18:45:08.837-05:00
parent: "[[3 - Testing (Automated Tests)]]"
children:
  - "[[TDD - Is It Dead？]]"
---
###### Test-driven development (TDD) - Red-Green Refactor - Test-First Programming
- is a technique for building software that guides software development by writing tests
- is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases
- was developed by [Kent Beck](https://twitter.com/KentBeck) in the late 1990's as part of Extreme Programming (XP)

# TDD - Steps
1. Write a test for the next bit of functionality you want to add
2. Write the functional code until the test passes
3. Refactor both new and old code to make it well structured

# TDD - Benefits
- it's a way to get SelfTestingCode, since you can only write some functional code in response to making a test pass
- thinking about the test first forces you to think about the interface to the code first. This focus on interface and how you use a class helps you separate interface from implementation

# TDD - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# TDD - Resources
- [https://martinfowler.com/bliki/TestDrivenDevelopment.html](https://martinfowler.com/bliki/TestDrivenDevelopment.html)
- [https://www.youtube.com/watch?v=EZ05e7EMOLM&ab_channel=DevTernity](https://www.youtube.com/watch?v=EZ05e7EMOLM&ab_channel=DevTernity)

---
title: "JUnit5 - @TestMethodOrder"
created: 2021-05-10T23:23:07.498-05:00
modified: 2021-05-10T23:23:33.683-05:00
parent: "[[Java - JUnit4 - JUnit5 Jupiter]]"
children: []
---
# Code Example
```
@TestMethodOrder(OrderAnnotation.class)
class OrderUnitTest {

    @Test
    @Order(1)
    void firstTest() {
        // ...
    }

    @Test
    @Order(2)
    void secondTest() {
        // ...
    }
}
```

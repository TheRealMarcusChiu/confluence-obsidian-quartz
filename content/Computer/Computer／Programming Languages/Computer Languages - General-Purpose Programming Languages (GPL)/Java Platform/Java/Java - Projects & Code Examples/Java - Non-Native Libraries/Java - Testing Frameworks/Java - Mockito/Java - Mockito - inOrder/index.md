---
title: "Java - Mockito - inOrder"
created: 2021-07-15T20:19:17.706-05:00
modified: 2021-07-15T20:20:50.366-05:00
parent: "[[Java - Mockito]]"
children: []
---
```java
ServiceClassA firstMock = mock(ServiceClassA.class);
ServiceClassB secondMock = mock(ServiceClassB.class);

//create inOrder object passing any mocks that need to be verified in order
InOrder inOrder = inOrder(firstMock, secondMock);

//following will make sure that firstMock was called before secondMock
inOrder.verify(firstMock).methodOne();
inOrder.verify(firstMock).methodTwo();
inOrder.verify(secondMock).methodOne();
inOrder.verifyNoMoreInteractions();
```

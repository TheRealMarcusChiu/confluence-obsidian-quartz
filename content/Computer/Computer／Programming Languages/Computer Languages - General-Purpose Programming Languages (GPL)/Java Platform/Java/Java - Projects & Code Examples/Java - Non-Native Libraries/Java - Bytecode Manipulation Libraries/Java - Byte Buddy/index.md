---
title: "Java - Byte Buddy"
created: 2022-06-07T02:27:10.761-05:00
modified: 2022-10-06T04:28:28.704-05:00
parent: "[[Java - Bytecode Manipulation Libraries]]"
children: []
---
###### Byte Buddy
- is a [[Java - Bytecode Manipulation Libraries|Java - Bytecode Manipulation Library]]
- is a rather new library but provides any functionality that [[Java - Code Generation Library (CGLIB)|CGLIB]] or Javassist provides and much more
- comes with an expressive domain-specific language that allows for very readable code

# Code Example
```
Class<?> dynamicType = new ByteBuddy()
  .subclass(Object.class)
  .method(ElementMatchers.named("toString"))
  .intercept(FixedValue.value("Hello World!"))
  .make()
  .load(getClass().getClassLoader())
  .getLoaded();
 
assertThat(dynamicType.newInstance().toString(), is("Hello World!"));
```
# TODO

[https://www.baeldung.com/byte-buddy](https://www.baeldung.com/byte-buddy)
# Resources
- [https://bytebuddy.net/#/](https://bytebuddy.net/#/)

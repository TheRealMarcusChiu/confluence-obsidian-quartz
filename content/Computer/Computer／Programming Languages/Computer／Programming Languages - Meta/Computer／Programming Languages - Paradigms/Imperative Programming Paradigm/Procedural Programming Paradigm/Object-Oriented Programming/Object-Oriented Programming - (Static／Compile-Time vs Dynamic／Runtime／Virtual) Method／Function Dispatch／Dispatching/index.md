---
title: "Object-Oriented Programming - (Static／Compile-Time vs Dynamic／Runtime／Virtual) Method／Function Dispatch／Dispatching"
created: 2022-03-06T16:25:17.604-06:00
modified: 2022-03-06T16:39:44.100-06:00
parent: "[[Object-Oriented Programming]]"
children: []
---
- ![[Dispatch#^excerpt]]

# 2 Forms of Dispatch
- <strong>static dispatch</strong> - is the process of selecting which implementation of a polymorphic operation (method or function) to call during <strong>COMPILE TIME</strong>
- <strong>dynamic dispatch</strong> - is the process of selecting which implementation of a polymorphic operation (method or function) to call at <strong>RUNTIME</strong>

# Advantages of dynamic dispatching
- Develop plug-ins for existing products. No need to recompile the portion of code that relies on the dynamically bonded code
- Create loosely coupled components that are easily unit tested
- Present the same interface by using different implementations (polymorphism)

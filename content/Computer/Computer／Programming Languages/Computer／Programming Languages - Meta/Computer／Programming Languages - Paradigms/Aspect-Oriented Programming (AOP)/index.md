---
title: "Aspect-Oriented Programming (AOP)"
created: 2020-10-18T13:06:01.265-05:00
modified: 2021-10-13T02:23:33.914-05:00
parent: "[[Computer／Programming Languages - Paradigms]]"
children: []
---
###### Aspect-Oriented Programming (AOP)
- is a [[Computer／Programming Languages - Paradigms|programming paradigm]] that aims to increase modularity by allowing the separation of cross-cutting concerns
- it does so by adding additional behavior to existing code (an advice) without modifying the code itself, instead separately specifying which code is modified via a "pointcut" specification
- such as "log all function calls when the function's name begins with 'set'"
- this allows behaviors that are not central to the business logic (such as logging) to be added to a program without cluttering the business code

# The drawback of Object-Oriented Programming (OOP)

Let's say you want to have a behavior that crosses several classes. For example, log files or a monitoring routine. This routine would need to run on many classes. We'd have to add the monitor to almost every class or method! This type of behavior <strong>crosscuts</strong> a wide array of classes, much like a diagonal street. OOP comes up short in this aspect

AOP helps to provide a solution to the previous problem. Instead of objects, AOP deals with aspects. An aspect is a behavior that cuts through multiple objects.

One of the drawbacks to OOP is the failure to <strong>crosscut</strong> objects and methods. That is, a single behavior will apply to multiple classes. An example is logging or monitoring; you would want to monitor/log updates to several classes in a financial program. In OOP, you have to add the logging to each class or method. AOP avoids this by treating this <strong>crosscutting</strong> behavior as an <strong>aspect</strong>, as opposed to an object.

These aspects are defined separately from the main code. When you want to run the logging routine, you set a <strong>pointcut</strong> or place it in the code where you run the code. This could be in a class or method. By having a single block of code to deal with the aspect, you greatly reduce the redundancy that comes with <strong>crosscutting</strong> behavior.
# Terminology
- <strong>crosscut</strong> -
- <strong>aspect</strong> - a modularization of a concern that cuts across multiple objects. Each aspect focuses on a specific crosscutting functionality
- <strong>join-point</strong> - a point during the execution of a script, such as the execution of a method or property access
- <strong>advice</strong> - action taken by an aspect at a particular join point
- <strong>pointcut</strong> - regular expression that matches join points. An advice is associated with a pointcut expression and runs at any join point that matches the pointcut
- <strong>weaving</strong> - linking aspects with other application types or objects to create an advised object

# Weaving Types
- <strong><strong>Compile-Time Weaving (CTW)</strong></strong> - weaving done during the compilation phase
- <strong>Load Time Weaving (LTW)</strong> - weaving done when the class is loaded within the JVM
- <strong>Runtime Weaving</strong> - weaving done during runtime

---
title: "Java - Stack Memory & Heap Space"
created: 2019-12-17T19:01:05.089-06:00
modified: 2026-01-11T10:12:47.544-06:00
parent: "[[Java - Memory Space]]"
children: []
---
# Introduction

To run an application in an optimal way, JVM divides memory into stack and heap memory. Whenever we declare new variables and objects, call new method, declare a <em>String</em> or perform similar operations, JVM designates memory to these operations from either Stack Memory or Heap Space.

In this tutorial, we'll discuss these memory models. We'll enlist some key differences between them, how they are stored in RAM, the features they offer and where to use them.
# Stack Memory in Java

Stack Memory in Java is used for static memory allocation and the execution of a thread. It contains primitive values that are specific to a method and references to objects that are in a heap, referred from the method.

Access to this memory is in Last-In-First-Out (LIFO) order. Whenever a new method is called, a new block on top of the stack is created which contains values specific to that method, like primitive variables and references to objects.

When the method finishes execution, it’s corresponding stack frame is flushed, the flow goes back to the calling method and space becomes available for the next method.
### Key Features of Stack Memory

Apart from what we have discussed so far, following are some other features of stack memory:
- It grows and shrinks as new methods are called and returned respectively
- Variables inside stack exist only as long as the method that created them is running
- It's automatically allocated and deallocated when method finishes execution
- If this memory is full, Java throws <em>java.lang.StackOverFlowError</em>
- Access to this memory is fast when compared to heap memory
- This memory is thread-safe as each thread operates in its own stack

# Heap Space in Java

Heap space in Java is used for dynamic memory allocation for Java objects and JRE classes at the runtime. New objects are always created in heap space and the references to this objects are stored in stack memory.

These objects have global access and can be accessed from anywhere in the application.

This memory model is further broken into smaller parts called generations, these are:
1. Young Generation – this is where all new objects are allocated and aged. A minor Garbage collection occurs when this fills up
2. Old or Tenured Generation – this is where long surviving objects are stored. When objects are stored in the Young Generation, a threshold for the object's age is set and when that threshold is reached, the object is moved to the old generation
3. Permanent Generation – this consists of JVM metadata for the runtime classes and application methods

These different portions are also discussed in this article – [Difference Between JVM, JRE, and JDK.](https://www.baeldung.com/jvm-vs-jre-vs-jdk)

We can always manipulate the size of heap memory as per our requirement. For more information, visit this [linked Baeldung article](https://www.baeldung.com/jvm-parameters).
### Key Features of Java Heap Memory

Apart from what we have discussed so far, following are some other features of heap space:
- It's accessed via complex memory management techniques that include Young Generation, Old or Tenured Generation, and Permanent Generation
- If heap space is full, Java throws <em>java.lang.OutOfMemoryError</em>
- Access to this memory is relatively slower than stack memory
- This memory, in contrast to stack, isn't automatically deallocated. It needs Garbage Collector to free up unused objects so as to keep the efficiency of the memory usage
- Unlike stack, a heap isn't thread-safe and needs to be guarded by properly synchronizing the code

# Example

Based on what we've learned so far, let's analyze a simple Java code and let's assess how memory is managed here:
```
class Person {
    int pid;
    String name;
     
    // constructor, setters/getters
}
 
public class Driver {
    public static void main(String[] args) {
        int id = 23;
        String pName = "Jon";
        Person p = null;
        p = new Person(id, pName);
    }
}
```

Let's analyze this step by step:
1. Upon entering the <em>main()</em> method, a space in stack memory would be created to store primitives and references of this method
	- The primitive value of integer <em>id</em> will be stored directly in stack memory
	- The reference variable <em>p </em>of type <em>Person </em>will also be created in stack memory which will point to the actual object in the heap
2. The call to the parameterized constructor <em>Person(int, String)</em> from <em>main()</em> will allocate further memory on top of the previous stack. This will store:
	- The <em>this</em> object reference of the calling object in stack memory
	- The primitive value <em>id </em>in the stack memory
	- The reference variable of <em>String</em> argument <em>personName</em> which will point to the actual string from string pool in heap memory
3. This default constructor is further calling <em>setPersonName()</em> method, for which further allocation will take place in stack memory on top of previous one. This will again store variables in the manner described above.
4. However, for the newly created object <em>p </em>of type <em>Person</em>, all instance variables will be stored in heap memory.

This allocation is explained in this diagram:

![[Java - Stack Memory & Heap Space/Stack-Memory-vs-Heap-Space-in-Java.jpg]]
# Summary

Before we conclude this article, let's quickly summarize the differences between the Stack Memory and the Heap Space:

```merge-table
{
  "rows": [
    [
      {
        "content": "Parameter",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Stack Memory",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Heap Space",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Application",
        "bg": "#F4F5F7"
      },
      "Stack is used in parts, one at a time during execution of a thread",
      "The entire application uses Heap space during runtime"
    ],
    [
      {
        "content": "Size",
        "bg": "#F4F5F7"
      },
      "Stack has size limits depending upon OS and is usually smaller then Heap",
      "There is no size limit on Heap"
    ],
    [
      {
        "content": "Storage",
        "bg": "#F4F5F7"
      },
      "Stores only primitive variables and references to objects that are created in Heap Space",
      "All the newly created objects are stored here"
    ],
    [
      {
        "content": "Order",
        "bg": "#F4F5F7"
      },
      "It is accessed using Last-in First-out (LIFO) memory allocation system",
      "This memory is accessed via complex memory management techniques that include Young Generation, Old or Tenured Generation, and Permanent Generation."
    ],
    [
      {
        "content": "Life",
        "bg": "#F4F5F7"
      },
      "Stack memory only exists as long as the current method is running",
      "Heap space exists as long as the application runs"
    ],
    [
      {
        "content": "Efficiency",
        "bg": "#F4F5F7"
      },
      "Comparatively much faster to allocate when compared to heap",
      "Slower to allocate when compared to stack"
    ],
    [
      {
        "content": "Allocation/Deallocation",
        "bg": "#F4F5F7"
      },
      "This Memory is automatically allocated and deallocated when a method is called and returned respectively",
      "Heap space is allocated when new objects are created and deallocated by Garbage Collector when they are no longer referenced"
    ]
  ]
}
```

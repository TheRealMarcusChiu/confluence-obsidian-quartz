---
title: "Singleton Design Pattern"
created: 2019-12-11T16:07:46.834-06:00
modified: 2022-02-28T05:57:19.337-06:00
parent: "[[Creational Design Patterns]]"
children: []
---
Although the Singleton pattern was introduced by [GoF](https://en.wikipedia.org/wiki/Design_Patterns), the original implementation is known to be problematic in multithreaded scenarios.

So here, we're going to follow a more optimal approach that makes use of a static inner class:
```java
public class Singleton  {    
    private Singleton() {}
     
    private static class SingletonHolder {    
        public static final Singleton instance = new Singleton();
    }
 
    public static Singleton getInstance() {    
        return SingletonHolder.instance;    
    }
}
```

Here, we've created a <em>static </em>inner class that holds the instance of the <em>Singleton</em> class. It creates the instance only when someone calls the <em>getInstance()</em> method and not when the outer class is loaded.

This is a widely used approach for a Singleton class as it doesn’t require synchronization, is thread safe, enforces lazy initialization and has comparatively less boilerplate.

Also, note that the constructor has the <em>private </em>access modifier. This is a requirement for creating a Singleton since a <em>public</em> constructor would mean anyone could access it and start creating new instances.
# Relations to Other Patterns

> [!expand]- Click here to expand...
> ![[Facade Pattern vs Singleton Pattern#^excerpt]]

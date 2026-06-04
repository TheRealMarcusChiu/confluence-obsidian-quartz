---
title: "Java - @FunctionalInterface"
created: 2021-11-26T03:47:03.705-06:00
modified: 2021-11-26T03:52:50.228-06:00
parent: "[[Java - lang - annotation]]"
children: []
---
<code><font style="color: rgb(128,128,0);">@FunctionalInterface</font></code> is used heavily in [[Java - util - function (lambda) - (Runnable - Callable - Supplier - IntSupplier - Consumer - IntConsumer - Function - IntFunction - ToIntFunction)]]

An informative annotation type is used to indicate that an interface type declaration is intended to be a functional interface as defined by the Java Language Specification. Conceptually, a functional interface has exactly one abstract method. Since default methods have an implementation, they are not abstract. If an interface declares an abstract method overriding one of the public methods of <code><font style="color: rgb(122,134,154);">java.lang.Object</font></code>, that also does not count toward the interface's abstract method count since any implementation of the interface will have an implementation from <code><font style="color: rgb(122,134,154);">java.lang.Object</font></code> or elsewhere.

Note that instances of functional interfaces can be created with lambda expressions, method references, or constructor references.

If a type is annotated with this annotation type, compilers are required to generate an error message unless:
- The type is an interface type and not an annotation type, enum, or class.
- The annotated type satisfies the requirements of a functional interface.

However, the compiler will treat any interface meeting the definition of a functional interface as a functional interface regardless of whether or not a FunctionalInterface annotation is present on the interface declaration.

Since: 1.8

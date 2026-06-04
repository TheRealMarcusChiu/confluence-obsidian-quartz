---
title: "Visitor Pattern"
created: 2021-07-09T19:16:13.149-05:00
modified: 2026-01-11T00:48:26.847-06:00
parent: "[[Behavioral Design Patterns]]"
children: []
---
# Problem

Say we have a <code><font style="color: rgb(122,134,154);">Shape</font></code> class
```
class Shape {}
```

And also several different classes that <code><font style="color: rgb(122,134,154);">extends Shape</font></code>
```
class Triangle extends Shape {}
class Square extends Shape {}
class Circle extends Shape {}
/* several more */
```

<strong>Problem</strong>
- There is a requirement to execute Task A for each shape, where each shape has its own distinct implementation of Task A.
- There could be future requirements to execute Task B, C, D, etc for each shape, where each shape has its own distinct implementation of Task B, C, D, etc
- As developers, we do not want to add the implementation code of a task for each shape class as it would bloat over time

# Solution

Define a <code><font style="color: rgb(122,134,154);">ShapeVistor</font></code> interface
```
interface ShapeVisitor {
    void visitTriangle(Triangle triangle);
    void visitSquare(Square square);
    void visitCircle(Circle circle);
    /* several more */
}
```

Create a class implementing <code><font style="color: rgb(122,134,154);">ShapeVisitor</font></code> to handle the implementation of Task A for each shape
```
class TaskAShapeVisitor implements ShapeVisitor {
    void visitTriangle(Triangle triangle)    { sout("Triangle implementation Task A"); }
    void visitSquare(Square square)          { sout("Square implementation Task A"); }
    void visitCircle(Circle circle)          { sout("Circle implementation Task A"); }
    /* several more */ 
}
```

Next, either define a new interface (or add accept method in the <code><font style="color: rgb(122,134,154);">Shape</font></code> class)
```
interface AcceptShapeVisitor {
    void accept(ShapeVistor visitor);
}
```

Now modify the shape classes
```
class Triangle extends Shape implements AcceptShapeVisitor {
    public void accept(ShapeVistor visitor) { visitor.visitTriangle(this); }
}
class Square extends Shape implements AcceptShapeVisitor {
    public void accept(ShapeVistor visitor) { visitor.visitSquare(this); }
}
class Circle extends Shape implements AcceptShapeVisitor {
    public void accept(ShapeVistor visitor) { visitor.visitCircle(this); } 
}
/* several more */
```

You are done! Using it will look something like this:
```
public static void main(String[] args) {
    List<AcceptShapeVisitor> shapes = List.of(new Triangle(), new Square(), new Circle(), etc);
    TaskAShapeVisitor taskAVisitor = new TaskAVisitor();
    for (AcceptShapeVisitor shape : shapes) {
        shape.accept(taskAVisitor);
    }
    // OUTPUT
    // Triangle implementation Task A
    // Square implementation Task A
    // Circle implementation Task A
    // etc
}
```

Future requirements for Task B will only require the creation of the following class:
```
class TaskBShapeVisitor implements ShapeVisitor {
    void visitTriangle(Triangle triangle)    { sout("Triangle implementation Task B"); }
    void visitSquare(Square square)          { sout("Square implementation Task B"); }
    void visitRectangle(Rectangle rectangle) { sout("Rectangle implementation Task B"); }
    void visitCircle(Circle circle)          { sout("Circle implementation Task B"); }
    void visitEclipse(Eclipse eclipse)       { sout("Eclipse implementation Task B"); }
    /* several more */ 
}
```
```
public static void main(String[] args) {
    List<AcceptShapeVisitor> shapes = List.of(new Triangle(), new Square(), new Circle(), etc);
    TaskBShapeVisitor taskBVisitor = new TaskBVisitor();
    for (AcceptShapeVisitor shape : shapes) {
        shape.accept(taskBVisitor);
    }
    // OUTPUT
    // Triangle implementation Task B
    // Square implementation Task B
    // Circle implementation Task B
    // etc
}
```
# Why This Will Not Work
```
class Shape {}
class Triangle extends Shape {}
class Square extends Shape {}
class Circle extends Shape {}

interface Task {
    void visitTriangle(Triangle triangle);
    void visitSquare(Square square);
    void visitCircle(Circle circle);
    /* several more */
}

class TaskA implements Task {
    void do(Triangle triangle)    { sout("Triangle implementation Task A"); }
    void do(Square square)        { sout("Square implementation Task A"); }
    void do(Circle circle)        { sout("Circle implementation Task A"); }
    /* several more */
}

public static void main(String[] args) {
    List<Shape> shapes = List.of(new Triangle(), new Square(), new Circle());
    TaskA taskA = new TaskA();
    for (Shape shape : shapes) {
        taskA.do(shape); // <--- THIS WOULD NOT COMPILE

		// have to do something tedious like this
		if (shape instanceof Triangle) taskA.do((Triangle) shape);
    	else if (shape instanceof Square) taskA.do((Square) shape);
		else if (shape instanceof Circle) taskA.do((Circle) shape);
    }
}
```
# Resources
- [https://refactoring.guru/design-patterns/visitor](https://refactoring.guru/design-patterns/visitor)

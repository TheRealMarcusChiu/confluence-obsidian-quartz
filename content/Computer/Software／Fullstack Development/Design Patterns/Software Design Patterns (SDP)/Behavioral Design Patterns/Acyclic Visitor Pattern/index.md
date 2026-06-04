---
title: "Acyclic Visitor Pattern"
created: 2021-10-23T23:26:05.171-05:00
modified: 2023-06-02T16:52:15.011-05:00
parent: "[[Behavioral Design Patterns]]"
children: []
---
# Problem
> We have a hierarchy of shape classes. The shapes in this hierarchy need to be visited by an external algorithm based on filtering criteria (is it Triangle or Square compatible)

The <strong>Acyclic Visitor Pattern</strong> allows new functions to be added to existing class hierarchies without affecting those hierarchies, and without creating the dependency cycles that are inherent to the GangOfFour [[Visitor Pattern]]
# Solution

Instead of a single <code><font style="color: rgb(122,134,154);">ShapeVistor</font></code> interface, we define an interface for each shape
```
interface BaseVisitor {}
interface TriangleVisitor extends BaseVisitor {
    void visitTriangle(Triangle triangle);
}
interface SquareVisitor extends BaseVisitor {
    void visitSquare(Square square);
}
interface CircleInterface extends BaseVisitor {
    void visitCircle(Circle circle); 
}
/* several more */
interface AllVisitor extends TriangleVisitor, SquareVisitor, CircleVisitor, etc {}
interface TriangleSquareVisitor extends TriangleVisitor, SquareVisitor {}
/* and so on */
```

Create classes implementing the preferred visitor interface
```
class TaskA_AllVisitor implements AllVisitor {
    void visitTriangle(Triangle triangle)    { sout("Triangle implementation Task A"); }
    void visitSquare(Square square)          { sout("Square implementation Task A"); }
    void visitCircle(Circle circle)          { sout("Circle implementation Task A"); }
    /* several more */ 
}
class TaskB_TriangleSquareVisitor implements TriangleSquareVisitor {
    void visitTriangle(Triangle triangle)    { sout("Triangle implementation Task B"); }
    void visitSquare(Square square)          { sout("Square implementation Task B"); } 
}
class TaskC_TriangleVisitor implements TriangleVisitor {
    void visitTriangle(Triangle triangle)    { sout("Triangle implementation Task C"); }
}
```

Next, either define a new interface (or add accept method in the <code><font style="color: rgb(122,134,154);">Shape</font></code> class)
```
interface AcceptShapeVisitor {
    void accept(BaseVisitor visitor);
}
```

Now modify the shape classes
```
class Triangle extends Shape implements AcceptShapeVisitor {
    public void accept(BaseVisitor visitor) {
        if (visitor instanceof TriangleVisitor) {
            ((TriangleVisitor) visitor).visitTriangle(this);
        } else {
            sout("Only TriangleVisitors are allowed to visit Triangles");
        }
    }
}
class Square extends Shape implements AcceptShapeVisitor {
    public void accept(BaseVisitor visitor) {
        if (visitor instanceof SquareVisitor) {
            ((SquareVisitor) visitor).visitSquare(this);
        } else {
            sout("Only SquareVisitors are allowed to visit Squares");
        }
    }
}
class Circle extends Shape implements AcceptShapeVisitor {
    public void accept(BaseVisitor visitor) {
        if (visitor instanceof CircleVisitor) {
            ((CircleVisitor) visitor).visitCircle(this);
        } else {
            sout("Only CircleVisitors are allowed to visit Circles");
        }
    }
}
/* several more */
```

You are done! Using it will look something like this:
```
public static void main(String[] args) {
    List<AcceptShapeVisitor> shapes = List.of(new Triangle(), new Square(), new Circle(), etc);           
    TaskB_TriangleSquareVisitor taskBVisitor = new TaskB_TriangleSquareVisitor();
    for (AcceptShapeVisitor shape : shapes) {
        shape.accept(taskBVisitor);
    }
    // OUTPUT
    // Triangle implementation Task B
    // Square implementation Task B
    // Only CircleVisitor is allowed to visit Circles
    // etc
}
```
# Resources
- [https://java-design-patterns.com/patterns/acyclic-visitor/](https://java-design-patterns.com/patterns/acyclic-visitor/)

---
title: "Open-Closed Principle (OCP)"
created: 2022-03-01T00:51:10.832-06:00
modified: 2022-03-06T16:08:44.591-06:00
parent: "[[Software Design／Development Paradigms／Principles]]"
children: []
---
###### Open-Closed Principle (OCP)
- states that software entities should be open for extension, but closed for modification

# Ways to Implement OCP

> [!expand-ui]- Interface Example
> Interfaces are one way to follow OCP
> # Non-Compliant Way
> ```
> public interface CalculatorOperation {}
>
> public class Addition implements CalculatorOperation {
>     private double left;
>     private double right;
>     private double result = 0.0;
>
>     public Addition(double left, double right) {
>         this.left = left;
>         this.right = right;
>     }
>
>     // getters and setters
> }
>
> public class Subtraction implements CalculatorOperation {
>     private double left;
>     private double right;
>     private double result = 0.0;
>
>     public Subtraction(double left, double right) {
>         this.left = left;
>         this.right = right;
>     }
>
>     // getters and setters
> }
>
> public class Calculator {
>     public void calculate(CalculatorOperation operation) {
>         if (operation instanceof Addition) {
>             Addition addition = (Addition) operation;
>             addition.setResult(addition.getLeft() + addition.getRight());
>         } else if (operation instanceof Subtraction) {
>             Subtraction subtraction = (Subtraction) operation;
>             subtraction.setResult(subtraction.getLeft() - subtraction.getRight());
>         }
>     }
> }
> ```
>
> When a new requirement of adding multiplication or divide functionality comes in, we've no way besides changing the calculate method of the Calculator class
> # Compliant Way
> ```
> public interface CalculatorOperation {
>     void perform();
> }
>
> public class Addition implements CalculatorOperation {
>     private double left;
>     private double right;
>     private double result;
>
>     // constructor, getters and setters
>
>     @Override
>     public void perform() {
>         result = left + right;
>     }
> }
>
> public class Division implements CalculatorOperation {
>     private double left;
>     private double right;
>     private double result;
>
>     // constructor, getters and setters
>
>     @Override
>     public void perform() {
>         if (right != 0) {
>             result = left / right;
>         }
>     }
> }
>
> public class Calculator {
>     public void calculate(CalculatorOperation operation) {
>         if (operation == null) {
>             throw new InvalidParameterException("Cannot perform operation");
>         }
>         operation.perform();
>     }
> }
> ```
>
> Our Calculator class doesn't need to implement new logic as we introduce new operators

> [!expand-ui]- Dependency Injection
> see [[Dependency Injection Principle (DIP) - Inversion of Control (IoC)]]
# Resources
- [https://www.baeldung.com/java-open-closed-principle](https://www.baeldung.com/java-open-closed-principle)

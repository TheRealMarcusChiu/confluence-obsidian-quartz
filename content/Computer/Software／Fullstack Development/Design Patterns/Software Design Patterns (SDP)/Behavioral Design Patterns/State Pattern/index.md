---
title: "State Pattern"
created: 2021-07-10T10:34:21.146-05:00
modified: 2026-01-11T00:00:08.344-06:00
parent: "[[Behavioral Design Patterns]]"
children: []
---
###### State Pattern
````excerpt
- is a [[Behavioral Design Patterns|behavioral design pattern]] that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class
````
^excerpt

# Structure
![[State Pattern/state-pattern-structure.png|700]]
# Code Examples

> [!expand-ui]- Simple Example
> ```
> interface State {
>     void handle();
> }
>
> class OnState implements State {
>     public void handle() { System.out.println("Turning ON"); }
> }
>
> class OffState implements State {
>     public void handle() { System.out.println("Turning OFF"); }
> }
>
> class Context {
>     private State state;
>     public void setState(State state) { this.state = state; }
>     public void request() { state.handle(); }
> }
>
> // Usage
> Context ctx = new Context();
> ctx.setState(new OnState());
> ctx.request(); // "Turning ON"
> ctx.setState(new OffState());
> ctx.request(); // "Turning OFF"
> ```
# Comparisons

> [!expand]- Click here to expand...
> ![[Strategy Pattern vs State Pattern#^excerpt]]
# Resources
- [https://refactoring.guru/design-patterns/state](https://refactoring.guru/design-patterns/state)

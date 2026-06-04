---
title: "Decorator (Wrapper - Smart Proxy) Pattern"
created: 2021-07-10T12:03:26.966-05:00
modified: 2026-01-10T23:30:53.704-06:00
parent: "[[Wrapper Patterns]]"
children: []
---
###### Decorator (Wrapper - Smart Proxy) Pattern
````excerpt
- is a [[Structural Design Patterns|structural design pattern]] that adds behavior to an object dynamically without modifying its class
````
^excerpt

# Code Example

> [!expand-ui]- Coffee Example (Simple Example)
> ```
> interface Coffee {
>     double cost();
> }
>
> class SimpleCoffee implements Coffee {
>     public double cost() { return 5.0; }
> }
>
> class MilkDecorator implements Coffee {
>     private final Coffee coffee;
>     MilkDecorator(Coffee coffee) { this.coffee = coffee; }
>     public double cost() { return coffee.cost() + 1.5; }
> }
> ```
>
> Using it
> ```
> Coffee coffee = new MilkDecorator(new SimpleCoffee());
> System.out.println(coffee.cost()); // 6.5
> ```

> [!expand-ui]- Troll Example (Complex Example)
> Let's take the troll example. First of all, we have a <code>SimpleTroll</code> implementing the <code>Troll</code> interface:
> ```
> public interface Troll {
>   void attack();
>   int getAttackPower();
>   void fleeBattle();
> }
>
> @Slf4j
> public class SimpleTroll implements Troll {
>
>   @Override
>   public void attack() {
>     LOGGER.info("The troll tries to grab you!");
>   }
>
>   @Override
>   public int getAttackPower() {
>     return 10;
>   }
>
>   @Override
>   public void fleeBattle() {
>     LOGGER.info("The troll shrieks in horror and runs away!");
>   }
> }
> ```
>
> Next, we want to add a club for the troll. We can do it dynamically by using a decorator:
> ```
> @Slf4j
> public class ClubbedTroll implements Troll {
>
>   private final Troll decorated;
>
>   public ClubbedTroll(Troll decorated) {
>     this.decorated = decorated;
>   }
>
>   @Override
>   public void attack() {
>     decorated.attack();
>     LOGGER.info("The troll swings at you with a club!");
>   }
>
>   @Override
>   public int getAttackPower() {
>     return decorated.getAttackPower() + 10;
>   }
>
>   @Override
>   public void fleeBattle() {
>     decorated.fleeBattle();
>   }
> }
> ```
>
> Here's the troll in action:
> ```
> // simple troll
> LOGGER.info("A simple looking troll approaches.");
> var troll = new SimpleTroll();
> troll.attack();
> troll.fleeBattle();
> LOGGER.info("Simple troll power: {}.\n", troll.getAttackPower());
>
> // change the behavior of the simple troll by adding a decorator
> LOGGER.info("A troll with huge club surprises you.");
> var clubbedTroll = new ClubbedTroll(troll);
> clubbedTroll.attack();
> clubbedTroll.fleeBattle();
> LOGGER.info("Clubbed troll power: {}.\n", clubbedTroll.getAttackPower());
> ```
>
> Program output:
> ```
> A simple looking troll approaches.
> The troll tries to grab you!
> The troll shrieks in horror and runs away!
> Simple troll power: 10.
>
> A troll with huge club surprises you.
> The troll tries to grab you!
> The troll swings at you with a club!
> The troll shrieks in horror and runs away!
> Clubbed troll power: 20.
> ```
# Code Structure

```merge-table
{
  "rows": [
    [
      "1. The <strong>Component</strong> declares the common interface for both wrappers and wrapped objects.\n2. <strong>Concrete Component</strong> is a class of objects being wrapped. It defines the basic behavior, which can be altered by decorators.\n3. The <strong>Base Decorator</strong> class has a field for referencing a wrapped object. The field’s type should be declared as the component interface so it can contain both concrete components and decorators. The base decorator delegates all operations to the wrapped object.\n4. <strong>Concrete Decorators</strong> define extra behaviors that can be added to components dynamically. Concrete decorators override the methods of the base decorator and execute their behavior either before or after calling the parent method.\n5. The <strong>Client</strong> can wrap components in multiple layers of decorators, as long as it works with all objects via the component interface.",
      "![[Decorator (Wrapper - Smart Proxy) Pattern/structure-indexed-2x.png|350]]"
    ]
  ],
  "tableStyle": "width: 72.6471%;"
}
```
# Applicability

Decorator is used to:
- Add responsibilities to individual objects dynamically and transparently, that is, without affecting other objects.
- For responsibilities that can be withdrawn.
- When extension by subclassing is impractical. Sometimes a large number of independent extensions are possible and would produce an explosion of subclasses to support every combination. Or a class definition may be hidden or otherwise unavailable for subclassing.

# Comparisons

> [!expand]- Click here to expand...
> ![[Adapter Pattern vs Decorator Pattern#^excerpt]]
>
> ![[Chain of Responsibility Pattern vs Decorator Pattern#^excerpt]]
>
> ![[Decorator Pattern vs Proxy Pattern#^excerpt]]
# Resources
- [https://java-design-patterns.com/patterns/decorator/](https://java-design-patterns.com/patterns/decorator/)
- [https://refactoring.guru/design-patterns/decorator](https://refactoring.guru/design-patterns/decorator)
- [When to Use the Decorator Pattern?](https://stackoverflow.com/questions/1549743/when-to-use-the-decorator-pattern/37504043#37504043)

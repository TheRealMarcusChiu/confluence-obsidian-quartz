---
title: "Proxy Pattern"
created: 2021-07-10T12:09:11.900-05:00
modified: 2026-01-10T23:21:47.133-06:00
parent: "[[Wrapper Patterns]]"
children: []
---
###### Proxy Pattern
````excerpt
- is a type of [[Structural Design Patterns|structural design pattern]] that provides a surrogate or placeholder for another object to control access to it
````
^excerpt

# Proxy Pattern - Types
- <strong>Remote Proxy</strong> - local representative of remote object, hides remote calls ([[Remote Procedure Call (RPC) - architectural|RPC]]/[[Remote Method Invocation (RMI)|RMI]]/[[Representational State Transfer (REST) - RESTful|REST]]/etc)
- <strong>Virtual (Lazy-Load) Proxy</strong> - lazy creation of expensive objects (real object is only created when a client first requests/accesses the object)
- <strong>Access/Protective Proxy</strong> – control access to the sensitive object/subject
- <strong>Smart Proxy</strong> - reference counting, caching, lazy DB loading

# Real-World Example

> [!expand]- Wizard Tower Example
> Imagine a tower where the local wizards go to study their spells. The ivory tower can only be accessed through a proxy which ensures that only the first three wizards can enter. Here the proxy represents the functionality of the tower and adds access control to it
# Code Example

> [!expand]- Wizard Tower Example
> Take our wizard tower example from above. Firstly we have the <code>WizardTower</code> interface and the <code>IvoryTower</code> class.
> ```
> public interface WizardTower {
>   void enter(Wizard wizard);
> }
>
> @Slf4j
> public class IvoryTower implements WizardTower {
>   public void enter(Wizard wizard) {
>     LOGGER.info("{} enters the tower.", wizard);
>   }
> }
> ```
>
> Then a simple Wizard class.
> ```
> public class Wizard {
>
>   private final String name;
>
>   public Wizard(String name) {
>     this.name = name;
>   }
>
>   @Override
>   public String toString() {
>     return name;
>   }
> }
> ```Then we have the <code>WizardTowerProxy</code> to add access control to <code>WizardTower</code>.
> ```
> @Slf4j
> public class WizardTowerProxy implements WizardTower {
>
>   private static final int NUM_WIZARDS_ALLOWED = 3;
>
>   private int numWizards;
>
>   private final WizardTower tower;
>
>   public WizardTowerProxy(WizardTower tower) {
>     this.tower = tower;
>   }
>
>   @Override
>   public void enter(Wizard wizard) {
>     if (numWizards < NUM_WIZARDS_ALLOWED) {
>       tower.enter(wizard);
>       numWizards++;
>     } else {
>       LOGGER.info("{} is not allowed to enter!", wizard);
>     }
>   }
> }
> ```
>
> And here is the tower entering scenario.
> ```
> var proxy = new WizardTowerProxy(new IvoryTower());
> proxy.enter(new Wizard("Red wizard"));
> proxy.enter(new Wizard("White wizard"));
> proxy.enter(new Wizard("Black wizard"));
> proxy.enter(new Wizard("Green wizard"));
> proxy.enter(new Wizard("Brown wizard"));
> ```
>
> Program output:
> ```
> Red wizard enters the tower.
> White wizard enters the tower.
> Black wizard enters the tower.
> Green wizard is not allowed to enter!
> Brown wizard is not allowed to enter!
> ```
# Comparisons

> [!expand]- Click here to expand...
> ![[Adapter Pattern vs Proxy Pattern#^excerpt]]
>
> ![[Decorator Pattern vs Proxy Pattern#^excerpt]]
# Resources
- [https://java-design-patterns.com/patterns/proxy/](https://java-design-patterns.com/patterns/proxy/)

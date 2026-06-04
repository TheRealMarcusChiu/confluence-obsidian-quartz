---
title: "Bridge Pattern"
created: 2021-07-10T11:46:17.916-05:00
modified: 2026-01-10T23:19:42.376-06:00
parent: "[[Wrapper Patterns]]"
children: []
---
###### Bridge Pattern
````excerpt
- is a type of [[Structural Design Patterns|structural design pattern]] that uses [[Dependency Injection (DI)|dependency injection]] to decouple an abstraction from its implementation so that the two can vary independently
````
^excerpt

# Real-World Example

> [!expand-ui]- Weapon Enchantment Example
> Consider you have a weapon with different enchantments, and you are supposed to allow mixing different weapons with different enchantments. What would you do? Create multiple copies of each of the weapons for each of the enchantments or would you just create separate enchantment and set it for the weapon as needed? Bridge pattern allows you to do the second
# Code Structure

```merge-table
{
  "rows": [
    [
      "![[Bridge Pattern/structure-en-indexed-2x.png|500]]",
      "1. The <strong>Abstraction</strong> provides high-level control logic. It relies on the implementation object to do the actual low-level work.\n2. The <strong>Implementation</strong> declares the interface that’s common for all concrete implementations. An abstraction can only communicate with an implementation object via methods that are declared here.\n   \n   The abstraction may list the same methods as the implementation, but usually, the abstraction declares some complex behaviors that rely on a wide variety of primitive operations declared by the implementation.\n3. <strong>Concrete Implementations</strong> contain platform-specific code.\n4. <strong>Refined Abstractions</strong> provide variants of control logic. As their parent, they work with different implementations via the general implementation interface.\n5. Usually, the <strong>Client</strong> is only interested in working with the abstraction. <strong>However, it’s the client’s job to link the abstraction object with one of the implementation objects</strong>.\n\n- Abstraction: defines the abstraction's interface\n- RefinedAbstraction: extends the interface defined by Abstraction\n- Implementor: defines the interface for implementation classes\n- ConcreteImplementor: implements the Implementor interface and defines its concrete implementation."
    ]
  ]
}
```
# Code Examples

> [!expand-ui]- Shape Drawing Example (Simple)
> Implementor Interface
> ```
> interface DrawingAPI {
>     void drawCircle(double x, double y, double radius);
> }
> ```
>
> Concrete Implementations
> ```
> class DrawingAPI1 implements DrawingAPI {
>     public void drawCircle(double x, double y, double radius) {
>         System.out.println("API1 circle at (" + x + "," + y + ") radius " + radius);
>     }
> }
>
> class DrawingAPI2 implements DrawingAPI {
>     public void drawCircle(double x, double y, double radius) {
>         System.out.println("API2 circle at (" + x + "," + y + ") radius " + radius);
>     }
> }
> ```
>
> Abstraction
> ```
> abstract class Shape {
>     protected DrawingAPI drawingAPI;
>
>     protected Shape(DrawingAPI drawingAPI) {
>         this.drawingAPI = drawingAPI;
>     }
>
>     abstract void draw();
>     abstract void resizeByPercentage(double pct);
> }
> ```
>
> Refined Abstraction
> ```
> class CircleShape extends Shape {
>     private double x, y, radius;
>
>     CircleShape(double x, double y, double radius, DrawingAPI api) {
>         super(api);
>         this.x = x;
>         this.y = y;
>         this.radius = radius;
>     }
>
>     public void draw() {
>         drawingAPI.drawCircle(x, y, radius);
>     }
>
>     public void resizeByPercentage(double pct) {
>         radius *= (1.0 + pct / 100.0);
>     }
> }
> ```
>
> Usage
> ```
> public class Main {
>     public static void main(String[] args) {
>         Shape circle1 = new CircleShape(1, 2, 3, new DrawingAPI1());
>         Shape circle2 = new CircleShape(5, 7, 11, new DrawingAPI2());
>
>         circle1.draw(); // uses API1
>         circle2.draw(); // uses API2
>
>         circle1.resizeByPercentage(50);
>         circle1.draw(); // API1 with new radius
>     }
> }
> ```

> [!expand-ui]- Weapon Enchantment Example
> ```merge-table
> {
>   "rows": [
>     [
>       "```\ninterface Enchantment {\n  void onActivate();\n  void apply();\n  void onDeactivate();\n}\n```",
>       "```\ninterface Weapon {\n  void wield();\n  void swing();\n  void unwield();\n  Enchantment getEnchantment();\n}\n```"
>     ],
>     [
>       "```\nclass FlyingEnchantment implements Enchantment {\n\n  @Override\n  void onActivate() {\n     log.info(\"The item begins to glow faintly.\");\n  }\n\n  @Override\n  void apply() {\n    log.info(\"The item flies.\");\n  }\n\n  @Override\n  void onDeactivate() {\n     log.info(\"The item's glow fades.\");\n  }\n}\n\nclass SoulEatingEnchantment implements Enchantment {\n\n  @Override\n  void onActivate() {\n     log.info(\"The item spreads bloodlust.\");\n  }\n\n  @Override\n  void apply() {\n     log.info(\"The item eats the soul of enemies.\");\n  }\n\n  @Override\n  void onDeactivate() {\n     log.info(\"Bloodlust slowly disappears.\");\n  }\n}\n```",
>       "```\nclass Sword implements Weapon {\n\n  private final Enchantment enchantment;\n\n  Sword(Enchantment enchantment) {\n    this.enchantment = enchantment;\n  }\n\n  @Override\n  void wield() {\n    log.info(\"The sword is wielded.\");\n    enchantment.onActivate();\n  }\n\n  @Override\n  void swing() {   \n    log.info(\"The sword is swinged.\");\n    enchantment.apply();\n  }\n\n  @Override\n  void unwield() { \n    log.info(\"The sword is unwielded.\");\n    enchantment.onDeactivate();\n  }\n\n  @Override\n  Enchantment getEnchantment() {\n    return enchantment;\n  }\n}\n\nclass Hammer implements Weapon {\n\n  private final Enchantment enchantment;\n\n  Hammer(Enchantment enchantment) {\n    this.enchantment = enchantment;\n  }\n\n  @Override\n  void wield() { \n    log.info(\"The hammer is wielded.\");\n    enchantment.onActivate();\n  }\n\n  @Override\n  void swing() { \n    log.info(\"The hammer is swinged.\");\n    enchantment.apply();\n  }\n\n  @Override\n  void unwield() { \n    log.info(\"The hammer is unwielded.\");\n    enchantment.onDeactivate();\n  }\n\n  @Override\n  Enchantment getEnchantment() {\n    return enchantment;\n  }\n}\n```"
>     ]
>   ]
> }
> ```
>
> Use case
> ```
> log.info("The knight receives an enchanted sword.");
> var enchantedSword = new Sword(new SoulEatingEnchantment());
> enchantedSword.wield();
> enchantedSword.swing();
> enchantedSword.unwield();
>
> log.info("The valkyrie receives an enchanted hammer.");
> var hammer = new Hammer(new FlyingEnchantment());
> hammer.wield();
> hammer.swing();
> hammer.unwield();
> ```
>
> Here's the console output.
> ```
> The knight receives an enchanted sword.
> The sword is wielded.
> The item spreads bloodlust.
> The sword is swung.
> The item eats the soul of enemies.
> The sword is unwielded.
> Bloodlust slowly disappears.
> The valkyrie receives an enchanted hammer.
> The hammer is wielded.
> The item begins to glow faintly.
> The hammer is swung.
> The item flies.
> The hammer is unwielded.
> The item's glow fades.
> ```

> [!expand-ui]- Remote Controller Example
> ![[Bridge Pattern/example-en-2x.png|400]]
> ```
> // The "abstraction" defines the interface for the "control"
> // part of the two class hierarchies. It maintains a reference
> // to an object of the "implementation" hierarchy and delegates
> // all of the real work to this object.
> class RemoteControl is
>     protected field device: Device
>     constructor RemoteControl(device: Device) is
>         this.device = device
>     method togglePower() is
>         if (device.isEnabled()) then
>             device.disable()
>         else
>             device.enable()
>     method volumeDown() is
>         device.setVolume(device.getVolume() - 10)
>     method volumeUp() is
>         device.setVolume(device.getVolume() + 10)
>     method channelDown() is
>         device.setChannel(device.getChannel() - 1)
>     method channelUp() is
>         device.setChannel(device.getChannel() + 1)
>
> // You can extend classes from the abstraction hierarchy
> // independently from device classes.
> class AdvancedRemoteControl extends RemoteControl is
>     method mute() is
>         device.setVolume(0)
>
> // The "implementation" interface declares methods common to all
> // concrete implementation classes. It doesn't have to match the
> // abstraction's interface. In fact, the two interfaces can be
> // entirely different. Typically the implementation interface
> // provides only primitive operations, while the abstraction
> // defines higher-level operations based on those primitives.
> interface Device is
>     method isEnabled()
>     method enable()
>     method disable()
>     method getVolume()
>     method setVolume(percent)
>     method getChannel()
>     method setChannel(channel)
>
> // All devices follow the same interface.
> class Tv implements Device is
>     // ...
>
> class Radio implements Device is
>     // ...
>
> // Somewhere in client code.
> tv = new Tv()
> remote = new RemoteControl(tv)
> remote.togglePower()
>
> radio = new Radio()
> remote = new AdvancedRemoteControl(radio)
> ```
# Applicability

Use the Bridge pattern when
- You want to avoid a permanent binding between an abstraction and its implementation. This might be the case, for example, when the implementation must be selected or switched at run-time.
- Both the abstractions and their implementations should be extensible by subclassing. In this case, the Bridge pattern lets you combine the different abstractions and implementations and extend them independently.
- Changes in the implementation of an abstraction should have no impact on clients; that is, their code should not have to be recompiled.
- You have a proliferation of classes. Such a class hierarchy indicates the need for splitting an object into two parts. Rumbaugh uses the term "nested generalizations" to refer to such class hierarchies.
- You want to share an implementation among multiple objects (perhaps using reference counting), and this fact should be hidden from the client. A simple example is Coplien's String class, in which multiple objects can share the same string representation

# Comparisons

> [!expand]- Click here to expand...
> ![[Adapter Pattern vs Bridge Pattern#^excerpt]]
>
> ![[Bridge Pattern vs Strategy Pattern#^excerpt]]
# Resources
- [https://java-design-patterns.com/patterns/bridge/](https://java-design-patterns.com/patterns/bridge/)
- [https://refactoring.guru/design-patterns/bridge](https://refactoring.guru/design-patterns/bridge)

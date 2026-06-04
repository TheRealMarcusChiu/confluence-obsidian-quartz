---
title: "Flyweight Pattern"
created: 2021-07-10T12:08:58.045-05:00
modified: 2026-01-10T17:18:53.469-06:00
parent: "[[Creational Design Patterns]]"
children: []
---
###### Flyweight Pattern
````excerpt
- a type of [[Creational Design Patterns|creational design pattern]] that utilizes sharing to support large numbers of fine-grained objects efficiently
- it's like a mix of [[Singleton Design Pattern|singleton]]/[[Multiton Design Pattern|multiton]] pattern
````
^excerpt

# Real-World Example

> [!expand-ui]- Magic Potions Example
> Alchemist's shop has shelves full of magic potions. Many of the potions are the same so there is no need to create a new object for each of them. Instead, one object instance can represent multiple shelf items so the memory footprint remains small
# Example Implementation

> [!expand-ui]- Magic Potions Example (Simple)
> Translating our alchemist shop example from above. First of all, we have different potion types:
> ```
> public class HealingPotion {
>   public void drink() { System.out.println("You feel healed. Potion=" + System.identityHashCode(this)); }
> }
> ```
>
> Then the actual Flyweight class <code><font style="color: rgb(122,134,154);">PotionFactory</font></code>, which is the factory for creating potions
> ```
> public class PotionFactory {
>   private HealingPotion potion = null;
>
>   public HealingPotion createPotion() {
>     if (potion == null) {
>       potion = new HealingPotion();
>     }
>     return potion;
>   }
> }
> ```
>
> <code><font style="color: rgb(122,134,154);">AlchemistShop</font></code> contains two shelves of magic potions. The potions are created using the aforementioned <code><font style="color: rgb(122,134,154);">PotionFactory</font></code>.
> ```
> public class AlchemistShop {
>
>   private final List<Potion> topShelf;
>   private final List<Potion> bottomShelf;
>
>   public AlchemistShop() {
>     var factory = new PotionFactory();
>     topShelf = List.of(
>         factory.createPotion(),
>         factory.createPotion(),
>         factory.createPotion()
>     );
>     bottomShelf = List.of(
>         factory.createPotion(),
>         factory.createPotion()
>     );
>   }
>
>   public final List<Potion> getTopShelf() {
>     return List.copyOf(this.topShelf);
>   }
>   public final List<Potion> getBottomShelf() {
>     return List.copyOf(this.bottomShelf);
>   }
>
>   public void drinkPotions() {
>     System.out.println("Drinking top shelf potions");
>     topShelf.forEach(Potion::drink);
>     System.out.println("Drinking bottom shelf potions");
>     bottomShelf.forEach(Potion::drink);
>   }
> }
>  
> ```
>
> In our scenario, a brave visitor enters the alchemist shop and drinks all the potions.
> ```
> // create the alchemist shop with the potions
> var alchemistShop = new AlchemistShop();
> // a brave visitor enters the alchemist shop and drinks all the potions
> alchemistShop.drinkPotions();
> ```
>
> Program output:
> ```
> Drinking top shelf potions 
> You feel healed. Potion=125130493
> You feel healed. Potion=125130493
> You feel healed. Potion=125130493
> Drinking bottom shelf potions
> You feel healed. Potion=125130493
> You feel healed. Potion=125130493
> ```

> [!expand-ui]- Magic Potions Example (Complex)
> Translating our alchemist shop example from above. First of all, we have different potion types:
> ```
> public interface Potion {
>   void drink();
> }
>
> public class HealingPotion implements Potion {
>   public void drink() { System.out.println("You feel healed. Potion=" + System.identityHashCode(this)); }
> }
> public class HolyWaterPotion implements Potion {
>   public void drink() { System.out.println("You feel blessed. Potion=" + System.identityHashCode(this)); }
> }
> public class InvisibilityPotion implements Potion {
>   public void drink() { System.out.println("You become invisible. Potion=", System.identityHashCode(this)); }
> }
> ```
>
> Then the actual Flyweight class <code><font style="color: rgb(122,134,154);">PotionFactory</font></code>, which is the factory for creating potions
> ```
> public class PotionFactory {
>   private final Map<PotionType, Potion> potions = new EnumMap<>(PotionType.class);
>
>   Potion createPotion(PotionType type) {
>     var potion = potions.get(type);
>     if (potion == null) {
>       switch (type) {
>         case HEALING:
>           potion = new HealingPotion();
>           potions.put(type, potion);
>           break;
>         case HOLY_WATER:
>           potion = new HolyWaterPotion();
>           potions.put(type, potion);
>           break;
>         case INVISIBILITY:
>           potion = new InvisibilityPotion();
>           potions.put(type, potion);
>           break;
>         default:
>           break;
>       }
>     }
>     return potion;
>   }
> }
> ```
>
> <code><font style="color: rgb(122,134,154);">AlchemistShop</font></code> contains two shelves of magic potions. The potions are created using the aforementioned <code><font style="color: rgb(122,134,154);">PotionFactory</font></code>.
> ```
> public class AlchemistShop {
>
>   private final List<Potion> topShelf;
>   private final List<Potion> bottomShelf;
>
>   public AlchemistShop() {
>     var factory = new PotionFactory();
>     topShelf = List.of(
>         factory.createPotion(PotionType.INVISIBILITY),
>         factory.createPotion(PotionType.INVISIBILITY),
>         factory.createPotion(PotionType.STRENGTH),
>         factory.createPotion(PotionType.HEALING),
>         factory.createPotion(PotionType.INVISIBILITY),
>         factory.createPotion(PotionType.STRENGTH),
>         factory.createPotion(PotionType.HEALING),
>         factory.createPotion(PotionType.HEALING)
>     );
>     bottomShelf = List.of(
>         factory.createPotion(PotionType.POISON),
>         factory.createPotion(PotionType.POISON),
>         factory.createPotion(PotionType.POISON),
>         factory.createPotion(PotionType.HOLY_WATER),
>         factory.createPotion(PotionType.HOLY_WATER)
>     );
>   }
>
>   public final List<Potion> getTopShelf() {
>     return List.copyOf(this.topShelf);
>   }
>   public final List<Potion> getBottomShelf() {
>     return List.copyOf(this.bottomShelf);
>   }
>
>   public void drinkPotions() {
>     System.out.println("Drinking top shelf potions");
>     topShelf.forEach(Potion::drink);
>     System.out.println("Drinking bottom shelf potions");
>     bottomShelf.forEach(Potion::drink);
>   }
> }
>  
> ```
>
> In our scenario, a brave visitor enters the alchemist shop and drinks all the potions.
> ```
> // create the alchemist shop with the potions
> var alchemistShop = new AlchemistShop();
> // a brave visitor enters the alchemist shop and drinks all the potions
> alchemistShop.drinkPotions();
> ```
>
> Program output:
> ```
> Drinking top shelf potions 
> You become invisible. Potion=1509514333
> You become invisible. Potion=1509514333
> You feel strong. Potion=739498517
> You feel healed. Potion=125130493
> You become invisible. Potion=1509514333
> You feel strong. Potion=739498517
> You feel healed. Potion=125130493
> You feel healed. Potion=125130493
> Drinking bottom shelf potions
> Urgh! This is poisonous. Potion=166239592
> Urgh! This is poisonous. Potion=166239592
> Urgh! This is poisonous. Potion=166239592
> You feel blessed. Potion=991505714
> You feel blessed. Potion=991505714
> ```
# Applicability

The Flyweight pattern's effectiveness depends heavily on how and where it's used. Apply the Flyweight pattern when all of the following are true:
- An application uses a large number of objects.
- Storage costs are high because of the sheer quantity of objects.
- Most of the object states can be made extrinsic.
- Many groups of objects may be replaced by relatively few shared objects once the extrinsic state is removed.
- The application doesn't depend on object identity. Since flyweight objects may be shared, identity tests will return true for conceptually distinct objects.

# Comparisons

> [!expand]- Click here to expand...
> ![[Facade Pattern vs Flyweight Pattern#^excerpt]]
# Resources
- [https://java-design-patterns.com/patterns/flyweight/](https://java-design-patterns.com/patterns/flyweight/)

---
title: "Adapter Pattern"
created: 2021-07-10T11:33:10.415-05:00
modified: 2026-01-10T23:10:51.974-06:00
parent: "[[Wrapper Patterns]]"
children: []
---
###### Adapter Pattern
````excerpt
- is a [[Structural Design Patterns|structural design pattern]] that allows 2 existing incompatible interfaces to collaborate
````
^excerpt

# Real-World Example

> [!expand-ui]- Memory Card Example
> Consider that you have some pictures on your memory card and you need to transfer them to your computer. In order to transfer them, you need some kind of adapter that is compatible with your computer ports so that you can attach a memory card to your computer. In this case card reader is an adapter.

> [!expand-ui]- Power Adapter
> Another example would be the famous power adapter; a three-legged plug can't be connected to a two-pronged outlet, it needs to use a power adapter that makes it compatible with the two-pronged outlet. Yet another example would be a translator translating words spoken by one person to another
# Problem (why Adapter is needed)

You have:
- a new interface your client expects
- you cannot change the legacy code

# Types

> [!expand-ui]- Object Adapter - uses composition
> ```merge-table
> {
>   "rows": [
>     [
>       "<strong>Object Adapter</strong> - This implementation uses the object composition principle: the adapter implements the interface of one object and wraps the other one. It can be implemented in all popular programming languages\n1. The <strong>Client</strong> is a class that contains the existing business logic of the program.\n2. The <strong>Client Interface</strong> describes a protocol that other classes must follow to be able to collaborate with the client code.\n3. The <strong>Service</strong> is some useful class (usually 3rd-party or legacy). The client can’t use this class directly because it has an incompatible interface.\n4. The <strong>Adapter</strong> is a class that’s able to work with both the client and the service: it implements the client interface while wrapping the service object. The adapter receives calls from the client via the adapter interface and translates them into calls to the wrapped service object in a format it can understand.\n5. The <strong>client code</strong> doesn’t get coupled to the concrete adapter class as long as it works with the adapter via the client interface. Thanks to this, you can introduce new types of adapters into the program without breaking the existing client code. This can be useful when the interface of the service class gets changed or replaced: you can just create a new adapter class without changing the client code.",
>       "![[Adapter Pattern/structure-object-adapter-indexed-2x.png]]"
>     ]
>   ],
>   "tableStyle": "letter-spacing: 0.0px;"
> }
> ```

> [!expand-ui]- Class Adapter - uses inheritance
> TODO
# Code Example

> [!expand-ui]- Object Adapter Example
> Target interface (what the client expects)
> ```
> interface PaymentProcessor {
>     void pay(double amount);
> }
> ```
>
> Adaptee (existing, incompatible, legacy, not allowed to be changed class)
> ```
> class LegacyPaymentGateway {
>     public void makePayment(int cents) {
>         System.out.println("Paid " + cents + " cents using legacy gateway");
>     }
> }
> ```
>
> Adapter
> ```
> class PaymentAdapter implements PaymentProcessor {
>
>     private final LegacyPaymentGateway legacyGateway;
>
>     public PaymentAdapter(LegacyPaymentGateway legacyGateway) {
>         this.legacyGateway = legacyGateway;
>     }
>
>     @Override
>     public void pay(double amount) {
>         int cents = (int) (amount * 100);
>         legacyGateway.makePayment(cents);
>     }
> }
> ```
>
> Client code
> ```
> public class Main {
>     public static void main(String[] args) {
>         PaymentProcessor processor = new PaymentAdapter(new LegacyPaymentGateway());
>         processor.pay(25.50);
>     }
> }
> ```
>
> Client → PaymentProcessor → Adapter → LegacyPaymentGateway

> [!expand-ui]- Class Adapter Example
> TODO
# Comparisons

> [!expand]- Click here to expand...
> ![[Adapter Pattern vs Bridge Pattern#^excerpt]]
>
> ![[Adapter Pattern vs Facade Pattern#^excerpt]]
>
> ![[Adapter Pattern vs Decorator Pattern#^excerpt]]
>
> ![[Adapter Pattern vs Proxy Pattern#^excerpt]]
# Resources
- [https://java-design-patterns.com/patterns/adapter/](https://java-design-patterns.com/patterns/adapter/)
- [https://refactoring.guru/design-patterns/adapter](https://refactoring.guru/design-patterns/adapter)

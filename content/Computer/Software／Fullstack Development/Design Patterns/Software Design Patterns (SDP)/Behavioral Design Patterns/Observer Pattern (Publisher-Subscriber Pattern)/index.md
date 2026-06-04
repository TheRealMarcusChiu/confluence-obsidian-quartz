---
title: "Observer Pattern (Publisher-Subscriber Pattern)"
created: 2019-12-17T13:07:27.992-06:00
modified: 2023-06-02T20:10:03.703-05:00
parent: "[[Behavioral Design Patterns]]"
children: []
---
###### Observer Pattern (Publisher-Subscriber Pattern)
````excerpt
- is a [[Behavioral Design Patterns|behavioral design pattern]] that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing
````
^excerpt

# Code Structure
![[Observer Pattern (Publisher-Subscriber Pattern)/observer-structure.png|700]]
# Code Example

> [!expand]- Click here to expand...
> Create Publisher and Subscriber interfaces
> ```java
> public interface Subscriber<T> {
>     void notify(T t);
> 	void unsubscribe();
> }
>
> public interface Publisher<T> {
>     void addSubscriber(Subscriber<T> s);
>     void removeSubscriber(Subscriber<T> s);
>     void notifySubscribers();
> }
> ```
>
> Implement the interfaces
> ```java
> public class IncomeSubscriber implements Subscriber<Float> {
>
>     private final Publisher<Float> stockData;
>
>     public IncomeSubscriber(Publisher<Float> stockData) {
>         this.stockData = stockData;
>         stockData.addSubscriber(this);
>     }
>
>     @Override
>     public void unsubscribe() {
>         this.stockData.removeSubscriber(this);
>     }
>
>     @Override
>     public void notify(Float t) {
>         System.out.println("IncomeObserver received changes: " + t);
>     }
> }
>   
> public class StockDataPublisher implements Publisher<Float> {
>
>     private final List<Subscriber<Float>> subscribers;
>     private Float stockValue;
>
>     public StockDataPublisher() {
>         subscribers = new ArrayList<>();
>     }
>
>     @Override
>     public void addSubscriber(final Subscriber<Float> s) {
>         subscribers.add(s);
>     }
>
>     @Override
>     public void removeSubscriber(final Subscriber<Float> s) {
>         subscribers.remove(s);
>     }
>
>     @Override
>     public void notifySubscribers() {
>         for (Subscriber<Float> s: subscribers) {
>             s.notify(stockValue);
>         }
>     }
>
>     public void setStockData(final Float stockValue) {
>         this.stockValue = stockValue;
>         notifySubscribers();
>     }
> }
> ```
>
> Use case
> ```java
> public static void main(String[] args) {
>     StockDataPublisher publisher = new StockDataPublisher();
>
>     Subscriber subscriber1 = new IncomeSubscriber(publisher);
>     Subscriber subscriber2 = new IncomeSubscriber(publisher);
>
>     System.out.println("state change 1");
>     publisher.setStockData(123f);
>
>     subscriber1.unsubscribe();
>
>     System.out.println("state change 2");
>     publisher.setStockData(321f);
> } 
> ```
# Comparisons

> [!expand]- Click here to expand...
> ![[Chain of Responsibility vs Command vs Mediator vs Observer#^excerpt]]
>
> ![[Mediator Pattern vs Observer Pattern#^excerpt]]
# Resources
- [https://refactoring.guru/design-patterns/observer](https://refactoring.guru/design-patterns/observer)

---
title: "Java - Spring - @Primary"
created: 2021-06-14T18:56:29.999-05:00
modified: 2021-06-14T18:58:16.286-05:00
parent: "[[Java - Spring - Context Annotations]]"
children: []
---
Sometimes we need to define multiple beans of the same type. In these cases, the injection will be unsuccessful because Spring has no clue which bean we need.

We already saw an option to deal with this scenario: marking all the wiring points with <code><em>[[Java - Spring - @Autowired @Resource @Inject (Wiring Types) - @Qualifier @Named|@]]</em>[[Java - Spring - @Autowired @Resource @Inject (Wiring Types) - @Qualifier @Named|Qualifier]]</code> and specify the name of the required bean.

However, most of the time we need a specific bean and rarely the others. We can use <code><font style="color: rgb(128,128,0);">@Primary</font></code> to simplify this case: if we mark the most frequently used bean with <code><font style="color: rgb(128,128,0);">@Primary</font></code> it will be chosen on unqualified injection points
# Example Code

In the example below:
- <em>Car</em> is the primary vehicle
- In the <em>Driver</em> class, Spring injects a <em>Car</em> bean
- In the <em>Biker</em> bean, the value of the field <em>vehicle</em> will be a <em>Bike</em> object because it's qualified
```
@Component
@Primary
class Car implements Vehicle {}

@Component
class Bike implements Vehicle {}

@Component
class Driver {
    @Autowired
    Vehicle vehicle;
}

@Component
class Biker {
    @Autowired
    @Qualifier("bike")
    Vehicle vehicle;
}
```

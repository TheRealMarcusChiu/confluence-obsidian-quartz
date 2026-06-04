---
title: "Static Factory Method Pattern"
created: 2023-06-02T11:22:00.532-05:00
modified: 2023-06-02T12:55:42.162-05:00
parent: "[[Factory Design Patterns]]"
children: []
---
###### Static Factory Method Pattern
````excerpt
- is a [[Creational Design Patterns|creational pattern]] that uses a SINGLE method to create objects
````
^excerpt

# Static Factory Method Pattern - Example Implementation

> [!expand-ui]- Creating objects of DIFFERENT types
> First, create a <code><font style="color: rgb(122,134,154);">Polygon</font></code> interface
> ```java
> interface Polygon {
>     String getType();
> }
> ```
>
> Next, create a few <code><font style="color: rgb(122,134,154);">Polygon</font></code> implementations like <code><font style="color: rgb(122,134,154);">Square</font></code>, <code><font style="color: rgb(122,134,154);">Triangle</font></code>, etc
>
> ```merge-table
> {
>   "rows": [
>     [
>       "```java\nclass Square implements Polygon {\n    String getType() {\n        return \"square\";\n    }\n}\n```",
>       "```java\nclass Triangle implements Polygon {\n    String getType() {\n        return \"triangle\";\n    }\n}\n```"
>     ]
>   ]
> }
> ```
>
> Static Factory Method Pattern implementation
> ```java
> public static Polygon polygonFactoryMethod(final int numberOfSides) {
>     if (numberOfSides == 3) {
>         return new Triangle();
>     } else if (numberOfSides == 4) {
>         return new Square();
>     } else {
>         throw new RuntimeException("invalid input");
>     }
> }
> ```
>
> Use case
> ```java
> public static void main(String[] args) {
>  	Polygon triangle = polygonFactoryMethod(3);
>  	Polygon square   = polygonFactoryMethod(4);
>     // ...
>     System.out.println(triangle.getType()); // triangle
>     System.out.println(square.getType());   // square
> }
> ```

> [!expand-ui]- Creating objects of SAME type but with Different states
> ```java
> class Polygon {
> 	private String type;
> 	public Polygon(final String type) { this.type = type; }
>     public String getType() { return type; }
> }
> ```
> ```java
> public static Polygon polygonFactoryMethod(final int numberOfSides) {
>     if (numberOfSides == 3) {
>         return new Polygon("triangle");
>     } else if (numberOfSides == 4) {
>         return new Polygon("square");
>     } else {
>         throw new RuntimeException("invalid input");
>     }
> }
> ```
> ```java
> public static void main(String[] args) {
>  	Polygon triangle = polygonFactoryMethod(3);
>  	Polygon square   = polygonFactoryMethod(4);
>     // ...
>     System.out.println(triangle.getType()); // triangle
>     System.out.println(square.getType());   // square
> }
> ```
# Comparisons

> [!expand]- Click here to expand...
> ![[Factory Method Pattern vs Static Factory Method Pattern#^excerpt]]

---
title: "Factory Method Pattern"
created: 2019-12-11T16:09:52.858-06:00
modified: 2026-01-10T15:05:59.522-06:00
parent: "[[Factory Design Patterns]]"
children: []
---
###### Factory Method Pattern
````excerpt
- is a [[Creational Design Patterns|creational pattern]] that uses a SINGLE method to create objects
````
^excerpt

# Factory Method Pattern - Example Implementation

First, create a <code><font style="color: rgb(122,134,154);">Polygon</font></code> interface
```java
interface Polygon {
    String getType();
}
```

Next, create a few <code><font style="color: rgb(122,134,154);">Polygon</font></code> implementations like <code><font style="color: rgb(122,134,154);">Square</font></code>, <code><font style="color: rgb(122,134,154);">Triangle</font></code>, etc

```merge-table
{
  "rows": [
    [
      "```java\nclass Square implements Polygon {\n    String getType() { return \"square\"; }\n}\n```",
      "```java\nclass Triangle implements Polygon {\n    String getType() { return \"triangle\"; }\n}\n```"
    ],
    [
      {
        "content": "```\ninterface PolygonFactoryMethod {\n\tPolygon polygonFactoryMethod(final int numberOfSides);\n}\n```",
        "colspan": 2
      },
      null
    ]
  ]
}
```

Factory Method Implementations and Uses Cases

```merge-table
{
  "rows": [
    [
      "Factory Method Implementation \\#1\n```\nclass PolygonFactoryMethodImpl1 implements PolygonFactoryMethod {  \t\n\t@Override\n\tPolygon polygonFactoryMethod(final int numberOfSides) {\n    \tif (numberOfSides == 3) {\n        \tTriangle triangle = new Triangle();\n\t\t\t// custom logic\n\t\t\treturn triangle;\n    \t} else if (numberOfSides == 4) {\n        \tSquare square = new Square();\n\t\t\t// customm logic\n\t\t\treturn square\n    \t} else {\n        \tthrow new RuntimeException(\"invalid input\");\n    \t}\n\t}\n}\n```",
      "Factory Method Implementation \\#2\n```\nclass PolygonFactoryMethodImpl2 implements PolygonFactoryMethod {\n\t@Override\n\tPolygon polygonFactoryMethod(final int numberOfSides) {\n    \tif (numberOfSides == 3) {\n        \tTriangle triangle = new Triangle();\n\t\t\t// custom logic\n\t\t\treturn triangle;\n    \t} else if (numberOfSides == 4) {\n        \tSquare square = new Square();\n\t\t\t// customm logic\n\t\t\treturn square\n    \t} else {\n        \tthrow new RuntimeException(\"invalid input\");\n    \t}\n\t}\n}\n```"
    ],
    [
      "Use case\n```java\nstatic void main(String[] args) {\n    var polygonFactoryMethod = new PolygonFactoryMethodImpl1();\n    Polygon triangle = polygonFactoryMethod.polygonFactoryMethod(3);\n \tPolygon square   = polygonFactoryMethod.polygonFactoryMethod(4);\n    // ...\n    System.out.println(triangle.getType()); // triangle\n    System.out.println(square.getType());   // square\n}\n```",
      "Use case\n```java\nstatic void main(String[] args) {\n    var polygonFactoryMethod = new PolygonFactoryMethodImpl2();\n    Polygon triangle = polygonFactoryMethod.polygonFactoryMethod(3);\n \tPolygon square   = polygonFactoryMethod.polygonFactoryMethod(4);\n    // ...\n    System.out.println(triangle.getType()); // triangle\n    System.out.println(square.getType());   // square\n}\n```"
    ]
  ]
}
```
# Comparisons

> [!expand]- Click here to expand...
> ![[Abstract Factory Pattern vs Factory Method Pattern#^excerpt]]
>
> ![[Factory Method Pattern vs Static Factory Method Pattern#^excerpt]]
>
> ![[Factory Method Pattern vs Template Method Pattern#^excerpt]]
>
> Other
> - Utilizes [[Strategy Pattern]] for object creation
> - [[Factory Kit Pattern]] - used to create/define <font style="color: rgb(122,134,154);">factory methods</font> during runtime

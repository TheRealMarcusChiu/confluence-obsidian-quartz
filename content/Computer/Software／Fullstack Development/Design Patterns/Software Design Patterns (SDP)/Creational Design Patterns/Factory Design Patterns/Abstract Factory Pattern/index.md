---
title: "Abstract Factory Pattern"
created: 2022-01-29T17:27:57.986-06:00
modified: 2026-01-10T15:28:25.725-06:00
parent: "[[Factory Design Patterns]]"
children: []
---
###### Abstract Factory Pattern
````excerpt
- is a type of [[Factory Design Patterns|Factory Design Pattern]] that lets you produce families of related objects without specifying their concrete classes
- an extension of <em>Abstract Factory Pattern</em> is [[Factory of Factory／Factories (FoF) Pattern|Factory of Factories Pattern]]
````
^excerpt

# Abstract Factory Pattern - Example Implementations

> [!expand-ui]- ConcreteFactories create different subtypes of Products
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "```\ninterface ProductA {}\ninterface ProductB {}\ninterface AbstractFactory {\n\tProductA createProductA();\n\tProductB createProductB();\n}\n```",
>         "colspan": 2
>       },
>       null,
>       {
>         "content": "![[Abstract Factory Pattern/abstract-factory-design-pattern.png|300]]",
>         "rowspan": 3
>       }
>     ],
>     [
>       "```\nclass ProductA1 implements ProductA {}\nclass ProductB1 implements ProductB {}\nclass AbstractFactory1 implements AbstractFactory {\n \tProductA createProductA() {\n\t\treturn new ProductA1();\n\t}\n\tProductB createProductB() {\n   \t\treturn new ProductB1();\n\t}\n}\n```",
>       "```\nclass ProductA2 implements ProductA {}\nclass ProductB2 implements ProductB {}\nclass AbstractFactory2 implements AbstractFactory {\n \tProductA createProductA() {\n\t\treturn new ProductA2();\n\t}\n\tProductB createProductB() {\n   \t\treturn new ProductB2();\n\t}\n}\n```"
>     ],
>     [
>       {
>         "content": "Use case \\#1 - using AbstractFactory1\n```\npublic static void main(String[] args) {\n\tAbstractFactory abstractFactory = new AbstractFactory1();\n \tProductA productA = abstractFactory.createProductA();\n \tProductB productB = abstractFactory.createProductB();\n}\n```\n\nUse case \\#2 - using AbstractFactory2\n```\npublic static void main(String[] args) {\n\tAbstractFactory abstractFactory = new AbstractFactory2();\n \tProductA productA = abstractFactory.createProductA();\n \tProductB productB = abstractFactory.createProductB();\n}\n```",
>         "colspan": 2
>       },
>       null
>     ]
>   ],
>   "tableStyle": "letter-spacing: 0.0px;"
> }
> ```

> [!expand-ui]- ConcreteFactories create same Products but with different states
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "```\nclass ProductA {}\nclass ProductB {}\ninterface AbstractFactory {\n\tProductA createProductA();\n\tProductB createProductB();\n}\n```",
>         "colspan": 2
>       },
>       null
>     ],
>     [
>       "```\nclass ProductA1 implements ProductA {}\nclass ProductB1 implements ProductB {}\nclass AbstractFactory1 implements AbstractFactory {\n \tProductA createProductA() {\n\t\tProductA productA = new ProductA();\n\t\t// custom logic\n\t\treturn productA;\n\t}\n\tProductB createProductB() {\n  \t\tProductB productB = new ProductB();\n\t\t// custom logic\n\t\treturn productB;\n\t}\n}\n```",
>       "```\nclass ProductA2 implements ProductA {}\nclass ProductB2 implements ProductB {}\nclass AbstractFactory2 implements AbstractFactory {\n \tProductA createProductA() {\n\t\tProductA productA = new ProductA();\n\t\t// custom logic\n\t\treturn productA;\n\t}\n\tProductB createProductB() {\n  \t\tProductB productB = new ProductB();\n\t\t// custom logic\n\t\treturn productB;\n\t}\n}\n```"
>     ],
>     [
>       {
>         "content": "Use case \\#1 - using AbstractFactory1\n```\npublic static void main(String[] args) {\n\tAbstractFactory abstractFactory = new AbstractFactory1();\n \tProductA productA = abstractFactory.createProductA();\n \tProductB productB = abstractFactory.createProductB();\n}\n```\n\nUse case \\#2 - using AbstractFactory2\n```\npublic static void main(String[] args) {\n\tAbstractFactory abstractFactory = new AbstractFactory2();\n \tProductA productA = abstractFactory.createProductA();\n \tProductB productB = abstractFactory.createProductB();\n}\n```",
>         "colspan": 2
>       },
>       null
>     ]
>   ]
> }
> ```
# Relation to Other Patterns

> [!expand]- Click here to expand...
> ![[Abstract Factory Pattern vs Facade Pattern#^excerpt]]
>
> ![[Abstract Factory Pattern vs Factory Method Pattern#^excerpt]]
>
> ![[Abstract Factory Pattern vs Factory of Factory Pattern#^excerpt]]

---
title: "Java - Autoboxing & Unboxing"
created: 2019-12-17T20:18:23.102-06:00
modified: 2026-01-11T11:04:25.065-06:00
parent: "[[Java - Underneath]]"
children: []
---
- <strong>autoboxing</strong> is used to convert primitive data types to their wrapper class objects
- <strong>unboxing</strong> is used to convert wrapper class objects to their primitive data types

# When Does Autoboxing and Unboxing Happen
compile time
# Example Autoboxing and Unboxing

```merge-table
{
  "rows": [
    [
      {
        "content": "Autoboxing Example",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Unboxing Example",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "```java\nInteger number = 100;\n```\n\ncompiles to\n```java\nInteger number = Integer.valueOf(100);\n```",
      "```java\nInteger num2 = new Integer(50); \nint inum = num2;\n```\n\ncompiles to\n```java\nInteger num2 = new Integer(50);\nint inum = num2.intValue();\n```"
    ]
  ],
  "tableStyle": "width: 99.9174%;"
}
```
# What Data Gets Autoboxed and Unboxed

```merge-table
{
  "rows": [
    [
      {
        "content": "Primitive Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Wrapper Class",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "boolean",
      "Boolean"
    ],
    [
      "byte",
      "Byte"
    ],
    [
      "char",
      "Character"
    ],
    [
      "float",
      "Float"
    ],
    [
      "int",
      "Integer"
    ],
    [
      "long",
      "Long"
    ],
    [
      "short",
      "Short"
    ],
    [
      "double",
      "Double"
    ]
  ],
  "tableStyle": "width: 314.545px;"
}
```
# Things to be Aware Of
Do not mix primitives and objects while doing comparisons
```java
public static void main(String []args){
	System.out.println(
		((Integer) 0) == ((Integer) 0)
	);
	System.out.println(
		((Integer) 100000) == ((Integer) 100000)
	);
}

// would print out
// true
// false
```

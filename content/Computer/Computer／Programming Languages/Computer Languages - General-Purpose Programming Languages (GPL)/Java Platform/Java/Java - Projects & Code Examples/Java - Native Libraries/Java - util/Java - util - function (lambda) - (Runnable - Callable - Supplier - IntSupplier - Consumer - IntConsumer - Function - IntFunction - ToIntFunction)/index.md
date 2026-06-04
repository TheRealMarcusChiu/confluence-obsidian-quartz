---
title: "Java - util - function (lambda) - (Runnable - Callable - Supplier - IntSupplier - Consumer - IntConsumer - Function - IntFunction - ToIntFunction)"
created: 2021-10-27T02:38:16.331-05:00
modified: 2022-02-12T20:47:53.011-06:00
parent: "[[Java - util]]"
children:
  - "[[Java - util - function - Function (Interface)]]"
---
Each of the following interfaces is annotated with [[Java - @FunctionalInterface|@FunctionalInterface]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Signature",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Interface",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Method",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "() → void",
      "[[Java - Runnable vs Callable|Runnable]]",
      "void run()"
    ],
    [
      "",
      "",
      ""
    ],
    [
      "() → T",
      "[[Java - Runnable vs Callable|Callable]]<T>",
      "T call() throws Exception"
    ],
    [
      "() → T",
      "Supplier<T>",
      "T get()"
    ],
    [
      "() → int",
      "IntSupplier",
      "int getAsInt()"
    ],
    [
      "",
      "",
      ""
    ],
    [
      "T → void",
      "Consumer",
      "void accept(T t)"
    ],
    [
      "int → void",
      "IntConsumer",
      "void accept(int i)"
    ],
    [
      "",
      "",
      ""
    ],
    [
      "T → R",
      "[[Java - util - function - Function (Interface)|Function<T,R>]]",
      "R apply(T t)"
    ],
    [
      "T → boolean",
      "Predicate<T>",
      "boolean test(T t)"
    ],
    [
      "int → R",
      "IntFunction<R>",
      "R apply(int i)"
    ],
    [
      "T → int",
      "ToIntFunction<T>",
      "int applyAsInt(T t)"
    ]
  ]
}
```
# Method Reference

The operator :: allows referencing an existing method (static or not)

```merge-table
{
  "rows": [
    [
      {
        "content": ":: on type",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- BinOp add = Integer::sum;\n- ToIntFunction\\<String\\> fun = String::length;"
    ],
    [
      {
        "content": ":: on instance",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- String hello = \"hello\";\n- IntSupplier supplier = hello::length;"
    ]
  ]
}
```

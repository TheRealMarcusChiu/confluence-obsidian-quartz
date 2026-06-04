---
title: "Java - Runnable vs Callable"
created: 2021-04-23T18:17:37.103-05:00
modified: 2022-01-31T01:45:13.049-06:00
parent: "[[Java - util - concurrent]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Runnable",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Callable",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "```\npublic interface Runnable {\n    public abstract void run();\n}\n```",
      "```\npublic interface Callable<V> {\n    V call() throws Exception;\n}\n```"
    ]
  ]
}
```
# Other
- [[Java - util - function (lambda) - (Runnable - Callable - Supplier - IntSupplier - Consumer - IntConsumer - Function - IntFunction - ToIntFunction)]]

# Resources
- [https://www.baeldung.com/java-runnable-callable](https://www.baeldung.com/java-runnable-callable)

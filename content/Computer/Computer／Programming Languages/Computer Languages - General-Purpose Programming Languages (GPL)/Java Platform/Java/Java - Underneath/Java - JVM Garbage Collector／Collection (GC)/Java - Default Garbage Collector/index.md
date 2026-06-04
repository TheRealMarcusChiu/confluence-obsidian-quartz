---
title: "Java - Default Garbage Collector"
created: 2021-10-09T00:37:59.011-05:00
modified: 2026-01-11T10:07:10.674-06:00
parent: "[[Java - JVM Garbage Collector／Collection (GC)]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Java Version",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Default GC",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Notes / Changes",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "Java 8",
      "Parallel GC",
      "Also called the <em>Throughput Collector</em>. Widely used for server apps."
    ],
    [
      "Java 9",
      "G1 GC",
      "G1 (Garbage-First) becomes the default. Designed for predictable pause times; replaces Parallel GC for most workloads."
    ],
    [
      "Java 10",
      "G1 GC",
      "Same as Java 9."
    ],
    [
      "Java 11 (LTS)",
      "G1 GC",
      "G1 remains default. Introduced <strong>ZGC</strong> as <em>experimental</em>."
    ],
    [
      "Java 12",
      "G1 GC",
      "ZGC experimental improvements; Parallel GC still available."
    ],
    [
      "Java 13",
      "G1 GC",
      "No change in default."
    ],
    [
      "Java 14",
      "G1 GC",
      "G1 continues as default. Shenandoah introduced (RedHat), still not default."
    ],
    [
      "Java 15",
      "G1 GC",
      "ZGC becomes <strong>production-ready</strong>, but default stays G1."
    ],
    [
      "Java 16",
      "G1 GC",
      "Minor ZGC improvements; default still G1."
    ],
    [
      "Java 17 (LTS)",
      "G1 GC",
      "G1 default; ZGC stable. Newer features added to ZGC."
    ],
    [
      "Java 18",
      "G1 GC",
      "No change."
    ],
    [
      "Java 19",
      "G1 GC",
      "ZGC enhancements continue; default remains G1."
    ],
    [
      "Java 20",
      "G1 GC",
      "G1 default; experimental ZGC features."
    ],
    [
      "Java 21 (LTS)",
      "G1 GC",
      "<strong>Generational ZGC introduced</strong> (but G1 still default)."
    ],
    [
      "Java 22",
      "G1 GC",
      "Generational ZGC available; G1 default."
    ],
    [
      "Java 23",
      "G1 GC",
      "No change."
    ],
    [
      "Java 24",
      "G1 GC",
      "G1 remains default; ZGC continues to improve."
    ],
    [
      "Java 25 (LTS)",
      "G1 GC",
      "G1 default; Generational ZGC production-ready."
    ]
  ],
  "tableStyle": "letter-spacing: 0.0px;"
}
```

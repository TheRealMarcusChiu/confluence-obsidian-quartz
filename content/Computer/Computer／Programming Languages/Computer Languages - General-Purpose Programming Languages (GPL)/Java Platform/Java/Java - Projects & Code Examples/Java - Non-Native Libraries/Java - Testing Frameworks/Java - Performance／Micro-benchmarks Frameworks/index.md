---
title: "Java - Performance／Micro-benchmarks Frameworks"
created: 2021-10-09T17:14:50.371-05:00
modified: 2021-10-09T17:16:40.249-05:00
parent: "[[Java - Testing Frameworks]]"
children:
  - "[[Java Microbenchmark／Measurement Harness (JMH)]]"
---
# Why Are Java Performance/Microbenchmarks Hard?

Writing benchmarks that correctly measure the performance of a small part of a larger application is hard. There are many optimizations that the JVM or underlying hardware may apply to your component when the benchmark executes that component in isolation. These optimizations may not be possible to apply when the component is running as part of a larger application. Badly implemented microbenchmarks may thus make you believe that your component's performance is better than it will be in reality.

Writing a correct Java microbenchmark typically entails preventing the optimizations the JVM and hardware may apply during microbenchmark execution which could not have been applied in a real production system. That is what these frameworks help you to do
# Frameworks
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

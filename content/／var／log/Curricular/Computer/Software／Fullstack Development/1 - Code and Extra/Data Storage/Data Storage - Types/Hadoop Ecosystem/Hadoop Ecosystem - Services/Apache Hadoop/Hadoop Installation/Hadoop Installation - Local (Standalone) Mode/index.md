---
title: "Hadoop Installation - Local (Standalone) Mode"
created: 2020-05-23T00:38:42.005-05:00
modified: 2020-05-23T00:39:39.847-05:00
parent: "[[Hadoop Installation]]"
children: []
---
By default, [[Apache Hadoop]] is configured to run in a non-distributed mode, as a single Java process. This is useful for debugging.

The following example copies the unpacked conf directory to use as input and then finds and displays every match of the given regular expression. Output is written to the given output directory.
```
mkdir input
cp etc/hadoop/*.xml input
bin/hadoop jar share/hadoop/mapreduce/hadoop-mapreduce-examples-3.2.1.jar grep input output 'dfs[a-z.]+'
cat output/*
```

---
title: "Spark Streaming"
created: 2020-05-28T12:17:45.890-05:00
modified: 2020-05-28T12:53:02.345-05:00
parent: "[[Spark - Architecture, Components & Code Examples]]"
children: []
---
see: [https://spark.apache.org/streaming/](https://spark.apache.org/streaming/)
### Spark Streaming - Word Count Example

Initialize Spark Context, see: [[Spark - Context Initialization]]
> [!tabs]
>
> === Java
>
> <span style="white-space: pre-wrap"><code><font style="color: rgb(14,132,181);">JavaRDD</font><font style="color: rgb(102,102,102);">\<</font><font style="color: rgb(14,132,181);">String</font><font style="color: rgb(102,102,102);">\></font> textFile <font style="color: rgb(102,102,102);">=</font> sc<font style="color: rgb(102,102,102);">.</font><font style="color: rgb(64,112,160);">textFile</font><font style="color: rgb(102,102,102);">(</font><font style="color: rgb(64,112,160);">"hdfs://192.168.86.32:9000/wordcount.txt"</font><font style="color: rgb(102,102,102);">);</font></code></span>
>
> <span style="white-space: pre-wrap"><code><font style="color: rgb(14,132,181);">JavaPairRDD</font><font style="color: rgb(102,102,102);">\<</font><font style="color: rgb(14,132,181);">String</font><font style="color: rgb(102,102,102);">,</font> <font style="color: rgb(14,132,181);">Integer</font><font style="color: rgb(102,102,102);">\></font> counts <font style="color: rgb(102,102,102);">=</font> textFile<font style="color: rgb(102,102,102);">.</font><font style="color: rgb(64,112,160);">flatMap</font><font style="color: rgb(102,102,102);">(</font>s <font style="color: rgb(102,102,102);">-\></font> <font style="color: rgb(14,132,181);">Arrays</font><font style="color: rgb(102,102,102);">.</font><font style="color: rgb(64,112,160);">asList</font><font style="color: rgb(102,102,102);">(</font>s<font style="color: rgb(102,102,102);">.</font><font style="color: rgb(64,112,160);">split</font><font style="color: rgb(102,102,102);">(</font><font style="color: rgb(64,112,160);">" "</font><font style="color: rgb(102,102,102);">)).</font><font style="color: rgb(64,112,160);">iterator</font><font style="color: rgb(102,102,102);">())</font><font style="color: rgb(102,102,102);">.</font><font style="color: rgb(64,112,160);">mapToPair</font><font style="color: rgb(102,102,102);">(</font>word <font style="color: rgb(102,102,102);">-\></font> <font style="color: rgb(0,112,32);">new</font> <font style="color: rgb(14,132,181);">Tuple2</font><font style="color: rgb(102,102,102);">\<\>(</font>word<font style="color: rgb(102,102,102);">,</font> <font style="color: rgb(64,160,112);">1</font><font style="color: rgb(102,102,102);">))</font><font style="color: rgb(102,102,102);">.</font><font style="color: rgb(64,112,160);">reduceByKey</font><font style="color: rgb(102,102,102);">((</font>a<font style="color: rgb(102,102,102);">,</font> b<font style="color: rgb(102,102,102);">)</font> <font style="color: rgb(102,102,102);">-\></font> a <font style="color: rgb(102,102,102);">+</font> b<font style="color: rgb(102,102,102);">);</font></code></span>
>
> <span style="white-space: pre-wrap"><code>counts<font style="color: rgb(102,102,102);">.</font><font style="color: rgb(64,112,160);">saveAsTextFile</font><font style="color: rgb(102,102,102);">(</font><font style="color: rgb(64,112,160);">"hdfs://192.168.86.32:9000/wordcount-out.txt"</font><font style="color: rgb(102,102,102);">);</font></code></span>
>
> === Python
>
> <span style="white-space: pre-wrap"><code>text\_file <font style="color: rgb(102,102,102);">=</font> sc<font style="color: rgb(102,102,102);">.</font>textFile(<font style="color: rgb(64,112,160);">"hdfs://192.168.86.32:9000/wordcount.txt"</font>)</code></span>
>
> <span style="white-space: pre-wrap"><code>counts <font style="color: rgb(102,102,102);">=</font> text\_file<font style="color: rgb(102,102,102);">.</font>flatMap(<font style="color: rgb(0,112,32);">lambda</font> line: line<font style="color: rgb(102,102,102);">.</font>split(<font style="color: rgb(64,112,160);">" "</font>)) \\</code><br><code>             <font style="color: rgb(102,102,102);">.</font><font style="color: rgb(0,112,32);">map</font>(<font style="color: rgb(0,112,32);">lambda</font> word: (word, <font style="color: rgb(64,160,112);">1</font>)) \\</code><br><code>             <font style="color: rgb(102,102,102);">.</font>reduceByKey(<font style="color: rgb(0,112,32);">lambda</font> a, b: a <font style="color: rgb(102,102,102);">+</font> b)</code></span>
>
> <span style="white-space: pre-wrap"><code>counts<font style="color: rgb(102,102,102);">.</font>saveAsTextFile(<font style="color: rgb(64,112,160);">"hdfs://192.168.86.32:9000/wordcount-out.txt"</font>)</code></span>
>
> === Scala
>
> <span style="white-space: pre-wrap"><code><font style="color: rgb(0,112,32);">val</font> <font style="color: rgb(187,96,213);">textFile</font> <font style="color: rgb(0,112,32);">=</font> <font style="color: rgb(187,96,213);">sc</font><font style="color: rgb(102,102,102);">.</font>textFile<font style="color: rgb(102,102,102);">(</font><font style="color: rgb(64,112,160);">"hdfs://192.168.86.32:9000/wordcount.txt"</font><font style="color: rgb(102,102,102);">)</font></code></span>
>
> <span style="white-space: pre-wrap"><code><font style="color: rgb(0,112,32);">val</font> <font style="color: rgb(187,96,213);">counts</font> <font style="color: rgb(0,112,32);">=</font> <font style="color: rgb(187,96,213);">textFile</font><font style="color: rgb(102,102,102);">.</font>flatMap<font style="color: rgb(102,102,102);">(</font>line <font style="color: rgb(0,112,32);">=\></font> <font style="color: rgb(187,96,213);">line</font><font style="color: rgb(102,102,102);">.</font>split<font style="color: rgb(102,102,102);">(</font><font style="color: rgb(64,112,160);">" "</font><font style="color: rgb(102,102,102);">))</font><font style="color: rgb(102,102,102);">.</font>map<font style="color: rgb(102,102,102);">(</font>word <font style="color: rgb(0,112,32);">=\></font> <font style="color: rgb(102,102,102);">(</font>word<font style="color: rgb(102,102,102);">,</font> <font style="color: rgb(64,160,112);">1</font><font style="color: rgb(102,102,102);">))</font><font style="color: rgb(102,102,102);">.</font>reduceByKey<font style="color: rgb(102,102,102);">(</font><font style="color: rgb(0,112,32);">\_</font> <font style="color: rgb(102,102,102);">+</font> <font style="color: rgb(0,112,32);">\_</font><font style="color: rgb(102,102,102);">)</font></code></span>
>
> <span style="white-space: pre-wrap"><code><font style="color: rgb(187,96,213);">counts</font><font style="color: rgb(102,102,102);">.</font>saveAsTextFile<font style="color: rgb(102,102,102);">(</font><font style="color: rgb(64,112,160);">"hdfs://192.168.86.32:9000/wordcount-out.txt"</font><font style="color: rgb(102,102,102);">)</font></code></span>

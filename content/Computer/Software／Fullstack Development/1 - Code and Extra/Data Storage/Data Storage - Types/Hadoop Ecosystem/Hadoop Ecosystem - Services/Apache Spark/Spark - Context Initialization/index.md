---
title: "Spark - Context Initialization"
created: 2020-05-28T12:12:31.616-05:00
modified: 2020-05-28T12:35:41.845-05:00
parent: "[[Apache Spark]]"
children: []
---
### Spark Context - Interactively
> [!tabs]
>
> === Python
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Connect to Existing Master Server",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "<span style=\"white-space: pre-wrap\"><code>./spark\\_home/bin/pyspark --master local\\[2\\]</code></span>"
>     ],
>     [
>       {
>         "content": "Launch Own Master/Slave",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "<span style=\"white-space: pre-wrap\"><code>./spark\\_home/bin/pyspark</code></span>"
>     ]
>   ]
> }
> ```
>
> === Scala
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Connect to Existing Master Server",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "<span style=\"white-space: pre-wrap\"><code>./spark\\_home/bin/spark-shell --master local\\[2\\]</code></span>"
>     ],
>     [
>       {
>         "content": "Launch Own Master/Slave",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "<span style=\"white-space: pre-wrap\"><code>./spark\\_home/bin/spark-shell</code></span>"
>     ]
>   ]
> }
> ```
>
> === R
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Connect to Existing Master Server",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "<span style=\"white-space: pre-wrap\"><code>./spark\\_home/bin/sparkR --master local\\[2\\]</code></span>"
>     ],
>     [
>       {
>         "content": "Launch Own Master/Slave",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "<span style=\"white-space: pre-wrap\"><code>./spark\\_home/bin/sparkR</code></span>"
>     ]
>   ]
> }
> ```

### Spark Context - Programmatically
> [!tabs]
>
> === Python
>
> ```
> pip install pypandoc
> pip install pyspark
>
> # file
> from pyspark import SparkConf, SparkContext
>
> conf = SparkConf().setMaster("spark://192.168.86.32:7077").setAppName("My App")
> sc = SparkContext(conf = conf)
> ```
>
> === Scala
>
> ```
> import org.apache.spark.SparkConf
> import org.apache.spark.SparkContext
> import org.apache.spark.SparkContext._
>
> val conf = new SparkConf().setMaster("spark://192.168.86.32:7077").setAppName("My App")
> val sc = new SparkContext(conf)
> ```
>
> === Java
>
> ```
> import org.apache.spark.SparkConf;
> import org.apache.spark.api.java.JavaSparkContext;
>
> SparkConf conf = new SparkConf().setMaster("spark://192.168.86.32:7077").setAppName("My App");
> JavaSparkContext sc = new JavaSparkContext(conf);
> ```

---
title: "Spark - Standalone"
created: 2020-05-27T21:52:27.275-05:00
modified: 2020-05-27T22:01:21.378-05:00
parent: "[[Spark - Installation & Setup]]"
children: []
---
based on: [https://spark.apache.org/docs/3.0.0-preview2/spark-standalone.html](https://spark.apache.org/docs/3.0.0-preview2/spark-standalone.html)
### Start Standalone

start master:
```
./sbin/start-master.sh --host 192.168.86.32 --port 7077 --webui-port 8080
```

start slave:
```
./sbin/start-slave.sh spark://192.168.86.32:7077
```
### Test Standalone - Start Spark Context

first export user of hadoop dfs
```
export HADOOP_USER_NAME=victor
```

there are 2 modes to start a Spark Context:
- scala
- python

###### scala spark context
```
./bin/spark-shell --master spark://192.168.86.32:7077
```
###### python spark context
```
./bin/pyspark --master spark://192.168.86.32:7077
```
######

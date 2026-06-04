---
title: "Java - MapReduce - WordCount"
created: 2020-05-20T20:44:45.131-05:00
modified: 2020-05-20T21:02:50.929-05:00
parent: "[[Hadoop - Java - MapReduce]]"
children: []
---
### Maven Dependencies
```
<!-- https://mvnrepository.com/artifact/org.apache.hadoop/hadoop-mapred -->
<dependency>
    <groupId>org.apache.hadoop</groupId>
    <artifactId>hadoop-mapred</artifactId>
    <version>0.22.0</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.apache.hadoop/hadoop-common -->
<dependency>
    <groupId>org.apache.hadoop</groupId>
    <artifactId>hadoop-common</artifactId>
    <version>2.6.2</version>
</dependency>
```
### Map Class
```
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;

import java.io.IOException;
import java.util.StringTokenizer;

public class Map extends Mapper<LongWritable, Text, Text, IntWritable> {

    public void map(LongWritable key, Text value, Context con) throws IOException, InterruptedException {
        String line = value.toString();
        StringTokenizer tokenizer = new StringTokenizer(line);

        while (tokenizer.hasMoreTokens()) {
            Text outputKey = new Text(tokenizer.nextToken().toUpperCase().trim());
            IntWritable outputValue = new IntWritable(1);
            con.write(outputKey, outputValue);
        }
    }
}
```
### Reduce Class
```
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;

import java.io.IOException;

public class Reduce extends Reducer<Text, IntWritable, Text, IntWritable> {

    public void reduce(Text word, Iterable<IntWritable> values, Context con) throws IOException, InterruptedException {
        int sum = 0;
        for (IntWritable value : values) {
            sum += value.get();
        }
        con.write(word, new IntWritable(sum));
    }
}
```
### Main
```
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.util.GenericOptionsParser;

public class Main {
    public static void main(String[] args) throws Exception {
        Configuration c = new Configuration();
        String[] files = new GenericOptionsParser(c, args).getRemainingArgs();
        Path input = new Path(files[0]);
        Path output = new Path(files[1]);
        Job j = new Job(c, "wordcount");
        j.setJarByClass(Main.class);
        j.setMapperClass(Map.class);
        j.setReducerClass(Reduce.class);
        j.setOutputKeyClass(Text.class);
        j.setOutputValueClass(IntWritable.class);
        FileInputFormat.addInputPath(j, input);
        FileOutputFormat.setOutputPath(j, output);
        System.exit(j.waitForCompletion(true) ? 0 : 1);
    }
}
```
### Jar Program

[[Create & Build JAR in IntelliJ|create the jar file]] of this program and name it countword.jar
### Test Program

create data.txt file
```
HDFS is a storage unit of Hadoop
MapReduce is a processing tool of Hadoop
```

save file into [[Hadoop Distributed File System (HDFS)|HDFS]]
```
hdfs dfs -put data.txt /data.txt
```

run word-count mapreduce
```
hadoop jar countword.jar com.marcuschiu.Main /data.txt /r_output
```

the output is stored in /r\_output/part-r-00000
```
hdfs dfs -cat /r_output/part-r-00000
```
```
A	2
HADOOP	2
HDFS	1
IS	2
MAPREDUCE	1
OF	2
PROCESSING	1
STORAGE	1
TOOL	1
UNIT	1
```

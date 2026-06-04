---
title: "Hadoop - Java - HDFS Write Read"
created: 2020-05-19T19:03:17.692-05:00
modified: 2020-05-20T20:44:00.203-05:00
parent: "[[Hadoop - Java]]"
children: []
---
### Maven Dependencies
```
<!-- https://mvnrepository.com/artifact/org.apache.hadoop/hadoop-hdfs -->
<dependency>
    <groupId>org.apache.hadoop</groupId>
    <artifactId>hadoop-hdfs</artifactId>
    <version>2.6.2</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.apache.hadoop/hadoop-common -->
<dependency>
    <groupId>org.apache.hadoop</groupId>
    <artifactId>hadoop-common</artifactId>
    <version>2.6.2</version>
</dependency>
```
### Write Demo
```
import java.io.PrintWriter;
import java.net.URI;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FSDataOutputStream;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.hdfs.DistributedFileSystem;

public class WriteDemo {
    public static void main(String args[]) throws Exception {
        // replace "victor" with user that you are running your HDFS cluster with
        System.setProperty("HADOOP_USER_NAME", "victor");

        // Path that we need to create in HDFS. Just like Unix/Linux file systems, HDFS file system starts with "/"
        final Path path = new Path("/something/poem.txt");

        // Uses try with resources in order to avoid close calls on resources
        // Creates anonymous sub class of DistributedFileSystem to allow calling initialize as DFS will not be usable otherwise
        try(final DistributedFileSystem dFS = new DistributedFileSystem() {
            {
                initialize(new URI("hdfs://192.168.86.32:9000"), new Configuration());
            }
        };
            // Gets output stream for input path using DFS instance
            final FSDataOutputStream streamWriter = dFS.create(path);
            // Wraps output stream into PrintWriter to use high level and sophisticated methods
            final PrintWriter writer = new PrintWriter(streamWriter);) {
            // Writes tutorials information to file using print writer
            writer.println("Romans 1:20 ~ For since the creation of the world God's invisible qualities, His eternal power and divine nature, have been clearly seen, being understood from His poiéma, so that men are without excuse.\n\nme: poiéma\n\nEphesians 2:10 ~ For we are God's poiéma, created in Christ Jesus to do good works, which God prepared in advance as our way of life.\n\nme thinking: ........ we are poems?\n\nthen remembers Jeremiah 1:5 ~ Before I formed you in the womb I knew you, blah blah blah\n\nme: okay, I'm a poem");

            System.out.println("File Written to HDFS successfully!");
        }
    }
}
```

ip address / domain name must match hadoop configuration files {core-site.xml, hdfs-site.xml, yarn-site.xml, etc}
```
...
<property>
        <name>fs.defaultFS</name>
        <value>hdfs://192.168.86.32:9000</value>
</property>
...
```
### Read Demo
```
import java.net.URI;
import java.util.Scanner;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FSDataInputStream;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.hdfs.DistributedFileSystem;

public class ReadDemo {

    public static void main(String[] args) throws Exception{
        // Impersonates user "root" to avoid performance problems. You should replace it
        // with user that you are running your HDFS cluster with
        System.setProperty("HADOOP_USER_NAME", "victor");

        // Path that we need to create in HDFS. Just like Unix/Linux file systems, HDFS file system starts with "/"
        final Path path = new Path("/somthing/poem.txt");

        // Uses try with resources in order to avoid close calls on resources
        // Creates anonymous sub class of DistributedFileSystem to allow calling initialize as DFS will not be usable otherwise
        try(final DistributedFileSystem dFS = new DistributedFileSystem() {
            {
                initialize(new URI("hdfs://192.168.86.32:9000"), new Configuration());
            }
        };
            // Gets input stream for input path using DFS instance
            final FSDataInputStream streamReader = dFS.open(path);
            // Wraps input stream into Scanner to use high level and sophisticated methods
            final Scanner scanner = new Scanner(streamReader);) {

            System.out.println("File Contents: ");
            // Reads tutorials information from file using Scanner
            while(scanner.hasNextLine()) {
                System.out.println(scanner.nextLine());
            }

        }
    }
}
```

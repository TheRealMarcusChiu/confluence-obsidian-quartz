---
title: "Maven - ＜classifier＞"
created: 2021-02-28T19:57:13.670-06:00
modified: 2021-02-28T20:01:18.271-06:00
parent: "[[Maven - Dependencies]]"
children: []
---
Suppose you have a need for two versions of an artifact: for <code><font style="color: rgb(128,128,128);">openjpa</font></code> and for <code><font style="color: rgb(128,128,128);">eclipselink</font></code> - say because jar contains entities that are needed to be enhanced JPA implementation specifically.

You might have some different handling for these builds defined in Maven profiles and the profiles used then have also property <code><font style="color: rgb(128,128,128);">\<classifier/\></font></code>.

To build a specific classified version, the <code><font style="color: rgb(128,128,128);">maven-jar-plugin</font></code> in the <code><font style="color: rgb(128,128,128);">pom</font></code> would then be configured like so:
```
<plugin>
   <groupId>org.apache.maven.plugins</groupId>
   <artifactId>maven-jar-plugin</artifactId>
   <version>3.0.2</version>
   <configuration>
       <classifier>${classifier}</classifier>
   </configuration>
</plugin>
```

Installing both: <code><font style="color: rgb(128,128,128);">openjpa</font></code> and <code><font style="color: rgb(128,128,128);">eclipselink</font></code>, would result to files in repo something like this:
> org/example/data/1.0.0/data-1.0.0.pom
> org/example/data/1.0.0/data-1.0.0-openjpa.jar
> org/example/data/1.0.0/data-1.0.0-eclipselink.jar

Now it would be only matter of <code><font style="color: rgb(128,128,128);">classifier</font></code> to which one use, so for OpenJPA, for example:
```
<dependency>
   <groupId>org.example</groupId>
   <artifactId>data</artifactId>
   <version>1.0.0</version>       
   <classifier>openjpa</classifier>
</dependency>
```

and for EclipseLink you would switch classifier as:
```
<dependency>
   <groupId>org.example</groupId>
   <artifactId>data</artifactId>
   <version>1.0.0</version>       
   <classifier>eclipselink</classifier>
</dependency>
```

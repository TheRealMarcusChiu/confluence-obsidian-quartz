---
title: "mvnw - mvnw.cmd"
created: 2019-03-15T22:12:52.624-05:00
modified: 2022-01-29T19:45:38.818-06:00
parent: "[[Maven - Commands]]"
children: []
---
<strong>mvnw</strong> and <strong>mvnw.cmd</strong> are [[Apache - Maven|Maven]] wrappers. It works similarly to the [[gradlew|Gradle wrapper]].

This allows you to run the Maven project without having Maven installed and present on the path. It downloads the correct Maven version if it's not found (as far as I know by default in your user home directory).
- <strong>mvnw</strong> file is for [[Linux]]
- <strong>mvnw.cmd</strong> is for [[Windows]]

# How to Create Maven Wrapper
###### <strong>To create or update all necessary Maven Wrapper files execute the following command:</strong>
<span style="white-space: pre-wrap"><code>mvn -N io.takari:maven:wrapper</code></span>

###### <strong>To use a different version of maven you can specify the version as follows:</strong>
<span style="white-space: pre-wrap"><code>mvn -N io.takari:maven:wrapper -Dmaven=3.3.3</code></span>

---
title: "Java - Spring - @NonNull @NonNullFields @Nullable @NonNullApi"
created: 2022-02-10T18:42:14.082-06:00
modified: 2022-05-23T03:48:53.972-05:00
parent: "[[Java - Spring Framework - Core - Lang]]"
children: []
---
# @NonNull @NonNullFields @Nullable @NonNullApi

Under the Spring core-package <code><font style="color: rgb(122,134,154);">org.springframework.lang</font></code> are 4 annotations that help reduce the possibility of NullPointerExceptions from arising during runtime, by throwing warnings during compile-time

> [!expand-ui]- @NonNull - specify a method return, method parameter, or field as non-null
> ```
> package com.marcuschiu.example;
>
> import org.springframework.lang.NonNull;
>
> class Employee {
>   @NonNull 
>   String id;
>   //...
> }
> ```
>
> ![[Java - Spring - @NonNull @NonNullFields @Nullable @NonNullApi/nonnull-ide-warning.png|600]]

> [!expand-ui]- @NonNullFields - specify all fields non-null
> For the <code><font style="color: rgb(128,128,0);">@NonNullFields</font></code> annotation to kick in, we need to create a file named <code><font style="color: rgb(122,134,154);">package-info.java</font></code> in the root directory of the package and annotate the package with <code><font style="color: rgb(128,128,0);">@NonNullFields</font></code>
> ```
> @NonNullFields
> package com.marcuschiu.example;
>
> import org.springframework.lang.NonNullFields;
> ```
>
> All fields of classes in the same package level are now treated as non-null
> ```
> package com.marcuschiu.example;
>
> class Employee {
>   String id;
>   //...
> }
> ```
>
> ![[Java - Spring - @NonNull @NonNullFields @Nullable @NonNullApi/nonnull-ide-warning.png|600]]

> [!expand-ui]- @Nullable - specify a field as nullable
> ```
> package com.marcuschiu.example;
>
> class Employee {
>
>   @Nullable
>   String pastEmployment;
>
>   @Nullable String getPastEmployment() {
>     return pastEmployment;
>   }
>
> }  
> ```

> [!expand-ui]- @NonNullApi - specify all method return and parameters as non-null
> As with <code><font style="color: rgb(128,128,0);">@NonNullFields</font></code>, we must specify the <code><font style="color: rgb(128,128,0);">@NonNullApi</font></code> annotation in the <code><font style="color: rgb(122,134,154);">package-info.java</font></code> file
> ```
> @NonNullApi
> package com.marcuschiu.example;
>
> import org.springframework.lang.NonNullApi;
> ```
>
> All method return values and parameters in classes of the same package level are now treated as non-null
> ```
> package com.marcuschiu.example;
>
> class Employee {
>   String getPastEmployment() {
>     return null;
>   }
> }  
> ```
>
> ![[Java - Spring - @NonNull @NonNullFields @Nullable @NonNullApi/nonnullapi-method-ide-warning_hu0f179a30c6c723f579ce7eeee2a50ca2_40298_1084x0_resize_box_3.png|800]]
# Automated Build Checks

> [!expand-ui]- maven
> In the [[Apache - Maven|pom.xml]] insert the following code snippet
> ```
> <plugin>
>   <groupId>com.github.spotbugs</groupId>
>   <artifactId>spotbugs-maven-plugin</artifactId>
>   <version>4.5.2.0</version>
>   <dependencies>
>     <!-- overwrite dependency on spotbugs if you want to specify the version of spotbugs -->
>     <dependency>
>       <groupId>com.github.spotbugs</groupId>
>       <artifactId>spotbugs</artifactId>
>       <version>4.5.3</version>
>     </dependency>
>   </dependencies>
> </plugin>
> ```

> [!expand-ui]- Gradle
> In [[Gradle]] add the following into <code><font style="color: rgb(122,134,154);">build.gradle</font></code>
> ```
> dependencies {
>   spotbugsPlugins 'com.h3xstream.findsecbugs:findsecbugs-plugin:1.11.0'
> }
>
> spotbugs {
>   toolVersion = '4.5.3'
> }
> ```
# IDE Setup

> [!expand-ui]- IntelliJ
> ![[Java - Spring - @NonNull @NonNullFields @Nullable @NonNullApi/intellij-compiler-settings.png|800]]

> [!expand-ui]- Eclipse
> ![[Java - Spring - @NonNull @NonNullFields @Nullable @NonNullApi/eclipse-compiler-settings.png|800]]

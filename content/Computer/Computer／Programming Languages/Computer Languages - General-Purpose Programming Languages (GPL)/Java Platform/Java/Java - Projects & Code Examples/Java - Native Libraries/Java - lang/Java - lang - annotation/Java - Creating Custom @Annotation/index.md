---
title: "Java - Creating Custom @Annotation"
created: 2021-11-26T03:50:16.256-06:00
modified: 2021-11-26T03:50:40.765-06:00
parent: "[[Java - lang - annotation]]"
children: []
---
# 4 Annotations Used When Writing Annotations

```merge-table
{
  "rows": [
    [
      {
        "content": "@Annotation",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "<code><font style=\"color: rgb(128,128,0);\"><strong>@Document</strong></font></code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "whether to put the annotation in Javadocs"
    ],
    [
      {
        "content": "<code><font style=\"color: rgb(128,128,0);\"><strong>@Retention</strong></font></code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "when the annotation is needed:\n- <code><strong>RetentionPolicy.SOURCE</strong></code><em>– </em>discard during the compile. These annotations don’t make any sense after the compilation has been completed, so they aren’t written to the bytecode. Examples:\n\t- <code>@Override</code>\n\t- <code>@SuppressWarnings</code>\n- <code><strong>RetentionPolicy.CLASS</strong></code><em>– </em>discard during class load. Useful when doing bytecode-level post-processing. Somewhat surprisingly, this is the default\n- <code><strong>RetentionPolicy.RUNTIME</strong></code> <em> – </em>do not discard. The annotation should be available for reflection at runtime. This is what we generally use for our custom annotations"
    ],
    [
      {
        "content": "<code><font style=\"color: rgb(128,128,0);\"><strong>@Target</strong></font></code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "where the annotation can go:\n- <em><strong>ElementType.TYPE</strong> (class, interface, enum)</em>\n- <em><strong>ElementType.FIELD</strong> (instance variable)</em>\n- <strong><em>ElementType.METHOD</em></strong>\n- <strong><em>ElementType.PARAMETER</em></strong>\n- <strong><em>ElementType.CONSTRUCTOR</em></strong>\n- <strong><em>ElementType.LOCAL\\_VARIABLE</em></strong>\n- <em><strong>ElementType.ANNOTATION\\_TYPE</strong> (on another annotation)</em>\n- <em><strong>ElementType.PACKAGE</strong> (remember package-info.java)</em>"
    ],
    [
      {
        "content": "<code><font style=\"color: rgb(128,128,0);\"><strong>@Inherited</strong></font></code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "whether subclasses get the annotation"
    ]
  ]
}
```
# Custom Java Annotation Example

below is custom <font style="color: rgb(128,128,0);">@Todo</font> annotation:
```java
package com.marcuschiu.example

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@interface Todo {
	public enum Priority {LOW, MEDIUM, HIGH}
	public enum Status {STARTED, NOT_STARTED}

	String author() default "Marcus Chiu";
	Priority priority() default Priority.LOW;
	Status status() default Status.NOT_STARTED;
}
```

below is an example use of <font style="color: rgb(128,128,0);">@Todo</font> annotation:
```java
@Todo(
	priority = Todo.priority.HIGH,
	author   = "Marcus Chiu",
	status 	 = Todo.Status.STARTED)
public ClassA {

	@Todo(
		priority = Todo.Priority.MEDIUM,
		author = "Marcus Chiu",
		status = Todo.Status.STARTED)
	public void incompleteMethod1() {
		...
	}
}
```

below is an example consumer of <font style="color: rgb(128,128,0);">@Todo</font> annotation:
```java
Class classA = ClassA.class;

for(Method method : classA.getMethods()) {

	Annotation annotation = method.getAnnotation(Todo.class);
	Todo todoAnnotation = (Todo) annotation;

	if(todoAnnotation != null) {
		System.out.println("Method Name: " + method.getName());
		System.out.println("Author: "      + todoAnnotation.author());
		System.out.println("Priority: "    + todoAnnotation.priority());
		System.out.println("Status: "      + todoAnnotation.status());
	}
}
```

---
title: "Builder Pattern"
created: 2019-12-11T16:05:31.183-06:00
modified: 2023-06-02T19:21:50.252-05:00
parent: "[[Creational Design Patterns]]"
children: []
---
###### Builder Pattern
````excerpt
- is a type of [[Creational Design Patterns|creational design pattern]] that utilizes <em>cascade method pattern</em> and/or <em>method chaining</em>
````
^excerpt

# Example Code

<strong>Problem:</strong> designing a class with multiple fields that are required and/or optional, without several constructors nor allowing invalid object states, and maintaining readability
```java
public static void main(String args[]) {
    Employee e1 = Employee.builder(1234, "Marcus Chiu")
                              .comment("hello, world!")
                              .description("this is the most talented guy in the entire world")
                              .build();
    Employee e2 = Employee.builder(1235, "Erina Chiu")
                              .description("sister of marcus chiu")
                              .build();
}
```
```java
public class Employee {
 
    // required
    private Integer id;
    private String name;
 
    // optional
    private String description;
    private String comment;

	public static EmployeeBuilder build(Integer id, String name) {
		return new EmployeeBuilder(id, name);
	}
 
    public static class EmployeeBuilder {
        private Integer id;
        private String name;
        private String description;
        private String comment;
 
        public EmployeeBuilder(Integer id, String name) {
            this.id = id;
            this.name = name;
        }
 
        public EmployeeBuilder description(String description) {
            this.description = description;
            return this;
        }
 
        public EmployeeBuilder comment(String comment) {
            this.comment = comment;
            return this;
        }
 
        public Employee build() {
            Employee e = new Employee();
            e.id = this.id;
            e.name = this.name;
            e.description = this.description;
            e.comment = comment;
            return e;
        }
    }
}
```

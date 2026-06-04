---
title: "Prototype Builder Pattern"
created: 2023-06-02T18:59:01.499-05:00
modified: 2026-01-10T03:58:15.544-06:00
parent: "[[Creational Design Patterns]]"
children: []
---
###### Prototype Builder Pattern
````excerpt
- is a type of [[Creational Design Patterns|creational builder pattern]] that combines both [[Prototype Pattern]] and [[Builder Pattern]] together
````
^excerpt

# Code Examples

> [!expand-ui]- Prototype Builder from Object Instance
> ```java
> @Getter
> @Builder
> @ToString
> public class Employee {
>
>     private String name;
>     private String description;
>  
>     public EmployeePrototypeBuilder toPrototypeBuilder() {
>         var prototype = Employee.builder()
>             .name(this.name)
>             .description(this.description)
>             .build();
>         return new EmployeePrototypeBuilder(prototype);
>     }
>
>     public static class EmployeePrototypeBuilder {
>         private Employee prototype;
>         private String name;
>         private boolean nameSet = false;
>         private String description;
>         private boolean descriptionSet = false;
>
>         private EmployeePrototypeBuilder(Employee prototype) {
>             this.prototype = prototype;
>         }
>   
>         public EmployeePrototypeBuilder name(String name) {
>             this.name = name;
>             this.nameSet = true;
>             return this;
>         }
>   
>         public EmployeePrototypeBuilder description(String description) {
>             this.description = description;
>             this.descriptionSet = true;
>             return this;
>         }
>
>         private void resetFlags() {
>             this.nameSet = false;
>             this.descriptionSet = false;
>         }
>   
>         public Employee build() {
>             var e = Employee.builder()
>                 .name(this.nameSet ? this.name : prototype.name)
>                 .description(this.descriptionSet ? this.description : prototype.description)
>                 .build();
>             resetFlags();
>             return e;
>         }
>     }
> }
> ```
> ```
> public class Main {
>     public static void main(String[] args) {
>         Employee employee = Employee.builder()
>                                 .name("default name")
>                                 .description("default description")
>                                 .build();
>     
>         EmployeePrototypeBuilder prototypeBuilder = employee.toPrototypeBuilder();
>         Employee employee1 = prototypeBuilder.name("marcus").build();
>         Employee employee2 = prototypeBuilder.build();
>
>         System.out.println(employee1); // Employee(name=marcus, description=default description)
>         System.out.println(employee2); // Employee(name=default name, description=default description)
>     }
> }
> ```

> [!expand-ui]- Prototype Builder from Builder Instance (BROKEN)
> ```
> public interface Prototype<T> {
>     T prototype();
> }
> ```
> ```java
> public class Employee {
>     private String name; 
>     private String description;
>
> 	public static EmployeeBuilder builder() {
> 		return new EmployeeBuilder();
> 	}
>  
>     public static class EmployeeBuilder implements Prototype<EmployeeBuilder> {
>         private String name;
>         private String description;
>  
>         public EmployeeBuilder name(String name) {
>             this.name = name;
>             return this;
>         }
>  
>         public EmployeeBuilder description(String description) {
>             this.description = description;
>             return this;
>         }
>  
>         public EmployeeEmployee build() {
>             Employee e = new Employee();
>             e.name = this.name;
>             e.description = this.description;
>             return e;
>         }
>
> 		@Override
> 		public EmployeeBuilder prototype() {
> 			Builder builder = new Builder();
> 			builder.name(name);
> 			builder.descrption(description);
> 			return builder;
> 		}
>     }
> }
> ```
> ```
> public static void main(String[] args) {
> 	EmployeeBuilder baseBuilder = Employee.builder().description("default description");
>  	Employee employee1 = baseBuilder.name("marcus").build();
>
> 	EmployeeBuilder prototypeBuilder1 = builder.prototype().description("default description 1");
> 	Employee employee1a = prototypeBuilder1.name("marcus").build();
>  	Employee employee1b = prototypeBuilder1.name("marcus").build();
>
>   	EmployeeBuilder prototypeBuilder2 = builder.prototype().description("default description 2");
>  	Employee employee2a = prototypeBuilder2.name("marcus").build();
>  	Employee employee2b = prototypeBuilder2.name("marcus").build();
> }
> ```

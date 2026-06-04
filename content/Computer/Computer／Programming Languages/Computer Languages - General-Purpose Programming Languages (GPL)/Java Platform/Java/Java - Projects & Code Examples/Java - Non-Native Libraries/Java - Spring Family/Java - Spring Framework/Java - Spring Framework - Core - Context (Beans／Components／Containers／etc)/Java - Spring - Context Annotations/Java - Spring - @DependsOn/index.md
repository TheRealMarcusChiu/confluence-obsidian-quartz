---
title: "Java - Spring - @DependsOn"
created: 2021-06-14T18:50:20.185-05:00
modified: 2022-08-23T22:44:46.605-05:00
parent: "[[Java - Spring - Context Annotations]]"
children: []
---
We can use <em>@DependsOn</em> on the dependent class specifying the names of the dependency beans.
# Example

Let's say we have a <em>FileProcessor</em> which depends on a <em>FileReader</em> and <em>FileWriter</em>. In this case, <em>FileReader</em> and <em>FileWriter</em> should be initialized before the <em>FileProcessor</em>.
```
@Configuration
public class Config {
 
    @Bean
    @DependsOn({"fileReader","fileWriter"})
    public FileProcessor fileProcessor(){
        return new FileProcessor();
    }
    
    @Bean("fileReader")
    public FileReader fileReader() {
        return new FileReader();
    }
    
    @Bean("fileWriter")
    public FileWriter fileWriter() {
        return new FileWriter();
    }   
}
```

<strong><em>FileProcessor</em> specifies its dependencies with <em>@DependsOn</em></strong>. We can also annotate a <em>Component </em>with <em>@DependsOn:</em>
```
@Component
@DependsOn({"filereader", "fileWriter"})
public class FileProcessor {}
```
> [!info]
> <em>Using DependsOn at the class level has no effect unless @ComponentScan is being used</em>
# Resources
- [https://www.baeldung.com/spring-depends-on](https://www.baeldung.com/spring-depends-on)

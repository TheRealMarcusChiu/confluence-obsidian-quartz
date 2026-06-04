---
title: "Jackson Annotations - @JsonIgnoreProperties"
created: 2020-11-29T22:29:23.760-06:00
modified: 2020-11-29T22:33:40.504-06:00
parent: "[[Java - Jackson (Codehaus vs FasterXML) - ObjectMapper]]"
children: []
---
<code><font style="color: rgb(128,128,0);">@JsonIgnoreProperties</font></code> is used at class-level or field-level to mark a property or list of properties to be ignored
### Code Examples
> [!tabs]
>
> === Class Level
>
> ```
> import java.io.IOException;
> import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
> import com.fasterxml.jackson.databind.ObjectMapper;
>
> public class JacksonTester {
>    public static void main(String args[]) {
>       ObjectMapper mapper = new ObjectMapper();
>       try {
>          Student student = new Student(1,11,"1ab","Mark");       
>          String jsonString = mapper
>             .writerWithDefaultPrettyPrinter()
>             .writeValueAsString(student);
>          System.out.println(jsonString);
>       }
>       catch (IOException e) { 
>          e.printStackTrace();
>       }   
>    }
> }
>
> @JsonIgnoreProperties({ "id", "systemId" })
> class Student {
>    public int id;
>    public String systemId;
>    public int rollNo;
>    public String name;
>
>    Student(int id, int rollNo, String systemId, String name){
>       this.id = id;
>       this.systemId = systemId;
>       this.rollNo = rollNo;
>       this.name = name;
>    }
> }
> ```
>
> output
> ```
> {
>    "rollNo" : 11,
>    "name" : "Mark"
> }
> ```
>
> === Field Level
>
> TODO

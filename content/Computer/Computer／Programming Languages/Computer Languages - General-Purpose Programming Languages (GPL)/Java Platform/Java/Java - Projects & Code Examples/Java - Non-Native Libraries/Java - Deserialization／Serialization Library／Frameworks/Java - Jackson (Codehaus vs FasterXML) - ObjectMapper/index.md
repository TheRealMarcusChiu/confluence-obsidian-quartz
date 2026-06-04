---
title: "Java - Jackson (Codehaus vs FasterXML) - ObjectMapper"
created: 2020-11-29T22:28:50.105-06:00
modified: 2021-08-31T20:12:58.359-05:00
parent: "[[Java - Deserialization／Serialization Library／Frameworks]]"
children:
  - "[[Jackson - CSV]]"
  - "[[Jackson - ObjectMapper - Custom Null Serializer]]"
  - "[[Jackson - ObjectMapper - Custom Serializer (for Base Data Types)]]"
  - "[[Jackson - ObjectMapper - Custom Serializer (for Complex Data Types)]]"
  - "[[Jackson - ObjectMapper - POJO Outside Our Control]]"
  - "[[Jackson Annotations - @JsonIgnoreProperties]]"
---
<strong>Jackson</strong> is a type of [[Java - Deserialization／Serialization Library／Frameworks|Java Deserialization/Serialization Frameworks]]
# Tutorials
- [https://www.tutorialspoint.com/jackson_annotations/index.htm](https://www.tutorialspoint.com/jackson_annotations/index.htm)
- [https://www.baeldung.com/jackson-object-mapper-tutorial](https://www.baeldung.com/jackson-object-mapper-tutorial)

# Code
- [https://github.com/java-code-examples/jackson-fasterxml-examples](https://github.com/java-code-examples/jackson-fasterxml-examples)

# <code>org.codehaus.jackson</code>  vs  <code>com.fasterxml.jackson</code>
- <code><font style="color: rgb(128,128,128);">org.codehaus.jackson</font></code> is an older version of Jackson
- <code><font style="color: rgb(128,128,128);">com.fasterxml.jackson</font></code> represents the new project and package

The reason is, Jackson has moved from Codehaus to Github when releasing Jackson 2.

See [here](https://github.com/FasterXML/jackson-docs/wiki/Presentation-Jackson-2.0) for details
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

---
title: "Jackson - CSV"
created: 2021-04-18T11:12:20.420-05:00
modified: 2021-05-02T16:25:21.843-05:00
parent: "[[Java - Jackson (Codehaus vs FasterXML) - ObjectMapper]]"
children:
  - "[[Jackson - CSV - CsvSchema]]"
  - "[[Jackson - CSV - Custom NullSerializer]]"
  - "[[Jackson - CSV - Retrieving List of POJO Field Names and Types as Seen from CsvMapper]]"
---
- code: [https://github.com/java-code-examples/jackson-fasterxml-csv-example](https://github.com/java-code-examples/jackson-fasterxml-csv-example)

# 1 - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# 2 - Dependency
```
<!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.dataformat/jackson-dataformat-csv -->
<dependency>
    <groupId>com.fasterxml.jackson.dataformat</groupId>
    <artifactId>jackson-dataformat-csv</artifactId>
    <version>2.12.1</version>
</dependency>
```
# 3 - Example

our POJO object we want in CSV format
```
@Data
public static class Temp2 {
    public String field1 = "field1 here";
    public String field2 = "field2 here";
    public Temp1 temp1 = new Temp1();
}
```

setup CsvMapper & CsvSchema & ObjectWriter
```
// 1 - Initiatize Mapper
CsvMapper mapper = new CsvMapper();

// 2.1 - Initialize Schema (from POJO adheres to @JsonIgnore, etc)
CsvSchema schema = mapper.schemaFor(Pojo.class);

// 2.2 - Initialize Schema (manually)
CsvSchema schema = CsvSchema.builder()
	.addColumn("field1")
	.addColumn("field2")
	.build() // NOTE we ignore Temp2's temp1 field
	.withHeader(); 

// 3 - Initialize Writer
ObjectWriter writer = mapper.writerFor(Temp2.class).with(schema);
```

using ObjectWriter
```
// Get CSV of single Temp2 object
writer.writeValueAsString(new Temp2());

// Get CSV of a list of Temp2 objects
List<Temp2> temp2List = Arrays.asList(new Temp2(), new Temp2());
writer.writeValues(new File("sample.csv")).writeAll(temp2List);
```

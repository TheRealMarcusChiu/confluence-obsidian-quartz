---
title: "Jackson - CSV - Custom NullSerializer"
created: 2021-04-28T23:19:05.734-05:00
modified: 2021-06-07T22:47:52.076-05:00
parent: "[[Jackson - CSV]]"
children: []
---
- see: [[Jackson - ObjectMapper - Custom Null Serializer]]

# 1 - Problem
```
public class Main {
    public static void main(String[] args) throws JsonProcessingException {
        CsvMapper mapper = new CsvMapper();
        CsvSchema schema = mapper.schemaFor(Pojo.class).withUseHeader(true);
        ObjectWriter writer = mapper.writer(schema);

        Pojo pojo = new Pojo();
        pojo.setFirstName("John");
        pojo.setLastName(null);

        String csv = writer.writeValueAsString(pojo);
        System.out.println(csv);
    }

    @Data
    public static class Pojo {
        private String firstName;
        private String lastName;
    }
}
```
# 2 - Solutions
###### Solution 1 - Create Custom Null Serializer
```
public class CustomNullSerializer extends JsonSerializer<Object> {
    public void serialize(Object value, JsonGenerator jgen, SerializerProvider provider) throws IOException {
        jgen.writeString("null");
    }
}

CsvMapper mapper = new CsvMapper();
DefaultSerializerProvider.Impl sp = new DefaultSerializerProvider.Impl();
sp.setNullValueSerializer(new CustomNullSerializer());
mapper.setSerializerProvider(sp);
```
###### Solution 2 - Configure CsvSchema
```
CsvSchema schema = mapper.schemaFor(Pojo.class).withNullValue("null");
```

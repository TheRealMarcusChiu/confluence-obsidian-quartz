---
title: "Jackson - ObjectMapper - Custom Serializer (for Base Data Types)"
created: 2021-05-14T22:28:16.032-05:00
modified: 2021-06-07T22:36:05.140-05:00
parent: "[[Java - Jackson (Codehaus vs FasterXML) - ObjectMapper]]"
children: []
---
let's say we want to serialize String fields differently
# 1 - Custom Serializer for String.class
```
public class CustomStringSerializer extends StdScalarSerializer<String> {

    protected CustomStringSerializer(Class<String> t) {
        super(t);
    }

    @Override
    public void serialize(String value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeString(value.replaceAll("\\","\\\\"));
    }
}
```
# 2 - Adding Custom Serializer to ObjectMapper
```
ObjectMapper mapper = new ObjectMapper();
SimpleModule module = new SimpleModule();
module.addSerializer(String.class, new CustomStringSerializer(String.class));
mapper.registerModule(module);
```

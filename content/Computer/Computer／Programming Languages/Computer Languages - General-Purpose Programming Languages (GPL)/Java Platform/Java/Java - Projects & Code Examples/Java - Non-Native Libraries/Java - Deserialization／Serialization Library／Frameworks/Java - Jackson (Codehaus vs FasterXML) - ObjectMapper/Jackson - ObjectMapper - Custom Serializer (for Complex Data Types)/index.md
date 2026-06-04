---
title: "Jackson - ObjectMapper - Custom Serializer (for Complex Data Types)"
created: 2021-06-07T22:36:12.935-05:00
modified: 2021-06-07T22:46:25.185-05:00
parent: "[[Java - Jackson (Codehaus vs FasterXML) - ObjectMapper]]"
children: []
---
let's say we want to serialize a Pojo object differently
# 1 - Custom Serializer for Pojo.class
```
public class CustomSerializer extends StdSerializer<Pojo> {
    
    public CustomSerializer() {
        this(null);
    }
  
    public CustomSerializer(Class<Pojo> pojo) {
        super(pojo);
    }

    @Override
    public void serialize(Pojo pojo, JsonGenerator jgen, SerializerProvider provider) throws IOException, JsonProcessingException {
        jgen.writeStartObject();
        jgen.writeNumberField("id", pojo.id);
        jgen.writeStringField("itemName", pojo.itemName);
        jgen.writeNumberField("owner", pojo.owner.id);
        jgen.writeEndObject();
    }
}
```
# 2.1 - Adding Custom Serializer to ObjectMapper
```
ObjectMapper mapper = new ObjectMapper();
SimpleModule module = new SimpleModule();
module.addSerializer(Item.class, new ItemSerializer());
mapper.registerModule(module);

Pojo pojo = new Pojo(1, "pojo", new User(2, "theUser"));
String serialized = mapper.writeValueAsString(pojo);
```
# 2.2 - Adding Custom Serializer to Class
```
@JsonSerialize(using = PojoSerializer.class)
public class Pojo {
    ...
}
```

now perform standard ObjectMapper
```
Pojo pojo = new Pojo(1, "pojo", new User(2, "theUser"));
String serialized = new ObjectMapper().writeValueAsString(pojo);
```
# 2.3 - Adding Custom Serializer to Field
```
public class OuterPojo {
    @JsonSerialize(using = PojoSerializer.class)
    private Pojo pojo;
}
```

now perform standard ObjectMapper
```
OuterPojo outerPojo = new OuterPojo(new Pojo(1, "pojo", new User(2, "theUser")));
String serialized = new ObjectMapper().writeValueAsString(outerPojo);
```

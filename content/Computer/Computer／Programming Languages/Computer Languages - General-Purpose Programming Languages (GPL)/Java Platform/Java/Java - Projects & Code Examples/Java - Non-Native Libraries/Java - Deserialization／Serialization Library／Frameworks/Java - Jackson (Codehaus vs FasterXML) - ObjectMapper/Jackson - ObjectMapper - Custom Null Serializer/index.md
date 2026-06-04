---
title: "Jackson - ObjectMapper - Custom Null Serializer"
created: 2021-06-07T22:25:39.690-05:00
modified: 2021-06-07T23:04:43.719-05:00
parent: "[[Java - Jackson (Codehaus vs FasterXML) - ObjectMapper]]"
children: []
---
# 1 - Create Custom NullSerializer

Override the JsonSerializer serialize method as below.
```
public class NullSerializer extends JsonSerializer<Object> {
  public void serialize(Object value, JsonGenerator jgen, SerializerProvider provider) throws IOException, JsonProcessingException {
    jgen.writeString("anything you want here");
  }
}
```
# 2 - Using Custom Null Serializer

then you can set <code>NullSerializer</code> as default for custom object mapper:
```
public class CustomJacksonObjectMapper extends ObjectMapper {

public CustomJacksonObjectMapper() {
    super();
    DefaultSerializerProvider.Impl sp = new DefaultSerializerProvider.Impl();
    sp.setNullValueSerializer(new NullSerializer());
    this.setSerializerProvider(sp);
  }
}
```

or specify it for some property using <code>@JsonSerialize</code> annotation, e.g:
```
public class MyClass {
  @JsonSerialize(nullsUsing = NullSerializer.class)
  private String property;
}
```

or at class level
```
@JsonSerialize(nullsUsing = NullSerializer.class)
public class MyClass {
  private String property;
}
```

---
title: "Jackson - ObjectMapper - POJO Outside Our Control"
created: 2021-05-19T18:00:52.837-05:00
modified: 2021-08-31T20:11:34.933-05:00
parent: "[[Java - Jackson (Codehaus vs FasterXML) - ObjectMapper]]"
children: []
---
say we have a [[Classes／Objects Types (POCO／POJO／POPO - Data Transfer Object DTO - Domain Model - Persistence Model - Java Data Object (JDO))|POJO]] in which we can't add <code><font style="color: rgb(128,128,0);">@Annotations</font></code> to
```
@Data
public class Pojo {
	private String firstName;
	private String lastName;
	private Integer age;
}
```
# Methods

> [!expand-ui]- Programmatically 1
> ```
> mapper.writeValueAsString(JsonView.with(list)
> 	.onClass(Pojo.class, match()
> 		.exclude("*")
> 		.include("lastName", "age")));
> ```

> [!expand-ui]- Annotation (Per Class)
> we create a MixIn class
> ```
> @Data
> abstract class PojoMixIn {
> 	@JsonIgnore
> 	private String name;
> }
> ```
>
> configure ObjectMapper
> ```
> objectMapper.getSerializationConfig().addMixInAnnotations(Pojo.class, PojoMixIn.class);
> objectMapper.addMixIn(Pojo.class, PojoMixIn.class); // for Jackson 2.5+
> ```

> [!expand-ui]- Annotation (All Classes)
> If you want to ALWAYS exclude certain properties for any class, you could use setMixInResolver method
> ```
> @JsonIgnoreProperties({"id", "index", "version"})
> abstract class MixIn { }
>
> mapper.setMixInResolver(new ClassIntrospector.MixInResolver() {
> 	@Override
>     public Class<?> findMixInClassFor(Class<?> cls) {
> 		return MixIn.class;  
> 	}
>
> 	@Override
> 	public ClassIntrospector.MixInResolver copy() {
> 		return this;
> 	}
> });
> ```

---
title: "Jackson - CSV - Retrieving List of POJO Field Names and Types as Seen from CsvMapper"
created: 2021-05-04T20:43:28.036-05:00
modified: 2021-06-18T15:43:31.312-05:00
parent: "[[Jackson - CSV]]"
children: []
---
# 1 - ObjectMapper
```
ObjectMapper mapper = new ObjectMapper();
// Construct a Jackson JavaType for your class
JavaType javaType = mapper.getTypeFactory().constructType(Api.class);
// Introspect the given type
BeanDescription beanDescription = mapper.getSerializationConfig().introspect(javaType);
// Find properties
List<BeanPropertyDefinition> properties = beanDescription.findProperties();
properties.forEach(p -> {
    System.out.println(p.getField().getName() + " : " + p.getField().getType().getRawClass().getCanonicalName());
});
```
# 2 - CsvMapper
```
CsvMapper mapper2 = new CsvMapper();
CsvSchema schema = mapper2.schemaForWithView(Api.class, Views.CSV.class).withHeader();
JavaType javaType = mapper2.readerFor(Api.class).getTypeFactory().constructType(Api.class);
BeanDescription beanDescription = mapper2.getSerializationConfig().introspect(javaType);
List<BeanPropertyDefinition> properties = beanDescription.findProperties();

for (CsvSchema.Column next : schema) {
    BeanPropertyDefinition bpd = properties.stream().filter(p -> p.getField().getName().equals(next.getName())).findFirst().get();
    System.out.println(next.getName() + " : " + bpd.getField().getType().getRawClass().getCanonicalName());
}
```
# 3 - CsvMapper (@JsonIgnore)
```
var javaType = mapper.readerFor(pojoType).getTypeFactory().constructType(pojoType);
var beanDescription = mapper.getSerializationConfig().introspect(javaType);
List<BeanPropertyDefinition> bpdList = beanDescription.findProperties();
Set<String> ignoredProperties = mapper.getSerializationConfig().getAnnotationIntrospector()
	.findPropertyIgnorals(beanDescription.getClassInfo()).getIgnored();
bpdList = bpdList.stream()
	.filter(bpd -> !ignoredProperties.contains(bpd.getName()))
	.collect(Collectors.toList());
Map<String, BeanPropertyDefinition> bpdMap = Maps.uniqueIndex(bpdList, BeanPropertyDefinition::getName);
```
# 3 - Imports
```
import com.fasterxml.jackson.databind.BeanDescription;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.introspect.BeanPropertyDefinition;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
```

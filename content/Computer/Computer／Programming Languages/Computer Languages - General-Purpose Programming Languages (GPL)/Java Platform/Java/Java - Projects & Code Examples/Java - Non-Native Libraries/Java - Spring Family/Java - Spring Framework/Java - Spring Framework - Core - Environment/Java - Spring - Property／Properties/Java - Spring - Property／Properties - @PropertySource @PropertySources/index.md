---
title: "Java - Spring - Property／Properties - @PropertySource @PropertySources"
created: 2021-09-25T03:35:43.355-05:00
modified: 2021-09-25T03:47:44.194-05:00
parent: "[[Java - Spring - Property／Properties]]"
children:
  - "[[Java - Spring - Property／Properties - @PropertySource YAML File]]"
---
# @PropertySource - Code Examples
```
@Configuration
@PropertySource("classpath:config.properties", ignoreResourceNotFound=true)
public class AppConfig {}
```
```
@Configuration
@PropertySource("file:${app.home}/app.properties")
public class AppConfig {}
```
# @PropertySources - Code Examples
```
@Configuration
@PropertySources({
	@PropertySource("classpath:config.properties"),
	@PropertySource("classpath:db.properties")
})
public class AppConfig {}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

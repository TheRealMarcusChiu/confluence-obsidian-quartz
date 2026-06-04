---
title: "Java - Bean Validation 2.0 (JSR 380)"
created: 2022-02-24T02:18:48.025-06:00
modified: 2022-03-01T03:30:28.047-06:00
parent: "[[Java - Validation Frameworks]]"
children:
  - "[[Java - Bean Validation 2.0 (JSR 380) - Bean／Object Constraints]]"
  - "[[Java - Bean Validation 2.0 (JSR 380) - Method Constraints]]"
---
- <strong>Bean Validation 2.0 (JSR 380)</strong> - is a specification of the Java API for bean validation
- <strong>Validation API</strong> - contains only interfaces / annotations etc, no implementations
- <strong>Hibernate Validator</strong> - is the reference implementation, and currently the only [certified implementation](http://beanvalidation.org/2.0/) of JSR-380

# Dependencies

> [!expand-ui]- Validation API
> ```
> <dependency>
>     <groupId>javax.validation</groupId>
>     <artifactId>validation-api</artifactId>
>     <version>2.0.1.Final</version>
> </dependency>
> ```

> [!expand-ui]- Hibernate Validator
> ```
> <dependency>
>     <groupId>org.hibernate.validator</groupId>
>     <artifactId>hibernate-validator</artifactId>
>     <version>6.0.13.Final</version>
> </dependency>
> ```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://www.baeldung.com/javax-validation](https://www.baeldung.com/javax-validation)

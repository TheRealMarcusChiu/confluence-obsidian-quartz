---
title: "Representational State Transfer (REST) - RESTful"
created: 2019-12-12T20:58:37.073-06:00
modified: 2021-08-31T20:13:54.981-05:00
parent: "[[API-DP - CRUDing Data]]"
children:
  - "[[Open Data Protocol (OData)]]"
---
###### Representational State Transfer (REST) - RESTful
- is a software architectural style that defines a set of constraints to be used for creating [[API Design Patterns (API-DP)|Web Services]]

# REST - Constraints
1. it should be stateless
2. it should access all the resources from the server using only [[Uniform Resource Locator (URL) - Uniform Resource Identifier (URI) - Uniform Resource Name (URN) - Path／Query／Anchor|URI]]
3. it does not have inbuilt [[Encryption|encryption]]
4. it does not have session
5. it is not dependent on any single communication protocol
6. used for performing CRUD operations (e.g. for [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]] one can use: GET, POST, PUT and DELETE)
7. it should return the result only in the form of a [[Data Language & Library (Message／Transfer／Interchange／Storage／Format／Serializer／Deserializer)|Data Language & Library (Message/Transfer/Interchange/Storage/Format/Serializer/Deserializer)]] language (e.g. [[JavaScript Object Notation (JSON)|JSON]] or [[Extensible Markup Language (XML)|XML]], OData, etc)

# REST - Example Implementations
- [[Java - Jakarta RESTful Web Services (JAX-RS)]]
- [[Java - Spring - Data - @RepositoryRestResource]]

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven](https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven)

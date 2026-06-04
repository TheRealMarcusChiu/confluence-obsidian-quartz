---
title: "Java - Spring - JPA @Transient vs Spring @Transient vs transient Keyword"
created: 2020-12-01T10:23:33.104-06:00
modified: 2022-12-22T10:16:24.431-06:00
parent: "[[Java - Spring _Examples]]"
children: []
---
- <code><font style="color: rgb(51,102,255);">transient</font></code><font style="color: rgb(83,90,96);"> is to exclude all serializations (over the wire, saving to disk, saving to DB)</font>
- <code><font style="color: rgb(128,128,0);">@javax.persistence.Transient</font></code><font style="color: rgb(83,90,96);"> is specifically for [[Java - Java Persistence API (JPA) - Jakarta Persistence|JPA]] DB serialization</font>
- <code><font style="color: rgb(128,128,0);">@org.springframework.data.annotation.Transient</font></code><font style="color: rgb(83,90,96);"> is for ObjectMapping Framework serializations used within Spring</font>

# <font style="color: rgb(83,90,96);">Code Examples</font>
> [!tabs]
>
> === transient
>
> === JPA @Transient
>
> === Spring @Transient
>
> ```
> @Entity
> public class User {
>
> 	@Id
> 	private long id;
>
> 	@Column(name = "username")
> 	private String username;
>
> 	@Column(name = "email")
> 	private String email;
>
> 	@Column(name = "password")
> 	private String password;
> }
> ```
>
> Now to map this java entity object to JSON format you can either use a mapping framework (e.g jackson: <code><font style="color: rgb(51,102,255);">com.fasterxml.jackson.databind.ObjectMapper</font></code>) or do it manually.
>
> The JSON format output that you would get when to convert user 2 object to JSON is:
> ```
> {
>    "id": 2,
>    "email": "test03@gmail.com",
>    "username": "test03",
>    "password": "$2a$10$UbvmdhfcKxSNr/I4CjOLtOkKGX/j4/xQfFrv3FizxwEVk6D9sAoO"
> }
> ```
>
> Now if you added:
> ```
> @org.springframework.data.annotation.Transient
> @Column(name = "password")
> private String password;
> ```
>
> and then used the Mapping Framework to again generate the JSON for the user 2 entity you would get:
> ```
> {
>    "id": 2,
>    "email": "test03@gmail.com",
>    "username": "test03",
> }
> ```
>
> Note the password field is missing from you JSON output. Thats because <code><font style="color: rgb(128,128,0);">@org.springframework.data.annotation.Transient</font></code> specifically states to the spring framework that the Object Mapper you are using should not include this value when converting from Java Object to JSON

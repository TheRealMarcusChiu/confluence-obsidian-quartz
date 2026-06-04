---
title: "Java - Jakarta RESTful Web Services (JAX-RS)"
created: 2021-04-17T13:15:40.897-05:00
modified: 2021-10-15T16:23:51.057-05:00
parent: "[[Java - Web (HTTP) Client／Server Frameworks]]"
children: []
---
###### Jakarta RESTful Web Services (JAX-RS)
- is one of many [[Java - Web (HTTP) Client／Server Frameworks|Java - Web (HTTP) Client/Server Frameworks]]
- is a specification, a set of interfaces and annotations offered by Java EE that provides support in creating web services according to the [[Representational State Transfer (REST) - RESTful|Representational State Transfer]] design pattern

# JAX-RS - Implementations
- [RESTEasy](http://resteasy.jboss.org/)
- [Jersey](https://jersey.java.net/)

# JAX-RS - Example

have a Maven webapp project with the following dependency in the <em>pom.xml</em>:
```
<dependency>
    <groupId>javax</groupId>
    <artifactId>javaee-api</artifactId>
    <version>7.0</version>
    <scope>provided</scope>
</dependency>
```

write the entry class: an empty class that extends <code><font style="color: rgb(122,134,154);">javax.ws.rs.core.Application</font></code> and is annotated with <code><font style="color: rgb(122,134,154);">javax.ws.rs.ApplicationPath</font></code>:
```
@ApplicationPath("/api")
public class RestApplication extends Application {
}
```

We defined the entry path as being <code><font style="color: rgb(122,134,154);">/api</font></code><em>. </em>Whatever other paths we declare for our resources, they will be prefixed with <code><font style="color: rgb(122,134,154);">/api</font></code>.

Next, let's see a resource:
```
@Path("/notifications")
public class NotificationsResource {
    @GET
    @Path("/ping")
    public Response ping() {
        return Response.ok().entity("Service online").build();
    }

    @GET
    @Path("/get/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getNotification(@PathParam("id") int id) {
        return Response.ok()
          .entity(new Notification(id, "john", "test notification"))
          .build();
    }

    @POST
    @Path("/post/")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response postNotification(Notification notification) {
        return Response.status(201).entity(notification).build();
    }
}
```

Deploy this war on any application server implementing JEE7 and the following commands will work:
```
curl http://localhost:8080/simple-jaxrs-ex/api/notifications/ping/
curl http://localhost:8080/simple-jaxrs-ex/api/notifications/get/1
curl -X POST -d '{"id":23,"text":"lorem ipsum","username":"johana"}' 
  http://localhost:8080/simple-jaxrs-ex/api/notifications/post/ 
  --header "Content-Type:application/json"
```
# Resources
- [https://www.baeldung.com/jax-rs-spec-and-implementations](https://www.baeldung.com/jax-rs-spec-and-implementations)

---
title: "Java - Mockito - Enum Answers (RETURNS_SELF)"
created: 2021-07-15T20:28:13.310-05:00
modified: 2021-07-15T20:36:16.078-05:00
parent: "[[Java - Mockito - Enum Answers (CALLS_REAL_METHODS - RETURNS_DEEP_STUBS - RETURNS_DEFAULTS - RETURNS_MOCKS - RETURNS_SELF - RETURNS_SMART_NULLS)]]"
children: []
---
Allows Builder mocks to return itself whenever a method is invoked that returns a Type equal to the class or a superclass.

<strong>Keep in mind this answer uses the return type of a method. If this type is assignable to the class of the mock, it will return the mock. Therefore if you have a method returning a superclass (for example <code>Object</code>) it will match and return the mock.</strong>
# Example Use Case

Consider a HttpBuilder used in a HttpRequesterWithHeaders
```
public class HttpRequesterWithHeaders {

    private HttpBuilder builder;

    public HttpRequesterWithHeaders(HttpBuilder builder) {
        this.builder = builder;
    }

    public String request(String uri) {
        return builder.withUrl(uri)
                .withHeader("Content-type: application/json")
                .withHeader("Authorization: Bearer")
                .request();
    }
}

private static class HttpBuilder {

    private String uri;
    private List<String> headers;

    public HttpBuilder() {
        this.headers = new ArrayList<String>();
    }

    public HttpBuilder withUrl(String uri) {
        this.uri = uri;
        return this;
    }

    public HttpBuilder withHeader(String header) {
        this.headers.add(header);
        return this;
    }

    public String request() {
        return uri + headers.toString();
    }
}
```

The following test will succeed
```
@Test
void use_full_builder_with_terminating_method() {
    HttpBuilder builder = mock(HttpBuilder.class, RETURNS_SELF);
    String response = "MOCK-RESPONSE";
    when(builder.request()).thenReturn(response);

    String actualResponse = new HttpRequesterWithHeaders(builder).request("URI");

    assertEquals("MOCK-RESPONSE", actualResponse);
}
```
# Resources
- [https://www.javadoc.io/static/org.mockito/mockito-core/2.6.9/org/mockito/Mockito.html#RETURNS_SELF](https://www.javadoc.io/static/org.mockito/mockito-core/2.6.9/org/mockito/Mockito.html#RETURNS_SELF)

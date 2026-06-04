---
title: "Java - Spring - Web - Request Handling Annotations (@RequestBody @RequestParam @CookieValue @RequestHeader @PathVariable)"
created: 2021-06-14T18:41:35.023-05:00
modified: 2021-10-02T13:37:22.906-05:00
parent: "[[Java - Spring - Web @Annotations]]"
children: []
---
# @RequestBody

<code>[@RequestBody](https://www.baeldung.com/spring-request-response-body)</code> maps the body of the HTTP request to an object (The deserialization is automatic and depends on the content type of the request):
```
@PostMapping("/save")
void saveVehicle(@RequestBody Vehicle vehicle) {
    // ...
}
```
# @RequestParam

We use <code><font style="color: rgb(128,128,0);">@RequestParam</font></code> for accessing HTTP request parameters:
```
@RequestMapping
Vehicle getVehicleByParam(@RequestParam("id") long id) {
    // ...
}
```

It has the same configuration options as the <code><font style="color: rgb(128,128,0);">@PathVariable</font></code> annotation.

In addition to those settings, with <code><font style="color: rgb(128,128,0);">@RequestParam</font></code> we can specify an injected value when Spring finds no or empty value in the request. To achieve this, we have to set the <em>defaultValue</em> argument.

Providing a default value implicitly sets required to false:
```
@RequestMapping("/buy")
Car buyCar(@RequestParam(defaultValue = "5") int seatCount) {
    // ...
}
```
# @CookieValue & @RequestHeader

Besides parameters, there are other HTTP request parts we can access: cookies and headers. We can access them with the annotations <code><font style="color: rgb(128,128,0);">@CookieValue</font></code> and <code><font style="color: rgb(128,128,0);">@RequestHeader</font></code> respectively.

We can configure them the same way as <code><font style="color: rgb(128,128,0);">@RequestParam</font></code>.
# @PathVariable

<code><font style="color: rgb(128,128,0);">@PathVariable</font></code> indicates that a method argument is bound to a URI template variable. We can specify the URI template with the <code><font style="color: rgb(128,128,0);">@RequestMapping</font></code> annotation and bind a method argument to one of the template parts with <code><font style="color: rgb(128,128,0);">@PathVariable</font></code>.

We can achieve this with the <em>name</em> or its alias, the <em>value</em> argument:
```
@RequestMapping("/{id}")
Vehicle getVehicle(@PathVariable("id") long id) {
    // ...
}
```

If the name of the part in the template matches the name of the method argument, we don't have to specify it in the annotation:
```
@RequestMapping("/{id}")
Vehicle getVehicle(@PathVariable long id) {
    // ...
}
```

Moreover, we can mark a path variable optional by setting the argument <em>required</em> to false:
```
@RequestMapping("/{id}")
Vehicle getVehicle(@PathVariable(required = false) long id) {
    // ...
}
```

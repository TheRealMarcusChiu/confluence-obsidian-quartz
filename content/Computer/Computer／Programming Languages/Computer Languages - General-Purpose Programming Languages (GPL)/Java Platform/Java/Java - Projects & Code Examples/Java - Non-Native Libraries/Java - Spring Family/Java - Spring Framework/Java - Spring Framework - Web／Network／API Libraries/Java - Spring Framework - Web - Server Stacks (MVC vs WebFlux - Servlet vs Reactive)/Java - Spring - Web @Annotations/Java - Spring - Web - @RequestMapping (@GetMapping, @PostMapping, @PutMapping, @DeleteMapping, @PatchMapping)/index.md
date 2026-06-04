---
title: "Java - Spring - Web - @RequestMapping (@GetMapping, @PostMapping, @PutMapping, @DeleteMapping, @PatchMapping)"
created: 2021-06-14T18:38:34.719-05:00
modified: 2021-06-14T18:39:23.969-05:00
parent: "[[Java - Spring - Web @Annotations]]"
children: []
---
Simply put, [<em>@RequestMapping</em>](https://www.baeldung.com/spring-requestmapping) marks request handler methods inside <code><font style="color: rgb(128,128,0);">@Controller</font></code> classes; it can be configured using:
- <em>path,</em> or its aliases, <em>name,</em> and <em>value:</em> which URL the method is mapped to
- <em>method:</em> compatible HTTP methods
- <em>params:</em> filters requests based on presence, absence, or value of HTTP parameters
- <em>headers:</em> filters requests based on presence, absence, or value of HTTP headers
- <em>consumes:</em> which media types the method can consume in the HTTP request body
- <em>produces:</em> which media types the method can produce in the HTTP response body

Here's a quick example of what that looks like:
```
@Controller
class VehicleController {

    @RequestMapping(value = "/vehicles/home", method = RequestMethod.GET)
    String home() {
        return "home";
    }
}
```

We can provide default settings for all handler methods in a <code><font style="color: rgb(128,128,0);">@Controller</font></code> class if we apply this annotation on the class level. The only exception is the URL which Spring won't override with method level settings but appends the two path parts.

For example, the following configuration has the same effect as the one above:
```
@Controller
@RequestMapping(value = "/vehicles", method = RequestMethod.GET)
class VehicleController {

    @RequestMapping("/home")
    String home() {
        return "home";
    }
}
```

Moreover, <code><font style="color: rgb(128,128,0);"><em>@GetMapping</em></font></code>, <code><font style="color: rgb(128,128,0);">@PostMapping</font></code>, <code><font style="color: rgb(128,128,0);">@PutMapping</font></code>, <code><font style="color: rgb(128,128,0);">@DeleteMapping</font></code>, and <code><font style="color: rgb(128,128,0);">@PatchMapping</font></code> are different variants of <code><font style="color: rgb(128,128,0);">@RequestMapping </font></code>with the HTTP method already set to GET, POST, PUT, DELETE, and PATCH respectively.

These are available since Spring 4.3 release.

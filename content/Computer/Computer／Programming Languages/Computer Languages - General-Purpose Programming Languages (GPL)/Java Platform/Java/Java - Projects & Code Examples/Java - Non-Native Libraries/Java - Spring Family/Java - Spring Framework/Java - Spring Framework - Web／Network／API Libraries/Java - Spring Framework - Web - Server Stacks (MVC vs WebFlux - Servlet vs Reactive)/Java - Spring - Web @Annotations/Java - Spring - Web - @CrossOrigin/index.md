---
title: "Java - Spring - Web - @CrossOrigin"
created: 2021-06-14T18:45:06.085-05:00
modified: 2021-09-25T19:26:52.631-05:00
parent: "[[Java - Spring - Web @Annotations]]"
children: []
---
<code><font style="color: rgb(128,128,0);">@CrossOrigin</font></code> enables cross-domain communication for the annotated request handler methods:
```
@CrossOrigin
@RequestMapping("/hello")
String hello() {
    return "Hello World!";
}
```

If we mark a class with it, it applies to all request handler methods in it.

We can fine-tune CORS behavior with this annotation's arguments.
# Related
- [[Java - Spring - CORS Support]]

---
title: "Java - Spring - Web - @Controller @RestController"
created: 2021-06-14T18:46:49.419-05:00
modified: 2021-06-14T18:47:30.553-05:00
parent: "[[Java - Spring - Web @Annotations]]"
children: []
---
# <em>@Controller</em>

We can define a Spring MVC controller with <code><font style="color: rgb(128,128,0);">@Controller</font></code>. For more information, please visit [our article about Spring Bean Annotations](https://www.baeldung.com/spring-bean-annotations).
# <em>@RestController</em>

The <code><font style="color: rgb(128,128,0);">@RestController</font></code> combines <code><font style="color: rgb(128,128,0);">@Controller</font></code> and <code>[[Java - Spring - Web - Response Handling Annotations (@ResponseBody @ExceptionHandler @ResponseStatus @ControllerAdvice @RestControllerAdvice)|@ResponseBody]]</code>.

Therefore, the following declarations are equivalent:
```
@Controller
@ResponseBody
class VehicleRestController {
    // ...
}
@RestController
class VehicleRestController {
    // ...
}
```

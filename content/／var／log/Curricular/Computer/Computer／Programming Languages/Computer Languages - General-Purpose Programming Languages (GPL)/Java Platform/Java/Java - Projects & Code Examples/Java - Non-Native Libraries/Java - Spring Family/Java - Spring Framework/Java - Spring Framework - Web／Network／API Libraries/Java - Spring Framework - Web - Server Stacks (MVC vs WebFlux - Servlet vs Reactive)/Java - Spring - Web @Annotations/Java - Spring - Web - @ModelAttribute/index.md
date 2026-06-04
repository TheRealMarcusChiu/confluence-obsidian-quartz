---
title: "Java - Spring - Web - @ModelAttribute"
created: 2021-06-14T18:45:42.222-05:00
modified: 2021-06-17T17:38:45.257-05:00
parent: "[[Java - Spring - Web @Annotations]]"
children: []
---
<code><font style="color: rgb(128,128,0);">@ModelAttribute</font></code> can access elements that are already in the model of an MVC <code><font style="color: rgb(128,128,0);">@Controller<em>,</em></font></code> by providing the model key:
```
@PostMapping("/assemble")
void assembleVehicle(@ModelAttribute("vehicle") Vehicle vehicleInModel) {
    // ...
}
```

Like with [[Java - Spring - Web - Request Handling Annotations (@RequestBody @RequestParam @CookieValue @RequestHeader @PathVariable)|@PathVariable and @RequestParam]], we don't have to specify the model key if the argument has the same name:
```
@PostMapping("/assemble")
void assembleVehicle(@ModelAttribute Vehicle vehicle) {
    // ...
}
```

Besides, <code><font style="color: rgb(128,128,0);">@ModelAttribute</font></code> has another use: if we annotate a method with it, Spring will automatically add the method's return value to the model:
```
@ModelAttribute("vehicle")
Vehicle getVehicle() {
    // ...
}
```

Like before, we don't have to specify the model key, Spring uses the method's name by default:
```
@ModelAttribute
Vehicle vehicle() {
    // ...
}
```

Before Spring calls a request handler method, it invokes all <code><font style="color: rgb(128,128,0);">@ModelAttribute</font></code> annotated methods in the class.

More information about <code><font style="color: rgb(128,128,0);">@ModelAttribute</font></code> can be found in [this article](https://www.baeldung.com/spring-mvc-and-the-modelattribute-annotation).

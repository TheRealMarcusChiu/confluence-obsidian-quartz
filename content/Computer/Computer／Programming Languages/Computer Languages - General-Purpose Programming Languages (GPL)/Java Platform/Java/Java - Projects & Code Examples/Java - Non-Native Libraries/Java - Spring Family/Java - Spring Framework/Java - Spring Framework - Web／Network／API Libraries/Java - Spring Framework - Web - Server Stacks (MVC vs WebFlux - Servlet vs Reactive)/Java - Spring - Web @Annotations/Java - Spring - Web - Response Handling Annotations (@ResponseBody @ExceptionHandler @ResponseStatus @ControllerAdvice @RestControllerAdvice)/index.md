---
title: "Java - Spring - Web - Response Handling Annotations (@ResponseBody @ExceptionHandler @ResponseStatus @ControllerAdvice @RestControllerAdvice)"
created: 2021-06-14T18:43:43.124-05:00
modified: 2022-01-10T23:45:33.162-06:00
parent: "[[Java - Spring - Web @Annotations]]"
children: []
---
# @ResponseBody

In a <code><font style="color: rgb(128,128,0);">[[Java - Spring - Web - @Controller @RestController|@Controller]]</font></code> class, if we mark a request handler method with <code>[@ResponseBody](https://www.baeldung.com/spring-request-response-body)</code><em>,</em> Spring treats the result of the method as the response itself:
```
@ResponseBody
@RequestMapping("/hello")
String hello() {
    return "Hello World!";
}
```

If a <code><font style="color: rgb(128,128,0);">[[Java - Spring - Web - @Controller @RestController|@RestController]]</font></code> class, all request handler methods will inherit <code><font style="color: rgb(128,128,0);">@ResponseBody</font></code> by DEFAULT
# @ExceptionHandler

With this annotation, we can declare a custom error handler method. Spring calls this method when a request handler method throws any of the specified exceptions.

The caught exception can be passed to the method as an argument:
```
@ExceptionHandler(IllegalArgumentException.class)
void onIllegalArgumentException(IllegalArgumentException exception) {
    // ...
}
```
# @ResponseStatus

We can specify the desired HTTP status of the response if we annotate a request handler method with this annotation. We can declare the status code with the <em>code</em> argument, or its alias, the <em>value</em> argument.

Also, we can provide a reason using the <em>reason</em> argument.
```
@ResponseStatus(code = HttpStatus.OK, reason = "no reason at all")
@GetMapping("/")
public String hello() {
	return "Hello, World!";
}
```

We also can use it along with <code><font style="color: rgb(128,128,0);">@ExceptionHandler</font></code>:
```
@ExceptionHandler(IllegalArgumentException.class)
@ResponseStatus(HttpStatus.BAD_REQUEST)
void onIllegalArgumentException(IllegalArgumentException exception) {
    // ...
}
```

We also can use it along with a <code><font style="color: rgb(122,134,154);">CustomException</font></code> class:
```
@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String message) {
        super(message);
    }
}
```

For more information about HTTP response status, please visit [this article](https://www.baeldung.com/spring-mvc-controller-custom-http-status-code).
# @ControllerAdvice

<code><font style="color: rgb(128,128,0);">@ControllerAdvice</font></code> allows you to handle exceptions across the whole application or sub-set of controllers, not just to an individual controller
```
@ControllerAdvice(basePackageClasses = SomeController.class)
public class MyControllerAdvice extends ResponseEntityExceptionHandler {

    @ResponseBody
    @ExceptionHandler(MyException.class)
    public ResponseEntity<?> handleControllerException(HttpServletRequest request, Throwable ex) {
	    MyErrorBody responseBody = new MyErrorBody(status.value(), ex.getMessage())
        return new ResponseEntity<>(responseBody, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
```
# @RestControllerAdvice

<code><font style="color: rgb(128,128,0);">@RestControllerAdvice</font></code> is the combination of both <code><font style="color: rgb(128,128,0);">@ControllerAdvice</font></code> and <code><font style="color: rgb(128,128,0);">@ResponseBody</font></code>

An equivalent of the above <code><font style="color: rgb(128,128,0);">@ControllerAdvice</font></code> implemented as <code><font style="color: rgb(128,128,0);">@RestControllerAdvice</font></code>
```
@RestControllerAdvice(basePackageClasses = SomeController.class)
public class MyControllerAdvice extends ResponseEntityExceptionHandler {

    @ExceptionHandler(MyException.class)
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public MyErrorBody handleControllerException(HttpServletRequest request, Throwable ex) {
	    return new MyErrorBody(status.value(), ex.getMessage())
    }
}
```

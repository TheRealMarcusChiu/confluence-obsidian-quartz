---
title: "Java - Spring - @Valid & @Validated"
created: 2020-11-30T19:21:42.510-06:00
modified: 2020-11-30T20:11:40.809-06:00
parent: "[[Java - Spring Framework - Core - Validation]]"
children: []
---
> [!tabs]
>
> === @Valid
>
> controller
> ```
> @RequestMapping(value = "createAccount")
> public String stepOne(@Valid Account account) {...}
> ```
>
> form object
> ```
> public class Account {
>
>     @NotBlank
>     private String username;
>
>     @Email
>     @NotBlank
>     private String email;
> }
> ```
>
> === @Validated
>
> > [!expand-ui]- Group Validation
> > controller
> > ```
> > @RequestMapping(value = "stepOne")
> > public String stepOne(@Validated(Group1.class) Account account) {...}
> >
> > @RequestMapping(value = "stepTwo")
> > public String stepTwo(@Validated(Group2.class) Account account) {...}
> > ```
> >
> > form object
> > ```
> > public class Account {
> >
> >     @NotBlank(groups = {Group1.class})
> >     private String username;
> >
> >     @Email(groups = {Group1.class})
> >     @NotBlank(groups = {ValidationStepOne.class})
> >     private String email;
> >
> >     @NotBlank(groups = {Group2.class})
> >     @StrongPassword(groups = {ValidationStepTwo.class})
> >     private String password;
> >
> >     @NotBlank(groups = {Group2.class})
> >     private String confirmedPassword;
> > }
> > ```
> >
> > interface groups
> > ```
> > public interface Group1 {}
> > public interface Group2 {}
> > ```
>
> > [!expand-ui]- Validating Constraint Annotations of Method Parameters
> > ```
> > @RestController
> > @Validated
> > class ValidateParametersController {
> >
> >   @GetMapping("/validatePathVariable/{id}")
> >   ResponseEntity<String> validatePathVariable(
> >       @PathVariable("id") @Min(5) int id) {
> >     return ResponseEntity.ok("valid");
> >   }
> >   
> >   @GetMapping("/validateRequestParameter")
> >   ResponseEntity<String> validateRequestParameter(
> >       @RequestParam("param") @Min(5) int param) { 
> >     return ResponseEntity.ok("valid");
> >   }
> > }
> > ```
>
> > [!expand-ui]- Validate @Valid in Non-Controller Classes
> > ```
> > @Service
> > @Validated
> > class SampleService {
> >
> >   public void validateAccount(@Valid Account account) {
> >     // TODO
> >   }
> > }
> > ```

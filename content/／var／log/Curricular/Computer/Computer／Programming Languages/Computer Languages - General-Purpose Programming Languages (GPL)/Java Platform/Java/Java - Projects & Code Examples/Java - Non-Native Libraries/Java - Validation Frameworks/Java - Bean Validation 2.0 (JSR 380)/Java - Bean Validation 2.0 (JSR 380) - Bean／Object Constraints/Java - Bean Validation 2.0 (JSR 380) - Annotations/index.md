---
title: "Java - Bean Validation 2.0 (JSR 380) - Annotations"
created: 2022-02-24T02:28:13.172-06:00
modified: 2022-02-24T02:42:04.425-06:00
parent: "[[Java - Bean Validation 2.0 (JSR 380) - Bean／Object Constraints]]"
children: []
---
# Using Constraint Annotations
```
import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.validation.constraints.Email;

@Builder // lombok annotation
public class User {

    @NotNull(message = "Name cannot be null")
    private String name;

    @AssertTrue
    private boolean working;

    @Size(min = 10, max = 200, message = "About Me must be between 10 and 200 characters")
    private String aboutMe;

    @Min(value = 18, message = "Age should not be less than 18")
    @Max(value = 150, message = "Age should not be greater than 150")
    private int age;

    @Email(message = "Email should be valid")
    private String email;

    // standard setters and getters 
}
```
# Validating Beans/Objects
To validate a bean, we first need a <code><font style="color: rgb(122,134,154);">Validator</font></code> object, which is built using a <code><font style="color: rgb(122,134,154);">ValidatorFactory</font></code>
```
ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
Validator validator = factory.getValidator();
```

Any violations of the constraints defined in the <code><font style="color: rgb(122,134,154);">User</font></code> object will be returned as a <code><font style="color: rgb(122,134,154);">Set</font></code>:
```
User user = User.builder().working(true).aboutMe("Its all about me!").age(50).build();
Set<ConstraintViolation<User>> violations = validator.validate(user);
```

By iterating over the violations, we can get all the violation messages using the <code><font style="color: rgb(122,134,154);">getMessage</font></code> method:
```
for (ConstraintViolation<User> violation : violations) {
    log.error(violation.getMessage()); 
}
```
# Annotations Work on Elements of a Collections and Optional
```
List<@NotBlank String> preferences;
```
```
public Optional<@Past LocalDate> getDateOfBirth() {
    return Optional.of(dateOfBirth);
}
```
# Annotations Available
- <strong><em>@NotNull </em></strong>validates that the annotated property value is not <em>null</em>.
- <strong><em>@AssertTrue</em></strong> validates that the annotated property value is <em>true.</em>
- <strong><em>@Size </em></strong>validates that the annotated property value has a size between the attributes <em>min</em> and <em>max</em>; can be applied to <em>String</em>, <em>Collection</em>, <em>Map</em>, and array properties.
- <strong><em>@Min </em></strong>validates that the annotated property has a value not smaller than the <em>value </em>attribute.
- <strong><em>@Max </em></strong>validates that the annotated property has a value no larger than the <em>value </em>attribute.
- <em><strong>@Email</strong></em> validates that the annotated property is a valid email address.
- <em><strong>@NotEmpty</strong></em> validates that the property is not null or empty; can be applied to <em>String</em>, <em>Collection</em>, <em>Map</em> or <em>Array</em> values.
- <em><strong>@NotBlank</strong></em> can be applied only to text values and validates that the property is not null or whitespace.
- <em><strong>@Positive</strong></em> and <em><strong>@PositiveOrZero</strong></em> apply to numeric values and validate that they are strictly positive, or positive including 0.
- <em><strong>@Negative</strong></em> and <em><strong>@NegativeOrZero</strong></em> apply to numeric values and validate that they are strictly negative, or negative including 0.
- <em><strong>@Past </strong></em>and <em><strong>@PastOrPresent</strong></em> validate that a date value is in the past or the past including the present; can be applied to date types including those added in Java 8.
- <em><strong>@Future </strong>and<strong> @FutureOrPresent</strong></em> validate that a date value is in the future, or in the future including the present.

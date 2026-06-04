---
title: "Java - Spring - Security (Testing Method Security With Custom UserDetailsService)"
created: 2020-12-28T18:19:07.481-06:00
modified: 2020-12-28T18:22:26.465-06:00
parent: "[[Java - Spring Security]]"
children: []
---
article: [https://www.baeldung.com/spring-security-method-security#3-testing-with-a-custom-userdetailsservice](https://www.baeldung.com/spring-security-method-security#3-testing-with-a-custom-userdetailsservice)

<strong>For most applications, it's common to use a custom class as authentication principal</strong>. In this case, the custom class needs to implement the <em>org.springframework.security.core.userdetails.</em><em>UserDetails</em> interface.

In this article, we declare a <em>CustomUser</em> class which extends the existing implementation of <em>UserDetails</em>, which is <em>org.springframework.security.core.userdetails.</em><em>User:</em>
```
public class CustomUser extends User {
    private String nickName;
    // getter and setter
}
```

Let's take back the example with the <em>@PostAuthorize</em> annotation in section 3:
```
@PostAuthorize("returnObject.username == authentication.principal.nickName")
public CustomUser loadUserDetail(String username) {
    return userRoleRepository.loadUserByUserName(username);
}
```

In this case, the method would only execute successfully if the <em>username</em> of the returned <em>CustomUser</em> is equal to the current authentication principal's <em>nickname</em>.

If we wanted to test that method, <strong>we could provide an implementation of <em>UserDetailsService</em> which could load our <em>CustomUser</em> based on the username</strong>:
```
@Test
@WithUserDetails( value = "john", userDetailsServiceBeanName = "userDetailService")
public void whenJohn_callLoadUserDetail_thenOK() {
    CustomUser user = userService.loadUserDetail("jane");
    assertEquals("jane", user.getNickName());
}
```

Here, the <em>@WithUserDetails</em> annotation states that we'll use a <em>UserDetailsService</em> to initialize our authenticated user. The service is referred by the <em>userDetailsServiceBeanName </em>property<em>. </em>This <em>UserDetailsService </em>might be a real implementation or a fake for testing purposes.

Additionally, the service will use the value of the property <em>value</em> as the username to load <em>UserDetails</em>.

Conveniently, we can also decorate with a <em>@WithUserDetails </em>annotation at the class level, similarly to what we did with the <em>@WithMockUser </em>annotation<em>.</em>

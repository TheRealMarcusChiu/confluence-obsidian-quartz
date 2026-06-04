---
title: "Java - Lombok - Builder Default Value"
created: 2021-05-08T11:01:06.311-05:00
modified: 2021-05-08T11:26:02.272-05:00
parent: "[[Java - Lombok]]"
children: []
---
[https://www.baeldung.com/lombok-builder-default-value](https://www.baeldung.com/lombok-builder-default-value)
# 1 - POJO With Default Values
```
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Pojo {
    private String name = "foo";
    private boolean original = true;
}
```
# 2 - Define Expectations
```
@Test
public void givenBuilderWithDefaultValue_whenBuild_thenDefaultValueIsPresent() {
    Pojo build = Pojo.builder().build();
    Assert.assertEquals("foo", build.getName());
    Assert.assertTrue(build.isOriginal());
}

@Test
public void givenBuilderWithDefaultValue_whenNoArgsInitialize_thenDefaultValueIsPresent() {
    Pojo pojo = Pojo();
    Assert.assertEquals("foo", pojo.getName());
    Assert.assertTrue(pojo.isOriginal());
}
```

of course, the first test will fail, as builder does not pick up on that
# 3 - Solution 1 (@Builder.Default)
```
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Pojo {
    @Builder.Default
    private String name = "foo";
    @Builder.Default
    private boolean original = true;
}
```

Unfortunately, the no-args constructor won't get the default values, making the second test case fail
# 4 - Solution 2 (Initialize Builder)
```
@Data
@Builder(builderClassName = "PojoBuilder")
@NoArgsConstructor
@AllArgsConstructor
public class Pojo {
    private String name = "foo";
    private boolean original = true;

    public static class PojoBuilder {
        private String name = "foo";
        private boolean original = true;
    }
}
```

Unfortunately, the price is code duplication
# 5 - Solution 3 (toBuilder)
```
@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class Pojo {
    private String name = "foo";
    private boolean original = true;

	public static Pojo.PojoBuilder builder() {
    	return new Pojo().toBuilder();
	}
}
```

Best of both worlds!

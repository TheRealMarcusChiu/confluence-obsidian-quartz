---
title: "Java - MapStruct - Circular Dependency"
created: 2021-10-16T01:47:22.014-05:00
modified: 2021-10-16T15:29:34.668-05:00
parent: "[[Java - MapStruct]]"
children: []
---
> [!warning]
> Models designed with[[Builder Pattern]] is not supported with this solution
# Models With Circular Dependencies
```
public class Child {
    private String name;
    private Father father;
    // default constructor with accessors
}
public class Father {
    private String name;
    private List<Child> children = new ArrayList<>();
    // default constructor with accessors
}
public class ChildDto {
    private String name;
    private FatherDto father;
    // default constructor with accessors
}
public class FatherDto {
    private String name;
    private List<ChildDto> children = new ArrayList<>();
    // default constructor with accessors
}
```
# Define MappingContext
```
/**
 * An implementation to track cycles in graphs to be used as {@link @Context} parameter.
 */
public class CycleAvoidingMappingContext {

    private final Map<Object, Object> knownInstances = new IdentityHashMap<>();

    /**
     * Gets an instance out of this context if it is already mapped.
     *
     * @param source given source
     * @param targetType given target type.
     * @return Returns the resulting type.
     */
    @BeforeMapping
    public <T> T getMappedInstance(Object source, @TargetType Class<T> targetType) {
        return targetType.cast(knownInstances.get(source));
    }

    /**
     * Puts an instance into the cache, so that it can be remembered to avoid endless mapping.
     *
     * @param source given source
     * @param target given target
     */
    @BeforeMapping
    public void storeMappedInstance(Object source, @MappingTarget Object target) {
        knownInstances.put(source, target);
    }
}
```
# Define Mapper with MappingContext
```
@Mapper(componentModel = "spring", builder = @Builder(disableBuilder = true))
public interface CircularDependencyMapper {

    FatherDto toDto(Father father, @Context CycleAvoidingMappingContext context);

    ChildDto toDto(Child child, @Context CycleAvoidingMappingContext context);
}
```
# Using Mapper
```
FatherDto fatherDto = circularDependencyMapper.toDto(father, new CycleAvoidingMappingContext());
```

---
title: "Java - Spring - Custom @Annotation BeanPostProcessor"
created: 2019-12-08T11:47:30.870-06:00
modified: 2021-07-04T23:17:34.024-05:00
parent: "[[Java - Spring - Context - BeanPostProcessor]]"
children: []
---
- based on: [https://www.baeldung.com/spring-annotation-bean-pre-processor](https://www.baeldung.com/spring-annotation-bean-pre-processor)
- code: [https://github.com/SpringBootMarcusChiu/annotation-example](https://github.com/SpringBootMarcusChiu/annotation-example)

also see: [[Java - lang - annotation]]
# Example @CustomAnnotations

below example custom annotation named <code><font style="color: rgb(128,128,0);">@CustomAnnotation</font></code>
```
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Documented
public @interface CustomAnnotation {
}
```

below example use of <code><font style="color: rgb(128,128,0);">@</font></code><font style="color: rgb(128,128,0);"><code>CustomAnnotation</code> <font style="color: rgb(51,51,51);">(note: can be used in any class java bean/component)</font></font>
```
@SpringBootApplication
public class AnnotationApplication {

   public static void main(String[] args) {
      SpringApplication.run(AnnotationApplication.class, args);
   }

   @CustomAnnotation
   private RandomGeneric<RandomPojoA> aGeneric;

   @CustomAnnotation
   private RandomGeneric<RandomPojoB> bGeneric;

}
```

is doesn't have to be <code><font style="color: rgb(128,128,128);">RandomGeneric\<RandomPojoA\></font></code>, but we restrict it to some <code><font style="color: rgb(128,128,128);">Class\<T\></font></code> form because we will use it in the custom <code><font style="color: rgb(128,128,128);">BeanPostProcessor.java</font></code> later
```
public class RandomGeneric<E> {
    private Class<E> entityClass;

    public RandomGeneric(Class<E> entityClass) {
        this.entityClass = entityClass;
    }

    public String getEntityClassName() {
        return entityClass.getName();
    }
}
```
# How to Make Spring Recognize @CustomAnnotation

create a custom <code><font style="color: rgb(128,128,128);">BeanPostProcessor</font></code> that process every bean/component Spring created (including the AnnotationApplication bean/component)
```
@Component
public class CustomBeanPostProcessor implements BeanPostProcessor {

    private ConfigurableListableBeanFactory configurableBeanFactory;

    @Autowired
    public CustomBeanPostProcessor(ConfigurableListableBeanFactory beanFactory) {
        this.configurableBeanFactory = beanFactory;
    }

    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        Class<?> managedBeanClass = bean.getClass();

        // Field Callback
        ReflectionUtils.FieldCallback fieldCallback = new CustomFieldCallback(configurableBeanFactory, bean);
        ReflectionUtils.doWithFields(managedBeanClass, fieldCallback);

        return bean;
    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        return bean;
    }
}
```
- line 16 - we initialize a <code><font style="color: rgb(128,128,128);">CustomFieldCallback</font></code> object
- line 17 - we bind the object to the bean/component

we need to define the <code><font style="color: rgb(128,128,128);">CustomFieldCallback.java</font></code>
```
public class CustomFieldCallback implements ReflectionUtils.FieldCallback {

    private ConfigurableListableBeanFactory configurableBeanFactory;
    private Object bean;

    public CustomFieldCallback(ConfigurableListableBeanFactory bf, Object bean) {
        configurableBeanFactory = bf;
        this.bean = bean;
    }

    @Override
    public void doWith(Field field) throws IllegalArgumentException, IllegalAccessException {
        if (field.isAnnotationPresent(CustomAnnotation.class)) {
            ReflectionUtils.makeAccessible(field);

            // getting @CustomAnnotations element values
//            Class<?> genericClass = field.getDeclaredAnnotation(CustomAnnotation.class).value();

            Type fieldGenericType = field.getGenericType();
            if (fieldGenericType instanceof ParameterizedType) {
                ParameterizedType pType = (ParameterizedType) fieldGenericType;
                Class<?> fieldClass = (Class<?>) pType.getRawType();
                Class<?> genericClass = (Class<?>) pType.getActualTypeArguments()[0];

                String beanName = genericClass.getSimpleName() + fieldClass.getSimpleName();
                Object beanInstance = getBeanInstance(beanName, fieldClass, genericClass);
                field.set(bean, beanInstance);
            }
        }
    }

    private Object getBeanInstance(String beanName, Class<?> genericClass, Class<?> paramClass) {
        Object o;
        if (!configurableBeanFactory.containsBean(beanName)) {

            Object toRegister;
            try {
                Constructor<?> ctr = genericClass.getConstructor(Class.class);
                toRegister = ctr.newInstance(paramClass);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }

            o = configurableBeanFactory.initializeBean(toRegister, beanName);
            configurableBeanFactory.autowireBeanProperties(o, AutowireCapableBeanFactory.AUTOWIRE_BY_NAME, true);
            configurableBeanFactory.registerSingleton(beanName, o);
        } else {
            o = configurableBeanFactory.getBean(beanName);
        }
        return o;
    }
}
```
- <strong>line 12 - <code><font style="color: rgb(128,128,128);">doWith(Field field)</font></code> function</strong>- defines what to do with each instance-field of the bean/component
	- here we only care if the instance-field is annotated with <code><font style="color: rgb(128,128,0);">@CustomAnnotation</font></code>
	- if so, we basically assign that instance-field a value <code><font style="color: rgb(128,128,128);">new RandomGeneric\<RandomPojoA\>()</font></code>

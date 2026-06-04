---
title: "Java - Spring - Custom Simple BeanPostProcessor"
created: 2019-12-08T14:16:11.237-06:00
modified: 2021-07-04T23:17:58.256-05:00
parent: "[[Java - Spring - Context - BeanPostProcessor]]"
children: []
---
if you want to configure every bean created by the Spring Container, here is the bear bones
```
@Component
public class CustomBeanPostProcessor implements BeanPostProcessor {
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        System.out.println("Called postProcessBeforeInitialization() for :" + beanName);
        return bean;
    }

    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        System.out.println("Called postProcessAfterInitialization() for :" + beanName);
        return bean;
    }
}
```

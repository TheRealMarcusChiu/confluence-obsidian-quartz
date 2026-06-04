---
title: "Java - Spring - Running Logic on Startup - Bean Specific"
created: 2020-10-19T23:22:06.231-05:00
modified: 2020-10-19T23:30:19.382-05:00
parent: "[[Java - Spring - Running Logic on Startup]]"
children: []
---
### Problem
Here, we're trying to access an <em>autowired</em> field in the constructor. When the constructor is called, the Spring bean is not yet fully initialized. This is problematic because calling not yet initialized fields will of course result in <em>NullPointerException</em>s
```
@Component
public class InvalidInitExampleBean {

    private static final Logger LOG = Logger.getLogger(PostConstructExampleBean.class);
 
    @Autowired
    private Environment env;
 
    public InvalidInitExampleBean() {
		LOG.info(Arrays.asList(env.getDefaultProfiles())); // ERROR: env instance may not have been set
    }
}
```
### Solutions
> [!tabs]
>
> === Constructor Injection
>
> ```
> @Component 
> public class LogicInConstructorExampleBean {
>  
>     private static final Logger LOG = Logger.getLogger(LogicInConstructorExampleBean.class);
>  
>     private final Environment environment;
>  
>     @Autowired
>     public LogicInConstructorExampleBean(Environment environment) {
>         this.environment = environment;
>         LOG.info(Arrays.asList(environment.getDefaultProfiles()));
>     }
> }
> ```
>
> === @PostConstruct
>
> ```
> @Component
> public class PostConstructExampleBean {
>
>     private static final Logger LOG = Logger.getLogger(PostConstructExampleBean.class);
>  
>     @Autowired
>     private Environment environment;
>  
>     @PostConstruct
>     public void init() {
>         LOG.info(Arrays.asList(environment.getDefaultProfiles()));
>     }
> }
> ```
>
> === InitializingBean
>
> ```
> @Component
> public class InitializingBeanExampleBean implements InitializingBean {
>
>     private static final Logger LOG = Logger.getLogger(InitializingBeanExampleBean.class);
>  
>     @Autowired
>     private Environment environment;
>  
>     @Override
>     public void afterPropertiesSet() throws Exception {
>         LOG.info(Arrays.asList(environment.getDefaultProfiles()));
>     }
> }
> ```
>
> === @Bean's initMethod
>
> The<em> initMethod</em> property can be used to execute a method after a bean's initialization
> ```
> @Bean(initMethod="init")
> public InitMethodExampleBean exBean() {
>     return new InitMethodExampleBean();
> }
> ```
>
> or
> ```
> <bean id="initMethodExampleBean"
>   class="com.baeldung.startup.InitMethodExampleBean"
>   init-method="init">
> </bean>
> ```
>
> now we define the <code>init()</code> method in the Bean class
> ```
> public class InitMethodExampleBean {
>  
>     private static final Logger LOG = Logger.getLogger(InitMethodExampleBean.class);
>  
>     @Autowired
>     private Environment environment;
>  
>     public void init() {
>         LOG.info(Arrays.asList(environment.getDefaultProfiles()));
>     }
> }
> ```

### Combining Mechanisms

In order to achieve full control over your beans, you might want to combine the above mechanisms together.

The order of execution is as follows:
1. Constructor Injection
2. <em>@PostConstruct</em> annotated methods
3. InitializingBean's <em>afterPropertiesSet()</em> method
4. @Bean's initMethod or <em>init-method</em> in XML
```
@Component
@Scope(value = "prototype")
public class AllStrategiesExampleBean implements InitializingBean {
 
    private static final Logger LOG = Logger.getLogger(AllStrategiesExampleBean.class);
 
	@Autowired
    public AllStrategiesExampleBean() {
        LOG.info("Constructor");
    }

    @PostConstruct
    public void postConstruct() {
        LOG.info("PostConstruct");
    }
 
    @Override
    public void afterPropertiesSet() throws Exception {
        LOG.info("InitializingBean");
    }
 
    public void init() {
        LOG.info("initMethod");
    }
}
```

If you try to instantiate this bean, you will be able to see logs that match the order specified above:
```
[main] INFO o.b.startup.AllStrategiesExampleBean - Constructor
[main] INFO o.b.startup.AllStrategiesExampleBean - PostConstruct
[main] INFO o.b.startup.AllStrategiesExampleBean - InitializingBean
[main] INFO o.b.startup.AllStrategiesExampleBean - initMethod
```

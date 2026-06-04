---
title: "Java - Spring - ApplicationContext - ServletContextInitializer"
created: 2019-12-08T22:58:29.046-06:00
modified: 2021-07-04T22:49:39.901-05:00
parent: "[[Java - Spring - ApplicationContext - ＊ContextInitializer]]"
children: []
---
- code base: [https://github.com/SpringBootMarcusChiu/application-context-custom-servlet-context-initializer](https://github.com/SpringBootMarcusChiu/application-context-custom-servlet-context-initializer)

### Application
```
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(new Class[] { CustomServletContextInitializer.class }, args);
    }
}
```
### CustomServletContextInitializer
```
/**
 * @EnableAutoConfiguration
 * - because ERROR - Unable to start ServletWebServerApplicationContext due to
 *   missing ServletWebServerFactory bean
 * - Enable auto-configuration of the Spring Application Context, attempting to guess
 *   and configure beans that you are likely to need
 */
@EnableAutoConfiguration
public class CustomServletContextInitializer implements ServletContextInitializer {

    public void onStartup(ServletContext rootServletContext) {
        // create child WebAppContext
        AnnotationConfigWebApplicationContext childWebAppContext = new AnnotationConfigWebApplicationContext();
        childWebAppContext.register(ChildConfiguration.class);
        childWebAppContext.setServletContext(rootServletContext);

		// create child WebServlet
		DispatcherServlet childWebServlet = new DispatcherServlet(childWebAppContext);

        // add child WebServlet to parent RootServlet
        ServletRegistration.Dynamic servlet = rootServletContext.addServlet("childWebServletName", childWebServlet);

        servlet.setLoadOnStartup(1);
        servlet.addMapping("/");
    }
}
```
# ChildConfiguration
```
@EnableWebMvc
@Configuration
@ComponentScan(basePackages = "com.marcuschiu.example.customservletcontextinitializer")
public class ChildConfiguration implements WebMvcConfigurer {
//    @Bean
//    public ViewResolver getViewResolver() {
//        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
//        resolver.setPrefix("/WEB-INF/");
//        resolver.setSuffix(".jsp");
//        return resolver;
//    }
//
//    @Override
//    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
//        configurer.enable();
//    }
//
//    @Override
//    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("/resources/**")
//                .addResourceLocations("/resources/").setCachePeriod(3600)
//                .resourceChain(true).addResolver(new PathResourceResolver());
//    }
}
```

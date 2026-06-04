---
title: "Java - Spring - ApplicationContext - Hierarchy - ServletRegistrationBean"
created: 2019-12-08T22:42:40.559-06:00
modified: 2021-07-04T22:40:58.391-05:00
parent: "[[Java - Spring - ApplicationContext - Hierarchy (Parent & Child ApplicationContext)]]"
children: []
---
- code base - [https://github.com/SpringBootMarcusChiu/application-context-servletregistrationbean](https://github.com/SpringBootMarcusChiu/application-context-servletregistrationbean)

# ServletRegistrationBean
```
@Configuration
public class OuterConfiguration {

   @Bean
   public ServletRegistrationBean apiV2() {
      DispatcherServlet dispatcherServlet = new DispatcherServlet();

      AnnotationConfigWebApplicationContext childWebAppContext1 = new AnnotationConfigWebApplicationContext();
      childWebAppContext1.register(ChildConfiguration.class);
      dispatcherServlet.setApplicationContext(childWebAppContext1);

      ServletRegistrationBean servletRegistrationBean = new ServletRegistrationBean(dispatcherServlet, "/api/2/*");
      servletRegistrationBean.setName("api-v2");
      return servletRegistrationBean;
   }

   @Bean
   public ComponentWithinChildConfiguration componentWithinChildConfiguration(ServletRegistrationBean<DispatcherServlet> apiV2) {
    return apiV2.getServlet().getWebApplicationContext().getBean(ComponentWithinChildConfiguration.class);
}

//    @Bean
//    public ServletRegistrationBean apiV1() {
//        DispatcherServlet dispatcherServlet = new DispatcherServlet();
//
//        XmlWebApplicationContext applicationContext = new XmlWebApplicationContext();
//        applicationContext.setConfigLocation("classpath:/META-INF/spring/webmvc-context.xml");
//        dispatcherServlet.setApplicationContext(applicationContext);
//
//        ServletRegistrationBean servletRegistrationBean = new ServletRegistrationBean(dispatcherServlet, "/api/1/*");
//        servletRegistrationBean.setName("api-v1");
//
//        return servletRegistrationBean;
//    }
}
```
# ChildConfiguration
```
@EnableWebMvc
@Configuration
@ComponentScan(basePackages = "com.marcuschiu.example.servletregistrationbean")
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

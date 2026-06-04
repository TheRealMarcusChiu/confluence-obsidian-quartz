---
title: "Java - Spring - Property／Properties - Custom Property Source - @Configuration & @Bean"
created: 2021-06-02T23:36:20.182-05:00
modified: 2021-06-02T23:37:18.327-05:00
parent: "[[Java - Spring - Property／Properties - Custom Property Source]]"
children: []
---
Create Configuration
```
@Configuration
public class TcpIpPropertySourceConfig {

    @Autowired
    private ConfigurableEnvironment env;

    @Bean
    @Lazy(false)
    public TcpIpPropertySource tcpIpPropertySource() {
        TcpIpPropertySource tcpIpPropSource = new TcpIpPropertySource();
        MutablePropertySources sources = env.getPropertySources();
        sources.addFirst(new PropertiesPropertySource("tcp-ip", tcpIpPropSource.getAllProperties()));
        return tcpIpPropSource;
    }
}
```

what's going on?
- Your configuration is getting loaded in some way by the spring application context. The context has already an environment configured in it that will get injected with the <code><font style="color: rgb(0,102,102);">@Autowired</font></code> annotation.
- The <code><font style="color: rgb(0,102,102);">@Bean</font></code> definition is also <code>[<font style="color: rgb(0,102,102);">@Lazy</font>](https://coderwall.com/Lazy)<font style="color: rgb(102,102,0);">(</font><font style="color: rgb(0,0,136);">false</font><font style="color: rgb(102,102,0);">)</font></code>, which will force Spring to create this bean quite early in the cycle. Maybe there are some other ways of doing it that I'm not aware of. Because the bean will be one of the first to be created, it will modify the environment so that other bean creations will then see your custom loaded properties.
- The <code><font style="color: rgb(0,0,136);">new</font><font style="color: rgb(102,0,102);">PropertiesPropertySource</font></code> is added first, but you can really do what you want with the precedence here.

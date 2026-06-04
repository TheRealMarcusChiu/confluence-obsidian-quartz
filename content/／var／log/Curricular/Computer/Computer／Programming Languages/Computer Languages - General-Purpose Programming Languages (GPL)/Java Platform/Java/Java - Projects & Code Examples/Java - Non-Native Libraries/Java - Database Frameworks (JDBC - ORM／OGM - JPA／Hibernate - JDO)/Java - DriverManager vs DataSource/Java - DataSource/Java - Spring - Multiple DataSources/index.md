---
title: "Java - Spring - Multiple DataSources"
created: 2021-03-06T23:10:11.914-06:00
modified: 2021-03-06T23:12:30.282-06:00
parent: "[[Java - DataSource]]"
children: []
---
To configure multiple data sources, create as many bean definitions you want but mark one of the <code>DataSource</code> instances as <code>@Primary</code>, because various auto-configurations down the road expect to be able to get one by type.

Remember that if we create your own DataSource, the auto-configuration backs off. So we are responsible for providing configurations for all datasource beans.
```
@Configuration
public class DataSourceConfig {
      
    @Bean(name = "h2DataSource")
    public DataSource h2DataSource() {
        DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create();
        dataSourceBuilder.driverClassName("org.h2.Driver");
        dataSourceBuilder.url("jdbc:h2:file:C:/temp/test");
        dataSourceBuilder.username("sa");
        dataSourceBuilder.password("");
        return dataSourceBuilder.build();
    }
 
    @Bean(name = "mySqlDataSource")
    @Primary
    public DataSource mySqlDataSource() {
        DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create();
        dataSourceBuilder.url("jdbc:mysql://localhost/testdb");
        dataSourceBuilder.username("dbuser");
        dataSourceBuilder.password("dbpass");
        return dataSourceBuilder.build();
    }
}
```

While autowiring the datasource, spring boot will prefer the primary datasource i.e. <em>“mySqlDataSource”</em>. To autowire another non-primary datasource, use <code>@Qualifier</code> annotation.

Autowire Primary DataSource
```
@Autowired
DataSource dataSource;
```

Autowire Non-Primary DataSource
```
@Autowired
@Qualifier("h2DataSource") 
DataSource dataSource;
```

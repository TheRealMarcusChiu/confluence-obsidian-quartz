---
title: "Java - Spring - Repository (Using Multiple Instantiations of the Same Spring Data Module) Neo4j"
created: 2021-07-24T19:13:21.523-05:00
modified: 2021-07-24T19:31:24.610-05:00
parent: "[[Java - Spring - Repository (Using Multiple Instantiations of the Same Spring Data Module)]]"
children: []
---
# Problem

We have 2 entity models with the same class name. But a single SessionFactory cannot handle both at the same time.
# Solution

create 2 SessionFactories, then configure Repositories.
# Code

[https://github.com/SpringBootMarcusChiu/spring-boot-neo4j-multiple-sessionfactory-entity-repository-example](https://github.com/SpringBootMarcusChiu/spring-boot-neo4j-multiple-sessionfactory-entity-repository-example)
### First Configuration
```
@EnableNeo4jRepositories(
        transactionManagerRef = "transactionManagerOne",
        sessionFactoryRef = "sessionFactoryOne",
        basePackages = "com.neo4j.example.springdataneo4jintroapp.repo.one")
@org.springframework.context.annotation.Configuration
@EntityScan(basePackages = Neo4jOneConfiguration.MODEL_PACKAGE)
public class Neo4jOneConfiguration {

    protected static final String MODEL_PACKAGE = "com.neo4j.example.springdataneo4jintroapp.model.one";

    @Primary
    @Bean
    @ConfigurationProperties("spring.data.neo4j")
    public Neo4jProperties myNeo4jProperties() {
        return new Neo4jProperties();
    }

    @Primary
    @Bean
    public org.neo4j.ogm.config.Configuration configurationOne() {
        return myNeo4jProperties().createConfiguration();
    }

    @Primary
    @Bean
    public SessionFactory sessionFactoryOne() {
        return new SessionFactory(configurationOne(), MODEL_PACKAGE);
    }

    @Bean
    public Neo4jTransactionManager transactionManagerOne() {
        return new Neo4jTransactionManager(sessionFactoryOne());
    }
}
```
```
@Repository("userRepositoryOne")
public interface UserRepository extends Neo4jRepository<UserNode, String> {
}
```
### Second Configuration
```
@EnableNeo4jRepositories(
        transactionManagerRef = "transactionManagerTwo",
        sessionFactoryRef = "sessionFactoryTwo",
        basePackages = "com.neo4j.example.springdataneo4jintroapp.repo.two")
@EntityScan(basePackages = Neo4jTwoConfiguration.MODEL_PACKAGE)
@org.springframework.context.annotation.Configuration
public class Neo4jTwoConfiguration {

    protected static final String MODEL_PACKAGE = "com.neo4j.example.springdataneo4jintroapp.model.two";

    @Bean
    public Configuration configurationTwo() {
        return new Configuration.Builder()
                .uri("bolt://localhost")
                .credentials("neo4j", "password")
//            .autoIndex("assert")
//            .generatedIndexesOutputDir("dir")
//            .generatedIndexesOutputFilename("filename")
//            .connectionPoolSize(200)
//            .encryptionLevel("REQUIRED")
//            .trustStrategy("TRUST_SIGNED_CERTIFICATES")
//            .trustCertFile("/tmp/cert")
//            .connectionLivenessCheckTimeout(1000)
                .build();
    }

    @Bean
    public SessionFactory sessionFactoryTwo() {
        return new SessionFactory(configurationTwo(), MODEL_PACKAGE);
    }

    @Bean
    public Neo4jTransactionManager transactionManagerTwo() {
        return new Neo4jTransactionManager(sessionFactoryTwo());
    }
}
```
```
@Repository("userRepositoryTwo")
public interface UserRepository extends Neo4jRepository<UserNode, String> {
}
```
### Using Configured Repositories
```
@Autowired
@Qualifier("userRepositoryOne")
private com.neo4j.example.springdataneo4jintroapp.repo.one.UserRepository userRepositoryOne;
@Autowired
@Qualifier("userRepositoryTwo")
private com.neo4j.example.springdataneo4jintroapp.repo.two.UserRepository userRepositoryTwo;

@Override
public void run(String... args) throws Exception {
   userRepositoryOne.save(com.neo4j.example.springdataneo4jintroapp.model.one.UserNode.builder()
         .name("Marcus 1")
         .build());
   userRepositoryTwo.save(com.neo4j.example.springdataneo4jintroapp.model.two.UserNode.builder()
         .name("Marcus 2")
         .build());

   var usersA = Lists.newArrayList(userRepositoryOne.findAll());
   var usersB = Lists.newArrayList(userRepositoryTwo.findAll());

   System.exit(0);
}
```

both repositories have the same behavior!

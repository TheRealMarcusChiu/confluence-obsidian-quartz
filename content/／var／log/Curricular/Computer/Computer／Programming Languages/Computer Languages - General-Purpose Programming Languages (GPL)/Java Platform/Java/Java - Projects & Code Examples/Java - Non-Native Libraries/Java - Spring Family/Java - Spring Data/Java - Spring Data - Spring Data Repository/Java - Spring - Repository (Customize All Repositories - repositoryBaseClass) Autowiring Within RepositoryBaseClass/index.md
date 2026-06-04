---
title: "Java - Spring - Repository (Customize All Repositories - repositoryBaseClass) Autowiring Within RepositoryBaseClass"
created: 2021-06-28T19:29:00.438-05:00
modified: 2021-06-28T20:14:16.825-05:00
parent: "[[Java - Spring Data - Spring Data Repository]]"
children: []
---
Let's say you have setup a repositoryBaseClass according to [[Java - Spring - Repository (Customize All Repositories - repositoryBaseClass)|here]], and you want to autowire beans into that base class. This is the article to follow
# RepositoryBaseClass
```
public class RepositoryBaseClass<T extends Object, ID extends Serializable> extends SimpleNeo4jRepository<T, ID> {

    private final ExampleService exampleService

    public RepositoryBaseClass(final Class<T> domainClass, final Session session, final ExampleService exampleService) {
        super(domainClass, session);
		this.exampleService = exampleService;
    }
	
	// use exampleService
}
```
# RepositoryFactory
```
public class MyNeo4jRepositoryFactory extends Neo4jRepositoryFactory {

    private final Session session;
    private final ExampleService exampleService;

    public MyNeo4jRepositoryFactory(final Session session,
                                    final MappingContext<Neo4jPersistentEntity<?>, Neo4jPersistentProperty> mappingContext,
                                    final ExampleService exampleService) {
        super(session, mappingContext);
        this.session = session;
        this.exampleService = exampleService;
    }

    @Override
    protected Object getTargetRepository(RepositoryInformation information) {
        return this.getTargetRepositoryViaReflection(information, new Object[]{
			information.getDomainType(), 
			this.session, 
			this.exampleService});
    }
}
```
# RepositoryFactoryBean
```
public class MyNeo4jRepositoryFactoryBean<T extends Neo4jRepository<S, ID>, S, ID extends Serializable> extends Neo4jRepositoryFactoryBean<T, S, ID> {

    @Autowired
    private ExampleService exampleService;
    private Neo4jMappingContext mappingContext;

    public Neo4jRepositoryFactoryBeanImpl(Class<? extends T> repositoryInterface) {
        super(repositoryInterface);
    }

    @Override
    public void setMappingContext(MappingContext<?, ?> mappingContext) {
        super.setMappingContext(mappingContext);
        if (mappingContext instanceof Neo4jMappingContext) {
            this.mappingContext = (Neo4jMappingContext)mappingContext;
        }
    }

    @Override
    @Deprecated
    protected RepositoryFactorySupport createRepositoryFactory(Session session) {
        return new MyNeo4jRepositoryFactory(session, this.mappingContext, exampleService);
    }
}
```
# Tying it Together
```
@EnableNeo4jRepositories(
        repositoryBaseClass = RepositoryBaseClass.class,
        repositoryFactoryBeanClass = MyRepositoryFactoryBean.class)
public class RepositoryConfiguration {}
```
# Resources
- [https://stackoverflow.com/questions/54600448/how-to-autowire-beans-inside-the-implementation-of-a-norepositorybean](https://stackoverflow.com/questions/54600448/how-to-autowire-beans-inside-the-implementation-of-a-norepositorybean)

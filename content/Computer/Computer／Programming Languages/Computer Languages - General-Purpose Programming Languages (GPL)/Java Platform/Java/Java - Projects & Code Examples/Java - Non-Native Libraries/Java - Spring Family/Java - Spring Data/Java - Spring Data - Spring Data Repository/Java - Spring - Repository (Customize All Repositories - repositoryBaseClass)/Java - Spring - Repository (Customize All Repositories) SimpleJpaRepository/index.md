---
title: "Java - Spring - Repository (Customize All Repositories) SimpleJpaRepository"
created: 2021-06-23T23:31:22.673-05:00
modified: 2021-06-28T20:16:18.364-05:00
parent: "[[Java - Spring - Repository (Customize All Repositories - repositoryBaseClass)]]"
children: []
---
# Custom BaseRepository

To modify behavior for all repositories, create an implementation that extends the persistence technology-specific repository base class. This class then acts as a custom base class for the repository proxies
```
public class CustomBaseRepository<T, ID extends Serializable> extends SimpleJpaRepository<T, ID> {

  private final EntityManager entityManager;

  public CustomBaseRepository(JpaEntityInformation entityInformation, EntityManager entityManager) {
    super(entityInformation, entityManager);

    // Keep the EntityManager around to used from the newly introduced methods.
    this.entityManager = entityManager;
  }

  @Ovirride
  public <S extends T> S save(S entity) {
      System.out.println("Hello, World!");
      // custom implementation goes here
  }
}
```

The class needs to have a constructor of the super class which the store-specific repository factory implementation uses. If the repository base class has multiple constructors, override the one taking an <code>EntityInformation</code> plus a store specific infrastructure object (such as an <code>EntityManager</code> or a template class).
# Tell Spring Data About The Custom BaseRepository

The final step is to make the Spring Data infrastructure aware of the customized repository base class. In Java configuration, you can do so by using the <code>repositoryBaseClass</code> attribute of the <code>@Enable\${store}Repositories</code> annotation, as shown in the following example:
```
@Configuration
@EnableJpaRepositories(repositoryBaseClass = MyRepositoryImpl.class)
class ApplicationConfiguration { ... }
```
# Using The Custom BaseRepository
```
public interface ApiRepository extends JpaRepository<Api, String> {
}
```

Now calling <code>save()</code> on ApiRepository it will invoke the Custom BaseRepository's <code>save(S entity)</code> method
```
apiRepository.save(api); // outputs "Hello, World!"
```
# To Autowire Within Custom BaseRepository

see: [[Java - Spring - Repository (Customize All Repositories - repositoryBaseClass) Autowiring Within RepositoryBaseClass]]

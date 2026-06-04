---
title: "Java - Spring - Repository (Customize All Repositories) SimpleNeo4jRepositpry"
created: 2021-06-23T23:25:12.289-05:00
modified: 2021-06-28T20:16:04.238-05:00
parent: "[[Java - Spring - Repository (Customize All Repositories - repositoryBaseClass)]]"
children: []
---
# Custom BaseRepository
```
import org.neo4j.ogm.session.Session;
import org.springframework.data.neo4j.repository.support.SimpleNeo4jRepository;

import java.io.Serializable;

public class RepositoryBaseClass<T, ID extends Serializable> extends SimpleNeo4jRepository<T, ID> {

    public RepositoryBaseClass(Class<T> domainClass, Session session) {
        super(domainClass, session);
    }

    @Override
    public <S extends T> S save(S entity) {
        System.out.println("Hello, World!");
        return super.save(entity);
    }
}
```
# Tell Spring Data About The Custom BaseRepository

Add <code>@EnableNeo4jRepositories(repositoryBaseClass = RepositoryBaseClass.class)</code> to a Configuration class
```
@EnableNeo4jRepositories(repositoryBaseClass = RepositoryBaseClass.class)
public class SpringDataNeo4jIntroAppApplication {
    // ...
}
```
# Utilizing Custom BaseRepository
```
@Repository
public interface ApiRepository extends Neo4jRepository<Api, String> {
}
```

now calling <code>save()</code> on ApiRepository will invoke the Custom BaseRepository's <code>save(S entity)</code> method
# To Autowire Within Custom BaseRepository

see: [[Java - Spring - Repository (Customize All Repositories - repositoryBaseClass) Autowiring Within RepositoryBaseClass]]

---
title: "Java - Spring Data - Spring Data Repository"
created: 2021-03-14T22:44:07.194-05:00
modified: 2022-12-22T09:49:21.593-06:00
parent: "[[Java - Spring Data]]"
children:
  - "[[Java - Spring - Repository (Customize All Repositories - repositoryBaseClass)]]"
  - "[[Java - Spring - Repository (Customize All Repositories - repositoryBaseClass) Autowiring Within RepositoryBaseClass]]"
  - "[[Java - Spring - Repository (Customize Individual Repositories - repositoryImplementationPostfix)]]"
  - "[[Java - Spring - Repository (Methods Creating Repository Bean Proxies)]]"
  - "[[Java - Spring - Repository (Query Methods - Builtin)]]"
  - "[[Java - Spring - Repository (Repository Methods - Selectively Expose Query Methods)]]"
  - "[[Java - Spring - Repository (Repository Methods - Selectively Override Query Methods)]]"
  - "[[Java - Spring - Repository (Using Multiple Instantiations of the Same Spring Data Module)]]"
  - "[[Java - Spring - Repository (Using Multiple Spring Data Modules)]]"
  - "[[Java - Spring - Repository (With and Without @Transactional)]]"
---
The goal of the <strong>Spring Data Repository</strong> abstraction is to significantly reduce the amount of boilerplate code required to implement data access layers for various [[Data Storage|persistence stores]]
# Using Spring Data Repository
Define a domain class-specific repository interface and its query methods. The interface must extend <code><font style="color: rgb(122,134,154);">Repository</font></code> and be typed to the domain class and an ID type.
```
import org.springframework.data.repository.Repository;

public interface PersonRepository extends Repository<Person, Long> {
  List<Person> findByLastname(String lastname);
  // more query methods
}
```
- If you want to expose CRUD methods for that domain type, extend <code><font style="color: rgb(122,134,154);">CrudRepository</font></code> instead of <code><font style="color: rgb(122,134,154);">Repository</font></code>
- If you want to expose paging & sorting features methods for that domain type, extend <code><font style="color: rgb(122,134,154);">PagingAndSortingRepository</font></code> instead of <code><font style="color: rgb(122,134,154);">Repository</font></code>

Set up Spring to create proxy instances for those interfaces
```
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public class Config {}
```

To customize the package to scan, use one of the <code><font style="color: rgb(122,134,154);">basePackage…</font></code> attributes of the data-store-specific repository’s <code><font style="color: rgb(128,128,0);">@Enable<font style="color: rgb(122,134,154);">\${store}</font>Repositories</font></code>-annotation
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

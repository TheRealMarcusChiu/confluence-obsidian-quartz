---
title: "Java - Spring - Repository (Pageable, Slice, and Sort in Query Methods)"
created: 2021-03-14T23:40:08.300-05:00
modified: 2022-11-17T03:11:19.913-06:00
parent: "[[Java - Spring - Repository (Query Methods - Builtin)]]"
children: []
---
The Spring Data Infrastructure recognizes certain specific types like <code>Pageable</code> and <code>Sort</code>, to apply pagination and sorting to your queries dynamically. The following example demonstrates these features:
# Using Pageable, Slice, and Sort in query methods
```
Page<User> findByLastname(String lastname, Pageable pageable);

Slice<User> findByLastname(String lastname, Pageable pageable);

List<User> findByLastname(String lastname, Sort sort);

List<User> findByLastname(String lastname, Pageable pageable);
```

APIs taking <code>Sort</code> and <code>Pageable</code> expect non-<code>null</code> values to be handed into methods. If you don’t want to apply any sorting or pagination use <code>Sort.unsorted()</code> and <code>Pageable.unpaged()</code>.

The first method lets you pass an <code>org.springframework.data.domain.Pageable</code> instance to the query method to dynamically add paging to your statically defined query. A <code>Page</code> knows about the total number of elements and pages available. It does so by the infrastructure triggering a count query to calculate the overall number. As this might be expensive (depending on the store used), you can instead return a <code>Slice</code>. A <code>Slice</code> only knows about whether a next <code>Slice</code> is available, which might be sufficient when walking through a larger result set.

Sorting options are handled through the <code>Pageable</code> instance, too. If you only need sorting, add an <code>org.springframework.data.domain.Sort</code> parameter to your method. As you can see, returning a <code>List</code> is also possible. In this case, the additional metadata required to build the actual <code>Page</code> instance is not created (which, in turn, means that the additional count query that would have been necessary is not issued). Rather, it restricts the query to look up only the given range of entities
# Sorting

Simple sorting expressions can be defined by using property names. Expressions can be concatenated to collect multiple criterias into one expression

Defining sort expressions
```
Sort sort = Sort.by("firstname").ascending()
  .and(Sort.by("lastname").descending());
```

For a more type-safe way of defining sort expressions, start with the type to define the sort expression for and use method references to define the properties to sort on

Defining sort expressions using the type-safe API
```
TypedSort<Person> person = Sort.sort(Person.class);
TypedSort<Person> sort = person.by(Person::getFirstname).ascending()
  .and(person.by(Person::getLastname).descending());
```

If your store implementation supports Querydsl, you can also use the metamodel types generated to define sort expressions:

Defining sort expressions using the Querydsl API
```
QSort sort = QSort.by(QPerson.firstname.asc())
  .and(QSort.by(QPerson.lastname.desc()));
```

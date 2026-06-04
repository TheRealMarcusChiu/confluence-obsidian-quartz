---
title: "Java - Spring - Repository (Query Methods - Builtin)"
created: 2021-03-14T23:24:04.361-05:00
modified: 2021-07-24T19:32:11.510-05:00
parent: "[[Java - Spring Data - Spring Data Repository]]"
children:
  - "[[Java - Spring - Repository (Async Query Results)]]"
  - "[[Java - Spring - Repository (Limiting Query Results)]]"
  - "[[Java - Spring - Repository (Pageable, Slice, and Sort in Query Methods)]]"
  - "[[Java - Spring - Repository (Streaming Query Results)]]"
---
###### Defining Query Methods

The repository proxy has two ways to derive a store-specific query from the method name:
- By deriving the query in the method name directly (e.g. <code>List\<User\> findAllUsers()</code>)
- By using a manually defined query (e.g. <code>@Query("SELECT \* FROM user")</code>)

# Query Creation
The query builder mechanism built into Spring Data repository infrastructure is useful for building constraining queries over entities of the repository. The mechanism strips the prefixes <code>find…By</code>, <code>read…By</code>, <code>query…By</code>, <code>count…By</code>, and <code>get…By</code> from the method and starts parsing the rest of it. The introducing clause can contain further expressions, such as a <code>Distinct</code> to set a distinct flag on the query to be created. However, the first <code>By</code> acts as delimiter to indicate the start of the actual criteria. At a very basic level, you can define conditions on entity properties and concatenate them with <code>And</code> and <code>Or</code>. The following example shows how to create a number of queries:
```
interface PersonRepository extends Repository<Person, Long> {

  List<Person> findByEmailAddressAndLastname(EmailAddress emailAddress, String lastname);

  // Enables the distinct flag for the query
  List<Person> findDistinctPeopleByLastnameOrFirstname(String lastname, String firstname);
  List<Person> findPeopleDistinctByLastnameOrFirstname(String lastname, String firstname);

  // Enabling ignoring case for an individual property
  List<Person> findByLastnameIgnoreCase(String lastname);
  // Enabling ignoring case for all suitable properties
  List<Person> findByLastnameAndFirstnameAllIgnoreCase(String lastname, String firstname);

  // Enabling static ORDER BY for a query
  List<Person> findByLastnameOrderByFirstnameAsc(String lastname);
  List<Person> findByLastnameOrderByFirstnameDesc(String lastname);
}
```

some general things to notice:
- The expressions are usually property traversals combined with operators that can be concatenated. You can combine property expressions with <code>AND</code> and <code>OR</code>. You also get support for operators such as <code>Between</code>, <code>LessThan</code>, <code>GreaterThan</code>, and <code>Like</code> for the property expressions. The supported operators can vary by datastore, so consult the appropriate part of your reference documentation.
- The method parser supports setting an <code>IgnoreCase</code> flag for individual properties (for example, <code>findByLastnameIgnoreCase(…)</code>) or for all properties of a type that supports ignoring case (usually <code>String</code> instances — for example, <code>findByLastnameAndFirstnameAllIgnoreCase(…)</code>). Whether ignoring cases is supported may vary by store, so consult the relevant sections in the reference documentation for the store-specific query method.
- You can apply static ordering by appending an <code>OrderBy</code> clause to the query method that references a property and by providing a sorting direction (<code>Asc</code> or <code>Desc</code>). To create a query method that supports dynamic sorting, see “[Special parameter handling](https://docs.spring.io/spring-data/neo4j/docs/5.1.12.RELEASE/reference/html/#repositories.special-parameters)”.

###### Property Expressions

Property expressions can refer only to a direct property of the managed entity, as shown in the preceding example. At query creation time, you already make sure that the parsed property is a property of the managed domain class. However, you can also define constraints by traversing nested properties. Consider the following method signature:
```
List<Person> findByAddressZipCode(ZipCode zipCode);
```

Assume a <code>Person</code> has an <code>Address</code> with a <code>ZipCode</code>. In that case, the method creates the property traversal <code>x.address.zipCode</code>. The resolution algorithm starts by interpreting the entire part (<code>AddressZipCode</code>) as the property and checks the domain class for a property with that name (uncapitalized). If the algorithm succeeds, it uses that property. If not, the algorithm splits up the source at the camel case parts from the right side into a head and a tail and tries to find the corresponding property — in our example, <code>AddressZip</code> and <code>Code</code>. If the algorithm finds a property with that head, it takes the tail and continues building the tree down from there, splitting the tail up in the way just described. If the first split does not match, the algorithm moves the split point to the left (<code>Address</code>, <code>ZipCode</code>) and continues.

Although this should work for most cases, it is possible for the algorithm to select the wrong property. Suppose the <code>Person</code> class has an <code>addressZip</code> property as well. The algorithm would match in the first split round already, choose the wrong property, and fail (as the type of <code>addressZip</code> probably has no <code>code</code> property).

To resolve this ambiguity you can use <code>\_</code> inside your method name to manually define traversal points. So our method name would be as follows:
```
List<Person> findByAddress_ZipCode(ZipCode zipCode);
```

Because we treat the underscore character as a reserved character, we strongly advise following standard Java naming conventions (that is, not using underscores in property names but using camel case instead).
###### Using Special Parameter Binding

To handle parameters in your query, define method parameters as already seen in the preceding examples. Besides that, the infrastructure recognizes certain specific types like <code>Pageable</code> and <code>Sort</code>, to apply pagination and sorting to your queries dynamically.

see: [[Java - Spring - Repository (Pageable, Slice, and Sort in Query Methods)]]
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

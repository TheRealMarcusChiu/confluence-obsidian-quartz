---
title: "Java - How to Implement .equals() & .hashCode() for JPA／Hibernate Entities"
created: 2021-03-07T19:05:18.908-06:00
modified: 2022-11-16T00:51:36.506-06:00
parent: "[[Java - Hibernate]]"
children: []
---
### Prerequisites
- [[Java - How to Write an Equality Method in Java]]
- [[Java - JPA／Hibernate's Entity State Transitions|Java - JPA/Hibernate's Entity State Transitions]]

# Introduction

article: [https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/](https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/)

When it comes to implementing <code>equals</code> and <code>hashCode</code>, there is one and only one rule you should have in mind:
> Equals and hashCode must behave consistently across all [[Java - JPA／Hibernate's Entity State Transitions|entity state transitions]].
# Testing <code>equals()</code> and <code>hashCode()</code> ImplementationTo test the effectiveness of an <code>equals()</code> and <code>hashCode()</code> implementation, the following test can be used:
```
protected void assertEqualityConsistency(Class<T> clazz, T entity) {

    Set<T> tuples = new HashSet<>();

    assertFalse(tuples.contains(entity));
    tuples.add(entity);
    assertTrue(tuples.contains(entity));

    doInJPA(entityManager -> {
        entityManager.persist(entity);
        entityManager.flush();
        assertTrue(
            "The entity is not found in the Set after it's persisted.",
            tuples.contains(entity)
        );
    });

    assertTrue(tuples.contains(entity));

    doInJPA(entityManager -> {
        T entityProxy = entityManager.getReference(
            clazz,
            entity.getId()
        );
        assertTrue(
            "The entity proxy is not equal with the entity.",
            entityProxy.equals(entity)
        );
    });

    doInJPA(entityManager -> {
        T entityProxy = entityManager.getReference(
            clazz,
            entity.getId()
        );
        assertTrue(
            "The entity is not equal with the entity proxy.",
            entity.equals(entityProxy));
    });

    doInJPA(entityManager -> {
        T _entity = entityManager.merge(entity);
        assertTrue(
            "The entity is not found in the Set after it's merged.",
            tuples.contains(_entity)
        );
    });

    doInJPA(entityManager -> {
        entityManager.unwrap(Session.class).update(entity);
        assertTrue(
            "The entity is not found in the Set after it's reattached.",
            tuples.contains(entity)
        );
    });

    doInJPA(entityManager -> {
        T _entity = entityManager.find(clazz, entity.getId());
        assertTrue(
            "The entity is not found in the Set after it's loaded in a different Persistence Context.",
            tuples.contains(_entity)
        );
    });

    doInJPA(entityManager -> {
        T _entity = entityManager.getReference(clazz, entity.getId());
        assertTrue(
            "The entity is not found in the Set after it's loaded as a proxy in a different Persistence Context.",
            tuples.contains(_entity)
        );
    });

    T deletedEntity = doInJPA(entityManager -> {
        T _entity = entityManager.getReference(
            clazz,
            entity.getId()
        );
        entityManager.remove(_entity);
        return _entity;
    });

    assertTrue(
        "The entity is not found in the Set even after it's deleted.",
        tuples.contains(deletedEntity)
    );
}
```
# Default java.lang.Object <code>equals()</code> and <code>hashCode()</code>

What if our entity does not have any column that can be used as a <code>@NaturalId</code>? The first urge is to not define your own implementations of <code>equals</code> and <code>hashCode</code>, like in the following example:
```
@Entity(name = "Book")
public class Book implements Identifiable<Long> {
 
    @Id
    @GeneratedValue
    private Long id;
 
    private String title;
 
    //Getters and setters omitted for brevity
}
```

However, when testing this implementation:
```
Book book = new Book();
book.setTitle("High-PerformanceJava Persistence");
 
assertEqualityConstraints(Book.class, book);
```

Hibernate throws the following exception:
```
java.lang.AssertionError: The entity is not found after it's merged
```

The original entity is not equal with the one returned by the merge method because two distinct Object(s) do not share the same reference.
# <strong>Using the entity identifier for <code>equals</code> and <code>hashCode</code></strong>

So if the default <code>equals</code> and <code>hashCode</code> is no good either, then let’s use the entity identifier for our custom implementation. Let’s just use our IDE to generate the <code>equals</code> and <code>hashCode</code> and see how it works:
```
@Entity
public class Book implements Identifiable<Long> {
 
    @Id
    @GeneratedValue
    private Long id;
 
    private String title;
 
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Book)) return false;
        Book book = (Book) o;
        return Objects.equals(getId(), book.getId());
    }
 
    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }
 
    //Getters and setters omitted for brevity
}
```

When running the previous test case, Hibernate throws the following exception:
```
java.lang.AssertionError: The entity is not found after it's persisted
```

When the entity was first stored in the Set, the identifier was null. After the entity was persisted, the identifier was assigned to a value that was automatically generated, hence the hashCode differs. For this reason, the entity cannot be found in the Set after it got persisted.
# Fixing the entity identifier <code>equals()</code> and <code>hashCode()</code>

To address the previous issue, there is only one solution: the hashCode should always return the same value:
```
@Entity
public class Book implements Identifiable<Long> {
 
    @Id
    @GeneratedValue
    private Long id;
 
    private String title;
 
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
 
        if (!(o instanceof Book))
            return false;
 
        Book other = (Book) o;
 
        return id != null &&
               id.equals(other.getId());
    }
 
    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
 
    //Getters and setters omitted for brevity
}
```

Also, when the entity identifier is <code>null</code>, we can guarantee equality only for the same object references. Otherwise, no transient object is equal to any other transient or persisted object. That’s why the identifier equality check is done only if the current <code>Object</code> identifier is not null.

With this implementation, the <code>equals</code> and <code>hashCode</code> test runs fine for all entity state transitions. The reason why it works is that the hashCode value does not change, hence, we can rely on the <code>java.lang.Object</code> reference equality as long as the identifier is <code>null</code>.
# Conclusion

The entity identifier can be used for <code>equals</code> and <code>hashCode</code>, but only if the <code>hashCode</code> returns the same value all the time. This might sound like a terrible thing to do since it defeats the purpose of using multiple buckets in a <code>HashSet</code> or <code>HashMap</code>.

However, for performance reasons, you should always limit the number of entities that are stored in a collection. You should never fetch thousands of entities in a <code>@OneToMany</code> <code>Set</code> because the performance penalty on the database side is multiple orders of magnitude higher than using a single hashed bucket

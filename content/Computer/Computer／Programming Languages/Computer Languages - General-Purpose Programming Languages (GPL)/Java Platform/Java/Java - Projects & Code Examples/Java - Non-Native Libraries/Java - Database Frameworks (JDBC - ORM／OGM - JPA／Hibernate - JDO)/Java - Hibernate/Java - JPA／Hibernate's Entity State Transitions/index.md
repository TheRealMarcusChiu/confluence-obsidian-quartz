---
title: "Java - JPA／Hibernate's Entity State Transitions"
created: 2021-03-07T19:08:33.336-06:00
modified: 2022-11-15T15:18:18.866-06:00
parent: "[[Java - Hibernate]]"
children: []
---
<em>[[Java - Hibernate|Hibernate]]</em> shifts the developer mindset from <em>[[Structured Query Language (SQL)|SQL]]</em> statements to <strong>entity state transitions</strong>. Once an entity is actively managed by <em>Hibernate</em>, all changes are going to be automatically propagated to the database.

Manipulating domain model entities (along with their associations) is much easier than writing and maintaining <em>SQL</em> statements. Without an [ORM](http://en.wikipedia.org/wiki/Object-relational_mapping) tool, adding a new column requires modifying all associated <em>INSERT</em>/<em>UPDATE</em> statements.
# The Entity States

<em>JPA/Hibernate</em> monitors currently attached entities. Here are all entity states:

> [!expand-ui]- New (Transient)
> A newly created object that hasn’t ever been associated with a <em>Hibernate Session</em> (a.k.a <em>Persistence Context</em>) and is not mapped to any database table row is considered to be in the <strong>New (Transient)</strong> state.
>
> To become persisted we need to either explicitly call the [EntityManager#persist](https://vladmihalcea.com/jpa-persist-and-merge/) method or make use of the transitive persistence mechanism

> [!expand-ui]- Persistent (Managed)
> A <strong>persistent</strong> entity has been associated with a database table row and it’s being managed by the currently running <em>Persistence Context</em>. Any change made to such entity is going to be detected and propagated to the database (during the <em>Session</em> flush-time). With <em>Hibernate</em>, we no longer have to execute <em>INSERT</em>/<em>UPDATE</em>/<em>DELETE</em> statements. <em>Hibernate</em> employs a [transactional write-behind](https://vladmihalcea.com/a-beginners-guide-to-jpahibernate-flush-strategies/) working style and changes are synchronized at the very last responsible moment, during the current <em>Session</em> flush-time

> [!expand-ui]- Detached
> Once the currently running <em>Persistence Context</em> is closed all the previously managed entities become <strong>detached</strong>. Successive changes will no longer be tracked and no automatic database synchronization is going to happen.
>
> To associate a <strong>detached</strong> entity to an active <em>Hibernate Session</em>, you can choose one of the following options:
>
> > [!expand-ui]- Reattaching
> > Hibernate (but not <em>JPA</em> 2.1) supports reattaching through the [Session#update](http://docs.jboss.org/hibernate/orm/4.3/javadocs/org/hibernate/Session.html#update%28java.lang.Object%29) method.
> >
> > A <em>Hibernate Session</em> can only associate one <em>Entity</em> object for a given database row. This is because the <em>Persistence Context</em> acts as an in-memory cache (first-level cache) and only one value (entity) is associated with a given key (entity type and database identifier).
> >
> > An entity can be reattached only if there is no other <em>JVM</em> object (matching the same database row) already associated with the current <em>Hibernate Session</em>
>
> > [!expand-ui]- Merging
> > The [merge operation](https://vladmihalcea.com/jpa-persist-and-merge/) is going to copy the <strong>detached</strong> entity state (source) to a managed entity instance (destination). If the merging entity has no equivalent in the current <em>Session</em>, one will be fetched from the database.
> >
> > The <strong>detached</strong> object instance will continue to remain detached even after the merge operation

> [!expand-ui]- Removed
> Although <em>JPA</em> demands that [managed entities only](http://docs.oracle.com/javaee/7/api/javax/persistence/EntityManager.html#remove%28java.lang.Object%29) are allowed to be removed, <em>Hibernate</em> can also [delete detached entities](https://docs.jboss.org/hibernate/core/4.3/devguide/en-US/html/ch03.html#d5e824) (but only through a [Session#delete](https://docs.jboss.org/hibernate/core/4.3/javadocs/org/hibernate/Session.html#delete%28java.lang.Object%29) method call).
>
> A removed entity is only scheduled for deletion and the actual database <em>DELETE</em> statement will be executed during <em>Session</em> flush-time
# Entity State Transitions

```merge-table
{
  "rows": [
    [
      "To change the JPA entity state, we need to use one of the following <code><font style=\"color: rgb(122,134,154);\">EntityManager</font></code> methods:![[Java - JPA／Hibernate's Entity State Transitions/jpaentitystates-1.png|400]]",
      "While Hibernate <code><font style=\"color: rgb(122,134,154);\">Session</font></code> interface extends the JPA <code><font style=\"color: rgb(122,134,154);\">EntityManager</font></code>, it also provides several specific methods that can be used to change the entity state:![[Java - JPA／Hibernate's Entity State Transitions/hibernateentitystates2.png|400]]"
    ]
  ]
}
```
# Other
- [[Java - How to Implement .equals() & .hashCode() for JPA／Hibernate Entities|Java - How to Implement .equals() & .hashCode() for JPA/Hibernate Entities]]

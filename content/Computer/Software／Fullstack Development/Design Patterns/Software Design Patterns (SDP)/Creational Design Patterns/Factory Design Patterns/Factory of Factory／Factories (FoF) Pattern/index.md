---
title: "Factory of Factory／Factories (FoF) Pattern"
created: 2023-06-02T12:09:10.966-05:00
modified: 2026-01-10T15:29:34.457-06:00
parent: "[[Factory Design Patterns]]"
children: []
---
###### Factory of Factory/Factories (FoF) Pattern
````excerpt
- is a type of [[Factory Design Patterns|Factory Design Pattern]] that extends the [[Abstract Factory Pattern]]
- it introduces an additional level of abstraction by providing a factory that produces other factories
- it is used when there is a need for dynamically creating different families of factories at runtime
````
^excerpt

# FoF - Example Implementation

Let's start with an example [[Abstract Factory Pattern]] (specifically ConcreteFactories with different subtypes):
```
interface UserRepository {
    void save(String user);
}
interface OrderRepository {
    void save(String order);
}

class MySqlUserRepository implements UserRepository {
    public void save(String user) { System.out.println("Saving user in MySQL"); }
}

class MySqlOrderRepository implements OrderRepository {
    public void save(String order) { System.out.println("Saving order in MySQL"); }
}

class PostgresUserRepository implements UserRepository {
    public void save(String user) { System.out.println("Saving user in PostgreSQL"); }
}

class PostgresOrderRepository implements OrderRepository {
    public void save(String order) { System.out.println("Saving order in PostgreSQL"); }
}

// Factory Interface (Abstract Factory)
interface RepositoryFactory {
    UserRepository createUserRepository();
    OrderRepository createOrderRepository();
}

// Contrete Factories
class MySqlRepositoryFactory implements RepositoryFactory {
    public UserRepository createUserRepository() { return new MySqlUserRepository(); }
    public OrderRepository createOrderRepository() { return new MySqlOrderRepository(); }
}
class PostgresRepositoryFactory implements RepositoryFactory {
    public UserRepository createUserRepository() { return new PostgresUserRepository(); }
    public OrderRepository createOrderRepository() { return new PostgresOrderRepository(); }
}
```

The Factory of Factories part:
```
class RepositoryFactoryProvider {
    public static RepositoryFactory getFactory(DatabaseType type) {
        return switch (type) {
            case MYSQL -> new MySqlRepositoryFactory();
            case POSTGRES -> new PostgresRepositoryFactory();
        };
    }
}

enum DatabaseType {
    MYSQL, POSTGRES
}
```

Client code:
```
public class Application {
    public static void main(String[] args) {
        RepositoryFactory factory = RepositoryFactoryProvider.getFactory(DatabaseType.MYSQL);
        UserRepository userRepo = factory.createUserRepository();
        OrderRepository orderRepo = factory.createOrderRepository();
        userRepo.save("Alice");
        orderRepo.save("Order-1");
    }
}
```
# Comparisons

> [!expand]- Click here to expand...
> ![[Abstract Factory Pattern vs Factory of Factory Pattern#^excerpt]]

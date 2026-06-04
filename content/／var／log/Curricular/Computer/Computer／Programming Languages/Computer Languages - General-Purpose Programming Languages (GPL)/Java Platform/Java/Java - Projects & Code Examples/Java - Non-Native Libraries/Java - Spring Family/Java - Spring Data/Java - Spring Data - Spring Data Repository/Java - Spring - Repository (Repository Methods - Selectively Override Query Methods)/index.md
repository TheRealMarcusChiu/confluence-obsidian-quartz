---
title: "Java - Spring - Repository (Repository Methods - Selectively Override Query Methods)"
created: 2021-01-31T14:28:03.852-06:00
modified: 2021-06-24T00:25:10.341-05:00
parent: "[[Java - Spring Data - Spring Data Repository]]"
children: []
---
### How to Override Repository Methods

Repository interface
```
public interface UserRepository extends CrudRepository<User, String> {}
```

Your repository implementation
```
@Repository("customUserRepository")
public class CustomUserRepository implements UserRepository {

    @Autowired
    @Qualifier("userRepository") // inject Spring implementation here
    private UserRepository userRepository;

    public User save(User user) {
        User user = userRepository.save(entity);
        // Your custom code goes here
        return user;
    }

    // Delegate other methods here ...

    @Override
    public User findOne(String s) {
        return userRepository.findOne(s);
    }
}
```

Then use your custom implementation in your service
```
@Autowired
@Qualifier("customUserRepository")
private UserRepository userRepository;
```

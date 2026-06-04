---
title: "Repository Design Pattern"
created: 2019-04-15T10:42:46.970-05:00
modified: 2019-12-11T15:57:51.250-06:00
parent: "[[SDP - Other]]"
children: []
---
based on: [https://www.vzurauskas.com/2019/04/07/two-layer-repositories-in-spring/amp/](https://www.vzurauskas.com/2019/04/07/two-layer-repositories-in-spring/amp/)
# TODO
# Typical Anemic Domain Model
```java
@Data
@Entity
public class Account {
    @Id 
	@Column 
	private String iban;
    
	@Column 
	private int ownerId;
}
```
```
@Service
public final class AccountService {
    public boolean isAccountOwnedBy(Account account, int customerId) {
        return account.getOwnerId() == customerId;
    }
}
```
```
@Repository
public interface AccountRepository extends CrudRepository<Account, String> {
}
```
```
public void openNewAccount(String iban, int customerId) {
    repository.save(new Account(iban, customerId));
}

public String getBalance(String iban, int requestorId) {
    Account account = repository.findById("LT601010012345678901").orElseThrow(...);

    if (accountService.isAccountOwnedBy(account, requestorId)) {
        // Calculate balance...
    } else {
        throw new IllegalArgumentException(
            "Account is not owned by " + requestorId
        );
    }
}
```

move isAccountOwnedBy into model class
```
@Data
@Entity
public final class Account {
    @Id
	@Column
	private String iban;
    
	@Column
	private int ownerId;
    
    // Constructors...

    public boolean isOwnedBy(int customerId) {
        return this.ownerId == customerId;
    }
}
```
```
public String getBalance(String iban, int requestorId) {
    Account account = repository.findById("LT601010012345678901").orElseThrow(...);
    if (account.isOwnedBy(requestorId)) {
        // Calculate balance...
    } else {
        throw new IllegalArgumentException(
            "Account is not owned by " + requestorId
        );
    }
}
```

---
title: "Java - Spring - Logical Transaction vs Physical Transaction - Propagation Level"
created: 2021-04-12T19:09:17.766-05:00
modified: 2021-07-26T20:11:12.323-05:00
parent: "[[Java - Spring Data - Transaction Management]]"
children: []
---
# 1 - Logical Transaction vs Physical Transaction
```
@Service
public class UserService {

    @Autowired
    private InvoiceService invoiceService;

    @Transactional
    public void invoice() {
        invoiceService.createPdf();
        // send invoice as email, etc.
    }
}

@Service
public class InvoiceService {

    @Transactional
    public void createPdf() {
        // ...
    }
}
```

Now in terms of database transactions, this should really just be one database transaction (i.e. <code>getConnection() → setAutoCommit(false) → commit()</code>). Spring calls this physical transaction

From Spring’s side however, there’s two <em>logical transactions</em> happening: First in <code>UserService</code>, the other one in <code>InvoiceService</code>
# 2 - Propagation Level
```java
@Transactional(propagation = Propagation.REQUIRED)
@Transactional(propagation = Propagation.SUPPORTS)
@Transactional(propagation = Propagation.MANDATORY)
@Transactional(propagation = Propagation.REQUIRES_NEW)
@Transactional(propagation = Propagation.NOT_SUPPORTED)
@Transactional(propagation = Propagation.NEVER)
@Transactional(propagation = Propagation.NESTED)
```

```merge-table
{
  "rows": [
    [
      "<code>REQUIRED</code> (default)",
      "My method needs a transaction, either open one for me or use an existing one",
      "<em>getConnection(). setAutocommit(false). commit()</em>"
    ],
    [
      "<code>SUPPORTS</code>",
      "I don’t really care if a transaction is open or not, i can work either way",
      "nothing to do with JDBC"
    ],
    [
      "<code>MANDATORY</code>",
      "I’m not going to open up a transaction myself, but I’m going to throw exception if no one else opened one up",
      "nothing to do with JDBC"
    ],
    [
      "<code>REQUIRE\\_NEW</code>",
      "I want my completely own transaction",
      "<em>getConnection(). setAutocommit(false). commit()</em>"
    ],
    [
      "<code>NOT\\_SUPPORTED</code>",
      "I really don’t like transactions, I will even try and suspend a current, running transaction",
      "nothing to do with JDBC"
    ],
    [
      "<code>NEVER</code>",
      "I’m going to throw exception if someone else started up a transaction",
      "nothing to do with JDBC"
    ],
    [
      "<code>NESTED</code>",
      "It sounds so complicated, but we are just talking savepoints!",
      "<em>connection.setSavepoint()</em>"
    ]
  ]
}
```

---
title: "Java - Data - Transaction Management - Java Transaction API (JTA)"
created: 2021-04-11T19:27:57.763-05:00
modified: 2021-09-25T19:53:45.011-05:00
parent: "[[Java - Database Frameworks (JDBC - ORM／OGM - JPA／Hibernate - JDO)]]"
children:
  - "[[Java - Transaction Isolation Level - (Dirty - Non-Repeatable - Phantom) Read]]"
---
# Plain JDBC Transaction
```java
import java.sql.Connection;

Connection connection = dataSource.getConnection();

try (connection) {
    connection.setAutoCommit(false); // (2)
	connection.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);
    executeSqlStatements(connection); // execute some SQL statements
    connection.commit();
} catch (SQLException e) {
    connection.rollback();
}

public void executeSqlStatements(Connection connection) {
	Statement stmt = con.createStatement()) {
    ResultSet rs = stmt.executeQuery(query);
    while (rs.next()) {
        String coffeeName = rs.getString("COF_NAME");
        int supplierID = rs.getInt("SUP_ID");
        System.out.println(coffeeName + ", " + supplierID);
    }
}
```
- <code><font style="color: rgb(122,134,154);">setAutoCommit(true)</font></code> wraps every single SQL statement in its own transaction
- <code><font style="color: rgb(122,134,154);">setAutoCommit(false)</font></code> is the opposite: You are the master of the transaction

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
# Spring Specific
- [[Java - Spring Data - Transaction Management]]

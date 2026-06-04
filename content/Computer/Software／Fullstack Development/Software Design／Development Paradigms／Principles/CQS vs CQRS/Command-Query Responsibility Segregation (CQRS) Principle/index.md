---
title: "Command-Query Responsibility Segregation (CQRS) Principle"
created: 2022-04-17T00:12:57.390-05:00
modified: 2023-03-18T16:47:48.344-05:00
parent: "[[CQS vs CQRS]]"
children: []
---
###### Command-Query Responsibility Segregation (CQRS) Principle
````excerpt
- is [[Command-Query Separation (CQS) Principle|Command-Query Separation]] on a larger scale
- originated with Bertrand Meyer’s Command and Query Separation Principle
- If you have a return value you cannot mutate the state. If you mutate the state your return type must be void
````
^excerpt

# CQRS - Example
```
class CustomerService {
	void makeCustomerPreferred(String customerId);
	Customer getCustomer(String customerId);
	List<Customer> getCustomersWithName(String name);
	List<Customer> getPreferredCustomers();
	void changeCustomerLocale(String customerId, Locale locale);
	void createCustomer(Customer customer);
	void editCustomerDetails(CustomerDetails customerDetails);
}
```

Applying CQRS on the CustomerService would result in two services as shown below
```
class CustomerCommandService {
	void makeCustomerPreferred(String customerId);
	void changeCustomerLocale(String customerId, Locale locale);
	void createCustomer(Customer customer);
	void editCustomerDetails(CustomerDetails customerDetails);
}

class CustomerQueryService {
	Customer getCustomer(String customerId);
	List<Customer> getCustomersWithName(String name);
	List<Customer> getPreferredCustomers();
}
```
# CQRS - Different Needs

This separation enforces the notion that the Command side and the Query side have very different needs. The architectural properties associated with use cases on each side tend to be quite different. Just to name a few:

```merge-table
{
  "rows": [
    [
      {
        "content": "Consistency",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <strong>Command: </strong>It is far easier to process transactions with consistent data than to handle all of the edge cases that eventual consistency can bring into play\n- <strong>Query: </strong>Most systems can be eventually consistent on the Query side"
    ],
    [
      {
        "content": "Data Storage",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <strong>Command</strong>: The Command side being a transaction processor in a relational structure would want to store data in a normalized way, probably near [[Database Normalization (Unnormalized First／Second／Third／Elementary-Key／Boyce-Codd／Fourth／Essential-Tuple／Fifth／Domain-Key／Sixth Normal Form)|3rd Normal Form (3NF)]]\n- <strong>Query</strong>: The Query side would want data in a denormalized way to minimize the number of joins needed to get a given set of data. In a relational structure likely in [[Database Normalization (Unnormalized First／Second／Third／Elementary-Key／Boyce-Codd／Fourth／Essential-Tuple／Fifth／Domain-Key／Sixth Normal Form)|1st Normal Form (1NF)]]"
    ],
    [
      {
        "content": "Scalability",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <strong>Command: </strong>In most systems, especially web systems, the Command side generally processes a very small number of transactions as a percentage of the whole. Scalability, therefore, is not always important\n- <strong>Query: </strong>In most systems, especially web systems, the Query side generally processes a very large number of transactions as a percentage of the whole (often times 2 or more orders of magnitude). Scalability is most often needed for the query side"
    ]
  ]
}
```
# CQRS - Resources
- [https://cqrs.wordpress.com/documents/cqrs-introduction/](https://cqrs.wordpress.com/documents/cqrs-introduction/)

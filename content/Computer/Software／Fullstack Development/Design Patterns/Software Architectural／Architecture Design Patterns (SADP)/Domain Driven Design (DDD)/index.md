---
title: "Domain Driven Design (DDD)"
created: 2019-03-15T00:23:03.016-05:00
modified: 2022-02-18T02:57:24.682-06:00
parent: "[[Software Architectural／Architecture Design Patterns (SADP)]]"
children:
  - "[[Bounded Context]]"
---
[https://domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf](https://domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf)

```merge-table
{
  "rows": [
    [
      "```dataview\nLIST\nFROM \"\"\nWHERE file.folder = this.file.folder + \"/\" + this.file.name\n```",
      "![[Domain Driven Design (DDD)/comain.png|700]]"
    ]
  ]
}
```
# Chapter 1

<em>Somebody without knowledge of banking should be able to learn a lot just by reading the code in a domain model</em>
1. Model
	- domain expert knows the most about the domain
	- domain is a specified sphere of knowledge
	- Software Architect/Designer extract knowledge from domain expert and transforms it into a useful form (Model).
	- developers receives the information
	- there is constant feedback, which creates a better model, and clears the understanding of the domain.
	- All three creates the model
	- The Model is the place where those 2 areas of expertise meet (Software Specialist and Domain Expert)
2. Ubiquitous Language
	- formed from model as backbone
	- used consistently in all communication

Architectural Solution for domain-driven designs:
1. UI (Presentation) Layer
2. Application Layer
3. Domain Layer
4. Infrastructure Layer

A typical interaction of the application, domain and infrastructure could look like this. The user wants to book a flights route, and asks an application service in the application layer to do so. The application tier fetches the relevant domain objects from the infrastructure and invokes relevant methods on them, e.g., to check security margins to other already booked flights. Once the domain objects have made all checks and updated their status to “decided”, the application service persists the objects to the infrastructure.

Entity
1. anything that needs an identity (Customer)
2. if destroyed in memory, should be persisted into DB

Value Objects
1. object that does not have identity
2. characteristics of value objects:
	- immutable
	- when destroyed, does not have to be persisted into DB
	- can be copied multiple times, and destroyed whenever
	- sharable

Services
1. there are 3 Characteristics of a Service:
	- operation performed by the Service refers to a domain concept which does not naturally belong to an Entity or Value Object
	- operation performed refers to other objects in the domain
	- operation is stateless!
2. keep the services can exist in Application, Domain, and Infrastructure Layer.

# STILL READING

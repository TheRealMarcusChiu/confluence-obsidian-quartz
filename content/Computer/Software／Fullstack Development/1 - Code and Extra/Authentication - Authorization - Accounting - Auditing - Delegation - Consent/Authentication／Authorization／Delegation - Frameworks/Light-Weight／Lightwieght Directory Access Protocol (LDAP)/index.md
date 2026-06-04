---
title: "Light-Weight／Lightwieght Directory Access Protocol (LDAP)"
created: 2019-09-16T10:29:29.070-05:00
modified: 2023-02-19T18:02:02.948-06:00
parent: "[[Authentication／Authorization／Delegation - Frameworks]]"
children:
  - "[[LDAP - Servers]]"
  - "[[LDAP vs AD]]"
  - "[[Simple Authentication and Security Layer (SASL)]]"
---
###### Lightweight Directory Access Protocol (LDAP)
````excerpt
- is a protocol that makes it possible for applications to query user information
````
^excerpt

# LDAP - Protocol Overview

An LDAP query typically involves:
- <strong>session connection</strong> - the user authenticates and connects to the server via an LDAP port.
- <strong>request</strong> - the user submits a query, such as an email lookup, to the server.
- <strong>response</strong> - the LDAP protocol queries the directory, finds the information and delivers it to the user.
- <strong>completion</strong> - the user disconnects from the LDAP port.

# LDAP - Authentication

Before any LDAP query/operation commences, the user must be authenticated. There are two options for LDAP authentication in LDAP v3:

> [!expand-ui]- Simple Authentication
> Simple authentication allows for three possible authentication mechanisms:
> - <strong>Anonymous Authentication</strong>: Grants client anonymous status to LDAP
> - <strong>Unauthenticated Authentication</strong>: For logging purposes only, should not grant access to a client
> - <strong>Name/Password authentication</strong>: Grants access to the server based on the credentials supplied – simple user/pass authentication is not secure and is not suitable for authentication without confidentiality protection

> [!expand-ui]- SASL (Simple Authentication & Security Layer)
> [[Simple Authentication and Security Layer (SASL)|SASL]] authentication binds the [[LDAP - Servers|LDAP server]] to another authentication mechanism, like [[Kerberos Protocol|Kerberos]]. The LDAP server uses the LDAP protocol to send an LDAP message to the other authorization service. That initiates a series of challenge-response messages that result in either a successful authentication or a failure to authenticate

It’s important to note that LDAP passes all of those messages in clear text by default, so anyone with a network sniffer can read the packets. You need to add [[Secure Sockets Layer (SSL) - Transport Layer Security (TLS)|TLS]] encryption or similar to keep your usernames and passwords safe
# LDAP - Query/Operation

People can tackle all sorts of queries/operations with LDAP, they can:
- <strong>add</strong> - enter a new file into the database.
- <strong>delete</strong> - take out a file from the database.
- <strong>search</strong> - start a query to find something within the database.
- <strong>compare</strong> - examine two files for similarities or differences.
- <strong>modify</strong> - make a change to an existing entry.

# LDAP - Terms
- <strong>Data Models</strong> - what types of information sit within your directory? Models help you understand the facets within your LDAP. You could have general information (such as an object class), names (how each item is uniquely referenced), functions (how the data is accessed), and security (how users move through authentication).
- <strong>Distinguished Name (DN)</strong> - this is a unique identifier of each entry that also describes location within the information tree.
- <strong>Modifications</strong> - these are requests LDAP users make to alter the data associated with an entry. [Defined modification types](https://ldap.com/basic-ldap-concepts/) include adding, deleting, replacing, and increasing.
- <strong>Relative Distinguished Name (RDN)</strong> - this is a way of tying DNs together while specifying relative location.
- <strong>Schema</strong> - the coding that underpins your LDAP is known as schema. You'll use this language to describe the format and attributes of each item that sits on the server.
- <strong>URLs </strong>- this is a [string that includes the address and port of a server](https://ldap.com/ldap-urls/), along with other data that can define a group, provide a location, or refer an operation to another server.
- <strong>Uniform Resource Identifier (URI)</strong> - this is a string of characters that defines a resource.

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

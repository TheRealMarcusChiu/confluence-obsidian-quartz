---
title: "keytool (java binary)"
created: 2019-04-06T23:03:44.884-05:00
modified: 2021-10-03T18:58:08.106-05:00
parent: "[[Java Keystore & Truststore - keytool binary]]"
children: []
---
###### keytool
- is a command-line tool used to CRUD [[Java Keystore & Truststore - keytool binary|Java KeyStores and Java Truststores]]
- comes with [[Java - Installation (JDK - JRE - JVM - JE - JSE - JEE - JME)|JDK]]

# Commands
###### creating a new keystore or truststore with a key<code>keytool -keystore /path/to/keystore-or-truststore -genkey -alias key-alias-name-here -keysize 2048 -keyalg RSA \[-storepass changeit\]</code>
###### creating new key and adding it to existing keystore or truststore
<span style="white-space: pre-wrap"><code>  keytool -keystore /path/to/keystore-or-truststore -genkey -alias key-alias-name-here -keysize 2048 -keyalg RSA \[-storepass changeit\]</code></span>

###### import existing key into an existing keystore or truststore (see also: [[Obtaining Public Certificate of a Domain]])
<code>keytool</code><code>-keystore /path/to/keystore-or-truststore -import -alias key-alias-name-here -file example.cer <code>\[-storepass changeit\]</code></code>
###### list keys in keystore or truststore
<span style="white-space: pre-wrap"><code>  keytool -keystore /path/to/keystore-or-truststore -list \[-storepass changeit\]</code></span>

###### deleting key by alias in keystore or truststore
<span style="white-space: pre-wrap"><code>  keytool -keystore /path/to/keystore-or-truststore -delete -alias key-alias-name-here \[-storepass changeit\]</code></span>

# Resources
- [https://www.baeldung.com/keytool-intro](https://www.baeldung.com/keytool-intro)

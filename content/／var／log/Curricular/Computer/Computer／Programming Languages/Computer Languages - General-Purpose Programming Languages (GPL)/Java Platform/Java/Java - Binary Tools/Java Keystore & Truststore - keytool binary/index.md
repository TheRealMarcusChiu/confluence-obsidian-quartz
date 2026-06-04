---
title: "Java Keystore & Truststore - keytool binary"
created: 2019-08-09T01:00:26.119-05:00
modified: 2021-10-03T17:36:27.050-05:00
parent: "[[Java - Binary Tools]]"
children:
  - "[[keytool (java binary)]]"
---
# Keystore vs Truststore - Similarities

Usually, the keystore and truststore:
- are used when a Java application needs to communicate over [[Secure Sockets Layer (SSL) - Transport Layer Security (TLS)|SSL/TLS]]
- are password-protected files that sit on the same file system as our running application. The default format used for these files is JKS until Java 8. Since Java 9, though, the default keystore format is PKCS12. The biggest difference between JKS and PKCS12 is that JKS is a format specific to Java, while PKCS12 is a standardized and language-neutral way of storing encrypted private keys and certificates

# Keystore vs Truststore - Differences

```merge-table
{
  "rows": [
    [
      {
        "content": "Keystore",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- typically holds onto certificates that identify us\n- contains private keys, and the certificates with their corresponding public keys\n- is used from <code>KeyManager</code> deciding which authentication credentials should be sent to the remote host for authentication during SSL handshake\n- In a SSL/TLS handshake the purpose of keyStore is to provide credential"
    ],
    [
      {
        "content": "Truststore",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- holds onto certificates that identify others\n- contains public certificates from other parties that you expect to communicate with, or from [[Certificate／Certification Authority (CA)|Certificate Authorities]] that you trust to identify other parties\n- is used by <code>TrustManager</code> to determine whether remote connection should be trusted\n- In a SSL/TLS handshake the purpose of trustStore is to verify credentials"
    ]
  ]
}
```
# Keystore vs Truststore - SLL/TLS Handshake

Let's say we have a client that wants to communicate with a server over SSL/TLS

The <strong>server</strong> will look up the associated key from its <strong>keystore</strong> and present the public key and certificate to the client.

The <strong>client</strong>, then looks up the associated certificate in our <strong>truststore</strong>. If the certificate or Certificate Authorities presented by the server is not in our truststore, we’ll get an <code>SSLHandshakeException</code> and the connection won’t be set up successfully.
# Interacting With Keystore and/or Truststore

We can interact with the keystore and/or truststore with either:
- Java [programmatically](https://www.baeldung.com/java-keystore)
- command-line [[keytool (java binary)|keytool]]

# Default Keystore and Truststore

> [!expand-ui]- keystore
> <strong><font style="color: rgb(255,0,0);">There’s no default keystore</font></strong>

> [!expand-ui]- truststore
> Java has bundled a truststore called <code>cacerts</code> and it resides in either:
> - <code>Java \<11 - \$JAVA\_HOME/jre/lib/security/cacerts</code>
> - <code>Java ≥11 - \$JAVA\_HOME/lib/security/cacerts</code>
>
> On many [[Linux]] distros, often <code>\<JRE\>/lib/security/cacerts</code> is a symlink to <code>/etc/ssl/certs/java/cacerts</code>
>
> The default password for this truststore is 'changeit'
>
> It contains default, trusted [[Certificate／Certification Authority (CA)|Certificate Authorities]]:
> ```bash
> $ keytool -list -keystore $JAVA_HOME/lib/security/cacerts
> Enter keystore password: changeit
> Keystore type: JKS
> Keystore provider: SUN
>  
> Your keystore contains 92 entries
>  
> verisignclass2g2ca [jdk], 2018-06-13, trustedCertEntry,
> Certificate fingerprint (SHA1): B3:EA:C4:47:76:C9:C8:1C:EA:F2:9D:95:B6:CC:A0:08:1B:67:EC:9D
> ...
> ```
>
> We see here that the truststore contains 92 trusted certificate entries and one of the entries is the <em>verisignclass2gca </em>entry<em>. </em>This means that the JVM will automatically trust certificates signed by <em>verisignclass2g2ca</em>
# Setting Keystore and/or Truststore to be used in Java App

> [!expand-ui]- keystore
> If we want to use an encrypted channel, we’ll have to set both:
> - <code>javax.net.ssl.keyStore</code>
> - <code>javax.net.ssl.keyStorePassword</code>
>
> If our keystore format is different than the default, we use:
> - <code>javax.net.ssl.keyStoreType</code>
>
> To switch on logging for the SSL/TLS layer:
> - <code>javax.net.debug</code>
>
> ```
> java -Djavax.net.ssl.keyStore=/location/of/new/keystore-file \
>      -Djavax.net.ssl.keyStorePassword=PASSWORD \
>      -Djavax.net.ssl.keyStoreType=KeychainStore \
>      -Djavax.net.debug=ALL \
>      -jar MyApplication.jar
> ```

> [!expand-ui]- truststore
> ### Overriding Default Truststore
>
> specify own TrustStore via:
> - <code>javax.net.ssl.trustStore</code>
> - <code>javax.net.ssl.trustStorePassword</code>
>
> If our truststore format is different than the default, we use:<code></code>
> - <code>javax.net.ssl.trustStoreType</code>
>
> To switch on logging for the SSL/TLS layer:
> - <code>javax.net.debug</code>
>
> ```
> java -Djavax.net.ssl.trustStore=/location/of/new/truststore-file \
>      -Djavax.net.ssl.trustStorePassword=PASSWORD \
>      -Djavax.net.ssl.trustStoreType=KeychainStore \
>      -Djavax.net.debug=ALL \
>      -jar MyApplication.jar
> ```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Code Examples
- [https://github.com/java-code-examples/keystore-truststore-examples](https://github.com/java-code-examples/keystore-truststore-examples)

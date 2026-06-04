---
title: "Certificate Signing Request (CSR)"
created: 2019-08-16T13:47:33.434-05:00
modified: 2025-12-19T23:27:31.421-06:00
parent: "[[PKI - Components]]"
children: []
---
###### Certificate Signing Request (CSR)
````excerpt
- is a block of encoded text that is given to a [[Certificate／Certification Authority (CA)|Certificate Authority]] to be signed which then becomes a [[Digital SSL／TLS Certificate|Digital SSL/TLS Certificate]].
````
^excerpt

It is usually generated on the server where the certificate will be installed and contains information that will be included in the certificate such as the organization name, common name (domain name), locality, and country. It also contains the public key that will be included in the certificate. A private key is usually created at the same time that you create the CSR, making a key pair. A CSR is generally encoded using ASN.1 according to the PKCS \#10 specification.

A [[Certificate／Certification Authority (CA)|certificate authority]] will use a CSR to create your SSL/TLS certificate, but it does not need your private key. You need to keep your private key secret. The certificate created with a particular CSR will only work with the private key that was generated with it. So if you lose the private key, the certificate will no longer work.
# What is contained in a CSR?

this is defined by the [[X.509 and PKIX|X.509]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Name",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Explanation",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Examples",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Common Name",
        "bg": "#F4F5F7"
      },
      "The fully qualified domain name (FQDN) of your server. This must match exactly what you type in your web browser or you will receive a [name mismatch error](https://www.sslshopper.com/ssl-certificate-name-mismatch-error.html).",
      "\\*.[google.com](http://google.com)\n[mail.google.com](http://mail.google.com)"
    ],
    [
      {
        "content": "Organization",
        "bg": "#F4F5F7"
      },
      "The legal name of your organization. This should not be abbreviated and should include suffixes such as Inc, Corp, or LLC.",
      "Google Inc."
    ],
    [
      {
        "content": "Organizational Unit",
        "bg": "#F4F5F7"
      },
      "The division of your organization handles the certificate.",
      "Information Technology\nIT Department"
    ],
    [
      {
        "content": "City/Locality",
        "bg": "#F4F5F7"
      },
      "The city where your organization is located.",
      "Mountain View"
    ],
    [
      {
        "content": "State/County/Region",
        "bg": "#F4F5F7"
      },
      "The state/region where your organization is located. This shouldn't be abbreviated.",
      "California"
    ],
    [
      {
        "content": "Country",
        "bg": "#F4F5F7"
      },
      "The two-letter ISO code for the country where your organization is located.",
      "US\nGB"
    ],
    [
      {
        "content": "Email address",
        "bg": "#F4F5F7"
      },
      "An email address is used to contact your organization.",
      "[webmaster@google.com](mailto:webmaster@google.com)"
    ],
    [
      {
        "content": "Public Key",
        "bg": "#F4F5F7"
      },
      "The public key will go into the certificate.",
      "The public key is created automatically"
    ]
  ]
}
```
# What does a CSR look like?

Most CSRs are created in the Base-64 encoded PEM format. This format includes the "<code><font style="color: rgb(122,134,154);">-----BEGIN CERTIFICATE REQUEST-----</font></code>" and "<code><font style="color: rgb(122,134,154);">-----END CERTIFICATE REQUEST-----</font></code>" lines at the beginning and end of the CSR. A PEM format CSR can be opened in a text editor and looks like the following example:
```
-----BEGIN CERTIFICATE REQUEST-----
MIIByjCCATMCAQAwgYkxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlh
MRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRMwEQYDVQQKEwpHb29nbGUgSW5jMR8w
HQYDVQQLExZJbmZvcm1hdGlvbiBUZWNobm9sb2d5MRcwFQYDVQQDEw53d3cuZ29v
Z2xlLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEApZtYJCHJ4VpVXHfV
IlstQTlO4qC03hjX+ZkPyvdYd1Q4+qbAeTwXmCUKYHThVRd5aXSqlPzyIBwieMZr
WFlRQddZ1IzXAlVRDWwAo60KecqeAXnnUK+5fXoTI/UgWshre8tJ+x/TMHaQKR/J
cIWPhqaQhsJuzZbvAdGA80BLxdMCAwEAAaAAMA0GCSqGSIb3DQEBBQUAA4GBAIhl
4PvFq+e7ipARgI5ZM+GZx6mpCz44DTo0JkwfRDf+BtrsaC0q68eTf2XhYOsq4fkH
Q0uA0aVog3f5iJxCa3Hp5gxbJQ6zV6kJ0TEsuaaOhEko9sdpCoPOnRBm2i/XRD2D
6iNh8f8z0ShGsFqjDgFHyF3o+lUyj+UC6H1QW7bn
-----END CERTIFICATE REQUEST-----
```
# How do I generate a CSR and Sign it?

You need to generate a CSR and private key on the server where the certificate will be used. If you are familiar with OpenSSL you can use the following command to generate a CSR and private key ([[openssl - Generating SSL Certificates]]):
```
openssl req -new -newkey rsa:2048 -nodes -out servername.csr -keyout servername.key
```

Once you have your CSR generated, you will need it signed by a CA. You can use the [SSL Wizard](https://www.sslshopper.com/ssl-certificate-wizard.html) to find the best SSL Certificate Authority that will meet your needs.

![[Certificate Signing Request (CSR)/csr-to-ca-to-signed-csr.png|450]]

essentially there are 3 steps:
1. generating a CSR
2. submitting CSR to a CA of your choice. The CA would verify the contents within the CSR and then signs it with its own CA private key. This generates a Signed CSR or SSL Certificate
3. importing the Signed CSR into the SSL server

# How do I decode a CSR?

You can easily decode your CSR to see what is in it by using our [CSR Decoder](https://www.sslshopper.com/csr-decoder.html). In order to decode a CSR on your own machine using OpenSSL, use the following command:
```
openssl req -in server.csr -noout -text
```
# What is a CSR/Private Key's bit length?

The bit-length of a CSR and private key pair determine how easily the key can be cracked using brute force methods. As of 2016, a key size of fewer than 2048 bits is considered weak and could potentially be broken in a few months or less with enough computing power. If a private key is broken, all the connections initiated with it would be exposed to whoever had the key. The [Extended Validation guidelines](https://cabforum.org/extended-validation/) that SSL certificate providers are required to follow, require that all EV certificates use a 2048-bit key size to ensure their security well into the future. Because of this, most providers encourage 2048-bit keys on all certificates whether they are EV or not.
# How CSR and CA work with SSL Handshake?
![[Certificate Signing Request (CSR)/verifying_server_certificates.png|600]]

Before a browser and an HTTPS server can exchange data over an encrypted connection, they first engage in a process known as the SSL handshake. One important part of the SSL handshake is the sending of the server certificate to the web browser. It's here when the Web browser is able to authenticate the identity of the server it's connecting to.

As soon as the browser receives a copy of the server certificate, it checks which CA signed the server cert and then retrieves the CA certificate of that particular Certificate Authority. It then uses the public key on that CA certificate to verify the digital signature on the server cert.

Once the digital signature has been authenticated, the browser and server can proceed with the rest of the SSL process. If you want to know how the public key on the <strong>server certificate</strong> is used, I suggest you read the article [<em>Roles of Server and Client Keys in Secure File Transfers</em>](https://www.jscape.com/blog/bid/81215/Roles-of-Server-and-Client-Keys-in-Secure-File-Transfers-Part-1).
### SSL Mutual Authentication
![[Certificate Signing Request (CSR)/SSL Mutual Authentication.png|519x400]]

---
title: "X.509 Certificate Extensions (DER - PEM - CRT - CER - KEY)"
created: 2019-12-27T13:21:51.986-06:00
modified: 2022-11-26T02:49:15.419-06:00
parent: "[[Digital SSL／TLS Certificate]]"
children: []
---
# X.509 File Extensions
###### Encodings (also used as extensions):
- <strong>.PEM</strong> - the extension is used to denote that the certificate is encoded in [[ASCII]] ([[Base64 Notation]]). There are various types of X.509v3 files and they are (usually) prefixed with a "<code><font style="color: rgb(122,134,154);">-----BEGIN CERTIFICATE-----</font></code>" line and suffixed with a "<code><font style="color: rgb(122,134,154);">-----END CERTIFICATE-----</font></code>"
  <span style="white-space: pre-wrap"><code>-----BEGIN CERTIFICATE-----</code><br><code>... base 64 encoding of the DER encoded certificate</code><br><code>    with line endings and padding with equals signs ...</code><br><code>-----END CERTIFICATE-----</code></span>

- <strong>.DER</strong> - the extension is used to denote that the certificate is encoded in binary. These files may also bear the CER or CRT extension. Proper English usage would be "I have a DER encoded certificate" not "I have a DER certificate"

###### Extensions:
- <strong>.CRT</strong> - extension used for certificates. may be encoded in binary or ASCII (\*NIX Convention)
- <strong>.CER</strong> - similar to .CRT (Microsoft Convention)
- <strong>.KEY</strong> - extension used both for public and provide PKCS\#8 keys. may be encoded in binary or ASCII

the only time CRT and CER can be interchanged is when the encoding type can be identical (i.e. ASCII encoded CRT = ASCII encoded CER)
# OpenSSL Certificate Manipulations

for other basic [[openssl]] commands

```merge-table
{
  "rows": [
    [
      {
        "content": "Manipulation",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "PEM Encoded Cert",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "DER Encoded Cert",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "VIEW",
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>openssl x509 -in cert.pem -text -noout</code><br><code>openssl x509 -in cert.cer -text -noout</code><br><code>openssl x509 -in cert.crt -text -noout</code></span>",
      "<span style=\"white-space: pre-wrap\"><code>openssl x509 -in certificate.der -inform der -text -noout</code></span>"
    ],
    [
      {
        "content": "TRANSFORM",
        "bg": "#F4F5F7"
      },
      "PEM → DER\n<span style=\"white-space: pre-wrap\"><code>openssl x509 -in cert.crt -outform der -out cert.der</code></span>",
      "DER → PEM\n<span style=\"white-space: pre-wrap\"><code>openssl x509 -in cert.crt -inform der -outform pem -out cert.pem</code></span>"
    ],
    [
      {
        "content": "COMBINATION",
        "bg": "#F4F5F7"
      },
      {
        "content": "- In some cases, it is advantageous to combine multiple pieces of the X.509 infrastructure into a single file.  One common example would be to combine both the private key and public key into the same certificate.\n- The easiest way to combine certs keys and chains is to convert each to a PEM encoded certificate and then simply copy the contents of each file into a new file. This is suitable for combining files to use in applications like Apache.",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "EXTRACTION",
        "bg": "#F4F5F7"
      },
      {
        "content": "Some certs will come in a combined form.  Where one file can contain any one of: Certificate, Private Key, Public Key, Signed Certificate, Certificate Authority (CA), and/or Authority Chain",
        "colspan": 2
      },
      null
    ]
  ]
}
```

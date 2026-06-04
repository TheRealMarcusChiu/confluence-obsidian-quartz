---
title: "openssl - Generating Self-Signed CSR／CA Certificate"
created: 2020-06-28T00:00:53.506-05:00
modified: 2020-06-28T14:59:56.835-05:00
parent: "[[openssl - Generating SSL Certificates]]"
children: []
---
generating self-signed [[Certificate Signing Request (CSR)|CSR]]/[[Certificate／Certification Authority (CA)|CA]] Certificate see: [[Certificate Authority (CA) - Creating Your Own CA & Self-Sign Certificates #1]]
### Subject Alternative Name (SAN)

the domain name must be defined in the Subject Alternative Name (SAN) section (i.e. extension) of the certificate.

when creating a self-signed certificate, we need to provide a configuration file to OpenSSL and define the SAN in that configuration file. Our command becomes:
<span style="white-space: pre-wrap"><code><font style="color: rgb(0,51,102);">openssl</font> req -config san.conf ...</code></span>

###### example san.conf template

> [!expand]- san.conf
> ```bash
> [ req ]
>  
> default_bits        = 2048
> default_keyfile     = server-key.pem
> distinguished_name  = subject
> req_extensions      = req_ext
> x509_extensions     = x509_ext
> string_mask         = utf8only
>  
> [ subject ]
>  
> countryName                 = Country Name (2 letter code)
> countryName_default         = US
>  
> stateOrProvinceName         = State or Province Name (full name)
> stateOrProvinceName_default = NY
>  
> localityName                = Locality Name (eg, city)
> localityName_default        = New York
>  
> organizationName            = Organization Name (eg, company)
> organizationName_default    = Example, LLC
>  
> commonName                  = Common Name (e.g. server FQDN or YOUR name)
> commonName_default          = Example Company
>  
> emailAddress                = Email Address
> emailAddress_default        = test@example.com
>  
> [ x509_ext ]
>  
> subjectKeyIdentifier   = hash
> authorityKeyIdentifier = keyid,issuer
>  
> basicConstraints       = CA:FALSE
> keyUsage               = digitalSignature, keyEncipherment
> subjectAltName         = @alternate_names
> nsComment              = "OpenSSL Generated Certificate"
>  
> [ req_ext ]
>  
> subjectKeyIdentifier = hash
>  
> basicConstraints     = CA:FALSE
> keyUsage             = digitalSignature, keyEncipherment
> subjectAltName       = @alternate_names
> nsComment            = "OpenSSL Generated Certificate"
>  
> [ alternate_names ]
>  
> DNS.1       = dev.deliciousbrains.com
> ```
## <strong>Generate a Self-Signed Certificate</strong>

<strong>create a 2048-bit private key (private.key) and a self-signed certificate (signed.crt)</strong>
<span style="white-space: pre-wrap"><code>openssl req <font style="color: rgb(133,153,0);">-config</font><font style="color: rgb(51,204,204);"> san.conf</font> -newkey rsa:2048 -nodes -keyout private.key -x509 -days 365 -out signed.crt</code></span>

- -x509 option tells req to create a self-signed certificate
- -days 365 option specifies that the certificate will be valid for 365 days

## <strong>Generate a Self-Signed Certificate from an Existing Private Key</strong>

<strong>create a self-signed certificate (domain.crt) from an existing private key (domain.key)</strong>
<span style="white-space: pre-wrap"><code>openssl req <font style="color: rgb(133,153,0);">-config</font><font style="color: rgb(51,204,204);"> san.conf </font>-key domain.key -new -x509 -days 365 -out domain.crt</code></span>

## <strong>Generate a Self-Signed Certificate from an Existing Private Key and CSR</strong>

<strong>create a self-signed certificate (domain.crt) from an existing private key (domain.key) and (domain.csr)</strong>
<span style="white-space: pre-wrap"><code>openssl x509 <font style="color: rgb(133,153,0);">-config</font><font style="color: rgb(51,204,204);"> san.conf </font>-signkey domain.key -in domain.csr -req -days 365 -out domain.crt</code></span>

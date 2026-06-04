---
title: "Certificate Authority (CA) - Creating Your Own CA & Self-Sign Certificates #1"
created: 2019-08-16T15:06:21.471-05:00
modified: 2025-12-19T23:25:38.338-06:00
parent: "[[Certificate／Certification Authority (CA)]]"
children: []
---
# Become a Certificate Authority
```
# Generate private key
openssl genrsa -des3 -out myCA.key 2048
# Generate root certificate
openssl req -x509 -new -nodes -key myCA.key -sha256 -days 825 -out myCA.pem
```

import myCA.pem into [[Operating Systems (OS)|operating system]]
# Create a CA-signed Certificate
```bash
NAME=mydomain.com # Use your own domain name

# Generate a private key
openssl genrsa -out $NAME.key 2048

# Create a certificate-signing request
openssl req -new -key $NAME.key -out $NAME.csr

# Create a config file for the extensions
>$NAME.ext cat <<-EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names
[alt_names]
DNS.1 = $NAME # Be sure to include the domain name here because Common Name is not so commonly honoured by itself
DNS.2 = sub.$NAME # Optionally, add additional domains (I've added a subdomain here)
DNS.3 = *.$NAME # wildcard matches any first level subdomain
IP.1 = 192.168.0.13 # Optionally, add an IP address (if the connection which you have planned requires it)
EOF

# Create the signed certificate
openssl x509 -req -in $NAME.csr -CA myCA.pem -CAkey myCA.key -CAcreateserial -out $NAME.crt -days 825 -sha256 -extfile $NAME.ext
```
# <strong>Detailed</strong>

> [!expand]- Click here to expand...
> [https://deliciousbrains.com/ssl-certificate-authority-for-local-https-development/](https://deliciousbrains.com/ssl-certificate-authority-for-local-https-development/)
>
> In [my last article](https://deliciousbrains.com/https-locally-without-browser-privacy-errors/) I described how to generate your own self-signed SSL certificates and add them to macOS Keychain so that your browser doesn’t give you a privacy error.
>
> ![[Certificate Authority (CA) - Creating Your Own CA & Self-Sign Certificates #1/1.png|500]]
>
> Soon after it was published, [Ross McKay](https://twitter.com/webawareross) made a very interesting [comment](https://deliciousbrains.com/https-locally-without-browser-privacy-errors/#comment-3285792308) on that article:
> > If you have a few servers you need to do this with, you can just create yourself a CA (Certifying Authority) certificate and load that instead. Then your self-signed certs, signed by your CA cert, will all be accepted without you needing to load each one.
>
> ![](https://cdn.deliciousbrains.com/content/uploads/2017/07/21194127/mind-blown.gif)
>
> So basically he’s saying that I can be a certificate authority (CA) like Let’s Encrypt, Amazon, Verisign, Comodo, etc but just for my local network. How did I not know about that? So cool. But how does it work exactly?
> ## How It Works
>
> After some research I think I get it now. To request a certificate from a CA like Verisign, you send them a Certificate Signing Request (CSR), and they give you a certificate in return that they signed using their root certificate and private key. All browsers have a copy (or access a copy from the operating system) of Verisign’s root certificate, so the browser can verify that your certificate was signed by a trusted CA.
>
> That’s why when you generate a self-signed certificate the browser doesn’t trust it. It’s self-signed. It hasn’t been signed by a CA. But as [Ross pointed out](https://deliciousbrains.com/https-locally-without-browser-privacy-errors/#comment-3285792308), we can generate our own root certificate and private key, add the root certificate to all the devices we own just once, and then all certificates that we generate and sign will be inherently trusted.
> ## Becoming a (tiny) Certificate Authority
>
> It’s kind of ridiculous how easy it is to generate the files needed to become a certificate authority. It only takes two commands. First, we generate our private key:
> ```
> openssl genrsa -des3 -out myCA.key 2048
> ```
>
> You will be prompted for a pass phrase, which I recommend not skipping and keeping safe. The pass phrase will prevent anyone who gets your private key from generating a root certificate of their own. Output should look like this:
> ```
> Generating RSA private key, 2048 bit long modulus
> .................................................................+++
> .....................................+++
> e is 65537 (0x10001)
> Enter pass phrase for myCA.key:
> Verifying - Enter pass phrase for myCA.key:
> ```
>
> Then we generate a root certificate:
> ```
> openssl req -x509 -new -nodes -key myCA.key -sha256 -days 1825 -out myCA.pem
> ```
>
> You will prompted for the pass phrase of your private key (that you just choose) and a bunch of questions. The answers to those questions aren’t that important. They show up when looking at the certificate, which you will almost never do. I suggest making the Common Name something that you’ll recognize as your root certificate in a list of other certificates. That’s really the only thing that matters.
> ```
> Enter pass phrase for myCA.key:
> You are about to be asked to enter information that will be incorporated
> into your certificate request.
> What you are about to enter is what is called a Distinguished Name or a DN.
> There are quite a few fields but you can leave some blank
> For some fields there will be a default value,
> If you enter '.', the field will be left blank.
> -----
> Country Name (2 letter code) [AU]:CA
> State or Province Name (full name) [Some-State]:Nova Scotia
> Locality Name (eg, city) []:Truro
> Organization Name (eg, company) [Internet Widgits Pty Ltd]:Delicious Brains Inc
> Organizational Unit Name (eg, section) []:
> Common Name (e.g. server FQDN or YOUR name) []:Delicious Brains
> Email Address []:noreply@deliciousbrains.com
> ```
>
> You should now have two files: myCA.key (your private key) and myCA.pem (your root certificate).
>
> Congratulations, you’re now a CA. Sort of.
>
> To become a real CA, you need to get your root certificate on all the devices in the world. Let’s start with the ones you own.
> ## Installing Your Root Certificate
>
> We need to add the root certificate to any laptops, desktops, tablets, and phones that will be accessing your HTTPS sites. This can be a bit of a pain, but the good news is that we only have to do it once. Once our root certificate is on each device, it will be good until it expires.
> ### Adding the Root Certificate to macOS Keychain
> 1. Open the macOS Keychain app
> 2. Go to <em>File \> Import Items…</em>
> 3. Select your root certificate file (i.e. myCA.pem)
> 4. Search for whatever you answered as the <em>Common Name</em> name above
> > [!list-indent-undo]
> > > [!indent]
> > > ![[Certificate Authority (CA) - Creating Your Own CA & Self-Sign Certificates #1/2.png|500]]
> 5. Double click on your root certificate in the list
> 6. Expand the <em>Trust</em> section
> 7. Change the <em>When using this certificate:</em> select box to “Always Trust”
> > [!list-indent-undo]
> > > [!indent]
> > > ![[Certificate Authority (CA) - Creating Your Own CA & Self-Sign Certificates #1/3.png|500]]
> 8. Close the certificate window
> 9. It will ask you to enter your password (or scan your finger), do that
>
> ## Creating CA-Signed Certificates for Your Dev Sites
>
> Now that we’re a CA on all our devices, we can sign certificates for any new dev sites that need HTTPS. First, we create a private key:
> ```
> openssl genrsa -out dev.mergebot.com.key 2048
> ```
>
> Then we create a CSR:
> ```
> openssl req -new -key dev.mergebot.com.key -out dev.mergebot.com.csr
> ```
>
> You’ll get all the same questions as you did above and, again, your answers don’t matter. In fact, they matter even less because you won’t be looking at this certificate in a list next to others.
> ```
> You are about to be asked to enter information that will be incorporated
> into your certificate request.
> What you are about to enter is what is called a Distinguished Name or a DN.
> There are quite a few fields but you can leave some blank
> For some fields there will be a default value,
> If you enter '.', the field will be left blank.
> -----
> Country Name (2 letter code) [AU]:CA
> State or Province Name (full name) [Some-State]:Nova Scotia
> Locality Name (eg, city) []:Truro
> Organization Name (eg, company) [Internet Widgits Pty Ltd]:Delicious Brains Inc
> Organizational Unit Name (eg, section) []:
> Common Name (e.g. server FQDN or YOUR name) []:Mergebot
> Email Address []:noreply@mergebot.com
>
> Please enter the following 'extra' attributes
> to be sent with your certificate request
> A challenge password []:
> An optional company name []:
> ```
>
> Next we’ll create the certificate using our CSR, the CA private key, the CA certificate, and a config file, but first we need to create that config file.
>
> The config file is needed to define the Subject Alternative Name (SAN) extension we discussed in [my last article](https://deliciousbrains.com/https-locally-without-browser-privacy-errors/#creating-self-signed-certificate). I created a new file named <code>[dev.mergebot.com](http://dev.mergebot.com).ext</code> and added the following contents:
> ```
> authorityKeyIdentifier=keyid,issuer
> basicConstraints=CA:FALSE
> keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
> subjectAltName = @alt_names
>
> [alt_names]
> DNS.1 = dev.mergebot.com
> DNS.2 = dev.mergebot.com.192.168.1.19.xip.io
> ```
>
> We’re using a different config file for the SAN than in [my last article](https://deliciousbrains.com/https-locally-without-browser-privacy-errors/#creating-self-signed-certificate) because we’ll be running the <code>openssl x509</code> command instead of the <code>openssl req</code> command. From what I understand, the x509 command is needed to do the signing with the root certificate and private key. Again, I found [this example config file](https://stackoverflow.com/a/43665244) on Stack Overflow and it seems to work.
>
> Now we run the command to create the certificate:
> ```
> openssl x509 -req -in dev.mergebot.com.csr -CA myCA.pem -CAkey myCA.key -CAcreateserial \
> -out dev.mergebot.com.crt -days 1825 -sha256 -extfile dev.mergebot.com.ext
> ```
>
> You should be prompted for your CA private key pass phrase.
>
> I now have three files:
> - [dev.mergebot.com](http://dev.mergebot.com).key (the private key)
> - [dev.mergebot.com](http://dev.mergebot.com).csr (the certificate signing request)
> - [dev.mergebot.com](http://dev.mergebot.com).crt (the signed certificate)
>
> I can now configure my web server with the private key and the certificate

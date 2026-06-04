---
title: "GNU Privacy Guard (GPG or GnuPG)"
created: 2019-03-16T02:36:25.375-05:00
modified: 2019-08-28T13:53:29.295-05:00
parent: "[[Encryption - Algorithms]]"
children: []
---
<strong>GNU Privacy Guard (GPG or GnuPG)</strong> is free encryption software that's compliant with the OpenPGP Can be used for both asymmetric and symmetric [[Encryption|encryption]].
# Installation

> [!expand]- homebrew
> <strong>1. install gpg with brew</strong>
> <span style="white-space: pre-wrap"><code>  brew install gpg</code></span>
>
> <strong>2. verify gpg was installed</strong>
> <span style="white-space: pre-wrap"><code>  which gpg</code></span>
>
> <strong>3. \~/.gnupg directory will created when generating gpg keys</strong>
# Commands

> [!expand]- Click here to expand...
> <strong>1. generate key</strong>
> <span style="white-space: pre-wrap"><code>  gpg --gen-key</code><br><code>  gpg --full-generate-key</code></span>
>
> <strong>2. list keys to get the key hash</strong>
> <span style="white-space: pre-wrap"><code>  gpg --list-key</code></span>
>
> <strong>3. export public key based on key hash</strong>
> <span style="white-space: pre-wrap"><code>  gpg --output \~/RPM-GPG-KEY-demo-s3-rpm-repo --armor --export KEY\_HASH\_HERE</code></span>
>
> <strong>4. export private key based on key hash</strong>
> <span style="white-space: pre-wrap"><code>  gpg --output \~/RPM-GPG-KEY-demo-s3-rpm-repo.private --export-secret-key -armor KEY\_HASH\_HERE</code></span>
>
> <strong>5. import public key</strong>
> <span style="white-space: pre-wrap"><code>  sudo rpm --import \~/RPM-GPG-KEY-demo-s3-rpm-repo</code></span>

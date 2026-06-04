---
title: "rpm binary"
created: 2019-03-15T03:58:25.697-05:00
modified: 2019-03-17T14:25:34.752-05:00
parent: "[[RPM Package Managers]]"
children: []
---
[http://rpm.org/](http://rpm.org/)

RPM Red Hat Package Manager is a package management system. The name RPM refers to the following: the .rpm file format, files in the .rpm file format, software packaged in such files, and the package manager program itself
# Installation

> [!expand]- homebrew
> [http://rpm.org/](http://rpm.org/)
>
> Installed in Redhat, Centos, etc
>
> <strong>1. install for mac</strong>
> <span style="white-space: pre-wrap"><code>  brew install rpm</code></span>
>
> <strong>2. verify rpm</strong>
> <span style="white-space: pre-wrap"><code>  which rpm</code><br><code>  rpm —version</code></span>
# Configuration

> [!expand]- macros
> find directories where rpm read macros.\* files
> <span style="white-space: pre-wrap"><code>man rpm and find “macros”</code></span>
>
> should see something like this
> <span style="white-space: pre-wrap"><code>/usr/lib/rpm/macros</code><br><code>/usr/lib/rpm/redhat/macros</code><br><code>/etc/rpm/macros</code><br><code>\~/.rpmmacros</code></span>

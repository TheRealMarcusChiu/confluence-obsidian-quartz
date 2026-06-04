---
title: "Python - Installation"
created: 2020-11-18T17:03:39.593-06:00
modified: 2020-11-18T17:06:41.684-06:00
parent: "[[Python - Installation, Managing Versions, and Managing Packages]]"
children: []
---
> [!tabs]
>
> === homebrew
>
> [[Macintosh OSs (Mac OS X) - macOS|macOS]] comes preinstalled with Python
> ```bash
> python --version
> ```
>
> install python using homebrew
> ```bash
> brew install python
> ```
>
> verify version and where it is installed
> ```bash
> python —version
> which python
> ```
>
> === make
>
> ```bash
> sudo apt-get install libssl-dev openssl
> wget https://www.python.org/ftp/python/3.5.0/Python-3.5.0.tgz
> tar xzvf Python-3.5.0.tgz
> cd Python-3.5.0
> ./configure
> make
> sudo make install
> ```
>
> === pyenv
>
> see: [[Python - Managing Versions & Virtual Environments]]

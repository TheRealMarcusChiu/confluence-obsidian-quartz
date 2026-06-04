---
title: "Chef Client"
created: 2019-03-16T02:12:16.101-05:00
modified: 2019-03-16T02:14:59.551-05:00
parent: "[[Chef]]"
children: []
---
# Installation

> [!expand]- manual
> <strong>1. go to [https://downloads.chef.io/chefdk](https://downloads.chef.io/chefdk) to download package</strong>
>
> <strong>2. install ChefDK</strong>
> <span style="white-space: pre-wrap"><code>  sudo dpkg -i chefdk\_\*.deb</code></span>
>
> <strong>3. remove the package</strong>
> <span style="white-space: pre-wrap"><code>  rm chefdk\_\*.deb</code></span>
>
> <strong>4. verify the components of the development kit</strong>
> <span style="white-space: pre-wrap"><code>  chef verify</code></span>
>
> should output:
> ```bash
> Running verification for component 'berkshelf'
>    Running verification for component 'test-kitchen'
>    Running verification for component 'chef-client'
>    Running verification for component 'chef-dk'
>    Running verification for component 'chefspec'
>    Running verification for component 'rubocop'
>    Running verification for component 'fauxhai'
>    Running verification for component 'knife-spork'
>    Running verification for component 'kitchen-vagrant'
>    Running verification for component 'package installation'
>    ........................
>    ---------------------------------------------
>    Verification of component 'rubocop' succeeded.
>    Verification of component 'kitchen-vagrant' succeeded.
>    Verification of component 'fauxhai' succeeded.
>    Verification of component 'berkshelf' succeeded.
>    Verification of component 'knife-spork' succeeded.
>    Verification of component 'test-kitchen' succeeded.
>    Verification of component 'chef-dk' succeeded.
>    Verification of component 'chef-client' succeeded.
>    Verification of component 'chefspec' succeeded.
>    Verification of component 'package installation' succeeded.
> ```

> [!expand]- homebrew
> [https://github.com/chef/chef-dk](https://github.com/chef/chef-dk)
>
> <strong>1. install chef using chefdk</strong>
> <span style="white-space: pre-wrap"><code>  brew cask install chefdk</code></span>
>
> this would download chefdk into /usr/local/Cellar directory
>
> <strong>2. verify chef</strong>
> <span style="white-space: pre-wrap"><code>  which chef</code><br><code>  chef -—version</code></span>
# Commands
- chef
	- generator
- berks
- chef-client
- knife

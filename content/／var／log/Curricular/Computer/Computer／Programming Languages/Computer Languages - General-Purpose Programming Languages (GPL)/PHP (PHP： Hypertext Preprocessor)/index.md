---
title: "PHP (PHP： Hypertext Preprocessor)"
created: 2019-03-15T16:33:01.908-05:00
modified: 2021-10-05T01:55:27.845-05:00
parent: "[[Computer Languages - General-Purpose Programming Languages (GPL)]]"
children:
  - "[[PHP Application Servers]]"
  - "[[PHP Build Tools]]"
  - "[[PHP Example Projects]]"
  - "[[PHP Extra Features]]"
---
###### PHP (PHP: Hypertext Preprocessor)
- is a widely-used open source general-purpose scripting language
- well suited for web development and can be embedded into [[HyperText Markup Language (HTML)|HTML]]

# Installation

> [!expand]- Click here to expand...
> > [!expand]- homebrew
> > <strong>0. Mac comes preinstalled with PHP</strong>
> > <span style="white-space: pre-wrap"><code>  php —version</code></span>
> >
> > <strong>1. install php56 using homebrew</strong>
> > <span style="white-space: pre-wrap"><code>  brew install homebrew/php/php56</code><br><code>  brew install php56</code></span>
> >
> > this would download php56 into /usr/local/Cellar directory
> >
> > <strong>1. to install with the .so php module for httpd.conf</strong>
> > <span style="white-space: pre-wrap"><code>  xcode-select --install</code><br><code>  brew uninstall php56 -with-httpd24</code><br><code>  brew install php56 —with-httpd24 </code></span>
> >
> > reinstall didn’t create the [libphp.so](http://libphp.so) file
> > <span style="white-space: pre-wrap"><code>  brew reinstall php56 —with-httpd24</code></span>
> >
> > <strong>2. optional other versions and stuff</strong>
> > <span style="white-space: pre-wrap"><code>  brew search php</code><br><code>  brew install \<the name here\></code></span>
> >
> > <strong>3. get version</strong>
> > <span style="white-space: pre-wrap"><code>  php —-version</code><br><code>  php -v</code></span>
> >
> > <strong>4. get PHP .ini file info</strong>
> > <span style="white-space: pre-wrap"><code>  php -i | grep php.ini</code><br><code>  php —-ini</code></span>
>
> > [!expand]- manual
> > [https://www.tutorialspoint.com/php/php_installation_linux.htm](https://www.tutorialspoint.com/php/php_installation_linux.htm)
> >
> > <strong>0. download the PHP package</strong>
> >
> > <strong>1. un-package package - hehehe</strong>
> > <span style="white-space: pre-wrap"><code>  gunzip -c php-5.x.tar.gz</code><br><code>  tar -xvf php-5.x.tar</code><br><code>  cd php-5.x</code></span>
> >
> > <strong>2. Configure and Build your PHP, assuming you are using MySQL database</strong>
> > <span style="white-space: pre-wrap"><code>  ./configure --with-apxs=/usr/sbin/apxs --with-mysql=/usr/bin/mysql</code><br><code>  make</code><br><code>  make install</code></span>
# General
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

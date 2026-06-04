---
title: "Apache HTTP Server (Apache)"
created: 2019-03-16T01:52:50.795-05:00
modified: 2026-05-24T20:01:16.423-05:00
parent: "[[Web (HTTP) Servers]]"
children: []
---
###### Apache HTTP Server (Apache)
````excerpt
- colloquially called <strong>Apache</strong>
- is free and open-source cross-platform [[Web (HTTP) Servers|web server software]]
````
^excerpt

# Installation

> [!expand]- macOS
> <strong>1. mac comes pre-installed with apache server in</strong>
> <span style="white-space: pre-wrap"><code>  /private/etc/apache2</code></span>
>
> <strong>2. verify theApache version</strong>
> <span style="white-space: pre-wrap"><code>  httpd -v</code><br><code>  apachectl -v</code></span>
>
> <strong>3. Start, Stop, Restart</strong>
> <span style="white-space: pre-wrap"><code>  sudo apachectl start</code><br><code>  sudo apachectl stop</code><br><code>  sudo apachectl restart</code></span>
>
> <strong>4. Configuring Apache</strong>
> <span style="white-space: pre-wrap"><code>  sudo vi /private/etc/apache2/httpd.conf</code></span>
>
> <strong>5. Default Document Root</strong>
> <span style="white-space: pre-wrap"><code>  /Library/WebServer/Documents</code></span>

> [!expand]- homebrew
> # Install
>
> <strong>1. install apache server using home-brew</strong>
> <span style="white-space: pre-wrap"><code>  brew install pcre libtool</code><br><code>  brew install homebrew/apache/httpd24</code></span>
>
> <strong>2. verify theApache version</strong>
> <span style="white-space: pre-wrap"><code>  httpd -v</code><br><code>  apachectl -v</code></span>
>
> # Configuration
>
> <strong>1. Configuring Apache Conf</strong>
> <span style="white-space: pre-wrap"><code>  sudo vim /usr/local/etc/apache2/2.4/httpd.conf</code><br><code>  sudo vim /usr/local/etc/httpd/httpd.conf</code></span>
>
> # Restart
> <span style="white-space: pre-wrap"><code>  brew services start httpd</code><br><code>  brew services stop httpd</code><br><code>  brew services restart httpd</code></span>
>
> If you don’t want a background service
> <span style="white-space: pre-wrap"><code>  sudo apachectl start</code><br><code>  sudo apachectl stop</code><br><code>  sudo apachectl restart</code></span>

> [!expand]- yum
> <strong>1. install apache server</strong>
> <span style="white-space: pre-wrap"><code>  sudo apt-get update</code><br><code>  sudo apt-get install apache2</code></span>
>
> <strong>2. adjust firewall</strong>
>
> show available app profiles
> <span style="white-space: pre-wrap"><code>  sudo ufw app list</code></span>
>
> allow Apache port 80 and 443
> <span style="white-space: pre-wrap"><code>  sudo ufw allow 'Apache Full'</code></span>
>
> <strong>3. start apache server</strong>
> <span style="white-space: pre-wrap"><code>  sudo systemctl start apache2</code></span>
>
> <strong>4. verify it works</strong>
> <span style="white-space: pre-wrap"><code>  [http://localhost](http://localhost/)</code></span>

> [!expand]- apt-get
> # Install
>
> [https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-16-04](https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-16-04)
>
> <strong>1. install apache server</strong>
> <span style="white-space: pre-wrap"><code>  sudo apt-get update</code><br><code>  sudo apt-get install apache2</code></span>
>
> <strong>2. adjust firewall</strong>
>
> show available app profiles
> <span style="white-space: pre-wrap"><code>  sudo ufw app list</code></span>
>
> allow Apache port 80 and 443
> <span style="white-space: pre-wrap"><code>  sudo ufw allow 'Apache Full'</code></span>
>
> <strong>3. start apache server</strong>
> <span style="white-space: pre-wrap"><code>  sudo systemctl start apache2</code></span>
>
> <strong>4. verify it works</strong>
> <span style="white-space: pre-wrap"><code>  [http://localhost](http://localhost/)</code></span>
>
> # Configuration
> 1. Configuring Apache: /etc/apache2/apache2.conf
>
> # Start Stop Restart
>
> <strong>1. Start, Stop, Restart</strong>
> <span style="white-space: pre-wrap"><code>  sudo systemctl start apache2</code><br><code>  sudo systemctl stop apache2</code><br><code>  sudo systemctl restart apache2</code></span>
>
> <strong>2. If you are simply making configuration changes, Apache can often reload without dropping connections</strong>
> <span style="white-space: pre-wrap"><code>  sudo systemctl reload apache2</code></span>
>
> <strong>3. By default, Apache is configured to start automatically when the server boots</strong>
> - To disable this behavior by typing
>   
>   <span style="white-space: pre-wrap"><code>sudo systemctl disable apache2</code></span>
> - To re-enable the service to start up at boot, you can type
>   
>   <span style="white-space: pre-wrap"><code>sudo systemctl enable apache2</code></span>

> [!expand]- Forbidden You don't have permission to access / on this server
> <strong>1. Error message “Forbidden You don't have permission to access / on this server”</strong>
> - go to this link
> - [http://stackoverflow.com/questions/10873295/error-message-forbidden-you-dont-have-permission-to-access-on-this-server](http://stackoverflow.com/questions/10873295/error-message-forbidden-you-dont-have-permission-to-access-on-this-server)
> - quick answer, locate something like this in the http.conf and replace it with this
>
> <span style="white-space: pre-wrap"><code>     \<Directory /\></code><br><code>       \#Options FollowSymLinks</code><br><code>       Options Indexes FollowSymLinks Includes ExecCGI</code><br><code>       AllowOverride All</code><br><code>       Order deny,allow</code><br><code>       Allow from all</code><br><code>     \</Directory\></code></span>
# Configuration

> [!expand]- Click here to expand...
> Apache HTTP Server is configured by placing directives in plain text configuration files. The main configuration file is usually called httpd.conf or apache2.conf
>
> <strong>1. locate httpd binary</strong>
> <span style="white-space: pre-wrap"><code>  whereis httpd</code></span>
>
> <strong>2. find which httpd.conf file the httpd binary loads</strong>
> <span style="white-space: pre-wrap"><code>  /path/to/httpd -V | grep SERVER\_CONFIG\_FILE</code></span>
>
> > [!expand]- .htaccess
> > .htaccess is a configuration file for use on web servers running the Apache Web Server software. When a .htaccess file is placed in a directory which is in turn 'loaded via the Apache Web Server', then the .htaccess file is detected and executed by the Apache Web Server software. These .htaccess files can be used to alter the configuration of the Apache Web Server software to enable/disable additional functionality and features that the Apache Web Server software has to offer. These facilities include basic redirect functionality, for instance if a 404 file not found error occurs, or for more advanced functions such as content password protection or image hot link prevention.
>
> > [!expand]- http.conf
> > > [!expand]- homebrew
> > > [http://www.websightdesigns.com/posts/view/how-to-set-up-a-local-web-server-with-homebrew-on-mac-os-x-10-9](http://www.websightdesigns.com/posts/view/how-to-set-up-a-local-web-server-with-homebrew-on-mac-os-x-10-9)
> > >
> > > <strong>1. Configuring Apache</strong>
> > > <span style="white-space: pre-wrap"><code>  sudo vi /usr/local/etc/apache2/2.4/httpd.conf</code></span>
> > >
> > > <strong>2. enable PHP - uncomment this line in the httpd.conf file</strong>
> > > <span style="white-space: pre-wrap"><code>  LoadModule php5\_module path/to/php.so/file</code></span>
> > >
> > > The paths in httpd.conf are relative to HTTPD\_ROOT
> > >
> > > Which can be found with the command httpd -V
> > >
> > > <strong>3. map the .php file extension to the PHP MIME type in Apache, search for the other AddType lines and add a new line below them:</strong>
> > >
> > > AddType application/x-httpd-php .php
> > >
> > > <strong>4. enable loading index.php as a directory index, replace DirectoryIndex index.html in httpd.conf with the following and restart Apache:</strong>
> > >
> > > DirectoryIndex index.html index.php index.phtml
> > >
> > > <strong>5. optional - Next remove the comment (the \# symbol) from the beginning of the following lines to enable a few commonly used modules:</strong>
> > > <span style="white-space: pre-wrap"><code>  LoadModule expires\_module libexec/mod\_expires.so</code><br><code>  LoadModule deflate\_module libexec/mod\_deflate.so</code><br><code>  LoadModule rewrite\_module libexec/mod\_rewrite.so</code></span>
> > >
> > > <strong>6. By default, Apache is configured to store your website directories in /usr/local/var/www/htdocs. To change this to another directory change the following lines:</strong>
> > > <span style="white-space: pre-wrap"><code>  DocumentRoot "/usr/local/var/www/htdocs"</code><br><code>  \<Directory "/usr/local/var/www/htdocs"</code></span>
> >
> > > [!expand]- macOS
> > > [http://www.websightdesigns.com/posts/view/how-to-set-up-a-local-web-server-with-homebrew-on-mac-os-x-10-9](http://www.websightdesigns.com/posts/view/how-to-set-up-a-local-web-server-with-homebrew-on-mac-os-x-10-9)
> > >
> > > <strong>1. Configuring Apache</strong>
> > > <span style="white-space: pre-wrap"><code>  sudo vi /private/etc/apache2/httpd.conf</code></span>
> > >
> > > <strong>2. enable PHP - uncomment this line in the httpd.conf file</strong>
> > > <span style="white-space: pre-wrap"><code>  LoadModule php5\_module libexec/apache2/libphp5.so</code></span>
> > >
> > > libexec/apache2/[libphp5.so](http://libphp5.so/) to pointing to /usr/libexec/apache2/[libphp5.so](http://libphp5.so/)
> > >
> > > The paths in httpd.conf are relative to HTTPD\_ROOT
> > >
> > > Which can be found with the command httpd -V
> > >
> > > <strong>3. map the .php file extension to the PHP MIME type in Apache, search for the other AddType lines and add a new line below them:</strong>
> > > <span style="white-space: pre-wrap"><code>  AddType application/x-httpd-php .php</code></span>
> > >
> > > <strong>4. enable loading index.php as a directory index, replace DirectoryIndex index.html in httpd.conf with the following and restart Apache:</strong>
> > > <span style="white-space: pre-wrap"><code>  DirectoryIndex index.html index.php</code></span>
> > >
> > > <strong>5. Next remove the comment (the \# symbol) from the beginning of the following lines to enable a few commonly used modules:</strong>
> > > <span style="white-space: pre-wrap"><code>  LoadModule expires\_module libexec/mod\_expires.so</code><br><code>  LoadModule deflate\_module libexec/mod\_deflate.so</code><br><code>  LoadModule rewrite\_module libexec/mod\_rewrite.so</code></span>
> > >
> > > <strong>6. By default, Apache is configured to store your website directories in /Library/WebServer/Documents. To change this to another directory change the following lines:</strong>
> > > <span style="white-space: pre-wrap"><code>  DocumentRoot "/Library/WebServer/Documents"</code><br><code>  \<Directory "/Library/WebServer/Documents"\></code></span>
> >
> > > [!expand]- virtual hosts
> > > [https://jason.pureconcepts.net/2014/11/configure-apache-virtualhost-mac-os-x/](https://jason.pureconcepts.net/2014/11/configure-apache-virtualhost-mac-os-x/)
> > >
> > > <strong>1. the httpd.conf should contain the line</strong>
> > > <span style="white-space: pre-wrap"><code>  Include /path/to/httpd/extra/vhosts/\*.conf</code></span>
> > >
> > > <strong>2. create directory to store all virtual host configurations</strong>
> > > <span style="white-space: pre-wrap"><code>  mkdir -p /path/to/httpd/extra/vhosts</code></span>
# Set Modules

> [!expand]- Click here to expand...
> > [!expand]- php
> > Install from Site:
> > - Apache Server
> > - PHP
> > - this is for apache server apr and apr-util dependency
> >   
> >   <span style="white-space: pre-wrap"><code>sudo apt-get install libapr1-dev libaprutil1-dev</code></span>
> > - this is for apache server pcre dependency
> >   
> >   <span style="white-space: pre-wrap"><code>sudo apt-get install libpcre3-dev libbz2-dev</code></span>
> > - this is for php install
> >   
> >   <span style="white-space: pre-wrap"><code>sudo apt-get install libxml2-dev</code></span>
> >
> > un-package apache server
>
> > [!expand]- mod_evasive
> > module against DoS and DDoS attacks
> > # Installation
> >
> > > [!expand]- yum
> > > <strong>1. install mod\_evasive</strong>
> > > <span style="white-space: pre-wrap"><code>  sudo yum install mod\_evasive</code></span>
> > >
> > > <strong>2. verify mod\_evasive was installed</strong>
> > > <span style="white-space: pre-wrap"><code>  sudo httpd -M | grep evasive</code></span>
> >
> > > [!expand]- apt-get
> > > sudo apt-get install libapache2-mod-evasive

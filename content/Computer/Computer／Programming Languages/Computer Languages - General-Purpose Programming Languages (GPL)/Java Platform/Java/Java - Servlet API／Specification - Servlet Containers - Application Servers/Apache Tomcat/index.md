---
title: "Apache Tomcat"
created: 2019-03-15T23:15:40.520-05:00
modified: 2026-05-21T13:26:54.784-05:00
parent: "[[Java - Servlet API／Specification - Servlet Containers - Application Servers]]"
children: []
---
###### Apache Tomcat
````excerpt
- is an open-source implementation of the Java Servlet, JavaServer Pages, Java Expression Language and [[WebSockets|WebSocket]] technologies
- provides a "pure Java" [[Web (HTTP) Servers|HTTP web server]] environment in which [[Java]] code can run
````
^excerpt

# Installation

> [!expand]- manual
> 1. go into ApacheTomcat site and download package
> 2. un-package package
> 3. <code><font style="color: rgb(122,134,154);">export CATALINA\_HOME=/path/to/un-package</font></code>
> 4. put .war packages into /webapps directory
> 5. start server: <code><font style="color: rgb(122,134,154);">./bin/startup.sh</font></code>
> 6. stop server: <code><font style="color: rgb(122,134,154);">./bin/shutdown.sh</font></code>

> [!expand]- homebrew
> Install tomcat using [[homebrew - brew|homebrew]]
> ```
> brew install tomcat
> ```
>
> This would download tomcat into <code><font style="color: rgb(122,134,154);">/usr/local/Cellar</font></code> directory
>
> Verify if tomcat was installed
> ```
> brew list
> ```

> [!expand]- apt-get
> [https://www.digitalocean.com/community/tutorials/how-to-install-apache-tomcat-8-on-ubuntu-16-04](https://www.digitalocean.com/community/tutorials/how-to-install-apache-tomcat-8-on-ubuntu-16-04)
>
> Update apt-get package index
> ```
> sudo apt-get update
> ```
>
> Install [[Java - Installation (JDK - JRE - JVM - JE - JSE - JEE - JME)|Java Development Kit]]
> ```
> sudo apt-get install default-jdk
> ```
>
> [https://www.mkyong.com/tomcat/how-to-install-tomcat-in-ubuntu/](https://www.mkyong.com/tomcat/how-to-install-tomcat-in-ubuntu/)
>
> Search tomcat packages
> ```
> sudo apt-cache search tomcat
> ```
>
> Install tomcat packages
> ```
> sudo apt-get install tomcat8-admin
> sudo apt-get install tomcat8
> ```
# Configuration

> [!expand]- general
> > [!expand]- deploy
> > 1. Obtain WAR package, via [[Apache - Maven|maven]] execute:
> >    <code><font style="color: rgb(122,134,154);">mvn clean package</font></code>
> > 2. then go into <code><font style="color: rgb(122,134,154);">./target</font></code> folder and copy the <code><font style="color: rgb(122,134,154);">.war</font></code> package
> > 3. paste <code><font style="color: rgb(122,134,154);">.war</font></code> package into <code><font style="color: rgb(122,134,154);">/path/to/tomcat/libexec/webapps</font></code> directory
> > 4. restart tomcat server
> > 	1. this would extract the .war package into the same directory
> > 5. go to <code><font style="color: rgb(122,134,154);">http://ocalhost:8080/name-of-directory</font></code>
>
> > [!expand]- manage webapps
> > 1. to add an manage applications running on the server edit configuration file
> > 	1. <code><font style="color: rgb(122,134,154);">vim /path/to/tomcat/libexec/conf/tomcat-users.xml</font></code>
> > 2. Towards the bottom of this short config file you will see a selection of users – all commented out by default. You need to uncomment one of these and give it the extra role “manager-gui” (preferably also changing the username and password for security). The resultant user entry should look something like this:
> > 	1. <code><font style="color: rgb(122,134,154);">\<user username="admin" password="password" roles="tomcat,manager-gui" /\></font></code>
> > 3. restart tomcat server
> > 4. After this you can navigate to the page (or click the “Manager App” link on the main Tomcat Server page):
> > 	1. <code><font style="color: rgb(122,134,154);"> http://localhost:8080/manager/html</font></code>
>
> > [!expand]- enable ssl
> > [http://crunchify.com/step-by-step-guide-to-enable-https-or-ssl-correct-way-on-apache-tomcat-server-port-8443/](http://crunchify.com/step-by-step-guide-to-enable-https-or-ssl-correct-way-on-apache-tomcat-server-port-8443/)
> > 1. generate secure key
> > 	1. <code><font style="color: rgb(122,134,154);">keytool -genkey -alias keynamehere -keyalg RSA -keystore /path/to/new/keystore</font></code>
> > 2. add this to the \$(CATALINA\_BASE)/conf/server.xml file
> > 	1. 
> > 	    ```
> > 	    <Connector port="8443" 
> > 	              protocol="org.apache.coyote.http11.Http11NioProtocol"
> > 	              maxThreads="150" 
> > 	              SSLEnabled="true" 
> > 	              scheme="https" 
> > 	              secure="true"
> > 	              clientAuth="false"
> > 	              sslProtocol="TLS" 
> > 	              keystoreFile=“/path/to/new/keystore”
> > 	              keystorePass="123456"/>
> > 	    ```
> > 3. restart tomcat server
> > 4. go to [https://localhost:8443](https://localhost:8443/)

> [!expand]- apt-get
> 1. configuration and logs are created in
> 	1. 
> 	    ```
> 	    /var/lib/tomcat7
> 	    ```
> 2. Tomcat bin folder is created in
> 	1. 
> 	    ```
> 	    /usr/share/tomcat7
> 	    ```
# Commands

> [!expand]- homebrew
> ```
> brew services start tomcat
> brew services stop tomcat
> brew services restart tomcat
> ```

> [!expand]- manual/direct way
> Run tomcat
> ```
> /path/to/tomcat/bin/catalina run
> ```
> - navigate to host page at: [http://localhost:8080/](http://localhost:8080/)
>
> OR PREFERRED WAY run tomcat
> ```
> /path/to/tomcat/libexec/bin/startup.sh
> ```
>
> Stop tomcat
> ```
> /path/to/tomcat/libexec/bin/shutdown.sh
> ```
>
> Deployed applications are usually then located under the directory
> ```
> /path/to/tomcat/libexec/webapps/
> ```

> [!expand]- unix service managers
> refer to: [[Service／Daemon Manager - (SystemV - Upstart - Systemd - Launchd)|Service/Daemon Manager - (SystemV - Upstart - Systemd - Launchd)]]
>
> sample commands for [[apt-get - apt-cache|apt-get]]:
> - <code><font style="color: rgb(122,134,154);">sudo /etc/init.d/tomcat8 start</font></code>
> - <code><font style="color: rgb(122,134,154);">sudo /etc/init.d/tomcat8 stop</font></code>
> - <code><font style="color: rgb(122,134,154);">sudo /etc/init.d/tomcat8 restart</font></code>
# Resources
- [https://www.infoworld.com/article/3510460/what-is-apache-tomcat-the-original-java-servlet-container.html](https://www.infoworld.com/article/3510460/what-is-apache-tomcat-the-original-java-servlet-container.html)

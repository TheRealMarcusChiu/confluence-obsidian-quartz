---
title: "Jenkins"
created: 2019-03-16T01:41:07.918-05:00
modified: 2021-03-10T17:12:48.756-06:00
parent: "[[CI／CD Frameworks／Services]]"
children:
  - "[[Jenkins - Pipelines]]"
---
[https://jenkins.io/](https://jenkins.io/)

The leading open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project.
# Installation

> [!expand]- manual
> <strong>1. go to [https://jenkins.io/download/](https://jenkins.io/download/) and download .war .deb or whatever package</strong>
>
> > [!expand]- deb way
> > # Install
> >
> > <strong>1. install jenkins.deb</strong>
> > <span style="white-space: pre-wrap"><code>  sudo dpkg -i jenkins.deb</code></span>
> >
> > # Start Stop Restart
> > <span style="white-space: pre-wrap"><code>  sudo /etc/init.d/jenkins start</code><br><code>  sudo /etc/init.d/jenkins stop</code><br><code>  sudo /etc/init.d/jenkins restart</code><br><code>  sudo /etc/init.d/jenkins status</code></span>
>
> > [!expand]- war way
> > > [!expand]- terminal
> > > <strong>1. launch jenkins</strong>
> > > <span style="white-space: pre-wrap"><code>  java –jar jenkins.war</code></span>
> > >
> > > <strong>2. this will popup</strong>
> > >
> > > Jenkins initial setup is required. An admin user has been created and a password generated.
> > >
> > > Please use the following password to proceed to installation:
> > > <span style="white-space: pre-wrap"><code>  62eddecaa617459a8e52e2625a72fcc5</code></span>
> > >
> > > This may also be found at: /Users/marcus.chiu/.jenkins/secrets/initialAdminPassword
> > >
> > > <strong>3. open browser and go to [http://localhost:8080/](http://localhost:8080/)</strong>
> > >
> > > <strong>4. admin credentials</strong>
> >
> > > [!expand]- tomcat
> > > [https://www.tutorialspoint.com/jenkins/jenkins_tomcat_setup.htm](https://www.tutorialspoint.com/jenkins/jenkins_tomcat_setup.htm)
> > >
> > > <strong>1. verify java was installed</strong>
> > > <span style="white-space: pre-wrap"><code>  java -version</code></span>
> > >
> > > <strong>2. make sure JAVA\_HOME points to the java home</strong>
> > > <span style="white-space: pre-wrap"><code>  echo \$JAVA\_HOME</code></span>
> > >
> > > <strong>3. make sure PATH has \$JAVA\_HOME/bin</strong>
> > > <span style="white-space: pre-wrap"><code>  echo \$PATH</code></span>
> > >
> > > <strong>4. download Tomcat</strong>
> > >
> > > <strong>5. insert jenkins.war into /TOMCAT\_HOME/libexec/webapps</strong>
> > >
> > > <strong>6. start Tomcat Server</strong>
> > >
> > > <strong>7. [http://localhost:8080/jenkins](http://localhost:8080/jenkins)</strong>

> [!expand]- apt-get
> # Install
>
> [https://www.safaribooksonline.com/library/view/jenkins-the-definitive/9781449311155/ch03s05.html](https://www.safaribooksonline.com/library/view/jenkins-the-definitive/9781449311155/ch03s05.html)
>
> <strong>1. add key to your system</strong>
> <span style="white-space: pre-wrap"><code>  wget -q -O - [http://pkg.jenkins-ci.org/debian/jenkins-ci.org.key](http://pkg.jenkins-ci.org/debian/jenkins-ci.org.key) | sudo apt-key add -</code></span>
>
> <strong>2. add an entry in your /etc/apt/sources.list</strong>
> <span style="white-space: pre-wrap"><code>  sudo sh -c 'echo deb [http://pkg.jenkins.io/debian-stable](http://pkg.jenkins.io/debian-stable) binary/ \> /etc/apt/sources.list.d/jenkins.list'</code></span>
>
> <strong>3. update debian package repository</strong>
> <span style="white-space: pre-wrap"><code>  sudo apt-get update</code></span>
>
> <strong>4. install jenkins</strong>
> <span style="white-space: pre-wrap"><code>  sudo aptitude install -y jenkins</code></span>
>
> This will install Jenkins as a service, with a correctly configured startup script in /etc/init.d/jenkins and a corresponding system user called “jenkins”. If you didn’t already have Java installed on your server, it will also install the OpenJDK version of Java. By default, you will find the Jenkins WAR file in the/usr/share/jenkins directory, and the Jenkins home directory in /var/lib/jenkins.
> # Start Stop Restart
> <span style="white-space: pre-wrap"><code>sudo /etc/init.d/jenkins start</code><br><code>sudo /etc/init.d/jenkins stop</code><br><code>sudo /etc/init.d/jenkins restart</code><br><code>sudo /etc/init.d/jenkins status</code></span>
# Resources
- [http://www.bogotobogo.com/DevOps/Jenkins/Jenkins_Adding_Job_and_Build.php](http://www.bogotobogo.com/DevOps/Jenkins/Jenkins_Adding_Job_and_Build.php)

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

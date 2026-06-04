---
title: "MySQL"
created: 2019-03-16T01:06:16.261-05:00
modified: 2025-05-24T20:30:11.065-05:00
parent: "[[Relational／Row-Oriented Database Management System (RDBMS)]]"
children:
  - "[[MySQL - (utf8 vs utf8mb3 vs utf8mb4)]]"
  - "[[MySQL - Cluster]]"
---
###### MySQL ([https://www.mysql.com/](https://www.mysql.com/) -  [https://dev.mysql.com/downloads/](https://dev.mysql.com/downloads/))
````excerpt
- is an open-source [[Relational／Row-Oriented Database Management System (RDBMS)|Relational]] [[Database Management Systems (DBMS)|Database Management System]] (RDBMS) that uses [[Structured Query Language (SQL)]]
````
^excerpt

# Installation

> [!expand]- homebrew
> <strong>1. install mysql via home-brew</strong>
> <span style="white-space: pre-wrap"><code>  brew install mysql</code></span>
>
> <strong>2. verify mysql was installed</strong>
> <span style="white-space: pre-wrap"><code>  which mysql</code><br><code>  mysql —version</code></span>

> [!expand]- apt-get
> <strong>1. install mysql</strong>
> <span style="white-space: pre-wrap"><code>  sudo apt-get update</code><br><code>  sudo apt-get install mysql-server</code></span>
>
> <strong>2. verify mysql was installed</strong>
> <span style="white-space: pre-wrap"><code>  which mysql</code><br><code>  mysql —version</code></span>
# Configuration

> [!expand]- storage engines
> [https://dev.mysql.com/doc/refman/5.5/en/storage-engines.html](https://dev.mysql.com/doc/refman/5.5/en/storage-engines.html)
>
> Storage engines are MySQL components that handle the SQL operations for different table types. InnoDB is the default and most general-purpose storage engine, and Oracle recommends using it for tables except for specialized use cases. (The CREATE TABLE statement in MySQL 5.7 creates InnoDB tables by default.)
>
> <strong>1. To show list of Storage Engines</strong>
> <span style="white-space: pre-wrap"><code>  mysql\> SHOW ENGINES\\G</code></span>
>
> Storage Engines: InnoDB v MyISAM:
> - InnoDB has row-level locking, MyISAM can only do full table-level locking.
> - InnoDB has better crash recovery.
> - MyISAM has FULLTEXT search indexes, InnoDB did not until MySQL 5.6 (Feb 2013).
> - InnoDB implements transactions, foreign keys and relationship constraints, MyISAM does not.
# Features

> [!expand]- MySQLUtilities
> [https://dev.mysql.com/downloads/utilities/](https://dev.mysql.com/downloads/utilities/)
>
> MySQL Utilities is a package of utilities that are used for maintenance and administration of MySQL servers. These utilities encapsulate a set of primitive commands, bundling them so they can be used to perform macro operations with a single command.
> # Installation
>
> > [!expand]- manual
> > <strong>1. install via downloads</strong>
> >
> > MySQL Utilities requires Python 2.6. All of the Python code is written to conform to this version of Python.
> >
> > For connecting to MySQL, MySQL Utilities requires a MySQL Connector/Python General Availability (GA) release (version 2.0.4/2.1.2 or later). If you do not have Connector/Python installed, see the download section for Connector/Python to download the appropriate repository.
> >
> > MySQL Utilities also requires the Visual C++ Redistributable for Visual Studio 2013 (available at the Microsoft Download Center) to work.
>
> > [!expand]- Click here to expand...
> > <strong>1. install via home-brew</strong>
> > <span style="white-space: pre-wrap"><code>  brew install mysql-utilities</code></span>
# Commands

> [!expand]- Click here to expand...
> # Start Stop Restart
>
> [https://coolestguidesontheplanet.com/start-stop-mysql-from-the-command-line-terminal-osx-linux/](https://coolestguidesontheplanet.com/start-stop-mysql-from-the-command-line-terminal-osx-linux/)
> <span style="white-space: pre-wrap"><code>mysqld start</code><br><code>mysqld stop</code><br><code>mysqld restart</code></span>
>
> <strong>1. On Linux only (unless maybe download the service command on Mac?)</strong>
> <span style="white-space: pre-wrap"><code>  service mysqld start</code><br><code>  service mysqld stop</code><br><code>  service mysqld restart</code></span>
>
> or
> <span style="white-space: pre-wrap"><code>  service mysql start</code><br><code>  service mysql stop</code><br><code>  service mysql restart</code></span>
>
> <strong>1. OS X pre 5.7</strong>
> <span style="white-space: pre-wrap"><code>  mysql.server start</code><br><code>  mysql.server stop</code><br><code>  mysql.server restart</code></span>
>
> <strong>1. OS X post 5.7</strong>
> <span style="white-space: pre-wrap"><code>  sudo launchctl load -F /Library/LaunchDaemons/com.oracle.oss.mysql.mysqld.plist</code><br><code>  sudo launchctl unload -F /Library/LaunchDaemons/com.oracle.oss.mysql.mysqld.plist</code></span>
>
> # Connecting To MySQL
>
> <strong>1. connect to local mysql</strong>
> <span style="white-space: pre-wrap"><code>  mysql -u \<username\> -p</code></span>
>
> <strong>2. connect to remote mysql</strong>
> <span style="white-space: pre-wrap"><code>  mysql -h \<ip-address or url\> -u \<username\> -p</code></span>
>
> <strong>3. connect to remote mysql server and not use encrypted connection</strong>
> <span style="white-space: pre-wrap"><code>  mysql -h \<ip-address or url\> -u \<password\> -p --skip-ssl</code></span>
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

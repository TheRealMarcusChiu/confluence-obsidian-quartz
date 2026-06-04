---
title: "PostgreSQL"
created: 2019-03-16T01:16:42.363-05:00
modified: 2022-12-18T16:15:07.282-06:00
parent: "[[Multi-Mode／Modeled Database Management System]]"
children: []
---
###### PostgreSQL ([www.postgresql.org](http://www.postgresql.org/))
````excerpt
- is a [[Multi-Mode／Modeled Database Management System|multi-mode]], [[Object Oriented Database (OODB)|object]]-[[Relational／Row-Oriented Database Management System (RDBMS)|relational]] [[Database Management Systems (DBMS)|database system]]
````
^excerpt

# Installation

> [!expand]- Click here to expand...
> Refresh your server’s local package index
> ```
> sudo apt update
> ```
>
> Install the Postgres package along with a -contrib package that adds some additional utilities and functionality
> ```
> sudo apt install postgresql postgresql-contrib
> ```
>
> Ensure that the [[SysV／Upstart／Systemd／Launchd - Commands (service - chkconfig - systemctl - journalctl - launchctl)|service]] is started
> ```
> sudo systemctl start postgresql.service
> ```
# Start Stop Restart

> [!expand]- Click here to expand...
> ```
> pg_ctl -D /usr/local/var/postgres start
> pg_ctl -D /usr/local/var/postgres stop
> pg_ctl -D /usr/local/var/postgres restart
> pg_ctl -D /usr/local/var/postgres status
>
> sudo systemctl start postgresql
> sudo systemctl restart postgresql
> sudo systemctl stop postgresql
> sudo systemctl status postgresql
> ```
# Connect to Server
```
su - postgres
pqsl
```
# Commands
![[PostgreSQL/periodic table of postgres interactive terminal.png]]
# Queries

![[PostgreSQL/PostgreSQL-Cheat-Sheet-min.pdf]]

---
title: "Confluence - Backup & Restore"
created: 2022-11-05T22:51:13.424-05:00
modified: 2022-11-06T03:39:44.484-06:00
parent: "[[Personal Confluence (confluence.marcuschiu.com)]]"
children: []
---
# Backup

Shutdown the Confluence server that you want to backup. Then execute the following commands
```
sudo -u postgres pg_dump confluence > confluence.sql
tar -czvf confluence.tar.gz /var/atlassian/application-data/confluence
```
# Install Empty Confluence Server

Install a fresh confluence server in the target machine (choosing all defaults):
```
./atlassian-confluence-7.13.0-x64.bin
```

Install [[PostgreSQL|Postgres]] and create a empty confluence database
```
sudo apt-get install postgresql postgresql-contrib
sudo -u postgres psql
CREATE USER confluenceuser WITH PASSWORD 'password';
CREATE DATABASE confluence ENCODING 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8' TEMPLATE template0;
grant all privileges on database confluence to confluenceuser;
```

Go through the Confluence wizard setup process:
- choose empty confluence

# Restore Data onto Empty Confluence Server

Shutdown empty confluence server.

Restore Postgres data with confluence.sql
```
dropdb confluence_db_name_here
createdb confluence_db_name_here
sudo -u postgres psql confluence_db_name_here < confluence.sql
```

Restore Confluence home folder by replacing the whole directory /var/atlassian/application-data/confluence with confluence.tar.gz
```
tar -xf confluence.tar.gz
mv /var/atlassian/application-data/confluence /var/atlassian/application-data/confluence-initial
mv confluence /var/atlassian/application-data
```

Ensure all files and directories are owned by confluence user
```
sudo chown -R <confluence-user> <confluence-install-folder>
sudo chown -R <confluence-user> <confluence-home-folder>
sudo chmod -R u=rwx,g=rx,o=rx <confluence-install-folder>
sudo chmod -R u=rwx,g=rx,o=rx <confluence-home-folder>
```

---
title: "Oracle Database - Installation - MacOS - Docker"
created: 2022-08-29T20:34:31.023-05:00
modified: 2022-08-29T20:44:18.139-05:00
parent: "[[Oracle Database]]"
children: []
---
based on: [https://www.petefreitag.com/item/886.cfm](https://www.petefreitag.com/item/886.cfm)
# Installation Steps

Download binary (i.e. Oracle Database Express Edition) from [https://www.oracle.com/database/technologies/xe-downloads.html](https://www.oracle.com/database/technologies/xe-downloads.html)

Clone Oracle's git repository which contains various Dockerfiles
```
git clone https://github.com/oracle/docker
```

Copy binary to Dockerfiles directory
```
cd ./OracleDatabase/SingleInstance/dockerfiles
cp ~/Downloads/oracle-database-xe-21c-1.0-1.x86_64.rpm ./21.3.0
```

Build docker image
```
./buildContainerImage.sh -x -v 21.3.0
```

Look for docker image named <code><font style="color: rgb(122,134,154);">oracle/database:21.3.0-xe</font></code>
```
docker images
```
# Start Oracle Database via Docker Compose

create <code><font style="color: rgb(122,134,154);">docker-compose.yml</font></code> file
```
version: "3"
services:
    oracle:
        image: oracle/database:21.3.0-xe
        ports:
            - "11521:1521"
        environment:
            - ORACLE_PWD=testing12345
```

now start database
```
docker-compose up
```

oracle database that is accessible on your local machine on port <code><font style="color: rgb(122,134,154);">11521</font></code>

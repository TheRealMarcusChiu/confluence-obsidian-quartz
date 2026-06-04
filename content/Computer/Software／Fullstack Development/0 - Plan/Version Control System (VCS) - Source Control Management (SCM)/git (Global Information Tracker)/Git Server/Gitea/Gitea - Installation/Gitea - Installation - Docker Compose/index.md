---
title: "Gitea - Installation - Docker Compose"
created: 2025-05-20T11:54:26.335-05:00
modified: 2025-05-20T11:56:57.843-05:00
parent: "[[Gitea - Installation]]"
children: []
---
Create file <code><font style="color: rgb(122,134,154);">docker-compose.yml</font></code>:
```
networks:
  gitea:
    external: false

services:
  server:
    image: docker.gitea.com/gitea:1.23.8
    container_name: gitea
    environment:
      - USER_UID=1000
      - USER_GID=1000
      - GITEA__database__DB_TYPE=mysql
      - GITEA__database__HOST=db:3306
      - GITEA__database__NAME=gitea
      - GITEA__database__USER=gitea
      - GITEA__database__PASSWD=gitea
    restart: always
    networks:
      - gitea
    volumes:
      - ./gitea:/data
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    ports:
      - "3000:3000"
      - "222:22"
    depends_on:
        - db

  db:
    image: docker.io/library/mysql:8
    container_name: gitea-mysql
    restart: always
    environment:
      - MYSQL_ROOT_PASSWORD=gitea
      - MYSQL_USER=gitea
      - MYSQL_PASSWORD=gitea
      - MYSQL_DATABASE=gitea
    networks:
      - gitea
    volumes:
      - ./mysql:/var/lib/mysql
```

Run in background:
```
sudo docker-compose up -d
```

Check running processes
```
$ sudo docker-compose ps
NAME          IMAGE                           COMMAND                  SERVICE   CREATED              STATUS         PORTS
gitea         docker.gitea.com/gitea:1.23.8   "/usr/bin/entrypoint…"   server    About a minute ago   Up 4 seconds   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp, 0.0.0.0:222->22/tcp, [::]:222->22/tcp
gitea-mysql   docker.io/library/mysql:8       "docker-entrypoint.s…"   db        8 seconds ago        Up 5 seconds   3306/tcp, 33060/tcp
```

Open in web browser: [http://SERVER-IP:3000/](http://SERVER-IP:3000/)

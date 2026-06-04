---
title: "Gitlab - Installation & Setup"
created: 2025-05-28T17:31:29.997-05:00
modified: 2025-05-28T17:36:28.232-05:00
parent: "[[Gitlab]]"
children: []
---
# Installation
```yml
services:
  gitlab:
    image: gitlab/gitlab-ce:rc
    container_name: gitlab
    restart: always
    hostname: 'gitlab.example.com'
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        # Add any other gitlab.rb configuration here, each on its own line
        external_url 'https://gitlab.lan'
    ports:
      - '80:80'
      - '443:443'
      - '223:22'
    volumes:
      - './data/config:/etc/gitlab'
      - './data/logs:/var/log/gitlab'
      - './data/data:/var/opt/gitlab'
    shm_size: '256m'
```

Install Gitlab
```
sudo docker compose up -d
```

check status
```
sudo docker ps
```
# Get Root Password for Login

The username is: <code><font style="color: rgb(122,134,154);">root</font></code>

Find container ID running gitlab
```
$ sudo docker ps
CONTAINER ID   IMAGE                 COMMAND                  CREATED          STATUS                    PORTS                                                                                                             NAMES
a3cd5afd1397   gitlab/gitlab-ce:rc   "/assets/init-contai…"   21 minutes ago   Up 17 minutes (healthy)   0.0.0.0:80->80/tcp, :::80->80/tcp, 0.0.0.0:443->443/tcp, :::443->443/tcp, 0.0.0.0:223->22/tcp, [::]:223->22/tcp   gitlab
```

Get shell of the running docker container
```
sudo docker exec -it a3cd5afd1397 sh
```

Cat the password from <code><font style="color: rgb(122,134,154);">/etc/gitlab/initial\_root\_password</font></code>:
```
cat /etc/gitlab/initial_root_password
```

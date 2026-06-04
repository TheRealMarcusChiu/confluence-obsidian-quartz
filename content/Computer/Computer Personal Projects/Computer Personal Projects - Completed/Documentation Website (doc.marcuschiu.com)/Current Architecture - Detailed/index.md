---
title: "Current Architecture - Detailed"
created: 2019-03-15T01:00:15.728-05:00
modified: 2019-03-15T01:09:00.021-05:00
parent: "[[Documentation Website (doc.marcuschiu.com)]]"
children: []
---
![[Current Architecture - Detailed/3.jpg]]

> [!expand]- Setting up AWS Nginx Server (Web and Reverse Proxy Server)
> - install nginx server
> - below is the file <strong>/etc/nginx/nginx.conf</strong>
>     ```bash
>     user root;
>     worker_processes auto;
>     error_log /var/log/nginx/error.log;
>     pid /run/nginx.pid;
>     
>     include /usr/share/nginx/modules/*.conf;
>     
>     events {
>         worker_connections 1024;
>     }
>     
>     http {
>         log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
>                           '$status $body_bytes_sent "$http_referer" '
>                           '"$http_user_agent" "$http_x_forwarded_for"';
>     
>         access_log  /var/log/nginx/access.log  main;
>     
>         sendfile            on;
>         tcp_nopush          on;
>         tcp_nodelay         on;
>         keepalive_timeout   65;
>         types_hash_max_size 2048;
>     
>         include             /etc/nginx/mime.types;
>         default_type        application/octet-stream;
>     
>         include /etc/nginx/conf.d/*.conf;
>     
>         # marcuschiu.com
>         limit_req_zone $binary_remote_addr zone=personal:10m rate=10r/s;
>         server {
>             listen 80;
>             server_name marcuschiu.com;
>             root /usr/share/nginx/personal-website;
>             index index.html;
>             limit_req zone=personal burst=20 nodelay;
>             location / {
>             }
>         }
>     
>         # inspector.marcuschiu.com
>         server {
>             listen 80;
>             server_name inspector.marcuschiu.com;
>             root /home/ec2-user/fake-personal-website;
>             index index.html;
>             limit_req zone=personal burst=20 nodelay;
>             location / {
>             }
>         }
>     
>         # doc.marcuschiu.com
>         limit_req_zone $binary_remote_addr zone=mylimit:10m rate=2r/s;
>         server {
>             listen 80;
>             server_name doc.marcuschiu.com;
>             root /usr/share/nginx/ui-store-front-build;
>             index index.html index.htm;
>             limit_req zone=mylimit burst=20 nodelay;
>             location / {
>                 # This will allow you to refresh the page in your angular app
>                 # Which will not give you an error 404
>                 try_files $uri $uri/ /index.html;
>             }
>         }
>     
>         # core.marcuschiu.com
>         limit_req_zone $binary_remote_addr zone=corelimit:10m rate=2r/s;
>         server {
>             listen 80;
>             server_name core.marcuschiu.com;
>             limit_req zone=corelimit burst=10 nodelay;
>             location / {
>                 proxy_pass http://72.180.103.50:8080;
>                 # pass HTTP Host Header so home proxy can distinguish it from wiki.marcuschiu.com
>                 proxy_set_header Host core.marcuschiu.com;
>                 proxy_set_header X-Forwarded-For $remote_addr;
>             }
>         }
>     
>         # wiki.marcuschiu.com
>         limit_req_zone $binary_remote_addr zone=wikilimit:10m rate=10r/s;
>         server {
>             listen 80;
>             server_name wiki.marcuschiu.com;
>             limit_req zone=wikilimit burst=10 nodelay;
>             location / {
>                 proxy_pass http://72.180.103.50:8080;
>                 # pass HTTP Host Header so home proxy can distinguish it from core.marcuschiu.com
>                 proxy_set_header Host wiki.marcuschiu.com;
>                 proxy_set_header X-Forwarded-For $remote_addr;
>             }
>         }
>     }
>     ```
> - <strong>check status of nginx configuration files</strong>
>   nginx -t
> - <strong>build the angular project</strong>
>   ng build --env=prod
> - <strong>clone angular project into nginx server directory /usr/share/nginx/ui-store-front-build</strong>
>   git clone [https://github.com/d-log/ui-store-front-build.git](https://github.com/d-log/ui-store-front-build.git)
> - <strong>run nginx server and check status</strong>
>   systemctl stop nginx.service
>   systemctl start nginx.service
>   systemctl status nginx.service

> [!expand]- Setting up Home Nginx Server
> - install nginx server
> - below are /etc/nginx/sites-available/core-service and /etc/nginx/sites-available/ui-store-front
>     ```bash
>     server {
>         listen 8080;
>         server_name core.marcuschiu.com;
>      
>         allow 54.161.89.224;
>         deny all;
>        
>         access_log logs/core.marcuschiu.com/access.log;
>         error_log  logs/core.marcuschiu.com/error.log;
>         
>         location / {
>             proxy_set_header Upgrade $http_upgrade;
>             proxy_set_header Connection "upgrade";
>             proxy_set_header Host $host;
>      
>             proxy_pass http://192.168.86.218:8888;
>             
>             limit_except GET {
>                 deny all;
>             }
>         }
>     }
>     ```
>     ```bash
>     server {
>         listen 80;
>         server_name 192.168.86.217;
>      
>         root /var/www/ui-store-front-build;
>         index index.html index.htm;
>      
>         location / {
>              # This will allow you to refresh the page in your angular app
>              # Which will not give you an error 404
>              try_files $uri $uri/ /index.html;
>         }
>     } 
>     
>     ```
> - <strong>build the angular project</strong>
>   ng build --env=self
> - <strong>clone angular project into nginx server directory /var/www</strong>
>   git clone [https://github.com/d-log/ui-store-front-build.git](https://github.com/d-log/ui-store-front-build.git)
> - <strong>enable sites</strong>
>   cd /etc/nginx/sites-enabled
>   sudo rm default
>   sudo ln -s ../sites-available/ui-store-front ui-store-front
>   sudo ln -s ../sites-available/core-service core-service
> - <strong>create log directory</strong>
>   sudo mkdir -p /usr/share/nginx/logs/[core.marcuschiu.com](http://core.marcuschiu.com)
> - <strong>start nginx server</strong>
>   sudo nginx -t
>   sudo /etc/init.d/nginx start
>   sudo /etc/init.d/nginx status

> [!expand]- S3 Bucket Policy
> ```bash
> {
>     "Version": "2012-10-17",
>     "Id": "http referer policy example",
>     "Statement": [
>         {
>             "Sid": "Allow get requests referred by http://doc.marcuschiu.com",
>             "Effect": "Allow",
>             "Principal": "*",
>             "Action": "s3:GetObject",
>             "Resource": "arn:aws:s3:::repo.marcuschiu.com/*",
>             "Condition": {
>                 "StringLike": {
>                     "aws:Referer": [
>                         "http://doc.marcuschiu.com/*",
>                         "https://doc.marcuschiu.com/*",
>                         "http://192.168.86.217/*",
>                         "https://192.168.86.217/*"
>                     ]
>                 }
>             }
>         },
>         {
>             "Sid": "Explicit deny to ensure requests are allowed only from specific referer.",
>             "Effect": "Deny",
>             "NotPrincipal": {
>                 "AWS": "arn:aws:iam::769510571738:user/marcus"
>             },
>             "Action": "s3:*",
>             "Resource": "arn:aws:s3:::repo.marcuschiu.com/*",
>             "Condition": {
>                 "StringNotLike": {
>                     "aws:Referer": [
>                         "http://doc.marcuschiu.com/*",
>                         "https://doc.marcuschiu.com/*",
>                         "http://192.168.86.217/*",
>                         "https://192.168.86.217/*"
>                     ]
>                 }
>             }
>         },
>         {
>             "Sid": "allow marcus to upload",
>             "Effect": "Allow",
>             "Principal": {
>                 "AWS": "arn:aws:iam::769510571738:user/marcus"
>             },
>             "Action": "s3:*",
>             "Resource": "arn:aws:s3:::repo.marcuschiu.com/*"
>         }
>     ]
> }
> ```

> [!expand]- API Server Spring Boot
> - /home/pi/Documents/tmp/image-upload
> - /home/pi/Documents/core-service
> - below is the modified application.properties file
>     ```bash
>     server.port=8888
>      
>     spring.data.mongodb.database=logger-project
>     spring.data.mongodb.host=192.168.86.219
>     spring.data.mongodb.port=27017
>      
>     aws.s3.bucket.name=repo.marcuschiu.com
>      
>     spring.http.multipart.max-file-size=25MB
>     spring.http.multipart.max-request-size=25MB
>     image.upload.tmpdir=/home/pi/Documents/tmp
>      
>     spring.data.rest.defaultPageSize=10
>     spring.data.rest.maxPageSize=20
>     
>     ```
> - <strong>install aws cli</strong>
> - <strong>configure aws credentials \~/.aws/credentials</strong>
>   aws configure
> - <strong>run spring boot application in background</strong>
>   nohup mvn spring-boot:run &

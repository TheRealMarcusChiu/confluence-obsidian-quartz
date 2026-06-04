---
title: "Wordpress - Upload Simply Static"
created: 2025-02-27T00:25:41.836-06:00
modified: 2025-02-27T00:26:01.545-06:00
parent: "[[Wordpress]]"
children: []
---
```
#!/bin/bash

mv /srv/www/wordpress/wp-content/uploads/simply-static/temp-files/simply-static*.zip /srv/www/wordpress/wp-content/uploads/simply-static/temp-files/simply-static.zip
scp /srv/www/wordpress/wp-content/uploads/simply-static/temp-files/simply-static.zip aws:~
ssh aws "rm -rf /home/ec2-user/thoughts-marcuschiu-com"
ssh aws "unzip simply-static.zip -d thoughts-marcuschiu-com"
ssh aws "rm simply-static.zip"
```

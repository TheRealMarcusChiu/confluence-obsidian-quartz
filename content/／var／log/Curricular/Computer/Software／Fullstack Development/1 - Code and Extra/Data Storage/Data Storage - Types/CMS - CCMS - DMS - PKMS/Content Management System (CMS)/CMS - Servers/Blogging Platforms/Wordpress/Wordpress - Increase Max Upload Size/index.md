---
title: "Wordpress - Increase Max Upload Size"
created: 2025-01-21T13:09:30.388-06:00
modified: 2025-01-21T13:10:57.193-06:00
parent: "[[Wordpress]]"
children: []
---
```
sudo vim /etc/php/8.3/cli/php.ini
sudo vim /etc/php/8.3/apache2/php.ini
sudo vim /path/to/wordpress/wp-admin/php.ini   # For Ubuntu /srv/www/wordpress/wp-admin/php.ini
sudo service apache2 reload
```
```
client_max_body_size
post_max_size = 256M
upload_max_filesize = 256M
max_execution_time = 5000
max_input_time = 5000
memory_limit = -1
```

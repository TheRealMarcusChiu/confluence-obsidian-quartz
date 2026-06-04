---
title: "Confluence - Backup Procedure"
created: 2024-08-18T15:01:51.150-05:00
modified: 2024-08-18T15:04:08.553-05:00
parent: "[[Personal Confluence (confluence.marcuschiu.com)]]"
children: []
---
```
sudo su

crontab -e

0 1 * * * /home/marcuschiu/S3/confluence-v2/backup.sh
0 2 * * * /home/marcuschiu/S3/backup.sh
```
```bash
#! /bin/bash

# Absolute path to this script, e.g. /home/user/bin/foo.sh
SCRIPT=$(readlink -f "$0")
# Absolute path this script is in, thus /home/user/bin
SCRIPT_PATH=$(dirname "$SCRIPT")

sudo -u postgres pg_dump confluence > $SCRIPT_PATH/confluence.sql
tar -czvf $SCRIPT_PATH/confluence.sql.tar.gz $SCRIPT_PATH/confluence.sql
rm $SCRIPT_PATH/confluence.sql

tar -czvf $SCRIPT_PATH/confluence.tar.gz /var/atlassian/application-data/confluence
```
```bash
#! /bin/bash

# Absolute path to this script, e.g. /home/user/bin/foo.sh
SCRIPT=$(readlink -f "$0")
# Absolute path this script is in, thus /home/user/bin
SCRIPT_PATH=$(dirname "$SCRIPT")

printf $SCRIPT_PATH
printf "\n\nSyncing contents to s3://confluence-backup.marcuschiu.com\n"

/usr/local/bin/aws s3 sync $SCRIPT_PATH/ s3://confluence-backup.marcuschiu.com/

#timedatectl | grep "Local time: " > $SCRIPT_PATH/last-backup.txt

printf "\n"
```

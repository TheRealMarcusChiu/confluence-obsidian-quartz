---
title: "Backup - doc.marcuschiu.com"
created: 2019-03-15T01:09:39.539-05:00
modified: 2019-07-10T00:08:42.403-05:00
parent: "[[Documentation Website (doc.marcuschiu.com)]]"
children: []
---
[github repo](https://github.com/d-log/backup-automation)
## Manual Backup
```bash
#!/bin/bash
 
ssh -i ~/.ssh/mac pi@192.168.86.219 mongodump -d logger-project -o /home/pi/Documents/
 
scp -i ~/.ssh/mac -r pi@192.168.86.219:/home/pi/Documents/logger-project ~/Desktop/Computer\ Programming/LoggerProject/mongo-logger-project-backup/
 
# to restore from dump/
# mongorestore --db databasename --verbose \path\dump\
# the command above requires mongod instance
```
## Auto Backup - Daily

backup.sh
```bash
#!/bin/bash
 
ssh -i ~/.ssh/ubuntu-server pi@192.168.86.219 mongodump -d logger-project -o /home/pi/Documents/
 
scp -i ~/.ssh/ubuntu-server -r pi@192.168.86.219:/home/pi/Documents/logger-project /home/marcuschiu/mongo-db-backup/
 
timedatectl | grep "Local time: " > /home/marcuschiu/mongo-db-backup/last-backup.txt
 
# to restore from dump/
# mongorestore --db databasename --verbose \path\dump\
# the command above requires mongod instance
```

execute crontab
```bash
crontab -e
0 6 * * * /home/marcuschiu/mongo-db-backup/backup.sh
```

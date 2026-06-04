---
title: "crontab"
created: 2019-03-15T15:47:21.061-05:00
modified: 2019-03-15T15:47:30.911-05:00
parent: "[[cron - anacron]]"
children: []
---
<strong>SAMPLE CRON JOB</strong>
<span style="white-space: pre-wrap"><code>\*/1 \* \* \* \* (open -a Firefox '[http://www.youtube.com/](http://www.youtube.com/)')</code></span>

opens firefox every minute

<strong>COMMANDS</strong>

crontab file-name
- appends the specified cron job in file-name to the cron job list

crontab -e
- edit/add more cron jobs to the list

crontab -l
- displays all the currently running cron jobs for current user ‘whoami’

crontab -r
- removes all the cron jobs from current user’s list

you may also work on other user’s crontabs with these commands (replace user with actual user)
<span style="white-space: pre-wrap"><code>crontab —u user file-name</code><br><code>crontab —u user -e</code><br><code>crontab —u user -l </code><br><code>crontab —u user -r </code></span>

<strong>Run on Boot</strong>
1. open crontab crontab -e
2. add this line @reboot

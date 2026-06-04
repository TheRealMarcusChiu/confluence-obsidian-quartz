---
title: "cron - anacron"
created: 2020-01-10T20:34:00.504-06:00
modified: 2020-01-10T20:38:46.461-06:00
parent: "[[UNIX - Shell Commands]]"
children:
  - "[[crontab]]"
---
- <strong>cron</strong> - is a daemon used to run scheduled tasks such as system backups, updates and many more. It is suitable for running scheduled tasks on machines that will run continuously 24/7 such as servers
- <strong>anacron</strong> - is used to run commands periodically with a frequency defined in days. It works a little different from cron; assumes that a machine will not be powered on all the time. if an anacron job was missed because it was during power-off, it would be executed during boot

### Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

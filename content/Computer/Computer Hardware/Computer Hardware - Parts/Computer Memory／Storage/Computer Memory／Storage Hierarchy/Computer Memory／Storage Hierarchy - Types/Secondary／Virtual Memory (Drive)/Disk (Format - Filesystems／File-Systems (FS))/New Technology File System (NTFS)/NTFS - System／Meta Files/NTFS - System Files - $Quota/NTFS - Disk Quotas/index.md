---
title: "NTFS - Disk Quotas"
created: 2020-06-15T22:49:38.357-05:00
modified: 2020-06-15T22:52:16.899-05:00
parent: "[[NTFS - System Files - $Quota]]"
children: []
---
on NTFS the amount of space allowed for each user can be enforced at the file system level

when a limit is set, it applies to all volumes

a warning level and a quota limit are set, the users are unpleasantly notified that they are above the warning level

the users a physically prevented from writing to the volume if they are over the limit

quota is checked before NTFS compression is applied, so the limit is the logical size of the file, not the amount of disk space it takes

support for disk quotas is not available is Basic, Home and Media Center versions of Windows

Quotas must be activated after installation of Professional, Ultimate and Server versions of Windows

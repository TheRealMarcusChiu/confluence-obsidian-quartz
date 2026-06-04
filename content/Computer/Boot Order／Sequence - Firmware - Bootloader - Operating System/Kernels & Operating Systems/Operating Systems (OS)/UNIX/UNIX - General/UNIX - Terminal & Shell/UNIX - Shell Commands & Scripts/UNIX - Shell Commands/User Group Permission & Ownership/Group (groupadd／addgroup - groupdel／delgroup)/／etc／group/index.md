---
title: "／etc／group"
created: 2020-06-25T22:02:39.917-05:00
modified: 2020-06-25T22:04:04.026-05:00
parent: "[[Group (groupadd／addgroup - groupdel／delgroup)]]"
children: []
---
[[／etc directory|/etc]]/group - file that stores [[Group (groupadd／addgroup - groupdel／delgroup)|groups]]
### /etc/group layout
<span style="white-space: pre-wrap"><code>dalton:x:1006:e,a,b,c,d</code></span>

1. <strong>group\_name</strong>: It is the name of group. If you run ls -l command, you will see this name printed in the group field
2. <strong>Password</strong>: Generally password is not used, hence it is empty/blank. It can store encrypted password. This is useful to implement privileged groups
3. <strong>Group ID (GID)</strong>: Each user must be assigned a group ID. You can see this number in your [[／etc／passwd - ／etc／shadow|/etc/passwd]] file
4. <strong>Group List</strong>: It is a list of usernames of users who are members of the group. The user names, must be separated by commas

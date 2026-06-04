---
title: "Permissions (chmod)"
created: 2019-11-16T12:39:01.871-06:00
modified: 2019-11-16T14:25:24.294-06:00
parent: "[[User Group Permission & Ownership]]"
children:
  - "[[setuid - setgid - sticky bit]]"
---
each file has 3 separate permissions:
- <strong>user</strong> - the [[User (useradd／adduser - userdel／deluser - passwd)|user]] who [[Ownership (chown)|chowns]] this file has these permissions on this file
- <strong>group</strong> - the [[Group (groupadd／addgroup - groupdel／delgroup)|group]] who chowns this file has these permissions on this file
- <strong>other</strong> - the general public within the system has these permissions on this file

### <strong>FORMAT</strong>
<span style="white-space: pre-wrap"><code>chmod \[ugoa...\]\[\[+-=\]\[rwxXstugo...\]...\]\[,...\]</code></span>

- u stands for user
- g stands for group
- o stands for others
- a stands for all (i.e. user, group, and other)

<strong>Examples</strong>
<span style="white-space: pre-wrap"><code>chmod a+x file \# gives file execute permissions to user group and others</code><br><code>chmod +x file  \# gives file execute permissions to user group and others</code></span>

<strong>More</strong>
- <strong><code>ls -l</code></strong> : view permissions of file and directories in current directory
- <strong><code>sudo chmod 777 file</code></strong> : change permissions for a file
- <strong><code>sudo chmod 777 directory -R</code></strong> : change permissions for a directory and everything inside it

chmod permissions format
<span style="white-space: pre-wrap"><code>  USER|GROUP|OTHERS</code></span>

Each number is a binary format of
<span style="white-space: pre-wrap"><code>  READ|WRITE|EXECUTE</code></span>

They can either be 1 or 0

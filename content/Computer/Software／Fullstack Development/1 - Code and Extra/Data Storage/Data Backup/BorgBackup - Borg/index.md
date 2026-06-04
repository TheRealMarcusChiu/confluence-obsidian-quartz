---
title: "BorgBackup - Borg"
created: 2025-02-21T09:37:26.873-06:00
modified: 2025-02-21T15:54:38.330-06:00
parent: "[[Data Backup]]"
children: []
---
###### BorgBackup (short: Borg)
````excerpt
- is a deduplicating backup program
- optionally, it supports compression and authenticated encryption.
- The main goal of Borg is to provide an efficient and secure way to backup data. The data deduplication technique used makes Borg suitable for daily backups since only changes are stored. The authenticated encryption technique makes it suitable for backups to not fully trusted targets
````
^excerpt

# Basic Commands

Before a backup can be made a repository has to be initialized:
```
$ borg init --encryption=repokey /path/to/repo
```

Backup the <code><font style="color: black;">\~/src</font></code> and <code><font style="color: black;">\~/Documents</font></code> directories into an archive called <em>Monday</em>:
```
$ borg create /path/to/repo::Monday ~/src ~/Documents
```

The next day create a new archive called <em>Tuesday</em>:
```
$ borg create --stats /path/to/repo::Tuesday ~/src ~/Documents
```

This backup will be a lot quicker and a lot smaller since only new never before seen data is stored. The <code><font style="color: black;">--stats</font></code> option causes Borg to output statistics about the newly created archive such as the amount of unique data (not shared with other archives):
```
------------------------------------------------------------------------------
Archive name: Tuesday
Archive fingerprint: bd31004d58f51ea06ff735d2e5ac49376901b21d58035f8fb05dbf866566e3c2
Time (start): Tue, 2016-02-16 18:15:11
Time (end):   Tue, 2016-02-16 18:15:11

Duration: 0.19 seconds
Number of files: 127
------------------------------------------------------------------------------
                      Original size      Compressed size    Deduplicated size
This archive:                4.16 MB              4.17 MB             26.78 kB
All archives:                8.33 MB              8.34 MB              4.19 MB

                      Unique chunks         Total chunks
Chunk index:                     132                  261
------------------------------------------------------------------------------
```

List all archives in the repository:
```
$ borg list /path/to/repo
Monday                               Mon, 2016-02-15 19:14:44
Tuesday                              Tue, 2016-02-16 19:15:11
```

List the contents of the <em>Monday</em> archive:
```
$ borg list /path/to/repo::Monday
drwxr-xr-x user   group          0 Mon, 2016-02-15 18:22:30 home/user/Documents
-rw-r--r-- user   group       7961 Mon, 2016-02-15 18:22:30 home/user/Documents/Important.doc
...
```

Restore the <em>Monday</em> archive by extracting the files relative to the current directory:
```
$ borg extract /path/to/repo::Monday
```

Delete the <em>Monday</em> archive (please note that this does <strong>not</strong> free repo disk space):
```
$ borg delete /path/to/repo::Monday
```

Recover disk space by compacting the segment files in the repo:
```
$ borg compact /path/to/repo
```
# Remote Repositories

Borg can initialize and access repositories on remote hosts if the host is accessible using SSH. This is fastest and easiest when Borg is installed on the remote host, in which case the following syntax is used:
```
$ borg init user@hostname:/path/to/repo
```

Note: please see the usage chapter for a full documentation of repo URLs.

Remote operations over SSH can be automated with SSH keys. You can restrict the use of the SSH keypair by prepending a forced command to the SSH public key in the remote server’s authorized\_keys file. This example will start Borg in server mode and limit it to a specific filesystem path:
```
command="borg serve --restrict-to-path /path/to/repo",restrict ssh-rsa AAAAB3[...]
```

If it is not possible to install Borg on the remote host, it is still possible to use the remote host to store a repository by mounting the remote filesystem, for example, using sshfs:
```
$ sshfs user@hostname:/path/to /path/to
$ borg init /path/to/repo
$ fusermount -u /path/to
```

You can also use other remote filesystems in a similar way. Just be careful, not all filesystems out there are really stable and working good enough to be acceptable for backup usage.
# Resources
- [https://borgbackup.readthedocs.io/en/stable/index.html](https://borgbackup.readthedocs.io/en/stable/index.html)

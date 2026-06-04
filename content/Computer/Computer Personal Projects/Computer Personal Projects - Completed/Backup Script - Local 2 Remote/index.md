---
title: "Backup Script - Local 2 Remote"
created: 2019-03-15T01:16:30.938-05:00
modified: 2025-02-21T15:50:45.213-06:00
parent: "[[Computer Personal Projects - Completed]]"
children: []
---
# [[rsync|Rsync]]

A script that [[rsync|rsyncs]] local selected directories to a remote server
```bash
#!/bin/bash
 
# for rsync to work make sure the local and remote drives are of the same format
 
# if running in fish shell, use this template
# bash -lic "sudo rsync -av --delete ~/.[^.]* /Volumes/CS_BACKUP/home/ --exclude '.Trash' && rsync -av --delete ~/ComputerScience/ /Volumes/CS_BACKUP/home/ComputerScience/"
 
OPTION=$1
 
if [[ $OPTION == "128G" ]]; then
  sudo rsync -avz --delete ~/.[^.]* /Volumes/128G/HOME/ --exclude '.Trash'
  rsync -avz --delete ~/Desktop/ /Volumes/128G/HOME/Desktop/
  cp ~/backup2usb /Volumes/128G/HOME/backup2usb
elif [[ $OPTION == "3T-remote" ]]; then
  sudo rsync -avz --delete -e "ssh -i /Users/marcus.chiu/.ssh/rsa_ubuntu_server -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" ~/.[^.]* marcus@192.168.86.250:/home/marcus/Volumes/WD-MAC-BACKUP/HOME/ --exclude '.Trash'
  rsync -avz --delete -e "ssh -i /Users/marcus.chiu/.ssh/rsa_ubuntu_server -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" ~/Desktop/ marcus@192.168.86.250:/home/marcus/Volumes/WD-MAC-BACKUP/HOME/Desktop/
  scp -i ~/.ssh/rsa_ubuntu_server ~/backup2usb marcus@192.168.86.250:/home/marcus/Volumes/WD-MAC-BACKUP/HOME/backup2usb
else
  echo "$OPTION - unknown action"
fi
```
# [[BorgBackup - Borg|Borg]]

The following example script is meant to be run daily by the <code><font style="color: black;">root</font></code> user on different local machines. It backs up a machine’s important files (but not the complete operating system) to a repository <code><font style="color: black;">\~/backup/main</font></code> on a remote server. Some files which aren’t necessarily needed in this backup are excluded. See [borg help patterns](https://borgbackup.readthedocs.io/en/stable/usage/help.html#borg-patterns) on how to add more exclude options.

After the backup this script also uses the [borg prune](https://borgbackup.readthedocs.io/en/stable/usage/prune.html#borg-prune) subcommand to keep only a certain number of old archives and deletes the others.

Finally, it uses the [borg compact](https://borgbackup.readthedocs.io/en/stable/usage/compact.html#borg-compact) subcommand to remove deleted objects from the segment files in the repository to preserve disk space.

Before running, make sure that the repository is initialized as documented in [Remote repositories](https://borgbackup.readthedocs.io/en/stable/quickstart.html#remote-repos) and that the script has the correct permissions to be executable by the root user, but not executable or readable by anyone else, i.e. root:root 0700.
```
#!/bin/sh

# Setting this, so the repo does not need to be given on the commandline:
export BORG_REPO=ssh://username@example.com:2022/~/backup/main

# See the section "Passphrase notes" for more infos.
export BORG_PASSPHRASE='XYZl0ngandsecurepa_55_phrasea&&123'

# some helpers and error handling:
info() { printf "\n%s %s\n\n" "$( date )" "$*" >&2; }
trap 'echo $( date ) Backup interrupted >&2; exit 2' INT TERM

info "Starting backup"

# Backup the most important directories into an archive named after
# the machine this script is currently running on:

borg create                         \
    --verbose                       \
    --filter AME                    \
    --list                          \
    --stats                         \
    --show-rc                       \
    --compression lz4               \
    --exclude-caches                \
    --exclude 'home/*/.cache/*'     \
    --exclude 'var/tmp/*'           \
                                    \
    ::'{hostname}-{now}'            \
    /etc                            \
    /home                           \
    /root                           \
    /var

backup_exit=$?

info "Pruning repository"

# Use the `prune` subcommand to maintain 7 daily, 4 weekly and 6 monthly
# archives of THIS machine. The '{hostname}-*' matching is very important to
# limit prune's operation to this machine's archives and not apply to
# other machines' archives also:

borg prune                          \
    --list                          \
    --glob-archives '{hostname}-*'  \
    --show-rc                       \
    --keep-daily    7               \
    --keep-weekly   4               \
    --keep-monthly  6

prune_exit=$?

# actually free repo disk space by compacting segments

info "Compacting repository"

borg compact

compact_exit=$?

# use highest exit code as global exit code
global_exit=$(( backup_exit > prune_exit ? backup_exit : prune_exit ))
global_exit=$(( compact_exit > global_exit ? compact_exit : global_exit ))

if [ ${global_exit} -eq 0 ]; then
    info "Backup, Prune, and Compact finished successfully"
elif [ ${global_exit} -eq 1 ]; then
    info "Backup, Prune, and/or Compact finished with warnings"
else
    info "Backup, Prune, and/or Compact finished with errors"
fi

exit ${global_exit}
```

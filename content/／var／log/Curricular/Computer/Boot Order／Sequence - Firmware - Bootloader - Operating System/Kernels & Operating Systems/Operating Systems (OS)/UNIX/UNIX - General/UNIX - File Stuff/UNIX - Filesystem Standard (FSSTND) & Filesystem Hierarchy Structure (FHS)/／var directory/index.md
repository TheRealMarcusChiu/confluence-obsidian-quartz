---
title: "／var directory"
created: 2019-12-31T15:34:01.612-06:00
modified: 2020-06-25T22:10:38.624-05:00
parent: "[[UNIX - Filesystem Standard (FSSTND) & Filesystem Hierarchy Structure (FHS)]]"
children: []
---
###### /var directory
- variable files
- contains files to which the system writes data during the course of its operation
- files whose content is expected to continually change during normal operation of the system—such as logs, spool files, and temporary e-mail files
- is specific for each system, i.e., not shared over the network with other computers

### Subdirectories

```merge-table
{
  "rows": [
    [
      {
        "content": "directory",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "/var/cache",
      "- contains cached data from application programs\n- such data are locally generated as a result of time-consuming I/O or calculation\n- the application must be able to regenerate or restore the data\n- the cached files can be deleted without loss of data"
    ],
    [
      "/var/cache/man",
      "- A cache for man pages that are formatted on demand. The source for manual pages is usually stored in /usr/share/man/man?/ (where ? is the manual section. See the manual page for <strong>man</strong> in section 7); some manual pages might come with a pre-formatted version, which might be stored in /usr/share/man/cat\\* . Other manual pages need to be formatted when they are first viewed; the formatted version is then stored in /var/cache/man so that the next person to view the same page won't have to wait for it to be formatted"
    ],
    [
      "/var/lib",
      "- contains dynamic data libraries and files\n- state information\n- contains files that change while the system is running normally\n- persistent data modified by programs as they run, <em>e.g.</em>, databases, packaging system metadata, etc."
    ],
    [
      "/var/games",
      "- contains any variable data belonging to games in [[／var directory|/usr]] should be placed here\n- this is in case /usr is mounted read only"
    ],
    [
      "/var/log",
      "- contains various log files from various programs:\n\t- <strong>login </strong>(/var/log/wtmp, which logs all logins and logouts into the system)\n\t- <strong>syslog </strong>(/var/log/messages, where all kernel and system program message are usually stored)\n- files in /var/log can often grow indefinitely, and may require cleaning at regular intervals"
    ],
    [
      "/var/mail",
      "- mailbox files\n- this is the FHS approved location for user mailbox files\n- depending on how far your distribution has gone towards FHS compliance, these files may still be held in /var/spool/mail"
    ],
    [
      "/var/opt",
      "- variable data from add-on packages that are stored in <code>/opt</code>"
    ],
    [
      "/var/run",
      "- run-time variable data\n- contains system information data describing the system since it was booted\n- contains PIDs and other system information that is valid until the system is rebooted\n- files that contain information about the system that is valid until the system is next booted. For example, /var/run/utmp contains information about people currently logged in\n- in FHS 3.0, <code>/var/run</code> is replaced by <code>/run</code>; a system should either continue to provide a <code>/var/run</code> directory, or provide a symbolic link from <code>/var/run</code> to <code>/run</code>, for backwards compatibility"
    ],
    [
      "/var/spool",
      "- contains mail, news, and printer queues\n- [spool](https://en.wikipedia.org/wiki/Spooling) for tasks waiting to be processed, <em>e.g.</em>, print queues and outgoing mail queue\n- directories for news, printer queues, and other queued work. Each different spool has its own subdirectory below /var/spool, e.g., the news spool is in /var/spool/news . Note that some installations which are not fully compliant with the latest version of the FHS may have user mailboxes under /var/spool/mail"
    ],
    [
      "/var/spool/mail",
      "- deprecated location for users' mailboxes, replaced by /var/mail"
    ],
    [
      "/var/tmp",
      "- temporary files to be preserved between reboots"
    ],
    [
      "/var/local",
      "- variable data for programs that are installed in /usr/local (i.e., programs that have been installed by the system administrator)\n- Note that even locally installed programs should use the other /var directories if they are appropriate, e.g., /var/lock"
    ],
    [
      "/var/lock",
      "- lock files\n- files keeping track of resources currently in use\n- contains lock files created by programs to indicate that they are using a particular file or device\n- many programs follow a convention to create a lock file in /var/lock to indicate that they are using a particular device or file. Other programs will notice the lock file and won't attempt to use the device or file"
    ]
  ]
}
```

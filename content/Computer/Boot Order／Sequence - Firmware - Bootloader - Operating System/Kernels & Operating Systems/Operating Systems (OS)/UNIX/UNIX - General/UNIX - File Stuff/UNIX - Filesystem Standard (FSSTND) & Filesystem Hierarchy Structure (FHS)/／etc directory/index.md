---
title: "／etc directory"
created: 2019-12-31T14:41:12.784-06:00
modified: 2020-06-25T22:07:03.126-05:00
parent: "[[UNIX - Filesystem Standard (FSSTND) & Filesystem Hierarchy Structure (FHS)]]"
children:
  - "[[／etc／alternatives]]"
---
<strong>/etc directory</strong> contains host-specific system-wide [configuration files](https://en.wikipedia.org/wiki/Configuration_file)
### Origin of Name

There has been controversy over the meaning of the name itself. In early versions of the UNIX Implementation Document from Bell labs, <code>/etc</code> is referred to as the <em>etcetera directory</em>, as this directory historically held everything that did not belong elsewhere (however, the FHS restricts <code>/etc</code> to static configuration files and may not contain binaries). Since the publication of early documentation, the directory name has been re-explained in various ways. Recent interpretations include backronyms such as "Editable Text Configuration" or "Extended Tool Chest".
### Subdirectories

```merge-table
{
  "rows": [
    [
      {
        "content": "sub directory",
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
      "[[／etc／passwd - ／etc／shadow|/etc/passwd - /etc/shadow]]",
      "- /etc/passwd - the user database, with fields giving the username, real name, home directory, and other information about each user\n- /etc/shadow - is an encrypted file the holds user passwords"
    ],
    [
      "[[／etc／group|/etc/group]]",
      "- similar to /etc/passwd, but describes [[Group (groupadd／addgroup - groupdel／delgroup)|groups]] instead of [[User (useradd／adduser - userdel／deluser - passwd)|users]]"
    ],
    [
      "[[UNIX Shell - List Available (／etc／shells)|/etc/shells]]",
      "- contains [[UNIX Shell - List Available (／etc／shells)|list of available shells]]"
    ],
    [
      "/etc/login.defs",
      "- configuration file for the <strong>login</strong> command"
    ],
    [
      "/etc/profile\n/etc/bashrc\n/etc/csh.cshrc",
      "- [[UNIX Shell - Profile & Run Commands (RC) File|shell profiles]] executed at login or startup time by the [[UNIX - Shell|UNIX shells]]\n- allows the system administrator to set global defaults for all users\n- users can also create individual copies of these in their home directory to personalize their environment"
    ],
    [
      "[[／etc／fstab - ／etc／mtab - Auto-Mount Device|/etc/fstab]]",
      "- contains the filesystems mounted automatically at startup by the <strong>mount -a</strong> command (in /etc/rc or equivalent startup file). Under Linux, also contains information about swap areas used automatically by <strong>swapon -a</strong>"
    ],
    [
      "[[／etc／fstab - ／etc／mtab - Auto-Mount Device|/etc/mtab]]",
      "- list of currently mounted [[Disk (Format - Filesystems／File-Systems (FS))|filesystems]]. Initially set up by the bootup scripts, and updated automatically by the <strong>mount</strong> command"
    ],
    [
      "/etc/inittab",
      "- configuration file for init"
    ],
    [
      "/etc/[[crontab]]",
      "- list of running crons"
    ],
    [
      "/etc/motd",
      "- message of the day, automatically output after a successful login. Contents are up to the system administrator. Often used for getting information to every user, such as warnings about planned downtimes"
    ],
    [
      "[[／etc／sudoers - visudo|/etc/sudoers]]\n[[／etc／sudoers.d／＊|/etc/sudoers.d/*]]",
      "- /etc/sudoers - is a file administrators use to allocate system rights to system users\n- /etc/sudoers.d - is a directory containing all the dropin files"
    ],
    [
      "/etc/opt",
      "- contains configuration files for add-on packages that are stored in <code>/opt</code>"
    ],
    [
      "/etc/sgml",
      "- contains configuration files, such as catalogs, for software that processes [[Standard Generalized Markup Language (SGML)|SGML]]"
    ],
    [
      "/etc/X11",
      "- contains configuration files for the [[(X - X11 - X Window System) Core Protocol|X Window System]], version 11"
    ],
    [
      "/etc/xml",
      "- contains configuration files, such as catalogs, for software that processes [[Extensible Markup Language (XML)|XML]]"
    ],
    [
      "[[／etc／alternatives|/etc/alternatives]]",
      "- used in keeping track of the alternatives currently in use, by a tool called update-alternatives"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

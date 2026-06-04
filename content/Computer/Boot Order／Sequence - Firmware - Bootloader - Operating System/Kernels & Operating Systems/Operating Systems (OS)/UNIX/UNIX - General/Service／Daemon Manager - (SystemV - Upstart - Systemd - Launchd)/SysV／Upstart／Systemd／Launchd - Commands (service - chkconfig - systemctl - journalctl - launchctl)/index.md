---
title: "SysV／Upstart／Systemd／Launchd - Commands (service - chkconfig - systemctl - journalctl - launchctl)"
created: 2019-11-19T16:06:03.677-06:00
modified: 2019-11-20T11:14:14.755-06:00
parent: "[[Service／Daemon Manager - (SystemV - Upstart - Systemd - Launchd)]]"
children: []
---
[[SysV]]/[[Upstart]]/[[Systemd]]/[[launchd - plist|Launchd]] are [[Service／Daemon Manager - (SystemV - Upstart - Systemd - Launchd)|service managers]]
### Common Commands

```merge-table
{
  "rows": [
    [
      {
        "content": "Command Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[SysV]] and [[Upstart]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Systemd]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[launchd - plist|Launchd]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "reload updated services",
      "",
      "systemctl daemon-reload",
      "launchctl load ~/path/com.example.plist"
    ],
    [
      "list all services",
      "service --status-all",
      "systemctl list-units --type=service\nsystemctl --type=service",
      "launchctl list"
    ],
    [
      "list all active services",
      "",
      "systemctl list-units --type=service --state=active\nsystemctl --type=service --state=active",
      ""
    ],
    [
      "list all running services",
      "",
      "systemctl list-units --type=service --state=running systemctl --type=service --state=running",
      ""
    ],
    [
      "start a service",
      "service dummy start",
      "systemctl start dummy.service",
      "launchctl start com.example.app"
    ],
    [
      "stop a service",
      "service dummy stop",
      "systemctl stop dummy.service",
      "launchctl stop com.example.app"
    ],
    [
      "restart a service",
      "service dummy restart",
      "systemctl restart dummy.service",
      ""
    ],
    [
      "reload a service",
      "service dummy reload",
      "systemctl reload dummy.service",
      ""
    ],
    [
      "service status",
      "service dummy status",
      "systemctl status dummy.service",
      ""
    ],
    [
      "restart a service if already running",
      "service dummy condrestart",
      "systemctl condrestart dummy.service",
      ""
    ],
    [
      "enable service at startup",
      "chkconfig dummy on",
      "systemctl enable dummy.service",
      "launchctl load -w ~/path/com.example.plist"
    ],
    [
      "disable service at startup",
      "chkconfig dummy off",
      "systemctl disable dummy.service",
      "launchctl unload -w \\~/path/com.example.plist"
    ],
    [
      "check if a service is enabled at startup",
      "chkconfig dummy",
      "systemctl is-enabled dummy.service",
      ""
    ],
    [
      "create a new service file or modify configuration",
      "chkconfig dummy --add",
      "systemctl daemon-reload",
      ""
    ]
  ],
  "tableStyle": "width: 99.8373%;"
}
```
### Miscellaneous Commands

```merge-table
{
  "rows": [
    [
      {
        "content": "Command Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[SysV]] and [[Upstart]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Systemd]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "system halt",
      "halt",
      "systemctl halt"
    ],
    [
      "power off the system",
      "poweroff",
      "systemctl poweroff"
    ],
    [
      "restart the system",
      "reboot",
      "systemctl reboot"
    ],
    [
      "suspend the system",
      "pm-suspend",
      "systemctl suspend"
    ],
    [
      "hibernate",
      "pm-hibernate",
      "systemctl hibernate"
    ],
    [
      "follow the system log file",
      "tail -f /var/log/messages\n\ntail -f /var/log/syslog",
      "journalctl -f"
    ]
  ],
  "tableStyle": "width: 61.4321%;"
}
```
### <strong>Systemd New Commands</strong>

```merge-table
{
  "rows": [
    [
      {
        "content": "Command Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Systemd]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "execute a systemd command on remote host",
      "systemctl dummy.service start -H user@host"
    ],
    [
      "check boot time",
      "systemd-analyze, systemd-analyze time"
    ],
    [
      "kill all processes related to a service",
      "systemctl kill dummy"
    ],
    [
      "get logs for events for today",
      "journalctl --since=today"
    ],
    [
      "hostname and other host related information",
      "hostnamectl"
    ],
    [
      "date and time of system with timezone and other information",
      "timedatectl"
    ]
  ],
  "tableStyle": "width: 61.5134%;"
}
```

---
title: "Service／Daemon Manager - (SystemV - Upstart - Systemd - Launchd)"
created: 2019-05-18T17:03:51.364-05:00
modified: 2021-12-11T15:53:21.774-06:00
parent: "[[UNIX - General]]"
children:
  - "[[SysV]]"
  - "[[SysV／Upstart／Systemd - History]]"
  - "[[SysV／Upstart／Systemd／Launchd - Commands (service - chkconfig - systemctl - journalctl - launchctl)]]"
  - "[[Systemd]]"
  - "[[Upstart]]"
---
- <strong>service/daemon</strong> is a program run by the system in the background, as opposed to one started and run directly by the user
- <strong>service/daemon manager</strong> manages a plethora of services

# Service Managers - History

refer to: [[SysV／Upstart／Systemd - History|SysV/Upstart/Systemd - History]]
# Service Managers - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Service Managers",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Service File Extension",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Service File Location(s)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[SysV／Upstart／Systemd／Launchd - Commands (service - chkconfig - systemctl - journalctl - launchctl)|Service Manager Command(s)]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[SysV]]",
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>none</code></span>",
      "/etc/init.d/*",
      {
        "content": "- [[SysV／Upstart／Systemd／Launchd - Commands (service - chkconfig - systemctl - journalctl - launchctl)|service]]\n- [[SysV／Upstart／Systemd／Launchd - Commands (service - chkconfig - systemctl - journalctl - launchctl)|chkconfig]]",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "[[Upstart]]",
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>.conf</code></span>",
      "/etc/init/\\*"
    ],
    [
      {
        "content": "[[Systemd]]",
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>.service</code></span>",
      "/etc/systemd/system/\\*",
      "- [[SysV／Upstart／Systemd／Launchd - Commands (service - chkconfig - systemctl - journalctl - launchctl)|systemctl]]\n- [[SysV／Upstart／Systemd／Launchd - Commands (service - chkconfig - systemctl - journalctl - launchctl)|journalctl]]"
    ],
    [
      {
        "content": "[[launchd - plist|Launchd]] ([[Macintosh OSs (Mac OS X) - macOS|macOS]])",
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>.plist</code></span>",
      "multiple locations",
      "- [[SysV／Upstart／Systemd／Launchd - Commands (service - chkconfig - systemctl - journalctl - launchctl)|launchctl]]"
    ]
  ]
}
```

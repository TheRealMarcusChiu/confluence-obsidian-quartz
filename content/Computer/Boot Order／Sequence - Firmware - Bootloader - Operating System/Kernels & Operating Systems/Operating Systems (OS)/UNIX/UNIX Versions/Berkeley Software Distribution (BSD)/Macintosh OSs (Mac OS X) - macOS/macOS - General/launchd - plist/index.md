---
title: "launchd - plist"
created: 2019-04-16T14:08:13.276-05:00
modified: 2021-12-11T15:54:12.489-06:00
parent: "[[macOS - General]]"
children: []
---
<strong>Launchd - [http://www.launchd.info/](http://www.launchd.info/)</strong>
- is a unified, open-source [[Service／Daemon Manager - (SystemV - Upstart - Systemd - Launchd)|service management]] framework for starting, stopping and managing daemons, applications, processes, and scripts
- for other [[Service／Daemon Manager - (SystemV - Upstart - Systemd - Launchd)|UNIX Service Management Standards]]

# Daemons & Agents

both <strong>daemons</strong> and <strong>agents</strong> are programs running in the background without requiring user input
- <strong>agent</strong> runs on behalf of the logged in user
- <strong>daemon</strong> runs on behalf of the root user or any user you specify with the <font style="color: black;">UserName</font> key

The behavior of a daemon/agent is specified in a special XML file called a property list (plist). Depending on where it is stored it will be treated as a daemon or an agent.

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Location",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Run on Behalf of",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "When Jobs Loaded",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "User Agents",
        "bg": "#F4F5F7"
      },
      "/Users/.../Library/LaunchAgents\n\n\\~/Library/LaunchAgents",
      "currently logged in user",
      "specific user login",
      "Job definitions for a <strong>SPECIFIC</strong> user are stored below the respective user's Library directory"
    ],
    [
      {
        "content": "Global Agents",
        "bg": "#F4F5F7"
      },
      "/Library/LaunchAgents",
      "currently logged in user",
      "any user login",
      {
        "content": "Third-Party definitions which are relevant for <strong>EVERY</strong> user are stored below /Library",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "Global Daemons",
        "bg": "#F4F5F7"
      },
      "/Library/LaunchDaemons",
      "root or the user specified with the key UserName",
      "system start"
    ],
    [
      {
        "content": "System Agents",
        "bg": "#F4F5F7"
      },
      "/System/Library/LaunchAgents",
      "currently logged in user",
      "any user login",
      {
        "content": "Job definitions crucial for the operation of the operating system are stored below /System/Library\n\nYou should never need to create a daemon or agent in these directories",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "System Daemons",
        "bg": "#F4F5F7"
      },
      "/System/Library/LaunchDaemons",
      "root or the user specified with the key UserName",
      "system start"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

The following example shows a complete plist with only three keys:
- <strong><font style="color: black;">Label</font></strong> This key is required for every job definition. It identifies the job and has to be unique for the launchd instance. Theoretically it is possible for an agent to have the same label as a daemon, as daemons are loaded by the root launchd whereas agents are loaded by a user launchd, but it is not recommended.
- <strong><font style="color: black;">Program</font></strong> This key defines <em>what</em> to start, in this case a shell script /Users/Me/Scripts/cleanup.sh.
- <strong><font style="color: black;">RunAtLoad</font></strong> This is one of several optional keys specifying <em>when</em> the job should be run, in this case right after it has been loaded.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
	<dict>
		<key>Label</key><string>com.example.app</string>
		<key>Program</key><string>/Users/Me/Scripts/cleanup.sh</string>
		<key>RunAtLoad</key><true/>
	</dict>
</plist>
```

> [!expand]- detailed version
> ```
> <?xml version="1.0" encoding="UTF-8"?> 
> <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
> <plist version="1.0">
>      <dict>
>          <key>EnvironmentVariables</key>
>          <dict>
>              <key>PATH</key>
>              <string>/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:</string>
>          </dict>
>          <key>Label</key><string>com.marcuschiu.launch</string>
>          <key>ProgramArguments</key>
>          <array><string>/Users/marcuschiu/Desktop/launch.sh</string></array>
>          <key>RunAtLoad</key><true/>
>          <key>KeepAlive</key><false/>
>          <key>LaunchOnlyOnce</key><true/>
>          <key>StandardOutPath</key><string>/tmp/startup.stdout</string>
>          <key>StandardErrorPath</key><string>/tmp/startup.stderr</string>
>          <key>UserName</key><string>marcuschiu</string>
>          <key>GroupName</key><string>staff</string>
>          <key>InitGroups</key><true/>
>      </dict>
> </plist>
> ```
# Commands
- [[SysV／Upstart／Systemd／Launchd - Commands (service - chkconfig - systemctl - journalctl - launchctl)|launchctl]]

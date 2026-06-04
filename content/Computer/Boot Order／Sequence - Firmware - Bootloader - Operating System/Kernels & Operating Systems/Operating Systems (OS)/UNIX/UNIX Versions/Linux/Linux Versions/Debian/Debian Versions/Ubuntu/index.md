---
title: "Ubuntu"
created: 2019-03-15T03:36:13.728-05:00
modified: 2023-04-13T20:53:25.839-05:00
parent: "[[Debian Versions]]"
children:
  - "[[Ubuntu Server Raspberry Pi]]"
---
###### Ubuntu
````excerpt
- is a free and open-source [[Linux]] distribution based on [[Debian]]
````
^excerpt

# General

> [!expand]- Setup Android Studio on Ubuntu
> <strong>Installing Java</strong>
> <span style="white-space: pre-wrap"><code>sudo add-apt-repository ppa:webupd8team/java</code><br><code>sudo apt-get update</code><br><code>sudo apt-get install oracle-java8-installer</code><br><code>sudo apt-get install oracle-java8-set-default</code></span>
>
> <strong>Installing Android Studio</strong>
> <span style="white-space: pre-wrap"><code>sudo unzip android-studio-ide-141-2456560-linux.zip -d /opt</code><br><code>cd /opt/android-studio/bin</code><br><code>./studio.sh</code></span>
>
> <strong>Creating a Desktop File</strong>
> <span style="white-space: pre-wrap"><code>create new file "android-studio.desktop"</code><br><code>nano \~/.local/share/applications/android-studio.desktop</code></span>
>
> add to .desktop file
> <span style="white-space: pre-wrap"><code>\[Desktop Entry\]</code><br><code>Version=1.0</code><br><code>Type=Application</code><br><code>Name=Android Studio</code><br><code>Exec="/opt/android-studio/bin/studio.sh" %f</code><br><code>Icon=/optandroid-studio/bin/studio.png </code><br><code>Categories=Development;IDE;</code><br><code>Terminal=false;</code><br><code>StartupNotify=true</code><br><code>StartupWMClass=android-studio</code></span>
>
> Changes made to \~/.profile goto very end
# Versions
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- Ubuntu Desktop
- Ubuntu Server

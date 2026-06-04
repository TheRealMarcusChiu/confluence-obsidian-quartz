---
title: "apt-get - apt-cache"
created: 2019-03-15T03:41:46.763-05:00
modified: 2026-05-21T13:38:24.890-05:00
parent: "[[Debian Package Manager]]"
children: []
---
- <strong><code>apt-get</code></strong> makes use of <code>[[dpkg (Debian Package)]]</code> to do the actual package installations (so in a sense they're "installing" to the same place)
- <strong><code>apt-cache</code></strong> queries the package cache of the Advanced Packaging Tool (APT)

<strong><code>apt-get</code></strong> and <strong><code>apt-cache</code></strong> commands are unified into a single <code>[[apt (Advanced Packaging Tool)]]</code> command
# Configuration
a <code>/etc/apt/sources.list</code> file that specifies the online repositories
# Commands

[https://help.ubuntu.com/community/AptGet/Howto](https://help.ubuntu.com/community/AptGet/Howto)
###### sudo apt-get update

downloads the package lists from the repositories and "updates" them to get information on the newest versions of packages and their dependencies. It will do this for all repositories and PPAs.
###### sudo apt-get upgrade

will fetch new versions of packages existing on the machine if APT knows about these new versions by way of apt-get update
###### sudo apt-get dist-upgrade

will upgrade the linux kernel itself will do the same job which is done by apt-get upgrade, plus it will also intelligently handle the dependencies, so it might remove obsolete packages or add new ones.
###### sudo apt-cache search package-name
queries the packagecache of the Advanced Packaging Tool (APT)
###### sudo apt-get install package-name

installs package-name

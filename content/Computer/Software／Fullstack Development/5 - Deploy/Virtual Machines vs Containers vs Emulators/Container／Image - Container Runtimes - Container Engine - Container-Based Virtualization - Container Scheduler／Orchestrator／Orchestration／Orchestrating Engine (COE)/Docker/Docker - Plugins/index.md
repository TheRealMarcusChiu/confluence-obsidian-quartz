---
title: "Docker - Plugins"
created: 2025-02-21T12:55:50.609-06:00
modified: 2025-02-21T14:26:29.312-06:00
parent: "[[Docker]]"
children:
  - "[[Docker - Plugins - vieux／sshfs]]"
---
# Syntax

Install plugin from Docker Hub or your private registry, via <code><font style="color: rgb(122,134,154);">docker plugin install</font></code>. For example:
```
❯ docker plugin install vieux/sshfs

Plugin "vieux/sshfs" is requesting the following privileges:
- network: [host]
- capabilities: [CAP_SYS_ADMIN]
Do you grant the above permissions? [y/N] y

vieux/sshfs
```

List all plugins
```
❯ docker plugin ls
ID             NAME           TAG       DESCRIPTION           ENABLED
69553ca1d789   vieux/sshfs    latest    the `sshfs` plugin    true
```

Disable plugin
```
❯ docker plugin disable vieux/sshfs
```

Remove plugin
```
❯ docker plugin remove vieux/sshfs
```
# Developing a Plugin
- [https://docs.docker.com/engine/extend/#developing-a-plugin](https://docs.docker.com/engine/extend/#developing-a-plugin)

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

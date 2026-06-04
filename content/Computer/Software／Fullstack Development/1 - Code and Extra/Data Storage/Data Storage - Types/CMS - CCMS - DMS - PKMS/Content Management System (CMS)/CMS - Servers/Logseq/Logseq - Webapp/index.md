---
title: "Logseq - Webapp"
created: 2025-07-14T12:52:47.930-05:00
modified: 2025-07-14T12:53:27.327-05:00
parent: "[[Logseq]]"
children: []
---
- [https://github.com/logseq/logseq/blob/master/docs/docker-web-app-guide.md](https://github.com/logseq/logseq/blob/master/docs/docker-web-app-guide.md)

# Local
```
docker pull ghcr.io/logseq/logseq-webapp:latest
docker run -d --rm -p 127.0.0.1:3001:80 ghcr.io/logseq/logseq-webapp:latest
```
# Remote

Requires HTTPS

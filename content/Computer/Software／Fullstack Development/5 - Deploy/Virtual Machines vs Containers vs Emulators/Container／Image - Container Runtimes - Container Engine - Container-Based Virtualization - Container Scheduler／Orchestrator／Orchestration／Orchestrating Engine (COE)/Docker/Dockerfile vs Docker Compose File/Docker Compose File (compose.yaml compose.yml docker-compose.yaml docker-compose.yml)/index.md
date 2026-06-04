---
title: "Docker Compose File (compose.yaml compose.yml docker-compose.yaml docker-compose.yml)"
created: 2022-05-22T20:22:14.033-05:00
modified: 2022-11-25T00:10:37.942-06:00
parent: "[[Dockerfile vs Docker Compose File]]"
children: []
---
Compose file is
- compose.yaml (preferred) or compose.yml in working directory
- docker-compose.yaml and docker-compose.yml is also supported for backward compatibility

If both files exist, Compose implementations MUST prefer canonical compose.yaml one
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Reference
- [https://docs.docker.com/compose/compose-file/](https://docs.docker.com/compose/compose-file/)

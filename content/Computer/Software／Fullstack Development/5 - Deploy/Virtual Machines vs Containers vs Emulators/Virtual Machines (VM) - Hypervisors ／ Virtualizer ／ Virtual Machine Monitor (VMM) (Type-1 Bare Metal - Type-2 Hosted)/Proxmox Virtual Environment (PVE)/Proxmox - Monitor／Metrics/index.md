---
title: "Proxmox - Monitor／Metrics"
created: 2025-08-05T13:28:47.821-05:00
modified: 2025-08-05T13:29:08.047-05:00
parent: "[[Proxmox Virtual Environment (PVE)]]"
children:
  - "[[Proxmox - InfluxDB & Grafana]]"
---
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

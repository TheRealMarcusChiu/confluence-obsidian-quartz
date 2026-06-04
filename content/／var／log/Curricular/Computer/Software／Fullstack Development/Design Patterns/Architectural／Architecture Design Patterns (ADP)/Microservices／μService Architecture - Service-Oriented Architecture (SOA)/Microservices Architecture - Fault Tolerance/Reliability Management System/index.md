---
title: "Reliability Management System"
created: 2026-01-12T14:40:59.565-06:00
modified: 2026-01-12T14:45:19.455-06:00
parent: "[[Microservices Architecture - Fault Tolerance]]"
children:
  - "[[Aperture (Reliability Management System)]]"
---
###### Reliability Management System
````excerpt
- one issue with [[Load Shedding／Shedder|load shedding]], [[Circuit-Breaker／Breaking|circuit breaking]] and [[Auto-Scaling／Scaler|auto-scaling]] is that these tools only have a localized view of the system
- factors they can consider include their own resource utilization, direct dependencies and number of incoming requests
- however, they can’t take a globalized view of the system and make decisions based on that
````
^excerpt

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

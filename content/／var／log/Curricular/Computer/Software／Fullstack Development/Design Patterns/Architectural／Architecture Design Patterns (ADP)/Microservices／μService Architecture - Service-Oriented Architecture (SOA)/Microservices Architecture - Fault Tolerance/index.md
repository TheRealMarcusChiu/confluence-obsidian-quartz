---
title: "Microservices Architecture - Fault Tolerance"
created: 2026-01-12T13:59:50.444-06:00
modified: 2026-01-12T14:40:21.096-06:00
parent: "[[Microservices／μService Architecture - Service-Oriented Architecture (SOA)]]"
children:
  - "[[Auto-Scaling／Scaler]]"
  - "[[Circuit-Breaker／Breaking]]"
  - "[[Load Shedding／Shedder]]"
  - "[[Reliability Management System]]"
---
Going from a monolith to a micro-services architecture opens a world of problems.

Fault Tolerance can be either:
- local to the service
- global - requires some centralized management

Here are some solutions:
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

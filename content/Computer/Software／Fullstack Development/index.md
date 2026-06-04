---
title: "Software／Fullstack Development"
created: 2019-03-15T23:55:53.064-05:00
modified: 2021-09-21T02:18:04.871-05:00
parent: "[[Computer]]"
children:
  - "[[0 - Plan]]"
  - "[[1 - Code and Extra]]"
  - "[[2 - Build Tools／Systems]]"
  - "[[3 - Testing (Automated Tests)]]"
  - "[[4 - Release]]"
  - "[[4 Types of Projects (Walking in the fog - Making a movie - Going on a quest - Painting by numbers)]]"
  - "[[5 - Deploy]]"
  - "[[6 - Logs／Logging & Monitoring & Metrics & Traces／Tracing & Analytics]]"
  - "[[Agile - Scrum]]"
  - "[[Architecture／Architectural Design Examples]]"
  - "[[Before Commit vs After Commit]]"
  - "[[Cloud Computing／Service Models／Platforms (SaaS - FaaS - PaaS - IaaS - MaaS - PC)]]"
  - "[[Cloud Foundry]]"
  - "[[Continuous Integration (CI) - Continuous Delivery (CD) - Continuous Deployment]]"
  - "[[Design Patterns]]"
  - "[[Fault／Latency Tolerance & Resilience (Service-Dependency Layer)]]"
  - "[[Feature Toggles／Flags (Release／Experiment／Ops／Permissioning)]]"
  - "[[Push Notifications Services／Servers]]"
  - "[[Real-Time Peer／Pair Code／Design Programming／Review]]"
  - "[[Service-Level Agreement (SLA) -  Service-Level Objective (SLO) -  Service-Level Indicator (SLI)]]"
  - "[[Software Design／Development Paradigms／Principles]]"
  - "[[Software License Types]]"
  - "[[Versioning Schemes]]"
---
- [https://martinfowler.com/](https://martinfowler.com/)
- [https://www.artima.com/articles](https://www.artima.com/articles)

![[Software／Fullstack Development/software development cycle.png]]
# Tips

> [!expand]- Click here to expand...
> <span style="white-space: pre-wrap"><code>CREATE TABLE test (</code><br><code>  nonempty VARCHAR NOT NULL UNIQUE CONSTRAINT non\_empty CHECK(length(nonempty)\>0)</code><br><code>)</code></span>
>
> - design schema first for all APIs and Events, Data Schema
> 	- use both OpenAPI/Swagger and gRPC
> 	- consume events (not API) by default)
> 	- data
> 		- change database to UTF-8
> 		- consistent CHECKS, metadata
> 		- enable a global feature like 'hash\_code' to minimize writes
> - invest in automation
> 	- deployment, code generation, dependency management
> - enable teams to write amazing and simple tests
> 	- drives quality, streamlines maintenance, enables continuous delivery
>
> ###### Back Pressure
>
> [https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7](https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7)
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[Git Strategies]]
- [Reducing Costs of HTTPS API AWS](https://gameanalytics.com/blog/reduce-costs-https-api-aws.html/amp)

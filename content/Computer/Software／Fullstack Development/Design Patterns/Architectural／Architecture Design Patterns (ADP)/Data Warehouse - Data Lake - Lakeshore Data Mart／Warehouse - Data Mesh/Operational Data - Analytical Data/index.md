---
title: "Operational Data - Analytical Data"
created: 2021-12-30T23:13:17.732-06:00
modified: 2022-01-02T02:35:49.936-06:00
parent: "[[Data Warehouse - Data Lake - Lakeshore Data Mart／Warehouse - Data Mesh]]"
children: []
---
# 2 Types of Data & Why an Enterprise Needs Them
````excerpt
Say we have an enterprise with:
- a group of databases that runs the business (i.e. operational data plane)
- a group of analysts to analyze business patterns to boost revenue (i.e. analytical data consumers)

The consumers may analyze directly off from the operational data as depicted below.

![[Operational Data - Analytical Data/operational-data-analytical-consumers.drawio.png|450]]

The problems with this approach are:
- a consumer need may affect the operational data plane (e.g. An analytical consumer wants to know the number of times each user logged in. This requires adding a column to track the number of logins. This column isn't needed for business. Additional columns like this will bloat the operational data plane)
- managing private data is difficult

The solution is to introduce a separate data plane solely used for analysis.

![[Operational Data - Analytical Data/operational-data-and-analytical-data.drawio.png|800]]
### The 2 Types of Data
- <strong>operational data plane</strong> - sits in databases behind business capabilities, has a transactional nature, keeps the current state, and serves the needs of the applications running the business
- <strong>analytical data plane</strong> - is a temporal and aggregated view of the facts of the business over time, often modeled to provide retrospective or future-perspective insights; it trains the ML models or feeds the analytical reports
````
^excerpt

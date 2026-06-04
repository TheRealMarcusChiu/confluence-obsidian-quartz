---
title: "CQL - Getting Max By Property Foreach Group"
created: 2021-10-02T16:36:31.745-05:00
modified: 2021-10-02T19:30:33.641-05:00
parent: "[[CQL - Data Manipulation Language (DML)]]"
children: []
---
# Problem 1 - Statement

Given the graph below, construct a query to return the encircled sub-graph:
- return Application with property sealId=?
- return all ApplicationModules owned by Application
- return all APIs provided for each ApplicationModule
- <strong>return Request with max version property for each API</strong>
```merge-table
{
  "rows": [
    [
      "![[CQL - Getting Max By Property Foreach Group/Getting Max By Property Foreach Group - Problem Statement.png|500]]",
      "> [!expand]- CQL commands\n> ```\n> -- NODES\n> MERGE (app:Application {sealId:1})\n> MERGE (appMod1:ApplicationModule {sealModuleId: 1})\n> MERGE (appMod2:ApplicationModule {sealModuleId: 2})\n> MERGE (api1:Api {factId: 1})\n> MERGE (api2:Api {factId: 2})\n> MERGE (api3:Api {factId: 3})\n> MERGE (api4:Api {factId: 4})\n> MERGE (request11:Request {ownerFactId: 1, version: 1})\n> MERGE (request12:Request {ownerFactId: 1, version: 2})\n> MERGE (request13:Request {ownerFactId: 1, version: 3})\n> MERGE (request21:Request {ownerFactId: 2, version: 1})\n> MERGE (request22:Request {ownerFactId: 2, version: 2})\n> MERGE (request31:Request {ownerFactId: 3, version: 0})\n>\n> -- Relationships\n> MERGE (app)<-[:IS_OWNED_BY]-(appMod1)\n> MERGE (app)<-[:IS_OWNED_BY]-(appMod2)\n> MERGE (appMod1)-[r11:PROVIDES {version: 1}]-(api1)\n> MERGE (appMod1)-[r12:PROVIDES {version: 2}]-(api1)\n> MERGE (appMod1)-[r13:PROVIDES {version: 3}]-(api1)\n> MERGE (appMod1)-[r21:PROVIDES {version: 1}]-(api2)\n> MERGE (appMod1)-[r22:PROVIDES {version: 2}]-(api2)\n> MERGE (appMod1)-[r31:PROVIDES {version: 3}]-(api3)\n> MERGE (appMod1)-[r41:PROVIDES {version: 12}]-(api4)\n> MERGE (appMod1)-[r42:PROVIDES {version: 21}]-(api4)\n> MERGE (api1)<-[:IS_OWNED_BY]-(request11)\n> MERGE (api1)<-[:IS_OWNED_BY]-(request12)\n> MERGE (api1)<-[:IS_OWNED_BY]-(request13)\n> MERGE (api2)<-[:IS_OWNED_BY]-(request21)\n> MERGE (api2)<-[:IS_OWNED_BY]-(request22)\n> MERGE (api3)<-[:IS_OWNED_BY]-(request31)\n> ```"
    ]
  ]
}
```
# Problem 1 - Solutions

> [!expand-ui]- CQL v4.0 With APOC (without relationships)
> ```
> MATCH (app:Application {sealId: 1})
> OPTIONAL MATCH (app)<-[r0:IS_OWNED_BY]-(appMod:ApplicationModule)
> OPTIONAL MATCH (appMod)-[r1:PROVIDES]->(api:Api)
> WITH collect(DISTINCT app) AS apps, collect(DISTINCT appMod) AS appMods, collect(DISTINCT api) AS apis
> UNWIND apis AS api
> OPTIONAL MATCH (api)<-[r2:IS_OWNED_BY]-(request:Request)
> WITH apps, appMods, apis, api, apoc.agg.maxItems(request, request.version).items AS requests
> WITH apps, appMods, apis, requests
> UNWIND requests AS request
> RETURN apps, appMods, apis, collect(request) AS requests
> ```
>
> ![[CQL - Getting Max By Property Foreach Group/Getting Max By Property Foreach Group - Solution 1.png|900x432]]

> [!expand-ui]- CQL v4.0 With APOC (with relationships)
> If you want to return the relationships between APIs and Request nodes, then use the following query below
> ```
> MATCH (app:Application {sealId: 1})
> OPTIONAL MATCH (app)<-[r0:IS_OWNED_BY]-(appMod:ApplicationModule)
> OPTIONAL MATCH (appMod)-[r1:PROVIDES]->(api:Api)
> WITH collect(DISTINCT app) AS apps, collect(DISTINCT appMod) AS appMods, collect(DISTINCT api) AS apis
> UNWIND apis AS api
> OPTIONAL MATCH (api)<-[r2:IS_OWNED_BY]-(request:Request)
> WITH apps, appMods, apis, api, apoc.agg.maxItems(request, request.version).items AS requests, apoc.agg.maxItems(r2, request.version).items AS r2s
> WITH apps, appMods, apis, requests, r2s
> UNWIND requests AS request
> UNWIND r2s AS r2
> RETURN apps, appMods, apis, collect(request) AS requests, collect(r2) AS r2s
> ```
>
> ![[CQL - Getting Max By Property Foreach Group/Getting Max By Property Foreach Group - Solution 2.png|1000x455]]
# Problem 2 - Statement

Given the graph below, construct a query to return the encircled sub-graph:
- return Application with property sealId=?
- return all ApplicationModules owned by Application
- return all APIs provided for each ApplicationModule <strong>(return only the relationship with highest version property) <font style="color: rgb(255,0,0);">← ADDITIONAL CONSTRAINT</font></strong>
- return Request with max version property for each API

![[CQL - Getting Max By Property Foreach Group/Getting Max By Property Foreach Group - Problem 2.png|500]]
# Problem 2 - Solution

> [!expand-ui]- CQL v4.0 With APOC
> ```
> MATCH (app:Application {sealId: 1})
> OPTIONAL MATCH (app)<-[r0:IS_OWNED_BY]-(appMod:ApplicationModule)
> WITH collect(DISTINCT app) AS apps, collect(DISTINCT appMod) AS appMods, collect(DISTINCT r0) AS r0s
> OPTIONAL MATCH (appMod)-[r1:PROVIDES]->(api:Api)
> WITH apps, appMods, r0s, apoc.agg.maxItems(r1, r1.version).items AS grouped_r1s, api
> UNWIND grouped_r1s AS r1
> WITH apps, appMods, r0s, collect(DISTINCT r1) AS r1s, collect(DISTINCT api) AS apis
> UNWIND apis AS api
> OPTIONAL MATCH (api)<-[r2:IS_OWNED_BY]-(request:Request)
> WITH apps, r0s, appMods, r1s, apis, api, apoc.agg.maxItems(r2, request.version).items AS r2s, apoc.agg.maxItems(request, request.version).items AS requests
> WITH apps, r0s, appMods, r1s, apis, r2s, requests
> UNWIND r2s AS r2
> UNWIND requests AS request
> RETURN apps, r0s, appMods, r1s, apis, collect(r2) AS r2s, collect(request) AS requests
> ```
# Resources
- [https://community.neo4j.com/t/cypher-query-for-return-node-which-some-field-max-some-field-value-out-of-a-group-of-nodes/9148/2](https://community.neo4j.com/t/cypher-query-for-return-node-which-some-field-max-some-field-value-out-of-a-group-of-nodes/9148/2)

---
title: "CQL - MERGE on Different Sets of Properties (WHERE OR)"
created: 2021-06-16T23:08:06.982-05:00
modified: 2022-11-19T18:34:18.518-06:00
parent: "[[CQL - Data Manipulation Language (DML)]]"
children: []
---
# Problem Statement

we want to match on property-id, if no match then match on property-name
1. UPSERT on map.id ONLY IF map.id IS NOT NULL, otherwise
2. UPSERT on map.name ONLY IF map.name IS NOT NULL

# 1 - OPTIONAL MATCH - Modify Node if Exists in DB, Otherwise Create Node
```
WITH {id: 9001, name:"Marcus Chiu", country:"USA", dob:date("1994-05-18")} AS map
OPTIONAL MATCH (n1:User {id: map.id})     -- USES INDEX
OPTIONAL MATCH (n2:User {name: map.name}) -- USES INDEX
WITH COALESCE(n1,n2) AS n, apoc.map.clean(map, [], []) AS map 
FOREACH (ignoreMe IN CASE WHEN n IS NOT NULL THEN [1] ELSE [] END |
	                SET n += map, n.desc = "updated")
FOREACH (ignoreMe IN CASE WHEN n IS     NULL THEN [1] ELSE [] END |
	CREATE (n:User) SET n += map, n.desc = "created")
```
```
WITH {id: 9001, name:"Marcus Chiu", country:"USA", dob:date("1994-05-18")} AS map
OPTIONAL MATCH (n:User) WHERE (n.id = map.id) OR (n.name = map.name) -- INDEX NOT USED WHEN 'OR' ADDED INTO WHERE CLAUSE (tested in Neo4j v4.0.4)
WITH n, apoc.map.clean(map, [], []) AS map 
FOREACH (ignoreMe IN CASE WHEN n IS NOT NULL THEN [1] ELSE [] END |
	                SET n += map, n.desc = "first")
FOREACH (ignoreMe IN CASE WHEN n IS     NULL THEN [1] ELSE [] END |
	CREATE (n:User) SET n += map, n.desc = "second")
```
# 2 - OPTIONAL MATCH - Modify Node if Exists in DB, Otherwise NO Create Node
```
WITH {id: 9001, name:"Marcus Chiu", country:"USA", dob:date("1994-05-18")} AS map
OPTIONAL MATCH (n1:User {id: map.id})     -- USES INDEX
OPTIONAL MATCH (n2:User {name: map.name}) -- USES INDEX
WITH COALESCE(n1,n2) AS n, apoc.map.clean(map, [], []) AS map  
WHERE n IS NOT NULL SET n += map
RETURN n;
```
```
WITH {id: 9001, name:"Marcus Chiu", country:"USA", dob:date("1994-05-18")} AS map
OPTIONAL MATCH (n:User) WHERE (n.id = map.id) OR (n.name = map.name) -- INDEX NOT USED WHEN 'OR' ADDED INTO WHERE CLAUSE (tested in Neo4j v4.0.4)
WITH n, apoc.map.clean(map, [], []) AS map
WHERE n IS NOT NULL SET n += map
RETURN n;
```
# 3 - MERGE - Modify Node if Exists in DB, Otherwise Create Node

Behavior is slightly different than the <code><font style="color: rgb(122,134,154);">1 - OPTIONAL MATCH</font></code> query above in this following edge-case:
- this MERGE query below will create a new node if map.id is non-null, whether or not the DB contains an existing node with a property name equal to map.name
- on the other hand, OPTIONAL MATCH query will update that existing node
```
WITH {id: 9001, name:"Marcus Chiu", country:"USA", dob:date("1994-05-18")} AS map
FOREACH (ignoreMe IN CASE WHEN NOT apoc.coll.contains(apoc.map.values(map, ["id"], true), null) THEN [1] ELSE [] END |
	MERGE (u:User {id: map.id})     SET u += apoc.map.clean(map, [], [])) 
FOREACH (ignoreMe IN CASE WHEN     apoc.coll.contains(apoc.map.values(map, ["id"], true), null) THEN [1] ELSE [] END |
	FOREACH (ignoreMe IN CASE WHEN NOT apoc.coll.contains(apoc.map.values(map, ["name"], true), null) THEN [1] ELSE [] END |
	MERGE (u:User {name: map.name}) SET u += apoc.map.clean(map, [], [])))
```

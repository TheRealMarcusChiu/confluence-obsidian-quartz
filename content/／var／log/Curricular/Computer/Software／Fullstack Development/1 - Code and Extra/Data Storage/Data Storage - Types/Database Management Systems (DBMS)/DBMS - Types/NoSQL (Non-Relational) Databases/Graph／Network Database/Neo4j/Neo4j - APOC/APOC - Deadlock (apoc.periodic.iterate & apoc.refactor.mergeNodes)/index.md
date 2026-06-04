---
title: "APOC - Deadlock (apoc.periodic.iterate & apoc.refactor.mergeNodes)"
created: 2022-04-19T21:15:33.300-05:00
modified: 2022-04-19T21:17:38.542-05:00
parent: "[[Neo4j - APOC]]"
children: []
---
# Problem
```
call apoc.periodic.iterate(
'MATCH (n:Actor) RETURN n', 
'Merge (new:Actor {name:toLower(n.name)}) 
    with new as newActor,n as Actor 
    CALL apoc.refactor.mergeNodes([newActor,Actor],{properties:"discard",mergeRels:true}) yield node return node ',
{batchSize:1}
) 
YIELD batches, total, operations;
```
- The first statement will just return all the nodes with the label "Actor"
- The Second statement will iterate on the nodes and try to run <code>apoc.refactor.mergeNodes()</code> to merge 2 nodes to one node and then delete the other one

<strong>Doing this will result in creating a deadlock (and it will perform badly if at all)</strong>. The reason behind this is that the first statement will return a list of nodes but in the loop, the second statement is trying to update/delete them
# Solution
```
call apoc.periodic.iterate(
'MATCH (n:Actor) RETURN id(n) as id',
'MATCH (n) WHERE id(n) = id 
 Merge (new:Actor {name:toLower(n.name)})
    with new as newActor,n as Actor 
    CALL apoc.refactor.mergeNodes([newActor,Actor],{properties:"discard",mergeRels:true}) yield node return node ', {batchSize:1}) YIELD batches, total, operations;
```

This procedure will help you do the node merge and won't cause the deadlock. 
This time in the part of the first statement, instead of returning the nodes list directly, a list of <strong>nodes IDs</strong> is returned. This way, when the second statement is doing the <code>apoc.refactor.mergeNodes()</code> in the loop. It will use nodes ID (aka a reference or pointer) to fetch all the nodes which will not create any deadlock in the execution of the procedure.

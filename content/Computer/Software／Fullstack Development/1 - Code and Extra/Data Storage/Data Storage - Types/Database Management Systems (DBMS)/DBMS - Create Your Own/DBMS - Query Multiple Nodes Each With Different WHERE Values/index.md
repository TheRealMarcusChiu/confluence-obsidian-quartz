---
title: "DBMS - Query Multiple Nodes Each With Different WHERE Values"
created: 2022-10-01T17:24:08.819-05:00
modified: 2022-10-01T17:36:08.191-05:00
parent: "[[DBMS - Create Your Own]]"
children: []
---
# Problem Statement

Given a [[Neo4j|Neo4j DB]] with thousands of nodes:
- <code><font style="color: rgb(122,134,154);">MERGE (n1:Node {id:1});</font></code>
- <code><font style="color: rgb(122,134,154);">MERGE (n2:Node {id:2, first:"John", last:"Doe"});</font></code>
- <code><font style="color: rgb(122,134,154);">etc</font></code>

I want to construct a SCALABLE query that returns nodes if any 1 of the following conditions applies:
- <code><font style="color: rgb(122,134,154);">(node.id = 12) OR (node.first = "Turkey" AND node.last = "Legs")</font></code>
- <code><font style="color: rgb(122,134,154);">(node.id = 12) OR (node.first = "John" AND node.last = "Doe")</font></code>
- <code><font style="color: rgb(122,134,154);">(node.id = 1) OR (node.first = "Jiggly" AND node.last = "Puff")</font></code>
- <code><font style="color: rgb(122,134,154);">thousands more</font></code>

I have come up with the following query but it threw an out-of-memory error when the number of conditions reached 10,000
```
WITH [
   {id: 12, first: "Turkey", last: "Legs"},
   {id: 12, first: "John", last: "Doe"},
   {id: 1, first: "Jiggly", last: "Puff"}
   // thousands more
] AS conditions
UNWIND conditions AS condition
MATCH (n:Node) WHERE node.id = condition.id) AND (n.first = condition.first AND n.last = condition.last)
RETURN collect(DISTINCT n)
```

Just in case you are wondering, I have added indices and composite indices where needed
# 10,000,000 Nodes is Queriable with Java Implementation
```java
public class Main {

    public static void main(String[] args) {
        int numNodesInDB = 10_000_000;
        int numNodesToRetrieve = 10_000_000;
        int nodeIdRange = 1_000_000_000;
        int nodeFirstLength = 10;

        // Create in-memory DB
        System.out.println("Creating In-Memory DB");
        List<Node> db = new ArrayList<>();
        for (int i = 0; i < numNodesInDB; i++) {
            Node n = new Node();
            n.id = ThreadLocalRandom.current().nextInt(1, nodeIdRange);
            n.first = generateRandomString(nodeFirstLength);
            db.add(n);
        }
        // Create in-memory DB indices
        System.out.println("Creating In-Memory DB Indices");
        Map<Integer, Node> dbIndexNodeId = db.stream().collect(Collectors.toMap(n -> n.id, n -> n, (n1, n2) -> n1));
        Map<String, Node> dbIndexNodeFirst = db.stream().collect(Collectors.toMap(n -> n.first, n -> n, (n1, n2) -> n1));

        // Create Nodes to Query
        System.out.println("Creating Query");
        List<Node> queryWhereConditions = new ArrayList<>();
        for (int i = 0; i < numNodesToRetrieve; i++) {
            Node n = new Node();
            n.id = ThreadLocalRandom.current().nextInt(1, nodeIdRange);
            n.first = generateRandomString(nodeFirstLength);
            queryWhereConditions.add(n);
        }

        // Execute Query
        System.out.println("Executing Query");
        Long start = System.currentTimeMillis();
        List<Node> results = new ArrayList<>();
        for (Node condition : queryWhereConditions) {
            Node n = dbIndexNodeId.get(condition.id);
            if (n == null) {
                n = dbIndexNodeFirst.get(condition.first);
            }
            results.add(n);
        }
        Long end = System.currentTimeMillis();
        System.out.println("Query Execution Time: " + (end - start) + "ms");
        System.out.println("Num Non-Null Results: " + results.stream().filter(Objects::nonNull).count());
    }

    static Random random = new Random();

    static String generateRandomString(int length) {
        byte[] array = new byte[length];
        random.nextBytes(array);
        return new String(array, StandardCharsets.UTF_8);
    }

    public static class Node {
        public Integer id;
        public String first;
    }
}
```

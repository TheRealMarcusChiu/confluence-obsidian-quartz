---
title: "Java - Spring - Repository (With and Without @Transactional)"
created: 2021-04-12T19:26:30.543-05:00
modified: 2021-07-26T20:03:48.170-05:00
parent: "[[Java - Spring Data - Spring Data Repository]]"
children: []
---
see: [[Java - Spring - @EnableTransactionManagement & @Transactional]]
```
import org.springframework.data.neo4j.repository.Neo4jRepository;

@Repository
public interface CustomRepository extends Neo4jRepository<Custom, ID> {}
```
# 1 - Without Transactions
```
@Component
public class Test {

	@Autowired
	CustomRepository customRepository;

	public void test() {
		customRepository.save(new Custom());
		customRepository.save(new Custom());
		customRepository.save(new Custom());
	}
}
```

upon Test.test() the following sequence is as follows:

```merge-table
{
  "rows": [
    [
      {
        "content": "line 8",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Neo4jTransactionManager - create new transaction with name \\[SimpleNeo4jRepository.save\\]: PROPAGATION\\_REQUIRED,ISOLATION\\_DEFAULT\n\n- Neo4jTransactionManager - open new Session \\[<font style=\"color: rgb(255,102,0);\">Neo4jSession@7d512af8</font>\\]\n- Neo4jTransactionManager - beginning transaction \\[<font style=\"color: rgb(0,128,0);\">BoltTransaction@77a94188</font>\\] on Session \\[<font style=\"color: rgb(255,102,0);\">Neo4jSession@7d512af8</font>\\]\n- BoltRequest : request: \\${CYPHER QUERY}\n- Neo4jTransactionManager - committing transaction \\[<font style=\"color: rgb(0,128,0);\">BoltTransaction@77a94188</font>\\] on Session \\[<font style=\"color: rgb(255,102,0);\">Neo4jSession@7d512af8</font>\\]\n- Neo4jTransactionManager - close Session \\[<font style=\"color: rgb(255,102,0);\">Neo4jSession@7d512af8</font>\\]"
    ],
    [
      {
        "content": "line 9",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Neo4jTransactionManager - create new transaction with name \\[SimpleNeo4jRepository.save\\]: PROPAGATION\\_REQUIRED,ISOLATION\\_DEFAULT\n\n- Neo4jTransactionManager - open new Session \\[<font style=\"color: rgb(255,153,0);\">Neo4jSession@5d08fc83</font>\\]\n- Neo4jTransactionManager - beginning transaction \\[<font style=\"color: rgb(153,204,0);\">BoltTransaction@254f6c02</font>\\] on Session \\[<font style=\"color: rgb(255,153,0);\">Neo4jSession@5d08fc83</font>\\]\n- BoltRequest : request: \\${CYPHER QUERY}\n- Neo4jTransactionManager - committing transaction \\[<font style=\"color: rgb(153,204,0);\">BoltTransaction@254f6c02</font>\\] on Session \\[<font style=\"color: rgb(255,153,0);\">Neo4jSession@5d08fc83</font>\\]\n- Neo4jTransactionManager - close Session \\[<font style=\"color: rgb(255,153,0);\">Neo4jSession@5d08fc83</font>\\]"
    ],
    [
      {
        "content": "line 10",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Neo4jTransactionManager - create new transaction with name \\[SimpleNeo4jRepository.save\\]: PROPAGATION\\_REQUIRED,ISOLATION\\_DEFAULT\n\n- Neo4jTransactionManager - open new Session \\[<font style=\"color: rgb(255,204,0);\">Neo4jSession@d8fe89e</font>\\]\n- Neo4jTransactionManager - beginning transaction \\[<font style=\"color: rgb(0,255,0);\">BoltTransaction@59487f51</font>\\] on Session \\[<font style=\"color: rgb(255,204,0);\">Neo4jSession@d8fe89e</font>\\]\n- BoltRequest : request: \\${CYPHER QUERY}\n- Neo4jTransactionManager - committing transaction \\[<font style=\"color: rgb(0,255,0);\">BoltTransaction@59487f51</font>\\] on Session \\[<font style=\"color: rgb(255,204,0);\">Neo4jSession@d8fe89e</font>\\]\n- Neo4jTransactionManager - close Session \\[<font style=\"color: rgb(255,204,0);\">Neo4jSession@d8fe89e</font>\\]"
    ]
  ]
}
```
# 2 - With Transaction
```
@Component
@EnableTransactionManagement
public class Test {

	@Autowired
	CustomRepository customRepository;

	@Transactional
	public void test() {
		customRepository.save(new Custom());
		customRepository.save(new Custom());
		customRepository.save(new Custom());
	}
}
```

upon Test.test() the following sequence is as follows:

```merge-table
{
  "rows": [
    [
      {
        "content": "before test()",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Neo4jTransactionManager : create new transaction with name \\[\\${name of annotated method}\\]: PROPAGATION\\_REQUIRED,ISOLATION\\_DEFAULT\n\n- Neo4jTransactionManager : open new session \\[<font style=\"color: rgb(255,102,0);\">Neo4jSession@436a0a81</font>\\]\n- Neo4jTransactionManager : begin transaction \\[<font style=\"color: rgb(0,128,0);\">BoltTransaction@499261f1</font>\\] on session \\[<font style=\"color: rgb(255,102,0);\">Neo4jSession@436a0a81</font>\\]"
    ],
    [
      {
        "content": "Line 10",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Neo4jTransactionManager : found thread-bound session \\[<font style=\"color: rgb(255,102,0);\">Neo4jSession@436a0a81</font>\\]\n- Neo4jTransactionManager : participate in existing transaction \\[<font style=\"color: rgb(0,128,0);\">BoltTransaction@499261f1</font>\\]\n- BoltRequest : request: \\${CYPHER QUERY}"
    ],
    [
      {
        "content": "Line 11",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Neo4jTransactionManager : found thread-bound Session \\[<font style=\"color: rgb(255,102,0);\">Neo4jSession@436a0a81</font>\\]\n- Neo4jTransactionManager : participate in existing transaction \\[<font style=\"color: rgb(0,128,0);\">BoltTransaction@499261f1</font>\\]\n- BoltRequest : request: \\${CYPHER QUERY}"
    ],
    [
      {
        "content": "Line 12",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Neo4jTransactionManager : found thread-bound Session \\[<font style=\"color: rgb(255,102,0);\">Neo4jSession@436a0a81</font>\\]\n- Neo4jTransactionManager : participate in existing transaction \\[<font style=\"color: rgb(0,128,0);\">BoltTransaction@499261f1</font>\\]\n- BoltRequest : request: \\${CYPHER QUERY}"
    ],
    [
      {
        "content": "after test()",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Neo4jTransactionManager : commit transaction \\[<font style=\"color: rgb(0,128,0);\">BoltTransaction@499261f1</font>\\] on session \\[<font style=\"color: rgb(255,102,0);\">Neo4jSession@436a0a81</font>\\]\n- Neo4jTransactionManager : close session \\[<font style=\"color: rgb(255,102,0);\">Neo4jSession@436a0a81</font>\\]"
    ]
  ]
}
```

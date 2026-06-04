---
title: "Two-Phase Commit Protocol"
created: 2019-03-15T00:27:11.331-05:00
modified: 2026-04-23T11:41:03.780-05:00
parent: "[[Distributed - Consensus Agreement Problem (CAP)]]"
children: []
---
[http://courses.cs.vt.edu/~cs5204/fall00/distributedDBMS/duckett/tpcp.html](http://courses.cs.vt.edu/~cs5204/fall00/distributedDBMS/duckett/tpcp.html)
# Overview

The two phase commit protocol is a [[Distributed - Algorithms／Computing／Programming／Systems|distributed algorithm]] which lets all sites in a distributed system agree to commit a transaction. The protocol results in either all nodes committing the transaction or aborting, even in the case of site failures and message losses. However, due to the work by Skeen and Stonebraker, the protocol will not handle more than one random site failure at a time. The two phases of the algorithm are broken into the COMMIT-REQUEST phase, where the COORDINATOR attempts to prepare all the COHORTS, and the COMMIT phase, where the COORDINATOR completes the transactions at all COHORTS.
# Assumptions

The protocol works in the following manner: One node is designated the coordinator, which is the master site, and the rest of the nodes in the network are called cohorts. Other assumptions of the protocol include stable storage at each site and use of a write ahead log by each node. Also, the protocol assumes that no node crashes forever, and eventually any two nodes can communicate with each other. The latter is not a big deal since network communication can typically be rerouted. The former is a much stronger assumption; suppose the machine blows up!
# Basic Algorithm

During phase 1, initially the coordinator sends a query to commit message to all cohorts. Then it waits for all cohorts to report back with the agreement message. The cohorts, if the transaction was successful, write an entry to the undo log and an entry to the redo log. Then the cohorts reply with an agree message, or an abort if the transaction failed at a cohort node. During phase 2, if the coordinator receives an agree message from all cohorts, then it writes a commit record into its log and sends a commit message to all the cohorts. If all agreement messages do not come back the coordinator sends an abort message. Next the coordinator waits for the acknowledgement from the cohorts. When acks are received from all cohorts the coordinator writes a complete record to its log. Note the coordinator will wait forever for all the acknowledgements to come back. If the cohort receives a commit message, it releases all the locks and resources held during the transaction and sends an acknowledgement to the coordinator. If the message is abort, then the cohort undoes the transaction with the undo log and releases the resources and locks held during the transaction. Then it sends an acknowledgement.
# Disadvantages

The greatest disadvantage of the two phase commit protocol is the fact that it is a blocking protocol. A node will block while it is waiting for a message. This means that other processes competing for resource locks held by the blocked processes will have to wait for the locks to be released. A single node will continue to wait even if all other sites have failed. If the coordinator fails permanently, some cohorts will never resolve their transactions. This has the effect that resources are tied up forever. Another disadvantage is the protocol is conservative. It is biased to the abort case rather than the complete case.
- [[CAP Theorem (Consistency - Availability - Partition Tolerance)|CAP Theorem]]
- Not supported by many NoSQL DB
- is a blocking protocol
- is conservative/biased to abort rather than complete case

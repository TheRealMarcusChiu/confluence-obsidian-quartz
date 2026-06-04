---
title: "Distributed - Agreement Problems"
created: 2019-07-24T14:48:21.999-05:00
modified: 2026-04-23T12:05:54.778-05:00
parent: "[[Distributed - Algorithms／Computing／Programming／Systems]]"
children:
  - "[[Distributed - Consensus Agreement Problem (CAP)]]"
---
# <strong>Agreement Problem Categories</strong>
In all three agreement problems, one or more processes propose a value and all correct (or non-faulty) processes must agree on either a value or a vector of values. An agreement protocol is typically described in terms of two primitives, namely propose( ), and decide( ). To avoid confusion, we will use v to represent the value proposed and u to represent the value decided. Also, let n denotes the number of processes.

```merge-table
{
  "rows": [
    [
      {
        "content": "Agreement Problem Category",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Byzantine Agreement Problem (BAP)",
        "bg": "#F4F5F7"
      },
      "In BAP, there is a distinguished process called the source-process. Only the source-process can propose a value and it does so by calling BA\\_propose(v<sub>s</sub>). A non-source-process does not propose a value and simply calls BA\\_propose(). A process decides on a value by calling BA\\_decide(). Specifically, process P<sub>i</sub> decides on a value u<sub>i</sub>by invoking BA\\_decide().\n\nA protocol that solves the BAP must satisfy the following properties:\n- TERMINATION - all non-faulty processes eventually decide\n- AGREEMENT - all non-faulty processes decide on the same value\n- VALIDITY - if the source process is non-faulty, then all non-faulty processes decide on the value proposed by the source process"
    ],
    [
      {
        "content": "[[Distributed - Consensus Agreement Problem (CAP)|Consensus Agreement Problem (CAP)]]",
        "bg": "#F4F5F7"
      },
      "In CAP, all processes propose a value. Specifically, process P<sub>i</sub>proposes value v<sub>i</sub> by executing Cons\\_propose(v<sub>i</sub>) and decides on a value u<sub>i</sub>by calling Cons\\_decide().\n\nA protocol that solves the CAP must satisfy the following properties:\n- TERMINATION - all non-faulty processes eventually decide\n- AGREEMENT - all non-faulty processes decide on the same value\n- VALIDITY -  if all non-faulty processes propose the same value, then all of them decide on the value proposed"
    ],
    [
      {
        "content": "Interactive Consistency Agreement Problem (ICAP)",
        "bg": "#F4F5F7"
      },
      "In ICAP, all processes propose a value. Specifically, process P<sub>i</sub>proposes value v<sub>i</sub>by executing IC\\_propose(v<sub>i</sub>), and, unlike in the other two problems, decides on a vector of values ⟨u<sub>i1</sub>, u<sub>i2</sub>, ..., u<sub>in</sub>⟩, instead of a single value, by calling IC\\_decide()\n\nA protocol that solves the ICAP must satisfy the following properties:\n- TERMINATION - all non-faulty processes eventually decide\n- AGREEMENT - all non-faulty processes decide on the same vector\n- VALIDITY - if P<sub>i</sub>is non-faulty, then the i<sup>th</sup>entry in the vector of all non-faulty processes is v<sub>i</sub>"
    ]
  ]
}
```
# <strong>Impossibility of Solving Agreement Problems in General</strong>

Fischer, Lynch and Paterson in their seminal paper proved that solving an agreement problem in a completely <strong>asynchronous</strong> system is impossible even if at most one process can fail by crashing
### under what assumption can we solve the agreement problem?
It turns out that the agreement problem can be solved if we assume that the system is <strong>synchronous</strong>, that is, processes run in lock step manner. A step of a synchronous system is referred to as a round. In every round, each process can:
1. send message to one or more processes
2. receive the messages sent to it by other processes in that round
3. perform some local computation

We can now prove that, in a synchronous distributed system, all 3 agreement problems are equivalent
# <strong>Equivalence of the Agreement Problems when the System is Synchronous</strong>

BAP = CAP = ICAP are all really the same problem, if you solve one of the problem that solution would also solve the other two problem
### Solving ICAP Using BAP

Interactive Consistency Protocol for process Pi
```
IC_propose(vi) {
  // start n instances of the byzantine // agreement protocol 
  // Pi is the source process for // the ith instance 

  for each j in [1,n] do if (i = j) then 
    BA propose(i, vi); else 
    BA propose(j); endif; 
  endfor; 
}
```
```
IC_decide() {
  // jth entry of the vector is the value
  // decided by the jth instance of the
  // byzantine agreement protocol
  for each j in [1,n] do
    uij := BA decide(j);
  endfor;
  return ⟨ui1, ui2, ..., uin⟩;
}

```

To prove the correctness of the protocol, we need to prove that the protocol satisfies the three required properties.
- TERMINATION - It follows from the fact that each instance of byzantine agreement protocol will eventually terminate.
- AGREEMENT - Each non-faulty process obtains the j<sup>th</sup>entry of its vector using the j<sup>th</sup>instance of the byzantine agreement protocol. Thus, from the agreement property of the byzantine agreement protocol, it follows that, for each j, the j<sup>th</sup>entry of the vector will be identical for all non-faulty processes.
- VALIDITY - Clearly, if process P<sub>j</sub> is non-faulty, the j<sup>th</sup>instance of the byzantine agreement protocol will decide on v<sub>j</sub>—the value proposed by P<sub>j</sub>

### Solving CAP Using ICAP

Consensus Protocol for process Pi:
```
Cons_propose(vi) {
  IC propose(vi);
}

```
```
Cons_decide() {
  ⟨ui1, ui2, . . . , uin⟩ := IC decide( );
  // return the value that occurs in
  // (absolute) majority
  // if there is no absolute majority,
  // then return the default value
  return majority{ui1, ui2, ..., uin};
}
```

now prove the correctness of the consensus protocol.
- TERMINATION: It follows from the fact that the interactive consistency protocol will eventually terminate.
- AGREEMENT: Clearly, all non-faulty processes agree on all entries of their vectors. Therefore, the majority function will evaluate to the same value for all non-faulty processes.
- VALIDITY: The validity property of the interactive consistency protocol guarantees that if process P<sub>i</sub> is non-faulty, then all non-faulty processes will decide on v<sub>i</sub>as the i<sub>th</sub>component of their respective vectors. Now, suppose all non-faulty processes propose the same value, say v. Since a majority of processes are non-faulty, a majority of entries in the vector for all non-faulty processes will be v. Therefore, all non-faulty processes, in the consensus protocol, a majority of entries in the vector will be v

### Solving BAP Using CAP

Byzantine Agreement Protocol:
```
// propose primitive for the source-process Ps
BA_propose(vs) {
  broadcast vs to all processes;
  Cons_propose(vs);
}

// propose primitive for non-source-process Pi, i != s
BA_propose() {
  let vi be the value received from process Ps;
  // if no message is received, then set vi to
  // a default value
  Cons_propose(vi);
}
```
```
// decide primitive for process Pi
// (Pi could be Ps)

BA_decide() {
  ui := Cons decide( );
  return ui;
} 

```
### Solving BAP using ICAP

Byzantine Agreement Protocol:
```

```
```

```
### Solving ICAP using CAP
```

```
```

```
### Solving CAP using BAP
```

```
```

```

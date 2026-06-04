---
title: "Deadlocks - Livelocks"
created: 2019-07-18T00:05:40.453-05:00
modified: 2019-12-17T17:16:28.460-06:00
parent: "[[Computer Terms]]"
children: []
---
A <strong>deadlock</strong> situation on a resource can arise if and only if all of the following conditions hold simultaneously in a system:
1. <em><strong>mutual exclusion</strong>:</em> At least one resource must be held in a non-shareable mode. Otherwise, the processes would not be prevented from using the resource when necessary. Only one process can use the resource at any given instant of time.
2. <strong><em>hold and wait</em></strong> or <em><strong>resource holding</strong>:</em> a process is currently holding at least one resource and requesting additional resources which are being held by other processes.
3. <em><strong>no preemption</strong>:</em> a resource can be released only voluntarily by the process holding it.
4. <em><strong>circular wait</strong>:</em> each process must be waiting for a resource which is being held by another process, which in turn is waiting for the first process to release the resource. In general, there is a set of waiting processes, <em>P</em> = {<em>P</em><sub>1</sub>, <em>P</em><sub>2</sub>, …, <em>P</em><sub><em>N</em></sub>}, such that <em>P</em><sub>1</sub> is waiting for a resource held by <em>P</em><sub>2</sub>, <em>P</em><sub>2</sub> is waiting for a resource held by <em>P</em><sub>3</sub> and so on until <em>P</em><sub><em>N</em></sub> is waiting for a resource held by <em>P</em><sub>1</sub>

---
title: "UNIX - Process Priority Level (PR) - Nice Value (NI)"
created: 2021-09-02T19:23:14.987-05:00
modified: 2021-09-02T19:50:14.119-05:00
parent: "[[UNIX - Process]]"
children: []
---
PR is the priority level (range -100 to 39). The lower the PR, the higher the priority of the process will be.

PR is calculated as follows:
- for normal processes: PR = 20 + NI (NI is nice and ranges from -20 to 19)
- for real time processes: PR = - 1 - real\_time\_priority (real\_time\_priority ranges from 1 to 99)

# <strong>Nice</strong>

The "niceness" scale goes from -20 to 19, whereas -20 it's the highest priority and 19 the lowest priority. The priority level is calculated as follows:

<strong>PR = 20 + NI</strong>

Where NI is the nice level and PR is the priority level. So as we can see, the -20 actually maps to 0, while the 19 maps to 39.

By default, a program nice value is 0 bit it is possible for a root user to lunch programs with a specified nice value by using the following command:
```
nice -n <nice_value> ./myProgram
```
# <strong>Real Time</strong>

We could go even further. The nice priority is actually used for user programs. Whereas the UNIX/LINUX overall priority has a range of 140 values, nice value enables the process to map to the last part of the range (from 100 to 139). This equation leaves the values from 0 to 99 unreachable which will correspond to a negative PR level (from -100 to -1). To be able to access to those values, the process should be stated as "real time".

There are 5 scheduling policies in a LINUX environment that can be displayed with the following command:
```
chrt -m
```

Which will show the following list:
1. <strong><code>SCHED\_OTHER</code></strong> the standard round-robin time-sharing policy
2. <strong><code>SCHED\_BATCH</code></strong> for "batch" style execution of processes
3. <strong><code>SCHED\_IDLE</code></strong> for running very low priority background jobs.
4. <strong><code>SCHED\_FIFO</code></strong> a first-in, first-out policy
5. <strong><code>SCHED\_RR</code></strong> a round-robin policy

The scheduling processes could be divided into 2 groups, the normal scheduling policies (1 to 3) and the real time scheduling policies (4 and 5). The real time processes will always have priority over normal processes. A real time process could be called using the following command (The example is how to declare a SCHED\_RR policy):
```
chrt --rr <priority between 1-99> ./myProgram
```

To obtain the PR value for a real time process the following equation is applied:

<strong>PR = -1 - rt\_prior</strong>

Where rt\_prior corresponds to the priority between 1 and 99. For that reason the process which will have the higher priority over other processes will be the one called with the number 99.

It is important to note that for real time processes, the nice value is not used.

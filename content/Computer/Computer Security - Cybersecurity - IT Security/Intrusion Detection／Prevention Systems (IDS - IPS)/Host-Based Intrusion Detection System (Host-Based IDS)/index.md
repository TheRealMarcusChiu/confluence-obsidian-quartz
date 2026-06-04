---
title: "Host-Based Intrusion Detection System (Host-Based IDS)"
created: 2019-11-11T14:26:56.642-06:00
modified: 2019-11-11T14:27:39.906-06:00
parent: "[[Intrusion Detection／Prevention Systems (IDS - IPS)]]"
children: []
---
Specialized software to monitor system activity to detect suspicious behavior
- primary purpose is to detect intrusions, log suspicious events, and send alerts
- can detect both external and internal intrusions

2 approaches, often used in combination:
- <strong>anomaly detection</strong> - defines normal/expected behavior
	- threshold detection
	- profile based
- <strong>signature detection</strong> - defines proper use and attack patterns to look for detection

### Audit Records

A fundamental tool for intrusion detection

2 variants:
- native audit records - provided by O/S
	- always available but may not be optimum
- detection-specific audit records - IDS specific
	- Additional overhead but specific to IDS task
	- Often log individual elementary actions
	- e.g. may contain fields for: subject, action, object, exception-condition, resource-usage, time-stamp

### Anomaly Detection

Threshold detection
- checks excessive event occurrences over time
- alone a crude and ineffective intruder detector
- must determine both thresholds and time intervals

Profile based
- characterize past behavior of users / groups
- then detect significant deviations
- based on analysis of audit records
	- gather metrics: counter, gauge, interval timer, resource utilization
	- analyze: mean and standard deviation, multivariate, Markov process, time series, operational model

### Signature Detection

Observe events on system and apply a set of rules to
decide if intruder

Approaches:
- rule-based anomaly detection
	- analyze historical audit records for expected behavior, then match with current behavior
- rule-based penetration identification
	- rules identify known penetrations/weaknesses
	- often by analyzing attack scripts from Internet
	- supplemented with rules from security experts

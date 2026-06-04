---
title: "Prometheus"
created: 2021-09-27T01:42:12.396-05:00
modified: 2025-02-02T23:01:36.688-06:00
parent: "[[Logs／Logging & Monitoring & Metrics & Traces／Tracing & Analytics - Service／Servers／Frameworks]]"
children:
  - "[[PromQL]]"
  - "[[Prometheus Operator]]"
---
###### Prometheus
````excerpt
- is an open-source, [[Logs／Logging & Monitoring & Metrics & Traces／Tracing & Analytics - Service／Servers／Frameworks|monitoring and alerting framework]]
- it “pulls” [[6 - Logs／Logging & Monitoring & Metrics & Traces／Tracing & Analytics|metrics]] (measurements) from microservices by sending HTTP requests and stores the results in a time-series database
````
^excerpt

# Prometheus - Components
- provides client libraries to instrument services. This will enable you to create and collect custom metrics from your services
- has exporters that let you pull metrics that are not in Prometheus format. An exporter acts as a middleman and transforms exported data into Prometheus readable format
- provides a powerful [[Computer Languages - Database／CRUD／Query／Search Languages|query language]], [[PromQL]], to work with this collected data
- has a GUI that lets you visualize the collected metrics easily. It also integrates with other advanced visualization tools like Grafana

![[Prometheus/prometheus.png|600]]
# Prometheus - Metric Types

Prometheus offers four core metric types:
- <strong>counter</strong> - represents a single monotonically increasing counter. Its value can increase or reset to zero on restart. You can use it to represent metrics like the number of requests served.
- <strong>gauge</strong> - represents a numerical value that can go up or down. You can use it to represent values like memory usage or the number of requests per second.
- <strong>histogram</strong> - samples data into configurable buckets. Use it to represent values like request durations or response sizes.
- <strong>summary</strong> - similar to a [[Histogram|histogram]], it also calculates configurable values over a sliding time window

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

---
title: "Message Queuing Telemetry Transport (MQTT)"
created: 2026-01-10T02:21:57.223-06:00
modified: 2026-01-10T02:23:58.126-06:00
parent: "[[7 - Application Layer]]"
children: []
---
###### Message Queuing Telemetry Transport (MQTT)
````excerpt
- is a lightweight publish/subscribe messaging protocol designed for low-bandwidth, high-latency, or unreliable networks
- most commonly used in IoT systems
````
^excerpt

# MQTT - Details
- Very small header (as little as 2 bytes)
- Runs over [[Transmission Control Protocol (TCP)|TCP]] or [[WebSockets]]:
	- Default port: 1883
	- TLS: 8883

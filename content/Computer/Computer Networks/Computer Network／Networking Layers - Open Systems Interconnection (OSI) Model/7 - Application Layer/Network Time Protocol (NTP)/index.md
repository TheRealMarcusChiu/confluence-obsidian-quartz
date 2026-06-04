---
title: "Network Time Protocol (NTP)"
created: 2025-05-18T18:43:28.943-05:00
modified: 2025-08-12T14:05:56.952-05:00
parent: "[[7 - Application Layer]]"
children:
  - "[[Network Time Protocol (NTP) Server]]"
---
###### Network Time Protocol (NTP)
````excerpt
- is used to synchronize computer clocks over a network
````
^excerpt

# NTP - Introduction

A computer that needs to synchronize its time will use the Network Time Protocol (NTP), which relies on [[Universal／User Datagram Protocol (UDP)|UDP]] port 123 for communication. The computer (NTP client) sends a time-request packet to the NTP server, which then responds with its current time and timestamps of its own. The client uses these timestamps and [Marzullo's algorithm](https://en.wikipedia.org/wiki/Marzullo%27s_algorithm) (or a variant) to calculate network delay and clock offset, then adjusts its local clock to match the server's time.
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

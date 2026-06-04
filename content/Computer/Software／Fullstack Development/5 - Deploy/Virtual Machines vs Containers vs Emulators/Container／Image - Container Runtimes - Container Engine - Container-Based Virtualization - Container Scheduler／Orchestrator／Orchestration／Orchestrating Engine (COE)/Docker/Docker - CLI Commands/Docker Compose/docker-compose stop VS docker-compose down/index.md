---
title: "docker-compose stop VS docker-compose down"
created: 2025-05-20T12:35:07.230-05:00
modified: 2025-05-20T12:36:32.378-05:00
parent: "[[Docker Compose]]"
children: []
---
The main difference between <code><font style="color: rgb(122,134,154);">docker-compose stop</font></code> and <code><font style="color: rgb(122,134,154);">docker-compose down</font></code> lies in their actions: <code>stop</code> stops running containers, while <code>down</code> stops containers and removes them, along with associated networks and optionally volumes. <code><font style="color: rgb(122,134,154);">docker-compose down</font></code> is used for a full clean-up, while <code><font style="color: rgb(122,134,154);">docker-compose stop</font></code> is for temporary pauses.
- <code><font style="color: rgb(122,134,154);">docker-compose stop</font></code>: stops running containers, Does not remove containers, and Containers can be restarted with docker-compose start.
- <code><font style="color: rgb(122,134,154);">docker-compose down</font></code>: stops running containers, Removes stopped containers, Removes associated networks, Optionally removes volumes with the -v or --volumes flag, and Used for completely clearing resources

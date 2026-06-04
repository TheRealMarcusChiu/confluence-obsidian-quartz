---
title: "Kotaemon"
created: 2025-05-30T10:54:08.447-05:00
modified: 2025-05-30T10:58:24.897-05:00
parent: "[[Large Language Models (LLMs)]]"
children: []
---
###### Kotaemon
````excerpt
- an open-source RAG-based tool for chatting with your documents
````
^excerpt

# Installation
```
docker run \
-d \
--restart=always \
-e GRADIO_SERVER_NAME=0.0.0.0 \
-e GRADIO_SERVER_PORT=7860 \
-v ./ktem_app_data:/app/ktem_app_data \
-p 80:7860 -it \
ghcr.io/cinnamon/kotaemon:main-ollama
```

Open in browser [http://localhost:80/](http://localhost:80/)
# Error

If you are running this within [[Proxmox Virtual Environment (PVE)|proxmox]] and receive the following error
```
Illegal instruction (core dumped)
```

Change the guest CPU type to <code><font style="color: rgb(122,134,154);">x86-64-v3</font></code> or higher.
# Resources
- [https://github.com/Cinnamon/kotaemon](https://github.com/Cinnamon/kotaemon)

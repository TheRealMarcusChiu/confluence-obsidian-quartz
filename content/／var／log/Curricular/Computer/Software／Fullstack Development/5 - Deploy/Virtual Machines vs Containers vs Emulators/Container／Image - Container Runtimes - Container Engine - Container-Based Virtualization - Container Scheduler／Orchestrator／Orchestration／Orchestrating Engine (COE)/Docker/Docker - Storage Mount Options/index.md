---
title: "Docker - Storage Mount Options"
created: 2025-02-21T12:27:49.600-06:00
modified: 2025-02-21T12:55:44.012-06:00
parent: "[[Docker]]"
children:
  - "[[Docker - Volume Mounts]]"
---
```merge-table
{
  "rows": [
    [
      {
        "content": "[[Docker - Volume Mounts|Volume Mounts]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- persistent storage mechanisms managed by the Docker daemon\n- retain data even after containers using them are removed\n- volume data is stored on the [[Disk (Format - Filesystems／File-Systems (FS))|filesystem]] on the host\n- only accessible from within container, not from host"
    ],
    [
      {
        "content": "Bind Mounts",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- create a direct link between a host system path and a container\n- accessible from both container and host"
    ],
    [
      {
        "content": "tmpfs Mounts",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- stores files directly in the host's [[Primary／Main／Physical Computer Memory／Storage|primary memory]] (not written to [[Secondary／Virtual Memory (Drive)|disk]])\n- storage is non-persistent\n- used for caching, handling sensitive information, or reducing disk I/O"
    ],
    [
      {
        "content": "Named Pipes",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- used for communication between the Docker host and a container\n- common use case is to run a third-party tool inside of a container and connect to the Docker Engine API using a named pipe"
    ]
  ]
}
```

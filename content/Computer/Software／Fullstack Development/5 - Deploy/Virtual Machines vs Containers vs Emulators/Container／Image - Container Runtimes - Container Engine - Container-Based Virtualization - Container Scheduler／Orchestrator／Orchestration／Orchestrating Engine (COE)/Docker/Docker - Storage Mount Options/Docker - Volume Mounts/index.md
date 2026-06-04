---
title: "Docker - Volume Mounts"
created: 2025-02-21T12:38:00.258-06:00
modified: 2025-02-21T13:08:35.546-06:00
parent: "[[Docker - Storage Mount Options]]"
children: []
---
# Syntax

To mount a volume with the <code><font style="color: rgb(122,134,154);">docker run</font></code> command, use either the following
```
❯ docker run --mount type=volume,src=<volume-name>,dst=<mount-path>
❯ docker run --volume <volume-name>:<mount-path>
```
# Create and Manage Volumes

Create a volume
```
❯ docker volume create my-volume
my-volume
```

List all volumes
```
❯ docker volume ls
DRIVER    VOLUME NAME
local     my-volume
```

Inspect a volume
```
❯ docker volume inspect my-volume
[
    {
        "CreatedAt": "2025-02-21T18:47:35Z",
        "Driver": "local",
        "Labels": null,
        "Mountpoint": "/var/lib/docker/volumes/my-volume/_data",
        "Name": "my-volume",
        "Options": null,
        "Scope": "local"
    }
]
```

Remove a volume
```
❯ docker volume rm my-volume
my-volume
```
# Start a Container With a Specific Volume

The following starts a container and mounts the volume <code><font style="color: rgb(122,134,154);">my-volume</font></code> into <code><font style="color: rgb(122,134,154);">/app/</font></code> in the container. (If the volume doesn't exist, then Docker will create it)
```
❯ docker run -d \
  --name dev-test-container \
  --mount source=my-volume,target=/app \
  nginx:latest
```
# Other
- [[Docker - Plugins - vieux／sshfs|vieux/sshfs]] - for create remote volume mounts

# Resources
- [https://docs.docker.com/engine/storage/volumes/](https://docs.docker.com/engine/storage/volumes/)

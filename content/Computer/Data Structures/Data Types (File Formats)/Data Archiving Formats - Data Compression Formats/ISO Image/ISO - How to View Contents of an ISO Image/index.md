---
title: "ISO - How to View Contents of an ISO Image"
created: 2023-02-19T16:03:31.610-06:00
modified: 2023-02-19T16:03:57.858-06:00
parent: "[[ISO Image]]"
children: []
---
# How to View Contents of an ISO Image
```bash
mkdir /home/marcuschiu/isomount
sudo mount -o loop -t iso9660 mycdrom.iso /home/marcuschiu/isomount
```

mount command options:
- <strong>-o</strong> - extra options
	- <strong>loop</strong> -
- <strong>-t</strong> - filesystem type
	- <strong>iso9660</strong> - tells mount that mycdrom.iso is an ISO image
- <strong>mycdrom.iso</strong> - is the ISO image
- <strong>/home/marcuschiu/isomount</strong> - tells mount where to mount the ISO image

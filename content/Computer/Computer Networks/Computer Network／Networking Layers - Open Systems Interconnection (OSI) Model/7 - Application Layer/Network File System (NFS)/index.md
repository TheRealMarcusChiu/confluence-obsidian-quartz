---
title: "Network File System (NFS)"
created: 2019-11-16T16:24:38.989-06:00
modified: 2025-07-17T01:38:58.512-05:00
parent: "[[7 - Application Layer]]"
children: []
---
###### Network File System (NFS)
````excerpt
- is an [[7 - Application Layer|application layer]] distributed [[Disk (Format - Filesystems／File-Systems (FS))|file system]] protocol originally developed by Sun Microsystems (Sun) in 1984, allowing a user on a client computer to access files over a computer network much like local storage is accessed (i.e. [[Network Attached Storage (NAS)]])
- related: [[Common Internet File System (CIFS)]]
````
^excerpt

# NFS - Server

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Debian]] & [[Ubuntu]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(122,134,154);\">sudo apt-get update</font></code>\n- <code><font style=\"color: rgb(122,134,154);\">sudo apt install nfs-kernel-server</font></code>"
    ],
    [
      {
        "content": "[[CentOS]] & [[Fedora]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(122,134,154);\">yum -y install nfs-utils</font></code>\n- <code><font style=\"color: rgb(122,134,154);\">apt-get install nfs-kernel-server</font></code>"
    ]
  ]
}
```

Create root NFS directory
```
sudo mkdir /home/marcuschiu/directory-to-be-shared
```

Set permissions
```
sudo chown nobody:nogroup /home/marcuschiu/directory-to-be-shared #no-one is owner
sudo chmod 777 /home/marcuschiu/directory-to-be-shared #everyone can modify files
```

Define access for NFS clients in <code><font style="color: rgb(122,134,154);">/etc/exports</font></code> file. Example file:

```merge-table
{
  "rows": [
    [
      {
        "content": "To enable access to a single client",
        "bg": "#F4F5F7"
      },
      "```\n/home/marcuschiu/directory-to-be-shared {clientIP}(rw,sync,no_subtree_check)\n```"
    ],
    [
      {
        "content": "To enable access to several clients",
        "bg": "#F4F5F7"
      },
      "```\n/home/marcuschiu/directory-to-be-shared {clientIP-1}(rw,sync,no_subtree_check) {clientIP-2}(...) {clientIP-3}(...)\n```"
    ],
    [
      {
        "content": "To enable access to an entire subnet",
        "bg": "#F4F5F7"
      },
      "```\n/home/marcuschiu/directory-to-be-shared {subnetIP}/{subnetMask}(rw,sync,no_subtree_check)\n```"
    ]
  ]
}
```

Example file <code><font style="color: rgb(122,134,154);">/etc/exports</font></code>:
```
/home/marcuschiu/directory-to-be-shared 192.168.111.38/255.255.255.0(rw,sync,no_subtree_check)
```

Set changes and restart NFS server
```
sudo exportfs -a #making the file share available
sudo systemctl restart nfs-kernel-server #restarting the NFS kernel
```
# NFS - Client

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Debian]] & [[Ubuntu]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(122,134,154);\">sudo apt-get update</font></code>\n- <code><font style=\"color: rgb(122,134,154);\">sudo apt install nfs-common</font></code>"
    ],
    [
      {
        "content": "[[CentOS]] & [[Fedora]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(122,134,154);\">sudo yum install nfs-utils</font></code>"
    ]
  ]
}
```

Mount the NFS directory temporarily
```
sudo mount -t nfs {IP of NFS server}:{folder path on server} /home/client
sudo mount -t nfs 192.168.111.10:/home/marcuschiu/directory-to-be-shared /home/client
```

Mount the NFS directory PERMANENTLY

In <code><font style="color: rgb(122,134,154);">/etc/fstab</font></code> file add the following line:
```
{IP of NFS server}:{folder path on server} /var/locally-mounted nfs defaults 0 0

# e.g.

192.168.111.10:/home/marcuschiu/directory-to-be-shared /home/client nfs defaults 0 0
```

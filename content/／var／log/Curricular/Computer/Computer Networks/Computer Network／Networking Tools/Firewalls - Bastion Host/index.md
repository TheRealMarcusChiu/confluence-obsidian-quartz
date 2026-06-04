---
title: "Firewalls - Bastion Host"
created: 2019-03-16T23:39:41.734-05:00
modified: 2023-02-18T23:18:56.545-06:00
parent: "[[Computer Network／Networking Tools]]"
children:
  - "[[iptables]]"
  - "[[ufw (Uncomplicated FireWall)]]"
---
###### Firewall
- is a collection of components between two networks that filter cross traffic based on some security policy

# Types of Firewalls

```merge-table
{
  "rows": [
    [
      {
        "content": "Packet Filtering Firewalls",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- stateless firewalls - static rules/filters to determine which packets are allowed to cross the inspection point\n- stateful inspection firewalls - Inspects packets in the context of their role in an incipient or ongoing conversation (e.g. [[Transmission Control Protocol (TCP)|TCP]] connection)\n\t- maintain a table for allowed connections. By default, allow connections originated from internal hosts & deny connections originated from external hosts"
    ],
    [
      {
        "content": "Application Level Firewalls",
        "header": true,
        "bg": "#F4F5F7"
      },
      "e.g. proxy server"
    ],
    [
      {
        "content": "Circuit Level Firewalls",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- sets up two connections (i.e. one with inner host, one with outside host)"
    ]
  ]
}
```

another classification of firewall types:
- screening router firewalls
- computer-based firewalls
- firewall appliances
- host firewalls - on clients and servers

# Bastion Host

a <strong>bastion host</strong> is a special-purpose computer on a network specifically designed and configured to withstand attacks. The computer generally hosts a single application, for example a [[Proxy (Forward／Reverse Proxy Chains)|proxy server]], and all other services are removed or limited to reduce the threat to the computer
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[Router Firmware]]

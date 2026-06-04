---
title: "ufw (Uncomplicated FireWall)"
created: 2019-03-16T23:42:57.260-05:00
modified: 2021-09-06T04:48:33.365-05:00
parent: "[[Firewalls - Bastion Host]]"
children:
  - "[[gufw (GUI Uncomplicated FireWall)]]"
---
###### ufw (Uncomplicated FireWall)
- is a command-line wrapper for [[iptables]]
- [[gufw (GUI Uncomplicated FireWall)|gufw]] is a GUI wrapper for ufw

# Installation

> [!expand]- apt-get
> <strong>1. install ufw</strong>
> ```
>   apt-get install ufw
> ```
>
> <strong>2. verify ufw was installed</strong>
> ```
>   which ufw
> ```
# Commands

> [!expand]- Click here to expand...
> <strong>START & STOP</strong>
>
> start firewall
> ```
> sudo ufw enable
> ```
>
> stop firewall
> ```
> sudo ufw disable
> ```
>
> <strong>STATUS & DISPLAY RULES</strong>
>
> check status of ufw firewall
> ```
> sudo ufw status
> ```
>
> check status of ufw firewall and displays rules
> ```
> sudo ufw status verbose
> ```
>
> <strong>GENERAL RULE</strong>
>
> denies every port by default (both incoming and outbound packets)
> ```
> sudo ufw default deny
> ```
>
> denies every port by default (only incoming packets)
> ```
> sudo ufw default deny incoming
> ```
>
> allows every port by default
> ```
> sudo ufw default allow
> ```
>
> <strong>SPECIFIC RULE</strong>
>
> allows port 80
> ```
> sudo ufw allow 80
> ```
>
> denies port 80
> ```
> sudo ufw deny 80
> ```
>
> <strong>IP ADDRESS</strong>
>
> allows 207.1.1.40 for every port
> ```
> sudo ufw allow from 207.1.1.40
> ```
>
> allows 207.1.1.40 to go through port 20
> ```
> sudo ufw allow from 207.1.1.40 to 20
> ```
>
> <strong>DELETE A RULE</strong>
>
> deletes a rule
> ```
> sudo ufw delete allow 80
> ```
> ```
>
> ```
> ```
> sudo ufw status numbered
>
> ```
> ```
> ufw delete (rule number here)
>
> ```
> ```
>
> ```
>
> <strong>PROFILES</strong>
>
> show available app profiles
> ```
> sudo ufw app list
> ```
>
> allow a profile
> ```
> sudo ufw allow 'Apache Full'
> ```

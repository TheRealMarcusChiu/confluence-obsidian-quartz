---
title: "arp"
created: 2019-03-17T00:03:14.304-05:00
modified: 2021-08-14T11:31:55.477-05:00
parent: "[[Computer Network／Networking Tools]]"
children: []
---
<strong>arp</strong> is binary for [[Address Resolution Protocol (ARP) - Reverse ARP (RARP)|Address Resolution Protocol (ARP)]]
# <strong>Arp Commands</strong>

<strong>all your ARP entries</strong>
<span style="white-space: pre-wrap"><code>  arp -a</code></span>

<strong>delete an IP address</strong>
<span style="white-space: pre-wrap"><code>  arp -d 192.168.100.10</code></span>

<strong>delete all entries in the ARP table</strong>
<span style="white-space: pre-wrap"><code>  arp -d -a    </code></span>

<strong>add an entry to the ARP table</strong>
<span style="white-space: pre-wrap"><code>  arp -s ADDRESS MAC\_ADDRESS</code></span>

- ADDRESS is the address to be added
- MAC\_ADDRESS is the MAC address of the machine

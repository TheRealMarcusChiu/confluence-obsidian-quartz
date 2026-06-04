---
title: "nmap"
created: 2019-03-17T00:02:37.942-05:00
modified: 2019-12-03T14:08:08.299-06:00
parent: "[[Computer Network／Networking Tools]]"
children: []
---
<strong>Network MAPper - [www.nmap.org](http://www.nmap.org/)</strong>
### <strong>Installation</strong>
- <strong>homebrew</strong>
  <span style="white-space: pre-wrap"><code>brew install nmap</code></span>

### Commands

[cheat-sheet](https://highon.coffee/blog/nmap-cheat-sheet/)
- <strong>TCP scanning</strong>
  nmap -sT 10.0.0.1
- <strong>UDP scanning</strong>
  nmap -sU 10.0.0.1
- <strong>TCP SYN scanning</strong>
  nmap -sS 10.0.0.1
- <strong>TCP FIN scanning</strong>
  nmap -sF 10.0.0.1

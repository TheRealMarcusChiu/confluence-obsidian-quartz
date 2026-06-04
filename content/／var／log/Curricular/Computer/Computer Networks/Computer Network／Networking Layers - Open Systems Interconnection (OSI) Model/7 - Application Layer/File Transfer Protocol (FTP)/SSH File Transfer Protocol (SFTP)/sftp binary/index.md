---
title: "sftp binary"
created: 2019-08-23T22:21:40.202-05:00
modified: 2019-11-16T17:57:05.755-06:00
parent: "[[SSH File Transfer Protocol (SFTP)]]"
children: []
---
<strong>1. enter into sftp mode</strong>
<span style="white-space: pre-wrap"><code>  sftp [marcuschiu-php56.cloudatron.com](http://marcuschiu-php56.cloudatron.com/)</code></span>

<span style="white-space: pre-wrap"><code>  sshpass -p \<password\> sftp user@host</code></span>

<strong>2. execute Local ls and cd commands</strong>
<span style="white-space: pre-wrap"><code>  sftp\> lls</code><br><code>  sftp\> lcd Desktop</code></span>

<strong>3. copy from host to local current directory</strong>
<span style="white-space: pre-wrap"><code>  sftp\> get text.txt</code></span>

<strong>4. enter local environment, do something, then exit back to sftp mode</strong>
<span style="white-space: pre-wrap"><code>  sftp\> !</code><br><code>  exit</code></span>

<strong>5. It places the \~/some\_file.txt file into your home directory</strong>
<span style="white-space: pre-wrap"><code>  sftp -P(port-number here) username@public-ip-address-or-hostname:\~/some\_file.txt \~/</code></span>

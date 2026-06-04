---
title: "Creating Scripts"
created: 2019-12-03T09:44:27.171-06:00
modified: 2026-03-19T20:53:21.430-05:00
parent: "[[UNIX - Shell Scripts]]"
children: []
---
<code><font style="color: rgb(122,134,154);">\#!/bin/sh</font></code>
- Must be placed at the start of each shell script
- Tells the system that the commands that follow are to be executed by the bourne shell

Likewise with <code><font style="color: rgb(122,134,154);">\#!/usr/bin/python</font></code>, this tells system that the commands that follow are to be executed as python

Each shell file usually have an extension <code><font style="color: rgb(122,134,154);">.sh</font></code>

Save the script and make it executable
- <font style="font-family: SFMono-Medium , "SF Mono" , "Segoe UI Mono" , "Roboto Mono" , "Ubuntu Mono" , Menlo , Courier , monospace;color: rgb(122,134,154);letter-spacing: 0.0px;">chmod +x filename.sh</font>

Then execute the script by
- <code><font style="color: rgb(122,134,154);">./filename.sh</font></code>
- <code><font style="color: rgb(122,134,154);">sh filename.sh</font></code>

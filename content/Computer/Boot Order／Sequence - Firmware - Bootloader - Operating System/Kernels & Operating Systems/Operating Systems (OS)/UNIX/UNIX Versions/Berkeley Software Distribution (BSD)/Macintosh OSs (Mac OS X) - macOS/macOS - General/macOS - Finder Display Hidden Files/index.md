---
title: "macOS - Finder Display Hidden Files"
created: 2019-04-16T14:11:52.420-05:00
modified: 2019-12-27T16:23:12.950-06:00
parent: "[[macOS - General]]"
children: []
---
# Mac Newer

press cmd + shift + .
# Mac Older

<strong>1. execute in terminal</strong>
<span style="white-space: pre-wrap"><code>  sudo defaults write com.apple.finder AppleShowAllFiles YES</code><br><code>  sudo defaults write com.apple.finder AppleShowAllFiles TRUE</code></span>

<strong>2. close all Finder Applications</strong>
<span style="white-space: pre-wrap"><code>  killall Finder</code></span>

or Relaunch Finder
<span style="white-space: pre-wrap"><code>  Hold alt/option and right click Finder, then relaunch</code></span>

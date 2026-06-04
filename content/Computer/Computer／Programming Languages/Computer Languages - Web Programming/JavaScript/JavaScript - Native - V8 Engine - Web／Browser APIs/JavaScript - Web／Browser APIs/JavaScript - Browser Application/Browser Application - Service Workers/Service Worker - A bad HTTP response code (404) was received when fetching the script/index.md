---
title: "Service Worker - A bad HTTP response code (404) was received when fetching the script"
created: 2020-06-26T19:38:22.756-05:00
modified: 2020-06-26T19:42:41.406-05:00
parent: "[[Browser Application - Service Workers]]"
children: []
---
![[Service Worker - A bad HTTP response code (404) was received when fetching the script/service-worker-error.png|400]]

This happens when a previous app on the same url did utilize a [[Browser Application - Service Workers|service worker]]
### The Fix

Chrome → devtools → Application → Clear Storage → Check Unregister Service Worker → then click Clear Site Data

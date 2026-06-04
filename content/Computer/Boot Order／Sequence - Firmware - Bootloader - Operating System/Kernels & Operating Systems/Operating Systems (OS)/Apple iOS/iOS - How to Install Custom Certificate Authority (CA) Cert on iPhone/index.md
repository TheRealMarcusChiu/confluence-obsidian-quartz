---
title: "iOS - How to Install Custom Certificate Authority (CA) Cert on iPhone"
created: 2025-12-19T20:38:51.273-06:00
modified: 2025-12-19T20:53:55.188-06:00
parent: "[[Apple iOS]]"
children: []
---
Given a <code><font style="color: rgb(122,134,154);">ca.crt</font></code> airdrop it to your iPhone.
# Install the Profile

Go to:
```
Settings → General → VPN & Device Management
```

Tap:
```
Downloaded Profile → Install
Authenticate → Install → Done
```
# Enable full trust (MOST PEOPLE MISS THIS)

Go to:
```
Settings → General → About → Certificate Trust Settings
```

You will see:
```
Enable Full Trust For Root Certificates [ ] Homelab Root CA
```

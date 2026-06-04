---
title: "Secure Overlay Service (SOS)"
created: 2019-11-15T11:55:21.193-06:00
modified: 2019-11-15T12:12:50.569-06:00
parent: "[[Denial of Service (DoS) - Mitigation]]"
children: []
---
<strong>Secure Overlay Service (SOS)</strong> protects a victim/target from [[Denial of Service (DoS)|DoS]] attacks while letting legitimate ([[Authentication (AuthN)|authenticated]]) users through

![[Secure Overlay Service (SOS)/secure-overlay-services.pdf]]
### High-Level Approach of SOS
- filter around the target
- allow “hidden” proxies to pass through the filter
- use network overlays to allow legitimate users to reach the “hidden” proxies

![[Secure Overlay Service (SOS)/Basic-secure-overlay-service-architecture.png|301x250]]

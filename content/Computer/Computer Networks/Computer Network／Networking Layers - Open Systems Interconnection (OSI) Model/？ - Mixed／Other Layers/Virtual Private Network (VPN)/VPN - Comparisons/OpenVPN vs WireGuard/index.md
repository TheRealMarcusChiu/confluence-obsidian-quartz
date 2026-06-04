---
title: "OpenVPN vs WireGuard"
created: 2025-08-28T02:02:04.692-05:00
modified: 2025-08-28T02:20:51.098-05:00
parent: "[[VPN - Comparisons]]"
children: []
---
###### [[WireGuard]]
- \~4,000 lines of code
- built directly into the [[Linux Kernel|Linux kernel]]
- modern cryptography only ([[ChaCha20]], [[Curve25519]], [[Poly1305]], etc.)

###### [[OpenVPN]]
- \~100,000+ lines of code
- runs in user space (slower than in-kernel implementations)
- flexible crypto ([[Advanced Encryption Standard (AES)|AES]], [[Rivest, Shamir, & Adleman (RSA) Algorithm|RSA]], etc.), but complexity adds overhead

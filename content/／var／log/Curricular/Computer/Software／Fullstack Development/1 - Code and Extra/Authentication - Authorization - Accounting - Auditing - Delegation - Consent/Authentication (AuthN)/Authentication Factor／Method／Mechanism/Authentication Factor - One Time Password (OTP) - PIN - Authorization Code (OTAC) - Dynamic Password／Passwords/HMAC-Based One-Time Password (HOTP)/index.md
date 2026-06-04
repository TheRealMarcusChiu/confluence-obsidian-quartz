---
title: "HMAC-Based One-Time Password (HOTP)"
created: 2022-09-21T23:49:13.107-05:00
modified: 2022-09-21T23:51:16.574-05:00
parent: "[[Authentication Factor - One Time Password (OTP) - PIN - Authorization Code (OTAC) - Dynamic Password／Passwords]]"
children: []
---
###### HMAC-Based One-Time Password (HOTP)
- is a [[Authentication Factor - One Time Password (OTP) - PIN - Authorization Code (OTAC) - Dynamic Password／Passwords|one-time password (OTP)]] algorithm based on [[Hash-Based Message Authentication Code (HMAC)|HMAC]]
- it is a cornerstone of the Initiative for Open Authentication (OATH)

# HOTP - Setup

Parties intending to use HOTP must establish some parameters; typically these are specified by the authenticator, and either accepted or not by the authenticated:
- A cryptographic hash method H (default is [[Secure Hash Algorithms (SHA)|SHA-1]])
- A secret key K, which is an arbitrary byte string and must remain private
- A counter C, which counts the number of iterations
- A HOTP value length d (6–10, default is 6, and 6–8 is recommended)

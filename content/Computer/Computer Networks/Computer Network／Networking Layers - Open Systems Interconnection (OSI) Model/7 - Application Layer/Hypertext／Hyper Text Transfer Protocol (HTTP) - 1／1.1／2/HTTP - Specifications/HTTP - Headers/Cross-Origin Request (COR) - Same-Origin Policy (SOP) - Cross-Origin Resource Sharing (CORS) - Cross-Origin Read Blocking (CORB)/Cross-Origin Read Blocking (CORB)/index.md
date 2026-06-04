---
title: "Cross-Origin Read Blocking (CORB)"
created: 2026-05-17T13:03:24.355-05:00
modified: 2026-05-17T13:03:30.446-05:00
parent: "[[Cross-Origin Request (COR) - Same-Origin Policy (SOP) - Cross-Origin Resource Sharing (CORS) - Cross-Origin Read Blocking (CORB)]]"
children: []
---
# Cross-Origin Read Blocking (CORB)

is an algorithm that can identify and block dubious cross-origin resource loads in web browsers before they reach the web page. CORB reduces the risk of leaking sensitive data by keeping it further from cross-origin web pages. In most browsers, it keeps such data out of untrusted script execution contexts. In browsers with Site Isolation, it can keep such data out of untrusted renderer processes entirely, helping even against side channel attacks like Spectre

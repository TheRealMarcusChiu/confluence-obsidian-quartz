---
title: "Error Detection - Cyclic Redundancy Check (CRC)"
created: 2019-09-04T00:11:31.008-05:00
modified: 2019-11-13T09:18:02.503-06:00
parent: "[[Error Detection]]"
children: []
---
### CRC - Steps
- sender and receiver agrees upon a <em>divisor</em> polynomial C(x) of degree k
- T(x) = original message M(x) multiplied by xᵏ; that is, add <em>k</em> zeros at end of message
- divide T(x) by C(x) and find remainder
- subtract remainder from T(x)

### CRC - Common Polynomials

![[Error Detection - Cyclic Redundancy Check (CRC)/4.png|350]]
### CRC - Example
![[Error Detection - Cyclic Redundancy Check (CRC)/3.png|500]]

---
title: "Poly1305"
created: 2025-08-28T02:14:09.654-05:00
modified: 2025-08-28T02:16:26.550-05:00
parent: "[[Message Authentication Code (MAC) - Message Integrity Code (MIC)]]"
children: []
---
###### Poly1305
````excerpt
- is a fast and efficient [[Message Authentication Code (MAC) - Message Integrity Code (MIC)|Message Authentication Code (MAC)]] & [[Message Authentication Code (MAC) - Message Integrity Code (MIC)|Message Integrity Code (MIC)]] algorithm
- developed by Daniel J. Bernstein
- it generates a 16-byte authentication tag from a 32-byte secret key, a 16-byte nonce, and the message itself, which can then be used to verify that the message hasn't been altered. A key aspect of Poly1305 is that its security relies on the unique, single-use nature of the 32-byte key for each message; reusing the same key across multiple messages compromises its security guarantees
- often used in tandem with [[ChaCha20]]
````
^excerpt

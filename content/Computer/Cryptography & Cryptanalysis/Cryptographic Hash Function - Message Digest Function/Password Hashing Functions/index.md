---
title: "Password Hashing Functions"
created: 2026-01-02T22:15:41.616-06:00
modified: 2026-01-03T00:05:22.080-06:00
parent: "[[Cryptographic Hash Function - Message Digest Function]]"
children:
  - "[[Argon2]]"
  - "[[bcrypt]]"
  - "[[scrypt]]"
---
###### Password Hashing Functions
````excerpt
- is a [[Cryptographic Hash Function - Message Digest Function|cryptographic hash function]], but with a special purpose: password hashing
- often used in tandem with encryption (see [[Authentication Factor - Password Based - Static Password／Passwords|Static Passwords]])
````
^excerpt

# Types

```merge-table
{
  "rows": [
    [
      {
        "content": "[[bcrypt]]",
        "bg": "#F4F5F7"
      },
      "- slow, adaptive"
    ],
    [
      {
        "content": "[[scrypt]]",
        "bg": "#F4F5F7"
      },
      "- memory-hard"
    ],
    [
      {
        "content": "[[Argon2]]",
        "bg": "#F4F5F7"
      },
      "- modern, strongest choice"
    ]
  ]
}
```

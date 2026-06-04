---
title: "Authentication Factor - One Time Password (OTP) - PIN - Authorization Code (OTAC) - Dynamic Password／Passwords"
created: 2022-09-21T23:13:04.001-05:00
modified: 2022-09-21T23:49:10.512-05:00
parent: "[[Authentication Factor／Method／Mechanism]]"
children:
  - "[[HMAC-Based One-Time Password (HOTP)]]"
  - "[[Time-Based One-Time Password (TOTP)]]"
---
###### One Time Password (OTP) - One Time PIN - One Time Authorization Code (OTAC) - Dynamic Password
- is a password that is valid for only one login session or transaction
- dynamic as opposed to [[Authentication Factor - Password Based - Static Password／Passwords|static passwords]]

# OTP - Generation Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Time-Based",
        "header": true,
        "bg": "#F4F5F7"
      },
      "each new OTP is generated with input of time"
    ],
    [
      {
        "content": "Hash Chains",
        "header": true,
        "bg": "#F4F5F7"
      },
      "each new OTP may be created from the past OTPs used"
    ],
    [
      {
        "content": "Challenge Response",
        "header": true,
        "bg": "#F4F5F7"
      },
      ""
    ]
  ]
}
```
# OTP - Implementations
- SMS
- Hardware Tokens
- Soft Tokens
- Hard Copy

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://en.wikipedia.org/wiki/One-time_password](https://en.wikipedia.org/wiki/One-time_password)

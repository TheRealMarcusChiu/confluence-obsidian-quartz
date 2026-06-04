---
title: "Authentication Factor - Password Based - Static Password／Passwords"
created: 2019-09-30T11:02:21.306-05:00
modified: 2026-01-03T00:04:16.405-06:00
parent: "[[Authentication Factor／Method／Mechanism]]"
children: []
---
###### Password Based Authentication
````excerpt
- is the process of verifying identity via username and password
- static as opposed to [[Authentication Factor - One Time Password (OTP) - PIN - Authorization Code (OTAC) - Dynamic Password／Passwords|dynamic passwords]]
````
^excerpt

# Password Verification Methods (authenticating on multiple servers):
1. authentication information is individually configured into every server
2. authentication storage mode - one central node stores information and servers retrieve that information to authenticate
3. authentication facilitator mode - one central node stores information and the server asks whether user input is authenticated or not

2 and 3 also require authentication of a central node
# Password Storage Methods

How the server stores the client passwords in a database

```merge-table
{
  "rows": [
    [
      {
        "content": "Store in Clear/Plaintext",
        "bg": "#F4F5F7"
      },
      "vulnerable to break-in attacks"
    ],
    [
      {
        "content": "Store in Hashed Form\n(via [[Password Hashing Functions|Password Hash Function]])",
        "bg": "#F4F5F7"
      },
      "vulnerable to password guessing attacks when the system is broken in"
    ],
    [
      {
        "content": "Store in Encrypted Form\n(via [[Encryption - Algorithms|Encryption Algorithm]])",
        "bg": "#F4F5F7"
      },
      "password guessing is difficult as it requires trying all encryption keys – which should be impractical by design"
    ],
    [
      {
        "content": "Encrypt the Hashed Password",
        "bg": "#F4F5F7"
      },
      "benefit from both"
    ]
  ]
}
```

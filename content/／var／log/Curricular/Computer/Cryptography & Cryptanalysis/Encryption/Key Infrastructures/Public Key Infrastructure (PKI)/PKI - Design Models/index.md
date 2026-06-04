---
title: "PKI - Design Models"
created: 2019-11-22T12:23:50.304-06:00
modified: 2021-12-03T17:09:36.033-06:00
parent: "[[Public Key Infrastructure (PKI)]]"
children: []
---
# PKI Design Models

```merge-table
{
  "rows": [
    [
      {
        "content": "PKI Design Models",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Disadvantages",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Monopoly",
        "bg": "#F4F5F7"
      },
      "- a single organization is the CA for everyone",
      "- No such universally trusted organization\n- Requires everyone to authenticate physically with the same CA\n- Recovery from compromise is difficult (Due to a single embedded public key of CA on all products)\n- Once established, the CA can abuse its position\n- Requires perfect security at the CA\n- Getting a certificate from a remote CA is vulnerable to attacks and/or is expensive"
    ],
    [
      {
        "content": "Oligarchy",
        "bg": "#F4F5F7"
      },
      "- many root CAs exist trusted by verifiers",
      "- N security-sensitive sites instead of one\n- Compromise of any may put the entire system at a risk\n- Users can be tricked into trusting fake CAs (depending on implementation)\n- Users cannot tell if trust anchors in use are good or bad"
    ],
    [
      {
        "content": "Anarchy",
        "bg": "#F4F5F7"
      },
      "- users decide on whom to trust and how to authenticate their public keys",
      "- Not scalable as the public database grows significantly (works well for informal non-sensitive applications, e.g., [[Pretty Good Privacy (PGP)|PGP]])"
    ],
    [
      {
        "content": "Top-Down With Name Constraints",
        "bg": "#F4F5F7"
      },
      "- the root is known to everyone\n- root CA delegates other CAs each of which is responsible for its own name space\n- searching a path to a name is easy – from the root downward",
      ""
    ],
    [
      {
        "content": "Bottom-Up With Name Constraints",
        "bg": "#F4F5F7"
      },
      "- the model is very similar to how DNS service is organized and works\n- each organization has its CA responsible for names in its organization\n- each parent-child in the hierarchy certifies each other\n- uses cross-certificates among remote nodes",
      ""
    ]
  ]
}
```

---
title: "Block Cipher - Modes of Operation"
created: 2019-09-03T13:46:14.025-05:00
modified: 2022-04-05T01:15:01.652-05:00
parent: "[[Encryption Processing (Block - Stream)]]"
children: []
---
[https://www.geeksforgeeks.org/block-cipher-modes-of-operation/](https://www.geeksforgeeks.org/block-cipher-modes-of-operation/)

<strong>Modes of Operation</strong> - are ways of using [[Encryption - Algorithms|block ciphers]] (e.g. [[Data Encryption Standard (DES)|DES]], [[International Data Encryption Algorithm (IDEA)|IDEA]], [[Advanced Encryption Standard (AES)|AES]], etc) to [[Encryption|encrypt]] larger messages

![[Block Cipher - Modes of Operation/1.png]]
# Modes of Operation Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Mode Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Deterministic or Non-Deterministic",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Block or Stream Cipher",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "<strong>ECB</strong> - Electronic Code Book Mode",
        "bg": "#F4F5F7"
      },
      "DETERMINISTIC",
      "BLOCK",
      ""
    ],
    [
      {
        "content": "<strong>CBC</strong> - Cipher Block Chaining Mode",
        "bg": "#F4F5F7"
      },
      "NON-DETERMINISTIC",
      "BLOCK",
      ""
    ],
    [
      {
        "content": "<strong>PCBC</strong> - Plaintext Cipher Block Chaining",
        "bg": "#F4F5F7"
      },
      "NON-DETERMINISTIC",
      "BLOCK",
      ""
    ],
    [
      {
        "content": "<strong>OFB</strong> - Output Feedback Mode",
        "bg": "#F4F5F7"
      },
      "NON-DETERMINISTIC",
      "STREAM",
      ""
    ],
    [
      {
        "content": "<strong>CFB</strong> - Cipher Feedback Mode",
        "bg": "#F4F5F7"
      },
      "NON-DETERMINISTIC",
      "STREAM",
      ""
    ],
    [
      {
        "content": "<strong>CTR</strong> - Counter Mode",
        "bg": "#F4F5F7"
      },
      "NON-DETERMINISTIC",
      "STREAM",
      ""
    ],
    [
      {
        "content": "<strong><strong>GCM </strong></strong>- Galois/Counter Mode",
        "bg": "#F4F5F7"
      },
      "NON-DETERMINISTIC",
      "STREAM",
      ""
    ],
    [
      {
        "content": "<strong>OCB</strong> - Offset Codebook Mode",
        "bg": "#F4F5F7"
      },
      "",
      "",
      "one of several modes that get both ENCRYPTION and INTEGRITY while making only one single cryptographic pass over data"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Electronic Code Book Mode (ECB)

<strong>![[Block Cipher - Modes of Operation/electronic-code-book-1.png|400]]</strong>
# Cipher Block Chaining Mode (CBC)

<strong>![[Block Cipher - Modes of Operation/Cipher-Block-Chaining-1.png|400]]</strong>
# Plaintext Cipher Block Chaining Mode (PCBC)
![[Block Cipher - Modes of Operation/Plaintext-Cipher-Block-Chaining.png|400]]
# Output Feedback Mode (OFB)

<strong>![[Block Cipher - Modes of Operation/output-feedback-mode.png|400]]</strong>
# Cipher Feedback Mode (CFB)
## <strong>![[Block Cipher - Modes of Operation/cipher-feedback-mode-1.png|400]]</strong>
# Counter Mode (CTR)

<strong>![[Block Cipher - Modes of Operation/counter-mode.png|400]]</strong>

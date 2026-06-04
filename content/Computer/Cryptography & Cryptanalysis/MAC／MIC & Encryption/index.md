---
title: "MAC／MIC & Encryption"
created: 2019-03-16T02:38:52.672-05:00
modified: 2021-12-03T15:44:40.982-06:00
parent: "[[Cryptography & Cryptanalysis]]"
children: []
---
````excerpt
utilizing both:
- [[Message Authentication Code (MAC) - Message Integrity Code (MIC)|MAC/MIC]] or [[Hash-Based Message Authentication Code (HMAC)|HMAC]] - is a short piece of info used to provide <em>authentication</em>/<em>integrity</em> of a message
- [[Encryption|encryption]] - is encoding a message to provide <em>confidentiality</em>
````
^excerpt

# Orders of MAC & Encryption
- <strong>Encrypt-then-MAC</strong> is the most ideal scenario. Any modifications to the cipher-text that do not also have a valid MAC code can be filtered out before decryption, protecting against any attacks on the implementation. The MAC cannot, also, be used to infer anything about the plain-text
- <strong>MAC-then-Encrypt</strong> and <strong>Encrypt-and-MAC</strong> both provide different levels of security, but not the complete set provided by <strong>Encrypt-then-MAC</strong>
```merge-table
{
  "rows": [
    [
      {
        "content": "Order",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "<strong>Encrypt-and-MAC (EaM)</strong>\n\n<strong>aka</strong>\n\n<strong>MAC-and-Encrypt (MaE)</strong>",
        "bg": "#F4F5F7"
      },
      "compute the MAC on the plain-text, encrypt the plain-text, and then append the MAC at the end of the cipher-text\n- provides plain-text integrity\n- does not provide cipher-text integrity, since the MAC is taken against the plaintext\n- If the cipher scheme is malleable, the contents of the cipher-text could well be altered, but on decryption, we ought to find the plain-text is invalid. Of course, any implementation error that can be exploited in the decryption process has been by that point.\n- May reveal information about the plain-text in the MAC. Theoretical, of course, but a less than ideal scenario. This occurs if the plain-text messages are repeated, and the MACed data does not include a counter (it does in the SSH 2 protocol, but only as a 32-bit counter, so you should take care to rekey before it overflows).",
      "That's what [[Secure Shell (SSH)]] does"
    ],
    [
      {
        "content": "<strong>MAC-then-Encrypt (MtE)</strong>",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "compute the MAC on the plain-text, append it to the data, and then encrypt the whole\n- provides plain-text integrity\n- does not provide cipher-text integrity, since we have no way of knowing until we decrypt the message whether it was indeed authentic or spoofed.\n- If the cipher scheme is malleable it may be possible to alter the message to appear valid and have a valid MAC code. This is a theoretical point, of course, since practically speaking the MAC secret should provide protection.\n- Here, the MAC cannot provide any information on the plain-text either, since it is encrypted.",
      "That's what [[Secure Sockets Layer (SSL) - Transport Layer Security (TLS)|TLS/SSL]] does"
    ],
    [
      {
        "content": "<strong>Encrypt-then-MAC (EtM)</strong>\n\nmost ideal scenario",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "encrypt the plain-text, then compute the MAC on the cipher-text, and append it to the cipher-text (In that case, we do not forget to include the initialization vector (IV) and the encryption method identifier into the MAC-ed data.)\n- provides plain-text integrity\n- provides cipher-text integrity. Assuming the MAC shared secret has not been compromised, we ought to be able to deduce whether a given cipher-text is indeed authentic or has been forged; for example, in public-key cryptography, anyone can send you messages. EtM (Encrypt then Mac) ensures you only read valid messages.\n- If the cipher scheme is malleable we need not be so concerned, since the MAC code will filter out this invalid cipher-text.\n- The MAC does not provide any information on the plain-text since, assuming the output of the cipher appears random, so does the MAC. In other words, we haven't carried any structure from the plain-text into the MAC code.",
      "That’s what [[Internet Protocol Security (IPSec)|IPSec]] does"
    ]
  ],
  "tableStyle": "width: 97.5735%;"
}
```

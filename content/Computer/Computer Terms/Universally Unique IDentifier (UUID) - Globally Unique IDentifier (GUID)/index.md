---
title: "Universally Unique IDentifier (UUID) - Globally Unique IDentifier (GUID)"
created: 2020-01-07T14:16:04.373-06:00
modified: 2026-01-02T23:25:37.205-06:00
parent: "[[Computer Terms]]"
children: []
---
###### Universally Unique IDentifier (UUID) or Globally Unique IDentifier (GUID)
````excerpt
- is a 128-bit number used to identify information in computer systems
- their uniqueness does not depend on a central party nor on a coordination of parties
- while the probability that a UUID will be duplicated is not zero, it is close enough to zero to be negligible
````
^excerpt

# Format

the 16 [[Storage Units (bit - nibble - byte／octet - kilobyte／kibibyte - megabyte／mebibyte - gigabyte／gibibyte - terabyte／tebibyte - petabyte／pebibyte - exabyte／exbibyte - zettabyte／zebibyte - yottabyte／yobibyte)|octets]] of a UUID are represented as 32 [[Base16 - Hexadecimal Notation|hexadecimal (base-16)]] digits, displayed in 5 groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters (32 alphanumeric characters and 4 hyphens).

For example:

> [!indent]
> <code><font style="color: rgb(122,134,154);"><font style="color: rgb(255,102,0);">123e4567</font>-<font style="color: rgb(0,128,0);">e89b</font>-<font style="color: rgb(128,0,0);">12d3</font>-<font style="color: rgb(0,204,255);">a456</font>-<font style="color: rgb(255,0,255);">426655440000</font></font></code>
> <code><font style="color: rgb(122,134,154);"><font style="color: rgb(255,102,0);">xxxxxxxx</font>-<font style="color: rgb(0,128,0);">xxxx</font>-<font style="color: rgb(128,0,0);">Mxxx</font>-<font style="color: rgb(0,204,255);">Nxxx</font>-<font style="color: rgb(255,0,255);">xxxxxxxxxxxx</font></font></code>

The 4 bit M and the 1 to 3 bit N fields code the format of the UUID itself:
- the 4 bits of digit M are the UUID version
- the 1 to 3 most significant bits of digit N code the UUID variant

In the example, M is 1, and N is a (10xx2), meaning that this is a version-1, variant-1 UUID; that is, a time-based DCE/RFC 4122 UUID.
# UUID Record Layout

```merge-table
{
  "rows": [
    [
      {
        "content": "Name",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Length (bytes)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Length (hex digits)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Contents",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "<code><font style=\"color: rgb(255,102,0);\">time\\_low</font></code>",
        "bg": "#F4F5F7"
      },
      "4",
      "8",
      "integer giving the low 32 bits of the time"
    ],
    [
      {
        "content": "<code><font style=\"color: rgb(0,128,0);\">time\\_mid</font></code>",
        "bg": "#F4F5F7"
      },
      "2",
      "4",
      "integer giving the middle 16 bits of the time"
    ],
    [
      {
        "content": "<code><font style=\"color: rgb(128,0,0);\">time\\_hi\\_and\\_version</font></code>",
        "bg": "#F4F5F7"
      },
      "2",
      "4",
      "4-bit \"version\" in the most significant bits, followed by the high 12 bits of the time"
    ],
    [
      {
        "content": "<code><font style=\"color: rgb(0,204,255);\">clock\\_seq\\_hi\\_and\\_res</font> <font style=\"color: rgb(0,204,255);\">clock\\_seq\\_low</font></code>",
        "bg": "#F4F5F7"
      },
      "2",
      "4",
      "1 to 3-bit \"variant\" in the most significant bits, followed by the 13 to 15-bit clock sequence"
    ],
    [
      {
        "content": "<code><font style=\"color: rgb(255,0,255);\">node</font></code>",
        "bg": "#F4F5F7"
      },
      "6",
      "12",
      "the 48-bit node id"
    ]
  ],
  "tableStyle": "width: 83.1618%;"
}
```

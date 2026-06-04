---
title: "Data Compression"
created: 2019-09-09T14:00:46.609-05:00
modified: 2025-05-07T15:24:15.395-05:00
parent: "[[Data Archiving Formats - Data Compression Formats]]"
children: []
---
###### Data Compression
````excerpt
- is the act of shrinking the size of a file
````
^excerpt

# Types of Compression
- <strong>lossless compression</strong> - guarantees data received is exactly the same as data sent
- <strong>lossy compression</strong> - does not guarantee data received is exactly the same as data sent

# Lossless Compression Techniques

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Lossless Compression Techniques</strong>",
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
        "content": "Huffman Codes",
        "bg": "#F4F5F7"
      },
      "- encoding data of: higher occurrences with fewer bits and lower occurrences with more bits"
    ],
    [
      {
        "content": "Run Length Encoding (RLE)",
        "bg": "#F4F5F7"
      },
      "- the idea is to replace consecutive occurrences of a given symbol with only one copy of the symbol, plus a count of how many times that symbol occur\n- e.g. the string AAABBCDDDD would be encoded as 3A2B1C4D\n- works well on images due to large homogeneous regions"
    ],
    [
      {
        "content": "Differential Pulse Code Modulation (DPCM)",
        "bg": "#F4F5F7"
      },
      "- the idea here is to first output a reference symbol and then, for each symbol in the data, to output the difference between that symbol and the reference symbol\n- e.g. using symbol A as the reference symbol, the string AAABBCDDDD would be encoded as A0001123333 because A is the same as the reference symbol, B has a difference of 1 from the reference symbol, and so on\n- when the differences are small they can be encoded with fewer bits than the symbol itself. In this example, the range of differences, 0–3, can be represented with 2 bits each, rather than the 7 or 8 bits required by the full character. As soon as the difference becomes too large, a new reference symbol is selected\n- works better than RLE for most digital imagery, because adjacent pixels are usually similar"
    ],
    [
      {
        "content": "Delta Encoding",
        "bg": "#F4F5F7"
      },
      "- simply encodes symbol as the difference from the previous one\n- e.g. AAABBCDDDD would be represented as A001011000\n- also possible to perform RLE after delta encoding, since we might find long strings of 0s if there are many similar symbols next to each other"
    ],
    [
      {
        "content": "dictionary-based methods",
        "bg": "#F4F5F7"
      },
      "- Lempel-Ziv (LZ) compression algorithm is the best known dictionary-based compression method\n- the idea is to build a dictionary/table of variable-length strings that would be expected to be found in data, then replace each of these strings with the corresponding index"
    ]
  ]
}
```
# Lossy Compression Techniques

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Lossy Compression Techniques</strong>",
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
        "content": "TODO",
        "bg": "#F4F5F7"
      },
      ""
    ]
  ]
}
```

---
title: "JSON vs BSON"
created: 2019-12-11T13:20:08.500-06:00
modified: 2019-12-11T13:20:57.262-06:00
parent: "[[Data Language - Comparisons]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[JavaScript Object Notation (JSON)|JSON]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Binary JSON (BSON)|BSON]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Standard file format",
      "Binary file format"
    ],
    [
      {
        "content": "Speed",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Comparatively less fast",
      "Faster"
    ],
    [
      {
        "content": "Space",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Consumes comparatively less space.",
      "More space is consumed."
    ],
    [
      {
        "content": "Usage",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Transmission of data.",
      "Storage of data."
    ],
    [
      {
        "content": "Encoding and Decoding technique",
        "header": true,
        "bg": "#F4F5F7"
      },
      "No such technique.",
      "Faster encoding and decoding technique."
    ],
    [
      {
        "content": "Characteristics",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Key value pair only used for transmission of data.",
      "Lightweight, fast and traversable."
    ],
    [
      {
        "content": "Structure",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Language independent format used for asynchronous server browser communication.",
      "Binary [JSON](https://www.educba.com/json-vs-soap/) which consist of a list of ordered elements containing a field name, type, and a value. Field name types are typically a string."
    ],
    [
      {
        "content": "Traversal",
        "header": true,
        "bg": "#F4F5F7"
      },
      "JSON doesn’t skip rather skims through all the content.",
      "BSON on the other hand just indexes on the relevant content and skips all the content which does not have to be in use."
    ],
    [
      {
        "content": "Parse",
        "header": true,
        "bg": "#F4F5F7"
      },
      "JSON formats need not be parsed as they are in a human readable format already.",
      "BSON, on the other hand, needs to be parsed as they are easy for machines to parse and generate."
    ],
    [
      {
        "content": "Creation type",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Broadly JSON consists of object and array where the object is a collection of key-value pairs and the array is ordered list of values.",
      "The binary encoding technique consists of additional information such as lengths of strings and the object subtypes. Moreover, BinData and Date data types are the data types which are not supported in JSON."
    ]
  ]
}
```

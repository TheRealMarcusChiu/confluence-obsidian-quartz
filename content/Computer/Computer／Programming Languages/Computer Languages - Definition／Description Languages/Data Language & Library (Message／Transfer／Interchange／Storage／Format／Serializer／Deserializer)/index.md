---
title: "Data Language & Library (Message／Transfer／Interchange／Storage／Format／Serializer／Deserializer)"
created: 2019-03-15T15:02:46.031-05:00
modified: 2022-12-29T10:57:49.622-06:00
parent: "[[Computer Languages - Definition／Description Languages]]"
children:
  - "[[Binary JSON (BSON)]]"
  - "[[Concise Binary Object Representation (CBOR)]]"
  - "[[Data Language - Comparisons]]"
  - "[[FlatBuffers]]"
  - "[[JavaScript Object Notation (JSON)]]"
  - "[[Markup Language (ML)]]"
  - "[[Tom's Obvious Minimal Language (TOML)]]"
---
###### Data Language (Message/Transfer/Interchange/Storage/Format/Serialization/Deserialization)
- often used for [[Serialization／Marshalling／Encoding - Deserialization／Unmarshalling／Decoding／Parsing|Serialization/Marshalling/Encoding - Deserialization/Unmarshalling/Decoding/Parsing]]
- often used by [[Interface Definition／Description Language & Libraries (IDL)|Interface Definition/Description Language & Libraries (IDL)]]

###### Data Library (Message/Transfer/Interchange/Storage/Formater/Serializer/Deserializer)
- provides automatic serialization/deserialization between a Data Language and a variety of language-specific applications

# Data Language - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Type",
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
        "content": "[[JavaScript Object Notation (JSON)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "Text",
        "bg": "#fffae6"
      },
      "![[JavaScript Object Notation (JSON)#^excerpt]]"
    ],
    [
      {
        "content": "[[Markup Language (ML)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "Text",
        "bg": "#fffae6"
      },
      "![[Markup Language (ML)#^excerpt]]"
    ],
    [
      {
        "content": "[[Extensible Markup Language (XML)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "Text",
        "bg": "#fffae6"
      },
      "![[Extensible Markup Language (XML)#^excerpt]]"
    ],
    [
      {
        "content": "Comma-Separated Values (CSV)",
        "bg": "#F4F5F7"
      },
      {
        "content": "Text",
        "bg": "#fffae6"
      },
      "- is a delimited text file that uses a comma to separate values\n- each line of the file is a data record\n- each record consists of one or more fields, separated by commas"
    ],
    [
      {
        "content": "[[Concise Binary Object Representation (CBOR)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "Binary",
        "bg": "#deebff"
      },
      "![[Concise Binary Object Representation (CBOR)#^excerpt]]"
    ],
    [
      {
        "content": "[[Binary JSON (BSON)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "Binary",
        "bg": "#deebff"
      },
      "![[Binary JSON (BSON)#^excerpt]]"
    ],
    [
      {
        "content": "JSON Binary (JSONB)",
        "bg": "#F4F5F7"
      },
      {
        "content": "Binary",
        "bg": "#deebff"
      },
      "- TODO (a Postgres tech)"
    ],
    [
      {
        "content": "[[RDF - File Formats]]",
        "bg": "#F4F5F7"
      },
      "N/A",
      "- used to express [[Resource Description Framework (RDF)|RDF]] data"
    ]
  ]
}
```
# Data Language - Comparisons
```dataview
LIST
FROM ""
WHERE file.folder = [[Data Language - Comparisons]].file.folder + "/" + [[Data Language - Comparisons]].file.name
```

# Data Library - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "[[FlatBuffers]]",
        "bg": "#F4F5F7"
      },
      "- created by Google"
    ]
  ]
}
```

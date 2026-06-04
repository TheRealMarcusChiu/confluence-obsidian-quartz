---
title: "JSON Linking／Linked Data (JSON-LD)"
created: 2020-08-02T19:15:05.212-05:00
modified: 2022-11-23T19:41:53.406-06:00
parent: "[[JavaScript Object Notation (JSON)]]"
children: []
---
###### JSON Linking/Linked Data (JSON-LD)
- [https://json-ld.org/](https://json-ld.org/)
- is a lightweight Linked Data format
- can be used as an [[RDF - File Formats|RDF File Format]]

# Example
```
{
  "@context": "https://json-ld.org/contexts/person.jsonld",
  "@id": "http://dbpedia.org/resource/John_Lennon",
  "name": "John Lennon",
  "born": "1940-10-09",
  "spouse": "http://dbpedia.org/resource/Cynthia_Lennon"
}
```

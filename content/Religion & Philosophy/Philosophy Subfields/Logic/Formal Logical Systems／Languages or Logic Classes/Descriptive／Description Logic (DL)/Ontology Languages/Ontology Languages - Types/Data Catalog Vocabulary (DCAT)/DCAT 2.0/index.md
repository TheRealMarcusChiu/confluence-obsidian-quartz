---
title: "DCAT 2.0"
created: 2022-11-23T22:14:53.957-06:00
modified: 2022-11-27T07:16:02.821-06:00
parent: "[[Data Catalog Vocabulary (DCAT)]]"
children: []
---
- [https://docs.dataportal.se/dcat/2.0.0/en/](https://docs.dataportal.se/dcat/2.0.0/en/)

# Namespaces

```merge-table
{
  "rows": [
    [
      {
        "content": "dcterms",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[http://purl.org/dc/terms/](http://purl.org/dc/terms/)"
    ],
    [
      {
        "content": "[[Friend of a Friend (FOAF)|foaf]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[http://xmlns.com/foaf/0.1/](http://xmlns.com/foaf/0.1/)"
    ],
    [
      {
        "content": "[[Data Catalog Vocabulary (DCAT)|dcat]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[http://www.w3.org/ns/dcat#](http://www.w3.org/ns/dcat)"
    ],
    [
      {
        "content": "prov",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[http://www.w3.org/ns/prov#](http://www.w3.org/ns/prov)"
    ],
    [
      {
        "content": "adms",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[http://www.w3.org/ns/adms#](http://www.w3.org/ns/adms)"
    ],
    [
      {
        "content": "[[Web Ontology Language (OWL)|owl]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[http://www.w3.org/2002/07/owl#](http://www.w3.org/2002/07/owl)"
    ],
    [
      {
        "content": "[[Schema.org|schema]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[http://schema.org/](http://schema.org/)"
    ],
    [
      {
        "content": "dcatap",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[http://data.europa.eu/r5r/](http://data.europa.eu/r5r/)"
    ],
    [
      {
        "content": "spdx",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[http://spdx.org/rdf/terms#](http://spdx.org/rdf/terms)"
    ],
    [
      {
        "content": "[[Resource Description Framework (RDF)|rdf]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns)"
    ],
    [
      {
        "content": "[[vCard|vcard]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[http://www.w3.org/2006/vcard/ns#](http://www.w3.org/2006/vcard/ns)"
    ],
    [
      {
        "content": "locn",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[http://www.w3.org/ns/locn#](http://www.w3.org/ns/locn)"
    ],
    [
      {
        "content": "odrs",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[http://schema.theodi.org/odrs#](http://schema.theodi.org/odrs)"
    ]
  ]
}
```
# Primary Classes
1. [Catalog](https://docs.dataportal.se/dcat/2.0.0/en/#dcat%3ACatalog)
2. [Dataset](https://docs.dataportal.se/dcat/2.0.0/en/#dcat%3ADataset)
3. [Distribution](https://docs.dataportal.se/dcat/2.0.0/en/#dcat%3ADistribution)
4. [Data service](https://docs.dataportal.se/dcat/2.0.0/en/#dcat%3ADataService)
5. [Agent](https://docs.dataportal.se/dcat/2.0.0/en/#foaf%3AAgent)
6. [Contact point](https://docs.dataportal.se/dcat/2.0.0/en/#vcard%3AOrganization)

![[DCAT 2.0/dcat-2-0-diagram.png|400x522]]
# Supportive Classes
1. [Document](https://docs.dataportal.se/dcat/2.0.0/en/#foaf%3ADocument)
2. [License document](https://docs.dataportal.se/dcat/2.0.0/en/#dcterms%3ALicenseDocument)
3. [Standard](https://docs.dataportal.se/dcat/2.0.0/en/#dcterms%3AStandard)
4. [Geographical area](https://docs.dataportal.se/dcat/2.0.0/en/#dcterms%3ALocation)
5. [Time period](https://docs.dataportal.se/dcat/2.0.0/en/#dcterms%3APeriodOfTime)
6. [Rights statement](https://docs.dataportal.se/dcat/2.0.0/en/#odrs%3ARightsStatement)
7. [Attribution](https://docs.dataportal.se/dcat/2.0.0/en/#prov%3AAttribution)
8. [Qualified related resource](https://docs.dataportal.se/dcat/2.0.0/en/#dcat%3ARelationship)
9. [Provenance](https://docs.dataportal.se/dcat/2.0.0/en/#dcterms%3AProvenanceStatement)
10. [Checksum](https://docs.dataportal.se/dcat/2.0.0/en/#spdx%3AChecksum)
11. [Telephone](https://docs.dataportal.se/dcat/2.0.0/en/#vcard%3AVoice)
12. [Address](https://docs.dataportal.se/dcat/2.0.0/en/#vcard%3AAddress)
13. [Fee](https://docs.dataportal.se/dcat/2.0.0/en/#schema%3AOffer)

# Vocabularies
1. [Language](https://docs.dataportal.se/dcat/2.0.0/en/#5.1)
2. [Theme taxonomy](https://docs.dataportal.se/dcat/2.0.0/en/#5.2)
3. [Category](https://docs.dataportal.se/dcat/2.0.0/en/#5.3)
4. [Frequency of update](https://docs.dataportal.se/dcat/2.0.0/en/#5.4)
5. [Access rights](https://docs.dataportal.se/dcat/2.0.0/en/#5.5)
6. [Common mediatypes](https://docs.dataportal.se/dcat/2.0.0/en/#5.6)
7. [Geographical mediatypes](https://docs.dataportal.se/dcat/2.0.0/en/#5.7)
8. [Status](https://docs.dataportal.se/dcat/2.0.0/en/#5.8)
9. [Availability](https://docs.dataportal.se/dcat/2.0.0/en/#5.9)
10. [License - Creative Commons](https://docs.dataportal.se/dcat/2.0.0/en/#5.10)
11. [Architectural style](https://docs.dataportal.se/dcat/2.0.0/en/#5.11)
12. [Type](https://docs.dataportal.se/dcat/2.0.0/en/#5.12)
13. [Kind](https://docs.dataportal.se/dcat/2.0.0/en/#5.13)
14. [Role](https://docs.dataportal.se/dcat/2.0.0/en/#5.14)
15. [Algorithm](https://docs.dataportal.se/dcat/2.0.0/en/#5.15)

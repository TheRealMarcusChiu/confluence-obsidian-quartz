---
title: "Data Warehouse - Data Lake - Lakeshore Data Mart／Warehouse - Data Mesh"
created: 2020-05-26T12:37:31.066-05:00
modified: 2026-01-12T14:48:33.459-06:00
parent: "[[Architectural／Architecture Design Patterns (ADP)]]"
children:
  - "[[Operational Data - Analytical Data]]"
---
We have evolved our technologies to handle the scale of data in terms of: volume, velocity, variety, veracity (accuracy), and value.
# Resources
- [https://martinfowler.com/bliki/DataLake.html](https://martinfowler.com/bliki/DataLake.html)
- [https://martinfowler.com/articles/data-mesh-principles.html#TheGreatDivideOfData](https://martinfowler.com/articles/data-mesh-principles.html#TheGreatDivideOfData)
- [https://martinfowler.com/articles/data-monolith-to-mesh.html](https://martinfowler.com/articles/data-monolith-to-mesh.html)
- [https://www.youtube.com/watch?v=L_-fHo0ZkAo](https://www.youtube.com/watch?v=L_-fHo0ZkAo)

# 2 Types of Data & Why an Enterprise Needs Them

![[Operational Data - Analytical Data#^excerpt]]
# Analytical Data Plane Architecture Types

There are 3 main architectures to choose from for setting up an analytical data plane:

> [!expand-ui]- Data Warehouse - structured data
> ![[Data Warehouse - Data Lake - Lakeshore Data Mart／Warehouse - Data Mesh/data-warehouse-architecture.drawio.png|800]]
>
> In a warehouse, stocked items are organized along aisles and selves. That is how a data warehouse sees and stores data. Except for [Amazon's warehouses which are "randomly" stocked](https://www.youtube.com/watch?v=5TL80_8ACPc).
>
> A SINGLE schema is defined for a data warehouse. Choosing the right schema is important because it determines what kind of information the consumers are allowed to retrieve and analyze. In some cases, a single schema may not work for 2 conflicting consumer needs.
> - <strong>[[Extract Transform Load (ETL) - Extract Load (E-L) - Extract Load Transform (ELT) - Extract Transform Load Transform (ETLT)|ETL (Extract Transform Load)]]</strong> - transforms the operational data to fit the schema
> - <strong>[[Structured Query Language (SQL)|SQL (Structured Query Language)]]</strong> - a structured query language is used to retrieve the data out from the data warehouse
>
> ### Data Warehouse Cons
> - a single schema is restrictive, especially as the number of operational data sources and consumers increases:
> 	- some operational data may not fit the schema
> 	- some consumer needs may not be satisfied by the schema

> [!expand-ui]- Data Lake - unstructured data
> ![[Data Warehouse - Data Lake - Lakeshore Data Mart／Warehouse - Data Mesh/data-lake-architecure.drawio.png|925]]
>
> In a lake there's NO structure, it just contains water. That is how a data lake sees and stores data.
>
> No schema is defined for a data lake. This allows any kind of data to be stored into the data lake, thus allowing the satisfaction of multiple conflicting consumers with different needs.
> - <strong>[[Extract Transform Load (ETL) - Extract Load (E-L) - Extract Load Transform (ELT) - Extract Transform Load Transform (ETLT)|E-L]]</strong> - usually no transformation is needed since there is no schema. Hence, raw data are loaded into the data lake
> - <strong>[[Extract Transform Load (ETL) - Extract Load (E-L) - Extract Load Transform (ELT) - Extract Transform Load Transform (ETLT)|ETL (Extract Transform Load)]]</strong> - each consumer will have their own transformation step in order to make any sense out of the data in the data lake
> - <strong>Lakeshore Data Marts/Warehouses</strong> - sometimes used when multiple consumers use similar transformations and/or analyzes similar data
>
> ### Data Lake Cons
> - no schema means all the effort is placed on the consumers to make any sense out of the data lake. As the number of operational data sources increases the lake becomes more like a swamp.

> [!expand-ui]- Data Mesh - data as product
> ![[Data Warehouse - Data Lake - Lakeshore Data Mart／Warehouse - Data Mesh/data-mesh-architecture.drawio.png|800]]
>
> A data mesh is a response to the scalability issues of both: data warehouses and data lakes.
>
> The central idea behind a data mesh is: <em>data as a product</em>
> ### Domain Data as Product
>
> The idea is to break up the analytical data plane into cohesive data domains. For example, in an e-commerce enterprise we have: users data, items data, claims data, etc.
>
> Then for each domain, we construct a "product" of the specified domain data
>
> ![[Data Warehouse - Data Lake - Lakeshore Data Mart／Warehouse - Data Mesh/data-mesh-component.drawio.png|301]]
>
> Domain data products can be linked together. For example, an e-commerce analytical data plane may look like this:
>
> ![[Data Warehouse - Data Lake - Lakeshore Data Mart／Warehouse - Data Mesh/data-mesh-component-stacked.drawio.png|500]]
> ### Data Mesh Cons
> - TODO

Usually, a single architecture is used for the entire enterprise.
# Data Warehouse & Data Lake - Similarities
- both are [[DBMS Query Types - Online Transaction Processing (OLTP) - Online Analytical Processing (OLAP)|online analytical processing (OLAP)]] typed databases that house [analytical data](http://confluence.marcuschiu.com/display/NOT/Operational+Data+-+Analytical+Data)
- both contain data that are ETLed from [operational data](http://confluence.marcuschiu.com/display/NOT/Operational+Data+-+Analytical+Data) housed by usually [online transactional processing (OLTP)](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=381257) typed databases
- both allow you to run analytics without the need to move your data to a separate analytics system

# Data Warehouse & Data Lake - Tech Stacks

```merge-table
{
  "rows": [
    [
      {
        "content": "Factors",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "On-Premise",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Private Cloud",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "[[Cloud Computing／Service Models／Platforms (SaaS - FaaS - PaaS - IaaS - MaaS - PC)|Software as a Service (SaaS)]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "Maintenance",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "hard",
        "align": "left"
      },
      {
        "content": "hard",
        "align": "left"
      },
      {
        "content": "easy",
        "align": "left"
      }
    ],
    [
      {
        "content": "Monthly Cost",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "economic with large datasets",
        "align": "left"
      },
      {
        "content": "predictable",
        "align": "left"
      },
      {
        "content": "predictable",
        "align": "left"
      }
    ],
    [
      {
        "content": "Vendor Lock-in",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "avoidable",
        "align": "left"
      },
      {
        "content": "avoidable",
        "align": "left"
      },
      {
        "content": "not avoidable",
        "align": "left"
      }
    ],
    [
      {
        "content": "Suitability",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "for large corporations",
        "align": "left"
      },
      {
        "content": "for all businesses",
        "align": "left"
      },
      {
        "content": "ideal for startups",
        "align": "left"
      }
    ],
    [
      {
        "content": "Investment",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "substantial in the beginning",
        "align": "left"
      },
      {
        "content": "increases as data grows",
        "align": "left"
      },
      {
        "content": "increases as data grows",
        "align": "left"
      }
    ],
    [
      {
        "content": "Examples",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "- [[Hadoop Ecosystem|Hadoop]] On-Premise",
        "align": "left"
      },
      {
        "content": "- Hadoop On-Cloud",
        "align": "left"
      },
      {
        "content": "- Azure Data Lake (ADL)\n- [[AWS - Simple Storage Service (S3) Bucket|Amazon S3]]\n- Google Cloud Storage (GCS)",
        "align": "left"
      }
    ]
  ]
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

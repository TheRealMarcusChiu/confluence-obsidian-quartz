---
title: "Clustered Index - Non-Clustered Index - Covering Index"
created: 2019-12-09T21:34:30.651-06:00
modified: 2026-04-23T14:23:03.456-05:00
parent: "[[Database Index Types (Simple - Primary - Unique - Composite／Compound／Concatenated／Federated) Index]]"
children: []
---
# Clustered Index - Non-Clustered Index - Covering Index

```merge-table
{
  "rows": [
    [
      {
        "content": "clustered index",
        "bg": "#F4F5F7"
      },
      "- alters the way that the rows are physically stored\n- only one clustered index can be created per table\n- contains all column data of the table"
    ],
    [
      {
        "content": "non-clustered index",
        "bg": "#F4F5F7"
      },
      "- does not alter the way the rows are stored in the table\n- multiple non-clustered indexes can be created per table\n- not always contain all column data of the table\n- contains a \"row locator\" that is defined by the following scenarios:\n\t- If the table has a UNIQUE clustered index, the \"row locator\" consists of the column(s) of the clustered index\n\t- If the table has a NON-UNIQUE clustered index, the \"row locator\" consists of the columns of the clustered index, plus a new field SQL Server adds to make the reference unique. The new field is invisible to users. It's called \"uniqueifier\" and consists of four bytes\n\t- If the table does not have a clustered index (aka a heap table), the \"row locator\" is a RID or row identifier. The RID points to a physical location. It consists of the file identifier (ID), page number, and the number of the row on the page\n- one practical consequence of the \"row locator\" is that it makes sense to have a small [[Database Key Types (Candidate - Primary - Alternate - Unique - Composite／Compound／Concatenated／Federated - Super - Foreign) Key|primary key]] for a table with a lot of indexes"
    ],
    [
      {
        "content": "covering index",
        "bg": "#F4F5F7"
      },
      "- [http://dbadiaries.com/sql-server-covering-index-and-key-lookup/](http://dbadiaries.com/sql-server-covering-index-and-key-lookup/)\n- is a non-clustered index that includes all columns referenced in the query and therefore, the optimizer does not have to perform an additional lookup to the table in order to retrieve the data requested. As the data requested is all contained within the covering index, it is a faster operation.\n- to be considered as a covering index, all columns referenced by the query must be contained in the index. So this means all columns in the SELECT, JOIN, WHERE, GROUP BY, HAVING, etc"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Clustered vs Non-Clustered - Visual

> [!expand]- Click here to expand...
> given inserted data (first-name, last-name, birth-year):
> - ("Erina", "Chiu", 1995)
> - ("Marcus", "Chiu", 1994)
> - ("Christian", "Bale", 1974)
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Clustered Index Examples (only 1 per table)",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Non-Clustered Index Examples",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": [
>           "example of a single-column clustered-index on column (last-name):",
>           {
>             "rows": [
>               [
>                 {
>                   "content": "first-name",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "last-name",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "birth-year",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 }
>               ],
>               [
>                 "Christian",
>                 "Bale",
>                 "1974"
>               ],
>               [
>                 "Erina",
>                 "Chiu",
>                 "1995"
>               ],
>               [
>                 "Marcus",
>                 "Chiu",
>                 "1994"
>               ]
>             ]
>           },
>           "example of a multi-column clustered-index on column tuple (last-name, birth-year):",
>           {
>             "rows": [
>               [
>                 {
>                   "content": "first-name",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "last-name",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "birth-year",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 }
>               ],
>               [
>                 "Christian",
>                 "Bale",
>                 "1974"
>               ],
>               [
>                 "Marcus",
>                 "Chiu",
>                 "1994"
>               ],
>               [
>                 "Erina",
>                 "Chiu",
>                 "1995"
>               ]
>             ]
>           }
>         ]
>       },
>       {
>         "content": [
>           "example of a single-column clustered-index on column (first-name):",
>           {
>             "rows": [
>               [
>                 {
>                   "content": "first-name",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "row locator",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 }
>               ],
>               [
>                 "Christian",
>                 "RID or Clustered-Index Key"
>               ],
>               [
>                 "Erina",
>                 "RID or Clustered-Index Key"
>               ],
>               [
>                 "Marcus",
>                 "RID or Clustered-Index Key"
>               ]
>             ]
>           },
>           "example of a multi-column clustered-index on column (birth-year, first-name):",
>           {
>             "rows": [
>               [
>                 {
>                   "content": "birth-year",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "first-name",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "row locator",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 }
>               ],
>               [
>                 "1974",
>                 "Christian",
>                 "RID or Clustered-Index Key"
>               ],
>               [
>                 "1994",
>                 "Marcus",
>                 "RID or Clustered-Index Key"
>               ],
>               [
>                 "1995",
>                 "Erina",
>                 "RID or Clustered-Index Key"
>               ]
>             ]
>           }
>         ]
>       }
>     ]
>   ]
> }
> ```
# Clustered vs Non-Clustered - Analogy

> [!expand]- Click here to expand...
> ###### CLUSTERED INDEX
>
> If you walk into a public library, you will find that the books are all arranged in a particular order (most likely the Dewey Decimal System, or DDS). This corresponds to the <em>"clustered index"</em> of the books. If the DDS\# for the book you want was <code>005.7565 F736s</code>, you would start by locating the row of bookshelves that is labeled <code>001-099</code> or something like that. (This endcap sign at the end of the stack corresponds to an "intermediate node" in the index.) Eventually you would drill down to the specific shelf labelled <code>005.7450 - 005.7600</code>, then you would scan until you found the book with the specified DDS\#, and at that point <em>you have found your book.</em>
> ###### NON-CLUSTERED INDEX
>
> But if you didn't come into the library with the DDS\# of your book memorized, then you would need a second index to assist you. In the olden days you would find at the front of the library a wonderful bureau of drawers known as the "Card Catalog". In it were thousands of 3x5 cards -- one for each book, sorted in alphabetical order (by title, perhaps). This corresponds to the <em>"non-clustered index"</em>. These card catalogs were organized in a hierarchical structure, so that each drawer would be labeled with the range of cards it contained (<code>Ka - Kl</code>, for example; i.e., the "intermediate node"). Once again, you would drill in until you found your book, but in <em>this</em> case, once you have found it (i.e, the "leaf node"), you don't have the book itself, but just a card with an <em>index</em> number (the DDS\#) with which you could find the actual book in the clustered index.
>
> Of course, nothing would stop the librarian from photocopying all the cards and sorting them in a different order in a separate card catalog. (Typically there were at least two such catalogs: one sorted by author name, and one by title.) In principle, you could have as many of these "non-clustered" indexes as you want.
# Resources
- [https://www.giantstride.gr/sql-indexing-part2/](https://www.giantstride.gr/sql-indexing-part2/)

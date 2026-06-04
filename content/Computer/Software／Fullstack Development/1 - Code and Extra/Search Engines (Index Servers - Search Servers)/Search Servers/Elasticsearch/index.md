---
title: "Elasticsearch"
created: 2019-03-16T01:28:09.849-05:00
modified: 2025-07-23T09:20:33.414-05:00
parent: "[[Search Servers]]"
children:
  - "[[Elasticsearch - Docker]]"
---
###### Elasticsearch
````excerpt
- is a distributed, JSON-based search and analytics engine designed for horizontal scalability, maximum reliability, and easy management.
````
^excerpt

# Installation

> [!expand]- homebrew
> # Install
>
> homepage - [https://www.elastic.co/](https://www.elastic.co/)
>
> <strong>0. display available versions</strong>
> <span style="white-space: pre-wrap"><code>  brew search elasticsearch</code></span>
>
> <strong>1. install elastic search via home-brew</strong>
> <span style="white-space: pre-wrap"><code>  brew install \<elasticsearch version\></code></span>
>
> <strong>2. optional load sample son data</strong>
> <span style="white-space: pre-wrap"><code>  curl -XPOST 'localhost:9200/bank/account/\_bulk?pretty&refresh' --data-binary "@accounts.json"</code><br><code>  curl 'localhost:9200/\_cat/indices?v'</code></span>
>
> # Start Stop Restart
>
> <strong>1. start elastic search (runs on default port 9002)</strong>
> <span style="white-space: pre-wrap"><code>  brew services start \<elasticsearch version\></code></span>
>
> Or, if you don't want/need a background service you can just run:
> <span style="white-space: pre-wrap"><code>  \<elasticsearch version\></code></span>
>
> or navigate to bin directory and run in terminal
> <span style="white-space: pre-wrap"><code>  ./elasticsearch</code></span>
>
> <strong>2. stop or restart</strong>
> <span style="white-space: pre-wrap"><code>  brew services stop \<elasticsearch version\></code><br><code>  brew services restart \<elasticsearch version\></code></span>
# Commands

> [!expand]- Click here to expand...
> <strong>optional load sample son data</strong>
> <span style="white-space: pre-wrap"><code>  curl -XPOST 'localhost:9200/bank/account/\_bulk?pretty&refresh' --data-binary "@accounts.json"</code><br><code>  curl 'localhost:9200/\_cat/indices?v'</code></span>
>
> <strong>get health of cluster</strong>
> <span style="white-space: pre-wrap"><code>  curl -XGET 'localhost:9200/\_cat/health?v&pretty'</code></span>
>
> <strong>get nodes of cluster</strong>
> <span style="white-space: pre-wrap"><code>  curl -XGET 'localhost:9200/\_cat/nodes?v&pretty'</code></span>
>
> <strong>lists all indices</strong>
> <span style="white-space: pre-wrap"><code>  curl -XGET 'localhost:9200/\_cat/indices?v&pretty'</code></span>
>
> <strong>create index named 'customer'</strong>
> <span style="white-space: pre-wrap"><code>  curl -XPUT 'localhost:9200/customer?pretty&pretty'</code></span>
>
> <strong>Let’s index a simple customer document into the customer index,"external" type, with an ID of 1 as follows:</strong>
> <span style="white-space: pre-wrap"><code>  curl -XPUT 'localhost:9200/customer/external/1?pretty&pretty' -d'</code><br><code>  {</code><br><code>    "name": "John Doe"</code><br><code>  }'</code></span>
>
> <strong>this index a document without explicit id, ElasticSearch will generate a random ID</strong>
> <span style="white-space: pre-wrap"><code>  curl -XPOST 'localhost:9200/customer/external?pretty&pretty' -d'</code><br><code>  {</code><br><code>    "name": "Jane Doe"</code><br><code>  }'</code></span>
>
> <strong>updates a document from index by id</strong>
> <span style="white-space: pre-wrap"><code>  curl -XPOST 'localhost:9200/customer/external/1/\_update?pretty&pretty' -d'</code><br><code>  {</code><br><code>    "doc": { "name": "Jane Doe" }</code><br><code>  }'</code></span>
>
> <strong>get the document we just indexed</strong>
> <span style="white-space: pre-wrap"><code>  curl -XGET 'localhost:9200/customer/external/1?pretty&pretty'</code></span>
>
> <strong>delete the index</strong>
> <span style="white-space: pre-wrap"><code>  curl -XDELETE 'localhost:9200/customer?pretty&pretty'</code></span>
>
> # review of commands
> <span style="white-space: pre-wrap"><code>  PUT /customer</code><br><code></code><br><code>  PUT /customer/external/1</code><br><code>  {</code><br><code>    "name": "John Doe"</code><br><code>  }</code><br><code></code><br><code>  GET /customer/external/1</code><br><code></code><br><code>  DELETE /customer</code></span>
>
> <strong>follows a pattern</strong>
> <span style="white-space: pre-wrap"><code>  \<REST Verb\> /\<Index\>/\<Type\>/\<ID\></code></span>
>
> <strong>search</strong>
> <span style="white-space: pre-wrap"><code>  curl -XGET 'localhost:9200/bank/\_search?q=\*&sort=account\_number:asc&pretty'</code><br><code></code><br><code>  curl -XGET 'localhost:9200/bank/\_search?pretty' -d'</code><br><code>  {</code><br><code>    "query": { "match\_all": {} },</code><br><code>    "sort": \[</code><br><code>      { "account\_number": "asc" }</code><br><code>    \]</code><br><code>  }'</code></span>
>
> <strong>'match\_all' searches all in specified index 'size' - default to 10 if not specified</strong>
> <span style="white-space: pre-wrap"><code>  curl -XGET 'localhost:9200/bank/\_search?pretty' -d'</code><br><code>  {</code><br><code>    "query": { "match\_all": {} },</code><br><code>    "size": 1</code><br><code>  }'</code></span>
>
> <strong>search</strong>
> <span style="white-space: pre-wrap"><code>  curl -XGET 'localhost:9200/bank/\_search?pretty' -d'</code><br><code>  {</code><br><code>    "query": { "match\_all": {} },</code><br><code>    "sort": { "balance": { "order": "desc" } }</code><br><code>  }'</code></span>
>
> <strong>returns account numbered 20</strong>
> <span style="white-space: pre-wrap"><code>  curl -XGET 'localhost:9200/bank/\_search?pretty' -d'</code><br><code>  {</code><br><code>    "query": { "match": { "account\_number": 20 } }</code><br><code>  }'</code></span>
>
> <strong>returns all accounts containing "mill" and "lane" in the address</strong>
> <span style="white-space: pre-wrap"><code>  curl -XGET 'localhost:9200/bank/\_search?pretty' -d'</code><br><code>  {</code><br><code>    "query": {</code><br><code>       "bool": {</code><br><code>        "must": \[</code><br><code>          { "match": { "address": "mill" } },</code><br><code>          { "match": { "address": "lane" } }</code><br><code>        \]</code><br><code>      }</code><br><code>    }</code><br><code>  }'</code></span>
>
> <strong>returns all accounts containing "mill" or "lane" in the address</strong>
> <span style="white-space: pre-wrap"><code>  curl -XGET 'localhost:9200/bank/\_search?pretty' -d'</code><br><code>  {</code><br><code>    "query": {</code><br><code>      "bool": {</code><br><code>        "should": \[</code><br><code>          { "match": { "address": "mill" } },</code><br><code>          { "match": { "address": "lane" } }</code><br><code>        \]</code><br><code>      }</code><br><code>    }</code><br><code>  }'</code></span>
>
> <strong>returns all accounts that contain neither "mill" nor "lane" in the address</strong>
> <span style="white-space: pre-wrap"><code>  curl -XGET 'localhost:9200/bank/\_search?pretty' -d'</code><br><code>  {</code><br><code>    "query": {</code><br><code>      "bool": {</code><br><code>        "must\_not": \[</code><br><code>          { "match": { "address": "mill" } },</code><br><code>          { "match": { "address": "lane" } }</code><br><code>        \]</code><br><code>      }</code><br><code>    }</code><br><code>  }'</code></span>
>
> <strong>returns all accounts that have balance between 20000 and 30000 inclusive</strong>
> <span style="white-space: pre-wrap"><code>  curl -XGET 'localhost:9200/bank/\_search?pretty' -d'</code><br><code>  {</code><br><code>    "query": {</code><br><code>      "bool": {</code><br><code>        "must": { "match\_all": {} },</code><br><code>        "filter": {</code><br><code>          "range": {</code><br><code>            "balance": {</code><br><code>              "gte": 20000,</code><br><code>              "lte": 30000</code><br><code>            }</code><br><code>          }</code><br><code>        }</code><br><code>      }</code><br><code>    }</code><br><code>  }'</code></span>
>
> <strong>aggregate - groups all the accounts by state, and then returns the, top 10 (default) states sorted by count descending (also default)</strong>
> <span style="white-space: pre-wrap"><code>  curl -XGET 'localhost:9200/bank/\_search?pretty' -d'</code><br><code>  {</code><br><code>    "size": 0,</code><br><code>    "aggs": {</code><br><code>      "group\_by\_state": {</code><br><code>        "terms": {</code><br><code>          "field": "state.keyword"</code><br><code>        }</code><br><code>      }</code><br><code>    }</code><br><code>  }'</code></span>
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [http://www.elastic.co/](http://www.elastic.co/)

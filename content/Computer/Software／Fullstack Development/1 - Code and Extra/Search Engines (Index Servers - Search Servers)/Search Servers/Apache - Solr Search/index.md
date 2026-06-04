---
title: "Apache - Solr Search"
created: 2019-03-16T01:25:26.228-05:00
modified: 2019-03-16T01:26:17.961-05:00
parent: "[[Search Servers]]"
children: []
---
[http://lucene.apache.org/solr/](http://lucene.apache.org/solr/)

Solr is highly reliable, scalable and fault tolerant, providing distributed indexing, replication and load-balanced querying, automated failover and recovery, centralized configuration and more.
# Installation

> [!expand]- homebrew
> # Install
>
> <strong>1. install solr via homebrew</strong>
> <span style="white-space: pre-wrap"><code>  brew install solr</code></span>
>
> <strong>2. verify solr was installed</strong>
> <span style="white-space: pre-wrap"><code>  which solr</code></span>
>
> # Start Stop Restart
>
> <strong>1. To have launchd start solr</strong>
> <span style="white-space: pre-wrap"><code>  brew services start solr</code></span>
>
> Or, if you don't want/need a background service you can just run:
> <span style="white-space: pre-wrap"><code>  solr start</code></span>
>
> go to [http://localhost:8983/solr/#/](http://localhost:8983/solr/#/)
>
> <strong>2. stop or restart</strong>
> <span style="white-space: pre-wrap"><code>  brew services stop solr</code><br><code>  brew services restart solr</code></span>
# Command

> [!expand]- Click here to expand...
> [https://www.tutorialspoint.com/apache_solr/apache_solr_basic_commands.htm](https://www.tutorialspoint.com/apache_solr/apache_solr_basic_commands.htm)

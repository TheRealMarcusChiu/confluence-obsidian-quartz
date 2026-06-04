---
title: "MongoDB"
created: 2019-03-16T01:02:50.262-05:00
modified: 2019-12-11T12:06:14.564-06:00
parent: "[[Document Database]]"
children: []
---
````excerpt
<strong>MongoDB</strong> is a [[Document Database|document-oriented database]] program. Classified as a [[NoSQL (Non-Relational) Databases|NoSQL database]] program, MongoDB uses [[JavaScript Object Notation (JSON)]]-like documents with schema

[www.mongodb.com](https://www.mongodb.com/)
````
^excerpt

# Installation

> [!expand]- homebrew
> # Install
>
> <strong>1. install mongodb via brew</strong>
> <span style="white-space: pre-wrap"><code>  brew install mongodb</code></span>
>
> configuration: /usr/local/etc/mongod.conf
>
> <strong>2. verify mongo was installed</strong>
> <span style="white-space: pre-wrap"><code>  which mongo</code><br><code>  which mongod</code></span>
>
> # Start Stop Restart
>
> <strong>1. to have launchd start mongodb server now and restart at login</strong>
> <span style="white-space: pre-wrap"><code>  brew services start mongodb</code><br><code>  brew services restart mongodb</code><br><code>  brew services stop mongodb</code></span>
>
> <strong>2. Or, if you don't want/need a background service you can just run:</strong>
> <span style="white-space: pre-wrap"><code>  mongod --config /usr/local/etc/mongod.conf</code></span>
>
> <strong>3. access mongo terminal, once server is running</strong>
> <span style="white-space: pre-wrap"><code>  mongo</code></span>

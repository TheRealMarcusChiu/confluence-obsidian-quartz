---
title: "MariaDB"
created: 2019-03-16T01:05:28.360-05:00
modified: 2022-12-18T16:15:51.444-06:00
parent: "[[Relational／Row-Oriented Database Management System (RDBMS)]]"
children: []
---
###### MariaDB ([https://mariadb.org](https://mariadb.org))
````excerpt
- is one of the most popular database servers in the world
- it’s made by the original developers of [[MySQL]] and guaranteed to stay open source
````
^excerpt

# Installation

> [!expand]- homebrew
> <strong>1. install mariadb using home-brew</strong>
> <span style="white-space: pre-wrap"><code>  brew install mariadb</code></span>
>
> this would download maria into /usr/local/Cellar directory
>
> <strong>2. To connect:</strong>
> <span style="white-space: pre-wrap"><code>  mysql -uroot -p</code></span>
>
> To disconnect:
> <span style="white-space: pre-wrap"><code>  \\q</code></span>
>
> <strong>3. To have launchd start mariadb now and restart at login:</strong>
> <span style="white-space: pre-wrap"><code>  brew services start mariadb</code></span>
>
> <strong>4. Or, if you don't want/need a background service you can just run:</strong>
> <span style="white-space: pre-wrap"><code>  mysql.server start</code></span>

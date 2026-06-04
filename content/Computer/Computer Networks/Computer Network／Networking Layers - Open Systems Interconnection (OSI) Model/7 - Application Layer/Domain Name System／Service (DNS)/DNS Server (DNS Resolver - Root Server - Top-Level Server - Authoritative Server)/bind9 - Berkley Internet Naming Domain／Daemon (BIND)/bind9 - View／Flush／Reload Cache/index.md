---
title: "bind9 - View／Flush／Reload Cache"
created: 2020-06-29T17:04:13.001-05:00
modified: 2020-06-29T17:06:14.256-05:00
parent: "[[bind9 - Berkley Internet Naming Domain／Daemon (BIND)]]"
children: []
---
### View Cache
```
rndc dumpdb -cache
```

results would be at /var/cache/bind/named\_dump.db
### Flush & Reload Cache
```
> rndc flush
> rndc reload
server reload successful
```

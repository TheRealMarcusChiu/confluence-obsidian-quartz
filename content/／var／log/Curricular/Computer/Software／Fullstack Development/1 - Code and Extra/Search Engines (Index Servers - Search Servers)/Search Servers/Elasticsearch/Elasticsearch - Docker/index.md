---
title: "Elasticsearch - Docker"
created: 2025-07-23T09:15:51.952-05:00
modified: 2025-07-23T09:39:07.923-05:00
parent: "[[Elasticsearch]]"
children: []
---
> [!expand-ui]- SSL Enabled
> # Run Elasticsearch
> ```
> docker run -d --name es762 -p 9200:9200 -e "discovery.type=single-node" elasticsearch:8.17.5
> ```
> # Reset Password
> ```
> docker exec -it es762 /bin/sh
> ```
> ```
> ./bin/elasticsearch-reset-password -u elastic
> ```
> # Verify
> ```
> curl -k -u elastic:PASSWORD_HERE https://localhost:9200/
> {
>   "name" : "f49ba1bf63a7",
>   "cluster_name" : "docker-cluster",
>   "cluster_uuid" : "sy_DMXzITButzS6NmXQHsA",
>   "version" : {
>     "number" : "8.17.5",
>     "build_flavor" : "default",
>     "build_type" : "docker",
>     "build_hash" : "55fce5db33c28431e3a504c47d359ddbeadde69d",
>     "build_date" : "2025-04-09T22:07:03.265074501Z",
>     "build_snapshot" : false,
>     "lucene_version" : "9.12.0",
>     "minimum_wire_compatibility_version" : "7.17.0",
>     "minimum_index_compatibility_version" : "7.0.0"
>   },
>   "tagline" : "You Know, for Search"
> }
> ```

> [!expand-ui]- SSL Disabled
> # Run Elasticsearch
> ```
> docker run -d --name es762 -p 9200:9200 -e "discovery.type=single-node" -e "xpack.security.enabled=false" -e "xpack.security.http.ssl.enabled=false" -e "xpack.security.enrollment.enabled=false" elasticsearch:8.17.5
> ```
> # Verify
> ```
> curl http://localhost:9200/
> {
>   "name" : "f49ba1bf63a7",
>   "cluster_name" : "docker-cluster",
>   "cluster_uuid" : "sy_DMXzITButzS6NmXQHsA",
>   "version" : {
>     "number" : "8.17.5",
>     "build_flavor" : "default",
>     "build_type" : "docker",
>     "build_hash" : "55fce5db33c28431e3a504c47d359ddbeadde69d",
>     "build_date" : "2025-04-09T22:07:03.265074501Z",
>     "build_snapshot" : false,
>     "lucene_version" : "9.12.0",
>     "minimum_wire_compatibility_version" : "7.17.0",
>     "minimum_index_compatibility_version" : "7.0.0"
>   },
>   "tagline" : "You Know, for Search"
> }
> ```

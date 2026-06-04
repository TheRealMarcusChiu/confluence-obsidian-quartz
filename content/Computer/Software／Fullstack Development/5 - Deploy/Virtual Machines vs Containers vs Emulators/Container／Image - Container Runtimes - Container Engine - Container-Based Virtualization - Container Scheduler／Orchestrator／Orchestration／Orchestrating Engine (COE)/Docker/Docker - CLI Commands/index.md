---
title: "Docker - CLI Commands"
created: 2021-07-12T19:13:35.091-05:00
modified: 2022-11-25T00:08:44.669-06:00
parent: "[[Docker]]"
children:
  - "[[Docker Compose]]"
---
# Basic

<strong>1. builds a new image from the source code</strong>
<span style="white-space: pre-wrap"><code>  docker build</code></span>

<strong>2. creates a writeable container from the image and prepares it for running</strong>
<span style="white-space: pre-wrap"><code>  docker create </code></span>

<strong>3. creates the container (same as docker create) and runs it</strong>
<span style="white-space: pre-wrap"><code>  docker run </code></span>

# Build

Building Local Images/Repositories

<strong>1. build a local docker repository from Dockerfile definition</strong>
<span style="white-space: pre-wrap"><code>  docker build -t LOCAL\_REPO\_NAME .</code></span>

<strong>2. build with URL</strong>
<span style="white-space: pre-wrap"><code>  docker build [github.com/creack/docker-firefox](http://github.com/creack/docker-firefox)</code></span>

Listing Local Images/Repositories

<strong>1. list local images/repository</strong>
<span style="white-space: pre-wrap"><code>  docker images -a</code></span>

Removing Local Images/Repositories

<strong>1. remove by IMAGE ID</strong>
<span style="white-space: pre-wrap"><code>  docker rmi 7c6d216d165a</code></span>

# Create

TODO
# Run

<strong>0. make sure docker daemon is running</strong>
<span style="white-space: pre-wrap"><code>  docker ps</code></span>

<strong>1. start a Dockerized web server container</strong>
<span style="white-space: pre-wrap"><code>  docker run -d -p 80:80 --name CONTAINER\_NAME REPOSITORY\_NAME</code></span>

<strong>2. display running containers</strong>
<span style="white-space: pre-wrap"><code>  docker ps -a</code></span>

<strong>3. stop a running container</strong>
<span style="white-space: pre-wrap"><code>  docker stop CONTAINER\_NAME</code></span>

<strong>4. remove container</strong>
<span style="white-space: pre-wrap"><code>  docker rm ID\_OR\_NAME ID\_OR\_NAME</code></span>

<strong>Example</strong>
<span style="white-space: pre-wrap"><code>  docker run -d -p 80:80 --name webserver nginx</code><br><code>  docker stop webserver</code><br><code>  docker rm webserver</code></span>

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

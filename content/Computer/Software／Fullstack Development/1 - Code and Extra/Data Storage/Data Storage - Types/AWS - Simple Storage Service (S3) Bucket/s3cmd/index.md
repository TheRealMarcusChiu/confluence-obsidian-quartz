---
title: "s3cmd"
created: 2019-03-16T00:57:43.963-05:00
modified: 2019-03-16T00:58:28.022-05:00
parent: "[[AWS - Simple Storage Service (S3) Bucket]]"
children: []
---
# Installation

> [!expand]- homebrew
> <strong>1. install s3cmd via brew</strong>
> <span style="white-space: pre-wrap"><code>  brew install s3cmd</code></span>
>
> <strong>2. verify s3cmd was installed</strong>
> <span style="white-space: pre-wrap"><code>  which s3cmd</code></span>
# Commands

> [!expand]- Click here to expand...
> <strong>0. configure s3cmd, this would create a \~/.s3cfg file</strong>
> <span style="white-space: pre-wrap"><code>  s3cmd --configure</code></span>
>
> <strong>1. sync the s3-amzn-repo with /path/to/directory</strong>
> <span style="white-space: pre-wrap"><code>  s3cmd -P sync /path/to/directory s3://s3-amzn-repo/ --delete-removed</code></span>
>
> - -P makes all files public
> - --delete-removed removes deleted files

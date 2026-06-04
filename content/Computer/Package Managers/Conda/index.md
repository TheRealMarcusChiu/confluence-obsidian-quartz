---
title: "Conda"
created: 2025-09-04T00:14:31.615-05:00
modified: 2026-01-30T21:23:47.562-06:00
parent: "[[Package Managers]]"
children: []
---
###### Conda
````excerpt
- is a system package manager
- you can install much more than just Python libraries. You can install entire software stacks such as [[Python]] + Django + Celery + [[PostgreSQL]] + [[Nginx|nginx]]. You can install [[R]], R libraries, [[Node.js]], [[Java]] programs, [[C]] and [[C++]] programs and libraries, [[Perl (Practical Extraction and Report Language)|Perl]] programs, the list is pretty long and limitless
````
^excerpt

# Installation

> [!expand-ui]- Linux
> ```
> cd ~
> wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
> bash Miniconda3-latest-Linux-x86_64.sh
> source ~/.bashrc
> conda --version
> conda update -n base -c defaults conda
> ```
# Usage

Create python virtual environment
```
conda create -n py310 python=3.10
```

Activate environment
```
conda activate py310
python --version
```

Deactivate environment
```
conda deactivate
```

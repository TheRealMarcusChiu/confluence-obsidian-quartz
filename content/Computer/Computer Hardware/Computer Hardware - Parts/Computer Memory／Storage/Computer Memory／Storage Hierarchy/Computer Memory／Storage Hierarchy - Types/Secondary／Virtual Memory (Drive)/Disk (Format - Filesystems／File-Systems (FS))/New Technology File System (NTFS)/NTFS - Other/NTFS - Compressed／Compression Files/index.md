---
title: "NTFS - Compressed／Compression Files"
created: 2020-06-15T23:20:26.702-05:00
modified: 2020-06-16T00:05:24.196-05:00
parent: "[[NTFS - Other]]"
children: []
---
NTFS is capable of compressing:
- individual files
- all files within a folder
- all files/folders on the volume

compression is executed within NTFS

any Windows program can read/write compressed file without considering the extent of the compression

when a compressed file is opened, only a part of the file is decompressed while being read

data already in memory is uncompressed

modified and new data is compressed again – when written to the compressed file on disk

NTFS compression algorithms support cluster sizes up to 4KB

the best use of compression is for files which are repetitive, written seldom, usually accessed sequentially: log files are an ideal example

compression works in blocks of 16 clusters

data is compressed using a modified LZ77 algorithm, named LZNT1

each block is compressed independently

if compressed block does not become less than the original 16 clusters, it is left uncompressed

compressing a file adds serious complexity to the way the file is stored

the MFT is the only place that contains information about what parts are compressed and by how much

if the MFT is corrupted there is little hope retrieving the data

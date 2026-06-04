---
title: "NTFS - Files With Zeros"
created: 2020-06-16T00:07:14.518-05:00
modified: 2020-06-16T00:09:10.540-05:00
parent: "[[NTFS - Other]]"
children: []
---
- when NTFS encounters files with long runs of zeros, the system counts how many zeros are present in the MFT header attribute
- the counter is stored instead of the actual data
- long runs of zeros are common on disks, so counting them is an easy way to compress a file
- the counting mechanism kicks in when the run of zeros consumes an entire cluster
- the resulting "sparseness" of the file is annotated in the data run that maps the clusters allocated to the file

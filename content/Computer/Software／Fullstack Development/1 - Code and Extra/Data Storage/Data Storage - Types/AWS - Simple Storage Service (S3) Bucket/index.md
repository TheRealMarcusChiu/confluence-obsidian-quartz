---
title: "AWS - Simple Storage Service (S3) Bucket"
created: 2019-03-16T00:57:13.846-05:00
modified: 2022-01-02T02:08:53.551-06:00
parent: "[[Data Storage - Types]]"
children:
  - "[[How AWS S3 Serves 1 PetaByte per Second on Top of Slow HDDs]]"
  - "[[s3cmd]]"
---
###### Amazon Simple Storage Service (S3) Bucket
- is capable of storing very large objects, up to 5TB in size
- there is no limit on the number of objects that can be stored in an S3 bucket
- each object in S3 has a URL that can be used to download the object
- objects in S3 can also be delivered via Amazon Cloudfront CDN (Content Delivery Network)
- objects in S3 can be archived to Amazon Glacier which is a very cheap archival service

# Commands
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

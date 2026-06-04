---
title: "hadoop fs - hadoop dfs - hdfs dfs"
created: 2020-05-19T19:38:42.631-05:00
modified: 2020-05-19T19:42:12.218-05:00
parent: "[[HDFS - Commands]]"
children: []
---
Following are the three commands which appears same but have minute differences

```merge-table
{
  "rows": [
    [
      "###### hadoop fs {args}",
      "FS relates to a generic file system which can point to any file systems like local, HDFS etc. So this can be used when you are dealing with different file systems such as Local FS, (S)FTP, S3, and others"
    ],
    [
      "###### hadoop dfs {args}",
      "dfs is very specific to HDFS. would work for operation relates to HDFS. This has been deprecated and we should use <strong>hdfs dfs</strong> instead"
    ],
    [
      "###### hdfs dfs {args}",
      "same as 2nd i.e would work for all the operations related to HDFS and is the recommended command instead of <strong>hadoop dfs</strong>"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

if you use <strong>hadoop dfs</strong>, it will look locate hdfs and delegate that command to <strong>hdfs dfs</strong>

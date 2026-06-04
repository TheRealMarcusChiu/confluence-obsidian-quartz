---
title: "Hadoop 2 vs Hadoop 3 vs Spark 2 vs Spark 3"
created: 2020-05-22T23:18:04.614-05:00
modified: 2020-05-23T00:44:31.242-05:00
parent: "[[Apache Hadoop]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Apache Hadoop]] 3.*",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Hadoop 2.*",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Apache Spark]] 2.*",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Spark 3.*",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Initial Release Year",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "2017",
        "align": "center"
      },
      {
        "content": "2013",
        "align": "center"
      },
      {
        "content": "2016",
        "align": "center"
      },
      {
        "content": "2019",
        "align": "center"
      }
    ],
    [
      {
        "content": "Use Category",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Data Processing Engine",
        "align": "center",
        "colspan": 2
      },
      null,
      {
        "content": "Data Processing & Analytics Engine",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Real Time Analysis",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "align": "center",
        "colspan": 2
      },
      null,
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Interactivity",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "align": "center",
        "colspan": 2
      },
      null,
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Development Language",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Java]] 8",
        "align": "center"
      },
      {
        "content": "Java 7",
        "align": "center"
      },
      {
        "content": "[[Scala]]",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "Security Tech",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Kerberos Protocol|Kerberos]] & ACL",
        "align": "center",
        "colspan": 2
      },
      null,
      {
        "content": "Password Authentication",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "Fault Tolerance Tech",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Erasure Coding",
        "align": "center"
      },
      {
        "content": "Replication Technique",
        "align": "center"
      },
      {
        "content": "Directed Acyclic Graph",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Yet Another Resource Negotiator (YARN)]] Version",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "YARN v2",
        "align": "center"
      },
      {
        "content": "YARN v1",
        "align": "center"
      },
      {
        "content": "ALL",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Mesos Kernel]] Support",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "align": "center",
        "colspan": 2
      },
      null,
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Nodes",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Multiple Standby NameNodes",
        "align": "center"
      },
      {
        "content": "Single Standby NameNode for the entire Namespace",
        "align": "center"
      },
      {
        "content": "Driver Program on the Master Node which manages SparkContext",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "File Systems",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Local File Systems",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Hadoop Distributed File System (HDFS)|HDFS]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "[[AWS - Simple Storage Service (S3) Bucket|Amazon S3]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "Azure Storage",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "Distributed File Systems",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "Microsoft Azure Data Lake",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "Aliyun Object Storage System",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "align": "center"
      },
      {
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 99.9067%;"
}
```

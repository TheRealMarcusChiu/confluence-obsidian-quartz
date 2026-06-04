---
title: "Hadoop - Java - MapReduce"
created: 2020-05-20T20:44:03.269-05:00
modified: 2020-05-20T22:07:43.102-05:00
parent: "[[Hadoop - Java]]"
children:
  - "[[Java - MapReduce - WordCount]]"
---
### Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

### Methods of Mapper Class

```merge-table
{
  "rows": [
    [
      {
        "content": "Methods",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "void cleanup(Context context)",
      "This method called only once at the end of the task."
    ],
    [
      "void map(KEYIN key, VALUEIN value, Context context)",
      "This method can be called only once for each key-value in the input split."
    ],
    [
      "void run(Context context)",
      "This method can be override to control the execution of the Mapper."
    ],
    [
      "void setup(Context context)",
      "This method called only once at the beginning of the task."
    ]
  ]
}
```
### Methods of Reducer Class

```merge-table
{
  "rows": [
    [
      {
        "content": "Methods",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "void cleanup(Context context)",
      "This method called only once at the end of the task."
    ],
    [
      "void map(KEYIN key, Iterable<VALUEIN> values, Context context)",
      "This method called only once for each key."
    ],
    [
      "void run(Context context)",
      "This method can be used to control the tasks of the Reducer."
    ],
    [
      "void setup(Context context)",
      "This method called only once at the beginning of the task."
    ]
  ]
}
```
### Methods of Job Class

```merge-table
{
  "rows": [
    [
      {
        "content": "Methods",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "Counters getCounters()",
      "This method is used to get the counters for the job."
    ],
    [
      "long getFinishTime()",
      "This method is used to get the finish time for the job."
    ],
    [
      "Job getInstance()",
      "This method is used to generate a new Job without any cluster."
    ],
    [
      "Job getInstance(Configuration conf)",
      "This method is used to generate a new Job without any cluster and provided configuration."
    ],
    [
      "Job getInstance(Configuration conf, String jobName)",
      "This method is used to generate a new Job without any cluster and provided configuration and job name."
    ],
    [
      "String getJobFile()",
      "This method is used to get the path of the submitted job configuration."
    ],
    [
      "String getJobName()",
      "This method is used to get the user-specified job name."
    ],
    [
      "JobPriority getPriority()",
      "This method is used to get the scheduling function of the job."
    ],
    [
      "void setJarByClass(Class<?> c)",
      "This method is used to set the jar by providing the class name with .class extension."
    ],
    [
      "void setJobName(String name)",
      "This method is used to set the user-specified job name."
    ],
    [
      "void setMapOutputKeyClass(Class<?> class)",
      "This method is used to set the key class for the map output data."
    ],
    [
      "void setMapOutputValueClass(Class<?> class)",
      "This method is used to set the value class for the map output data."
    ],
    [
      "void setMapperClass(Class<? extends Mapper> class)",
      "This method is used to set the Mapper for the job."
    ],
    [
      "void setNumReduceTasks(int tasks)",
      "This method is used to set the number of reduce tasks for the job"
    ],
    [
      "void setReducerClass(Class<? extends Reducer> class)",
      "This method is used to set the Reducer for the job."
    ]
  ]
}
```

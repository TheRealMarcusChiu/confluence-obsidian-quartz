---
title: "Bootstrap Aggregation - Bagging"
created: 2020-10-25T21:11:02.974-05:00
modified: 2020-10-25T21:22:58.084-05:00
parent: "[[Ensemble Methods／Techniques]]"
children: []
---
###### Bootstrap Aggregation - Bagging
````excerpt
- averages a noisy fitted function to many bootstrap samples, to reduce its variance
- each model is given a resample dataset of original dataset with replacement
- training/generation of each model can be done in parallel
- prediction is done by aggregating the predictions of all trained models into a single prediction
````
^excerpt

### Bagging - Types
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

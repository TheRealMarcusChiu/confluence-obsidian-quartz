---
title: "Sensitivity vs Specificity"
created: 2021-09-13T05:27:50.165-05:00
modified: 2021-12-21T18:57:16.740-06:00
parent: "[[True／False Positive／Negative Sensitivity Recall Hit／Miss／False-Discovery／False-Omission Rate Fall-Out Threat／F1 Score Critical Success Index Accuracy Specificity Precision Predictive-Value]]"
children: []
---
<strong>sensitivity</strong> or <strong>recall rate</strong> or <strong>true positive rate</strong> measures the [probability](http://confluence.marcuschiu.com/display/NOT/Probability) of [[Confusion Matrix - Contingency Table (True／False Positives／Negatives - Type I／II／One／Two Error) - Micro／Macro Averaging|true positives]]

<strong>specificity</strong> or <strong>selectivity rate</strong> or <strong>true negative rate</strong> measures the probability of [[True／False Positive／Negative Sensitivity Recall Hit／Miss／False-Discovery／False-Omission Rate Fall-Out Threat／F1 Score Critical Success Index Accuracy Specificity Precision Predictive-Value|true negatives]]
# Sensitivity

Sensitivity is a measurement that determines the probability of actual positives. In other words, this test feature mainly focuses on identifying the sample members who are actually positive towards the tested property
```
Sensitivity = Number of true positives /[ Number of true positives + Number of false negatives]
```

one should not think sensitivity means precision. Precision delivers a ratio of positive results to the false positive results, whereas sensitivity is a measure of the ratio of actual positives to the total of positives the test measured, including the indirectly counted ones
# Specificity

Specificity is a measurement that determines the probability of actual negatives. The focus of this measurement is to find out the sample members who are actually negative towards the tested property
```
Specificity = Number of true negatives / [Number of true negatives + Number of false positives]
```

![[Sensitivity vs Specificity/Difference-Between-Sensitivity-and-Specificity_Figure-1.png|350]]

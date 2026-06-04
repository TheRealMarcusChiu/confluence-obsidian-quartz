---
title: "F1 Score - F Score - F Measure"
created: 2021-09-13T05:27:49.944-05:00
modified: 2021-12-21T18:54:17.268-06:00
parent: "[[True／False Positive／Negative Sensitivity Recall Hit／Miss／False-Discovery／False-Omission Rate Fall-Out Threat／F1 Score Critical Success Index Accuracy Specificity Precision Predictive-Value]]"
children: []
---
###### F1 Score - F Score - F Measure
- one type of evaluation/performance measures
- is the [[Harmonic Mean (HM)|harmonic mean]] of precision and recall

# Formula
- 𝐹<sub>𝛽</sub> = \[(𝛽+1)·𝑃 ·𝑅\] / \[𝛽<sup>2</sup>𝑃 + 𝑅\]

where:
- 𝑃 - [[True／False Positive／Negative Sensitivity Recall Hit／Miss／False-Discovery／False-Omission Rate Fall-Out Threat／F1 Score Critical Success Index Accuracy Specificity Precision Predictive-Value|precision]]
- 𝑅 - [[True／False Positive／Negative Sensitivity Recall Hit／Miss／False-Discovery／False-Omission Rate Fall-Out Threat／F1 Score Critical Success Index Accuracy Specificity Precision Predictive-Value|recall]]
- 𝛽 - is a parameter that differentially weights the importance of recall and precision
	- 𝛽 \> 1 - recall is favored
	- 𝛽 \< 1 - precision is favored
	- 𝛽 = 1 - both equally favored (thus, 𝐹<sub>𝛽=1</sub> = \[2·𝑃 ·𝑅\] / \[𝑃 + 𝑅\])

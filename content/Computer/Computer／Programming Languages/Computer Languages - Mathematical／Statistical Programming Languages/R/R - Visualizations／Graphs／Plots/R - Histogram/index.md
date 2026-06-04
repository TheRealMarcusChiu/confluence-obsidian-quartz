---
title: "R - Histogram"
created: 2021-08-21T19:04:00.021-05:00
modified: 2021-08-21T19:14:20.871-05:00
parent: "[[R - Visualizations／Graphs／Plots]]"
children: []
---
Creating [[Histogram]] in R
# Download & Import Data-Set

[https://github.com/r-programming-examples/data-sets/blob/master/Baseball%20Salaries%202011.xlsx](https://github.com/r-programming-examples/data-sets/blob/master/Baseball%20Salaries%202011.xlsx)

To import data see: [[R - Data Importing]]
# Install Packages

To install packages see: [[R - Packages]]
# Via graphics Package
```
hist(salaries$Salary)
```

![[R - Histogram/r-histogram-1.png]]
# Via ggplot2 Package
```
library(ggplot2)

ggplot(salaries, aes(Salary)) + 
        geom_histogram(colour = "black", fill = "white") +
        scale_x_log10(labels = scales::dollar) +          # x axis log & $$ labels
        geom_vline(aes(xintercept = mean(Salary)), color = "red", linetype = "dashed") +  # add line for mean
        annotate("text", x = mean(salaries$Salary) * 2, y = 155, label = paste0("Avg: $", round(mean(salaries$Salary)/1000000, 1),"M"))
```

![[R - Histogram/r-histogram-2.png]]

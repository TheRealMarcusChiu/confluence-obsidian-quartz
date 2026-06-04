---
title: "R - Boxplot"
created: 2021-08-21T18:06:35.758-05:00
modified: 2021-08-21T19:02:10.443-05:00
parent: "[[R - Visualizations／Graphs／Plots]]"
children: []
---
Creating [[Box Plot - Boxplot|Boxplots]] in R
# Download & Import Data-Set

[https://github.com/r-programming-examples/data-sets/blob/master/Baseball%20Salaries%202011.xlsx](https://github.com/r-programming-examples/data-sets/blob/master/Baseball%20Salaries%202011.xlsx)

To import data see: [[R - Data Importing]]
# Install Packages

To install packages see: [[R - Packages]]
# Via graphics Package
```
boxplot(salaries$Salary, horizontal = TRUE, log = "x")
```

![[R - Boxplot/r-boxplot-1.png|301]]
# Via ggplot Package
```
ggplot(salaries, aes(x = factor(0), y = Salary)) +
        geom_boxplot() +
        xlab("") +
        scale_x_discrete(breaks = NULL) +
        scale_y_log10(labels = scales::dollar) +
        coord_flip() +
        geom_jitter(shape = 16, position = position_jitter(0.4), alpha = .3) +
        stat_summary(fun.y = mean, geom = "point", shape = 23, size = 4, fill = "blue")
```

![[R - Boxplot/r-boxplot-2.png|301]]
```
ggplot(salaries, aes(x = Position, y = Salary)) +
        geom_boxplot() +
        scale_y_continuous(labels = scales::dollar) +
        coord_flip()
```

![[R - Boxplot/r-boxplot-3.png|400]]

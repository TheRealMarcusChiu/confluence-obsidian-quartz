---
title: "R - Packages"
created: 2021-08-18T21:27:21.106-05:00
modified: 2021-08-18T21:30:56.629-05:00
parent: "[[R]]"
children:
  - "[[Comprehensive R Archive Network (CRAN)]]"
---
# Installing Packages

The most common place to get packages from is CRAN. To install packages from CRAN you use <code>install.packages("packagename")</code>. For instance, if you want to install the <code>ggplot2</code> package, which is a very popular visualization package you would type the following in the console:
```
# install package from CRAN
install.packages("ggplot2") 
```

As previously stated, packages are also available through Bioconductor and GitHub. Bioconductor provides R packages primarily for genomic data analyses and packages on GitHub are usually under development but have not gone through all the checks and balances to be loaded onto CRAN (aka download and use these packages at your discretion). You can learn how to install Bioconductor packages [here](https://www.bioconductor.org/install/) and GitHub packages [here](https://cran.r-project.org/web/packages/githubinstall/vignettes/githubinstall.html).
# Loading Packages

Once the package is downloaded to your computer you can access the functions and resources provided by the package in two different ways:
```
# load the package to use in the current R session
library(packagename)

# use a particular function within a package without loading the package
packagename::functionname 
```

For instance, if you want to have full access to the tidyr package you would use <code>library(tidyr)</code>; however, if you just wanted to use the <code>gather()</code> function which is provided by the tidyr package without fully loading tidyr you can use <code>tidyr::gather(...)</code> (here <code>...</code> just represents the arguments that you would include in this function)
# Getting Help on Packages

For more direct help on packages that are installed on your computer you can use the <code>help</code> and <code>vignette</code> functions. Here we can get help on the <code>ggplot2</code> package with the following:
```
help(package = "ggplot2")     # provides details regarding contents of a package
vignette(package = "ggplot2") # list vignettes available for a specific package
vignette("ggplot2-specs")     # view specific vignette 
vignette()                    # view all vignettes on your computer 
```

Note that some packages will have multiple vignettes. For instance <code>vignette(package = "grid")</code> will list the 13 vignettes available for the grid package. To access one of the specific vignettes you simply use <code>vignette("vignettename")</code>.

---
title: "Gradle"
created: 2019-03-15T22:15:24.179-05:00
modified: 2019-12-13T11:13:56.791-06:00
parent: "[[Java - Build Tools]]"
children:
  - "[[gradle binary]]"
  - "[[gradlew]]"
---
````excerpt
<strong>Gradle</strong> is an open source, advanced general purpose [[2 - Build Tools／Systems|build management system]]. It is built on [[Apache - Ant|ANT]], [[Apache - Maven|Maven]], and lvy repositories. It supports [[Groovy]] based Domain Specific Language (DSL) over [[Extensible Markup Language (XML)|XML]]
````
^excerpt

### Commands
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

### Difference Between gradle and ./gradlew

./gradlew indicates you are using a gradle wrapper. The wrapper is generally part of a project and it facilitates installation of gradle. If you were using gradle without the wrapper you would have to manually install it - for example, on a mac brew install gradle and then invoke gradle using the gradle command. In both cases you are using gradle, but the former is more convenient and ensures version consistency across different machines

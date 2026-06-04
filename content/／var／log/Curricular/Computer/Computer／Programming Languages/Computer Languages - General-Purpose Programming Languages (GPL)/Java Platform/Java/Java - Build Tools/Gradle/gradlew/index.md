---
title: "gradlew"
created: 2019-03-15T22:24:38.064-05:00
modified: 2019-03-15T22:24:58.891-05:00
parent: "[[Gradle]]"
children: []
---
./gradlew indicates you are using a gradle wrapper. The wrapper is generally part of a project and it facilitates installation of gradle. If you were using gradle without the wrapper you would have to manually install it - for example, on a mac brew install gradle and then invoke gradle using the gradle command. In both cases you are using gradle, but the former is more convenient and ensures version consistency across different machines

Each Wrapper is tied to a specific version of Gradle, so when you first run one of the commands above for a given Gradle version, it will download the corresponding Gradle distribution and use it to execute the build.

Not only does this mean that you don’t have to manually install Gradle yourself, but you are also sure to use the version of Gradle that the build is designed for. This makes your historical builds more reliable

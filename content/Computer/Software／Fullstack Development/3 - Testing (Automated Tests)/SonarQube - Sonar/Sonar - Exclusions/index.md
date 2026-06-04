---
title: "Sonar - Exclusions"
created: 2021-05-18T14:19:41.835-05:00
modified: 2021-05-18T14:21:37.522-05:00
parent: "[[SonarQube - Sonar]]"
children: []
---
# 1 - Code Example

Exclusion from everything
```
<properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <sonar.host.url>http://www.example.com/</sonar.host.url>
    <sonar.jdbc.url>jdbc:postgresql://www.example.com/sonar</sonar.jdbc.url>
    <sonar.jdbc.driver>org.postgresql.Driver</sonar.jdbc.driver>
    <sonar.jdbc.username>sonar</sonar.jdbc.username>
    <sonar.jdbc.password>sonar</sonar.jdbc.password>
    <sonar.exclusions>org/binarytherapy/generated/**/*, **/GuiceBindComposer.java</sonar.exclusions>
    <sonar.dynamic>reuseReports</sonar.dynamic>
</properties>
```

Exclusion from code coverage
```
<properties>
    <sonar.coverage.exclusions>
        **/domain/**/*,
        **/pojos/*
    </sonar.coverage.exclusions>
</properties>
```
# 2 - References
- [https://docs.sonarqube.org/display/SONAR/Analysis+Parameters#AnalysisParameters-Exclusions/Inclusions](https://docs.sonarqube.org/display/SONAR/Analysis+Parameters#AnalysisParameters-Exclusions/Inclusions)
- [https://docs.sonarqube.org/display/SONAR/Narrowing+the+Focus#NarrowingtheFocus-IgnoreCodeCoverage](https://docs.sonarqube.org/display/SONAR/Narrowing+the+Focus#NarrowingtheFocus-IgnoreCodeCoverage)
- [https://docs.sonarqube.org/display/SONAR/Analysis+Parameters#AnalysisParameters-Exclusions/Inclusions](https://docs.sonarqube.org/display/SONAR/Analysis+Parameters#AnalysisParameters-Exclusions/Inclusions)
- [https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner+for+Maven#AnalyzingwithSonarQubeScannerforMaven-ExcludingamodulefromSonarQubeanalysis](https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner+for+Maven#AnalyzingwithSonarQubeScannerforMaven-ExcludingamodulefromSonarQubeanalysis)

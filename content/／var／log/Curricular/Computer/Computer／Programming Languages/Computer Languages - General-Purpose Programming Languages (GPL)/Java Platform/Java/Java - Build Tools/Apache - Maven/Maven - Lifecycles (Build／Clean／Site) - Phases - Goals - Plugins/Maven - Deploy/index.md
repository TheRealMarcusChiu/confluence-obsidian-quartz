---
title: "Maven - Deploy"
created: 2021-05-19T22:29:30.494-05:00
modified: 2021-05-19T22:31:04.393-05:00
parent: "[[Maven - Lifecycles (Build／Clean／Site) - Phases - Goals - Plugins]]"
children: []
---
[https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry#publishing-a-package](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry#publishing-a-package)
### Commands
- mvn deploy
- mvn deploy:deploy-file -Durl=file:./repository -Dfile=marcus-chiu.jar -DgroupId=com.marcuschiu -DartifactId=marcus-chiu -Dversion=0.1.0

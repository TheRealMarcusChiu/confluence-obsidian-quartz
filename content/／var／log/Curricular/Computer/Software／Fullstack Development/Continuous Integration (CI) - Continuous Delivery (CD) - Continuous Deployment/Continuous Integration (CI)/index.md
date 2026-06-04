---
title: "Continuous Integration (CI)"
created: 2019-12-16T13:30:30.749-06:00
modified: 2022-03-24T23:52:54.740-05:00
parent: "[[Continuous Integration (CI) - Continuous Delivery (CD) - Continuous Deployment]]"
children:
  - "[[Integrating CI & Git]]"
---
````excerpt
<strong>[[Continuous Integration (CI)]]</strong> - the practice where developers continuously integrate/merge their changes back to the main branch as often as possible. The changes are then validated by creating a build via [[2 - Build Tools／Systems|build-tools]] and running [[3 - Testing (Automated Tests)|automated tests]] against the build to check that the application is not broken whenever new commits are integrated into the main branch
````
^excerpt

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [Martin Fowler's Article](https://martinfowler.com/articles/continuousIntegration.html#KeepTheBuildFast)

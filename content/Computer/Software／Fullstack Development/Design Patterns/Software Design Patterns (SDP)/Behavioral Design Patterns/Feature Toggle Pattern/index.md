---
title: "Feature Toggle Pattern"
created: 2021-10-29T20:20:43.169-05:00
modified: 2026-01-11T00:03:53.620-06:00
parent: "[[Behavioral Design Patterns]]"
children: []
---
###### Feature Toggle Pattern
````excerpt
- enable or disable features at runtime without deploying new code, allowing dynamic control over functionality for testing, gradual rollouts, or experimentation
- used to switch code execution paths based on properties or groupings. Allowing new features to be released, tested, and rolled out. Allowing switching back to the older feature quickly if needed. It should be noted that this pattern, can easily introduce code complexity. There is also cause for concern that the old feature that the toggle is eventually going to phase out is never removed, causing redundant code smells and increased maintainability
- see: [[Feature Toggles／Flags (Release／Experiment／Ops／Permissioning)|Feature Toggles/Flags (Release/Experiment/Ops/Permissioning)]]
````
^excerpt

# Code Example
![[Feature Toggle Pattern/feature-toggle.png|700]]
# Applicability

Use the Feature Toggle pattern when
- Giving different features to different users.
- Rolling out a new feature incrementally.
- Switching between development and production environments.

# Resources
- [https://java-design-patterns.com/patterns/feature-toggle/](https://java-design-patterns.com/patterns/feature-toggle/)

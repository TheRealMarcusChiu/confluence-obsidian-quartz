---
title: "Honeypots - Sticky Honeypots ／ Tarpits"
created: 2023-04-29T11:47:23.682-05:00
modified: 2023-04-29T11:53:17.118-05:00
parent: "[[Hacking - Software]]"
children:
  - "[[EndlessH]]"
---
###### Honeypot
````excerpt
- is a computer security mechanism set to detect, deflect, or, in some manner, counteract attempts at unauthorized use of information systems
````
^excerpt

###### Sticky Honeypot - Tarpit
- a honeypot that acts as a decoy, luring in potential hackers and responding in a way that causes their machine to get “stuck”, sometimes for a very long time

# Honeypots
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

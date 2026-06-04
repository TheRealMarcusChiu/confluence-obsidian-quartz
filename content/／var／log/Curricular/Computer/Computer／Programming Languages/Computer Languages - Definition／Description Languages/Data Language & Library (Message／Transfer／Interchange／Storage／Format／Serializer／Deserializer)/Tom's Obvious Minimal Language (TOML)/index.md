---
title: "Tom's Obvious Minimal Language (TOML)"
created: 2022-10-21T16:33:08.826-05:00
modified: 2022-10-21T16:34:31.703-05:00
parent: "[[Data Language & Library (Message／Transfer／Interchange／Storage／Format／Serializer／Deserializer)]]"
children: []
---
###### Tom's Obvious Minimal Language (TOML)
- is a type of config file language format
- [https://toml.io/en/](https://toml.io/en/)

# Example TOML File
```
# This is a TOML document

title = "TOML Example"

[owner]
name = "Tom Preston-Werner"
dob = 1979-05-27T07:32:00-08:00

[database]
enabled = true
ports = [ 8000, 8001, 8002 ]
data = [ ["delta", "phi"], [3.14] ]
temp_targets = { cpu = 79.5, case = 72.0 }

[servers]

[servers.alpha]
ip = "10.0.0.1"
role = "frontend"

[servers.beta]
ip = "10.0.0.2"
role = "backend"
```

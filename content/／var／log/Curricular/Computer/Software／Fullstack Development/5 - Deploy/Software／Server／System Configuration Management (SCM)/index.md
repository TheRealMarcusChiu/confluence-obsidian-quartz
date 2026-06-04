---
title: "Software／Server／System Configuration Management (SCM)"
created: 2019-03-16T02:06:53.900-05:00
modified: 2025-11-03T14:55:48.722-06:00
parent: "[[5 - Deploy]]"
children:
  - "[[Ansible]]"
  - "[[Chef]]"
  - "[[Nix]]"
  - "[[Vagrant]]"
---
For most people, computers don't stay the same. Software is added, removed, and updated. Configurations are changed. Think about the changes you've made to your computer since the first time you booted it up. Now imagine making those changes to 10, 100, or 1,000 more computers. <strong>Software/Server/System Configuration Management (SCM)</strong> tools are what make implementing and enforcing these changes possible.

not to be confused with [[Version Control System (VCS) - Source Control Management (SCM)|Source Control Management (SCM)]]

<strong>Software/Server/System Configuration Management </strong>is all processes to manage all the changes of the software:
- development ([[Version Control System (VCS) - Source Control Management (SCM)|Version Control System (VCS)]])
- delivery release (VCS)
- bug tracking
- software settings
- host/network settings
- version/settings of the other software interacting with...

# SCM - Language Types

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Types</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "imperative",
        "bg": "#F4F5F7"
      },
      "- declares how to do it\n- provides more flexibility",
      "```\nIf node['platform'] == \"debian\"\n   execute \"install apache2\" do\n      command \"apt-get install apache2 -y\"\n   end\nend\n```"
    ],
    [
      {
        "content": "declarative",
        "bg": "#F4F5F7"
      },
      "- declares what it wants at the end (ignoring how it got there)\n- easier to implement and read",
      "```\npackage `apache2`\n```"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# SCM - Frameworks
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- IBM Rational Synergy
- WindowsDSC
- SaltStack
- Octopus
- CFEngine
- Puppet

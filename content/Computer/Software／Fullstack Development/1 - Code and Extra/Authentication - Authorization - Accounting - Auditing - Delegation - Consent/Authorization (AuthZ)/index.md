---
title: "Authorization (AuthZ)"
created: 2019-09-16T15:25:53.002-05:00
modified: 2026-01-25T19:48:03.269-06:00
parent: "[[Authentication - Authorization - Accounting - Auditing - Delegation - Consent]]"
children: []
---
###### Authorization (AuthZ)
````excerpt
- is the process of verifying what someone is allowed to do & occurs after [[Authentication (AuthN)|authentication]] of identity
````
^excerpt

# Grant Access Control (GAC) Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Role-Based Access Control (RBAC)",
        "bg": "#F4F5F7"
      },
      "- Assigns permissions based on predefined <strong>user roles</strong> (e.g., Admin, Editor, Viewer)\n- Simplifies access management by grouping permissions\n- Ideal for applications with <strong>clear and stable role definitions</strong>\n- Makes permission allocation straightforward and easy to maintain"
    ],
    [
      {
        "content": "Attribute-Based Access Control (ABAC)",
        "bg": "#F4F5F7"
      },
      "- Grants access based on <strong>user or environmental attributes</strong>\n\t- Examples: location, time of access, device type\n- Provides <strong>dynamic and context-aware</strong> access control\n- More flexible than RBAC\n- Well-suited for applications requiring <strong>fine-grained, situational permissions</strong>"
    ],
    [
      {
        "content": "Access Control Lists (ACLs)",
        "bg": "#F4F5F7"
      },
      "- Define permissions <strong>per individual resource</strong>\n- Allow highly <strong>granular control</strong> over access\n- Each file, record, or object can have its own access rules\n- Useful for <strong>resource-level permission management</strong>"
    ],
    [
      {
        "content": "Policy-Based Access Control (PBAC)",
        "bg": "#F4F5F7"
      },
      "- Uses centralized <strong>policies</strong> to determine access\n- Can evaluate multiple factors simultaneously\n- Supports both <strong>RBAC and ABAC</strong>\n- Ideal for <strong>complex systems</strong> with detailed access requirements\n- Especially useful in <strong>microservices architectures</strong> due to layered control"
    ]
  ]
}
```

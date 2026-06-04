---
title: "ROA - Examples"
created: 2019-11-22T14:33:27.482-06:00
modified: 2022-11-26T02:56:50.650-06:00
parent: "[[Route Origin Authorization (ROA)]]"
children: []
---
In all examples, you are the holder of 10.0.0.0/16. The goal of each example is to make the BGP announcements get the status RPKI VALID.
# Example 1: Announcing the Entire Aggregate

> [!expand]- Click here to expand...
> ###### BGP Announcement
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Origin AS",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Prefix",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "AS64500",
>       "10.0.0.0/16"
>     ]
>   ]
> }
> ```
> ###### ROA
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "AS Number",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Prefix",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Maximum Length",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "AS64500",
>       "10.0.0.0/16",
>       "16"
>     ]
>   ]
> }
> ```
# Example 2: Announcing More Specific Prefixes

> [!expand]- Click here to expand...
> ###### BGP Announcements
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Origin AS",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Prefix",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "AS64500",
>       "10.0.10.0/22"
>     ],
>     [
>       "AS64500",
>       "10.0.20.0/24"
>     ]
>   ]
> }
> ```
> ###### ROAs (Loose Option)
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "AS Number",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Prefix",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Maximum Length",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "AS64500",
>       "10.0.0.0/16",
>       "24"
>     ]
>   ]
> }
> ```
>
> The advantage of creating a ROA that authorizes the entire aggregate is that it requires no changes when additional announcements from the address block are made from the same ASN. The disadvantage is that it opens you up to a certain type of hijack: when an attacker spoofs AS64500 and starts originating 10.0.30.0/24 (which you don't announce), it will be seen as an RPKI VALID announcement. You can prevent this by creating the following ROAs:
> ###### ROAs (Strict Option)
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "AS Number",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Prefix",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Maximum Length",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "AS64500",
>       "10.0.10.0/22",
>       "22"
>     ],
>     [
>       "AS64500",
>       "10.0.20.0/24",
>       "24"
>     ]
>   ]
> }
> ```
>
> The result is that any other announcement – from the real AS, or a spoofed one by an attacker – will be seen as RPKI INVALID. The disadvantage is that every time you want to start announcing another prefix out of the aggregate, additional ROAs need to be created.
# Example 3: Announcing from Multiple ASNs

> [!expand]- Click here to expand...
> ###### BGP Announcements
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Origin AS",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Prefix",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "AS64500",
>       "10.0.0.0/16"
>     ],
>     [
>       "AS64511",
>       "10.0.16.0/20"
>     ]
>   ]
> }
> ```
> ###### ROAs
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "AS Number",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Prefix",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Maximum Length",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "AS64500",
>       "10.0.0.0/16",
>       "16"
>     ],
>     [
>       "AS64511",
>       "10.0.16.0/20",
>       "20"
>     ]
>   ]
> }
> ```
>
> In this example, you must create a ROA for both BGP announcements to make them RPKI VALID.
>
> If you do not create a ROA to authorize AS64511, the announcement will be RPKI INVALID. This is because the /20 prefix is completely covered by the /16 aggregate, and it is announced from an unauthorized ASN.
>
> Conversely, If you only create a ROA that authorizes AS64511 to originate 10.0.16.0/20, the 10.0.0.0/16 announcement from AS64500 will have the status RPKI UNKNOWN, because the /20 partially overlaps the /16.

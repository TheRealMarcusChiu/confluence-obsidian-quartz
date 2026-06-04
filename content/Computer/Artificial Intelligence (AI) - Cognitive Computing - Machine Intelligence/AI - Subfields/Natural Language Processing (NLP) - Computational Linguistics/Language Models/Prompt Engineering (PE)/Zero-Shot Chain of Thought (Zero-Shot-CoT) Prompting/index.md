---
title: "Zero-Shot Chain of Thought (Zero-Shot-CoT) Prompting"
created: 2023-08-04T13:53:17.691-05:00
modified: 2023-08-04T13:59:34.597-05:00
parent: "[[Prompt Engineering (PE)]]"
children: []
---
###### Zero-Shot Chain of Thought (Zero-Shot-CoT) Prompting
````excerpt
- a follow-up to [[Chain of Thought (CoT) Prompting|CoT prompting]], which introduces an incredibly simple zero-shot prompt by just APPENDING:
	- <strong><code><font style="color: rgb(122,134,154);">Let's think step by step.</font></code></strong>
````
^excerpt

# Zero-Shot CoT - Example

```merge-table
{
  "rows": [
    [
      {
        "content": "Without",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "With",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "###### Prompt\n<code><font style=\"color: rgb(122,134,154);\">If John has 5 pears, then eats 2, and buys 5 more, then gives 3 to his friend, how many pears does he have?</font></code>\n###### Output (<font style=\"color: rgb(255,0,0);\">WRONG</font>)\n<code><font style=\"color: rgb(122,134,154);\">John has 8 pears.</font></code>",
      "###### Prompt\n<code><font style=\"color: rgb(122,134,154);\">If John has 5 pears, then eats 2, and buys 5 more, then gives 3 to his friend, how many pears does he have?</font></code>\n\n<strong><code><font style=\"color: rgb(122,134,154);\">Let's think step by step.</font></code></strong>\n###### Output (<font style=\"color: rgb(0,128,0);\">CORRECT</font>)\n<code><font style=\"color: rgb(122,134,154);\">John starts with 5 pears. He eats 2 pears, leaving him with 3 pears. He buys 5 more pears, giving him a total of 8 pears. He gives 3 pears to his friend, leaving him with only 5 pears.</font></code>"
    ]
  ],
  "tableStyle": "width: 76.0781%;"
}
```

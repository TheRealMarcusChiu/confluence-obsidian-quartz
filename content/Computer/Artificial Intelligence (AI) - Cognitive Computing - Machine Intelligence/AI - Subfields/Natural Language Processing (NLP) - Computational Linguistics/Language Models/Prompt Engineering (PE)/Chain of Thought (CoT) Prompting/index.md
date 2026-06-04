---
title: "Chain of Thought (CoT) Prompting"
created: 2023-08-04T13:43:24.532-05:00
modified: 2023-08-04T13:53:13.357-05:00
parent: "[[Prompt Engineering (PE)]]"
children: []
---
###### Chain of Thought (CoT) Prompting
````excerpt
- a prompting method that encourages the LLM to explain its reasoning
````
^excerpt

# CoT - Example

```merge-table
{
  "rows": [
    [
      {
        "content": "Without CoT",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "With CoT",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "###### Prompt\n<code>Which is a faster way to get to work?\nOption 1: Take a 1000 minute bus, then a half hour train, and finally a 10 minute bike ride.\nOption 2: Take an 800 minute bus, then an hour train, and finally a 30 minute bike ride.</code>\n###### Output (<font style=\"color: rgb(255,0,0);\">WRONG</font>)\n<code><font style=\"color: rgb(122,134,154);\">Option 1 is a faster way to get to work.</font></code>",
      "###### Prompt\n<strong><code><font style=\"color: rgb(122,134,154);\">Which is a faster way to get home?</font></code></strong>\n<strong><code><font style=\"color: rgb(122,134,154);\">Option 1: Take an 10 minutes bus, then an 40 minute bus, and finally a 10 minute train.</font></code></strong>\n<strong><code><font style=\"color: rgb(122,134,154);\">Option 2: Take a 90 minutes train, then a 45 minute bike ride, and finally a 10 minute bus.</font></code></strong>\n<strong><code><font style=\"color: rgb(122,134,154);\">Option 1 will take 10+40+10 = 60 minutes.</font></code></strong>\n<strong><code><font style=\"color: rgb(122,134,154);\">Option 2 will take 90+45+10=145 minutes.</font></code></strong>\n<strong><code><font style=\"color: rgb(122,134,154);\">Since Option 1 takes 60 minutes and Option 2 takes 145 minutes, Option 1 is faster.</font></code></strong>\n\n<code><font style=\"color: rgb(122,134,154);\">Which is a faster way to get to work?</font></code>\n<code><font style=\"color: rgb(122,134,154);\">Option 1: Take a 1000 minute bus, then a half hour train, and finally a 10 minute bike ride.</font></code>\n<code><font style=\"color: rgb(122,134,154);\">Option 2: Take an 800 minute bus, then an hour train, and finally a 30 minute bike ride.</font></code>\n###### Output (<font style=\"color: rgb(51,153,102);\">CORRECT</font>)\n<code><font style=\"color: rgb(122,134,154);\">Option 1 will take 1000+30+10 = 1040 minutes.</font></code>\n<code><font style=\"color: rgb(122,134,154);\">Option 2 will take 800+60+30 = 890 minutes.</font></code>\n<code><font style=\"color: rgb(122,134,154);\">Since Option 2 takes 890 minutes and Option 1 takes 1040 minutes, Option 2 is faster.</font></code>"
    ]
  ]
}
```

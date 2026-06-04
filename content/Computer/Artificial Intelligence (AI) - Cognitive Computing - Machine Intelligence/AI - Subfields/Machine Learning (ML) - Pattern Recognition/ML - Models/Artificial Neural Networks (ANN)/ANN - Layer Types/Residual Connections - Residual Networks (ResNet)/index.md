---
title: "Residual Connections - Residual Networks (ResNet)"
created: 2024-09-28T16:30:48.339-05:00
modified: 2024-09-29T11:03:40.841-05:00
parent: "[[ANN - Layer Types]]"
children: []
---
###### Residual Connections - Residual Networks (ResNet)
````excerpt
- helps solve the [[Vanishing Gradient Problem|vanishing gradient problem]]
- can train networks of up to 1000 layers
````
^excerpt

# General Idea

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Before</strong>",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<strong>After</strong>",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "![[Residual Connections - Residual Networks (ResNet)/resnet-idea.png|301]]",
        "align": "center",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "![[Residual Connections - Residual Networks (ResNet)/residual-connections.png|210]]",
        "align": "center",
        "colspan": 2
      },
      null
    ]
  ]
}
```
# ResNet Block
![[Residual Connections - Residual Networks (ResNet)/resnet-block.png]]
# ResNet Block Variants
![[Residual Connections - Residual Networks (ResNet)/resnet-block-variants.png]]
# What if Input and Output are Not the Same?

Add a linear layer to reshape.

![[Residual Connections - Residual Networks (ResNet)/residual-connections-differing-input-output-sizes.png|110]]

---
title: "RISC-V Pseudoinstructions"
created: 2025-07-14T19:28:02.989-05:00
modified: 2025-07-14T19:29:19.166-05:00
parent: "[[RISC-V]]"
children: []
---
###### RISC-V Pseudoinstructions
````excerpt
- [[Pseudoinstructions - Pseudo-Instructions|pseudoinstructions]] of [[RISC-V]]
````
^excerpt

# RISC-V Pseudoinstructions

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Pseudoinstruction</strong>",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "<strong>Implementation</strong>",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "<strong>Meaning</strong>",
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "nop",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "addi x0, x0, 0",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "No operation",
        "align": "left"
      }
    ],
    [
      {
        "content": "beqz rs, offset",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "beq rs, x0, offset",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Branch if equal to zero",
        "align": "left"
      }
    ],
    [
      {
        "content": "j offset",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "jal x0, offset",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Unconditional jump",
        "align": "left"
      }
    ],
    [
      {
        "content": "jal offset",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "jal x1, offset",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Jump and link",
        "align": "left"
      }
    ],
    [
      {
        "content": "jr rs",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "jalr x0, 0(rs)",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Jump register",
        "align": "left"
      }
    ],
    [
      {
        "content": "ret",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "jalr x0, 0(x1)",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Return from subroutine",
        "align": "left"
      }
    ],
    [
      {
        "content": "lla rd, symbol",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "auipc rd, symbol[31:12]\naddi rd, rd, symbol[11:0]",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Load local address",
        "align": "left"
      }
    ],
    [
      {
        "content": "li rd, immediate",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "lui rd, immediate[31:12]\naddi rd, rd, immediate[11:0]",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Load Immediate",
        "align": "left"
      }
    ],
    [
      {
        "content": "mv rd, rs",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "addi rd, rs, 0",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Copy register",
        "align": "left"
      }
    ],
    [
      {
        "content": "not rd, rs",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "xori rd, rs, -1",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "One’s complement",
        "align": "left"
      }
    ],
    [
      {
        "content": "bgt rs, rt, offset",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "blt rt, rs, offset",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Branch if greater than",
        "align": "left"
      }
    ],
    [
      {
        "content": "call offset",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "auipc x1, offset[31:12]\njalr x1, offset[11:0](x1)",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Call far-away subroutine",
        "align": "left"
      }
    ]
  ]
}
```

---
title: "Structure Learning"
created: 2021-09-13T05:26:35.202-05:00
modified: 2023-12-26T20:29:55.279-06:00
parent: "[[PGM - Model Learning (Structure and／or Parameter)]]"
children:
  - "[[Chow-Lui Algorithm]]"
  - "[[K3 Algorithm]]"
  - "[[Scored-Based Structure Learning]]"
  - "[[Structure Learning - Local Search]]"
---
# Structure Learning Methods
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Importance of Accurate Structure

```merge-table
{
  "rows": [
    [
      {
        "content": "assume the true distribution 𝐏 has the following structure\n\n![[Structure Learning/structure-learning-importance-of-accurate-structure.png|150]]\n\nnow let's see what happens when we learn from an INACCURATE structure",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "inaccurate structure with missing edge\n\n![[Structure Learning/structure-learning-importance-of-accurate-structure-2.png|150]]\n- incorrect independencies\n- cannot learn true distribution 𝐏\n- but could generalize better",
      "inaccurate structure with spurious edge\n\n![[Structure Learning/structure-learning-importance-of-accurate-structure-3.png|150]]\n- spurious dependencies\n- can learn true distribution 𝐏\n- increased number of parameters to learn\n- worse generalization"
    ]
  ]
}
```

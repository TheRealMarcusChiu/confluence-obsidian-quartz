---
title: "Differential Equations (DE) - Ordinary Differential Equations (ODEs) - Partial Differential Equations (PDEs)"
created: 2021-09-13T05:25:07.827-05:00
modified: 2025-10-01T11:29:00.284-05:00
parent: "[[Calculus]]"
children:
  - "[[DE - Stable - Unstable - Meta／Semi Stable]]"
  - "[[First-Order Differential Equations]]"
  - "[[Second-Order Differential Equations]]"
---
###### Differential Equation (DE)
````excerpt
- is an equation that relates one or more functions and their derivatives
- is an equation with a function and one or more of its derivatives
- <strong>Ordinary Differential Equations (ODEs)</strong> - deal with derivatives of a function with respect to a single independent variable
- <strong> Partial Differential Equations (PDEs)</strong> - involve [[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)|partial derivatives]] of a function with respect to multiple independent variables
````
^excerpt

# DE - Tutorials
- [Sal Khan's Series](https://www.khanacademy.org/math/differential-equations)
- [3Brown1Blue](https://www.youtube.com/playlist?list=PLZHQObOWTQDNPOjrT6KVlfJuKtYTftqH6)

# DE - Intuition

Say the population increases 𝑦(𝑡)' as the growth rate 𝑟 times the population 𝑦(𝑡) at time instant 𝑡. This states a differential equation shown below:

> [!indent]
> 𝑦(𝑡)' = 𝑟·𝑦(𝑡)

The problem is to find an equation 𝑦(𝑡) or set of equations that satisfy the differential equation above.

The solution is a class of functions of the form:

> [!indent]
> 𝑦(𝑡) = 𝑎·𝑒<sup>𝑟𝑡</sup><font style="color: rgb(128,128,128);">\# where 𝑎 can be any scalar value</font>

The differential equation above is of type <em>First-Order Linear Constant Coefficient Homogenous Differential Equation</em>.
There are several other types as shown below.
But there is no magic bullet to solve all Differential Equations
# DE - Types

dimensions:
- <strong>order</strong> (1<sup>st</sup>-Order, 2<sup>nd</sup>-Order, ..., N<sup>th</sup>-Order)
- <strong>linearity</strong> (linear or non-linear) - a differential equation is linear if the equation is a linear combination of {𝑦, 𝑦', ..., 𝑦<sup>(𝑛)</sup>}
- <strong>separability</strong> (separable or non-separable) - a differential equation is separable the following 2 conditions are met:
	- all the (𝑑𝑦 & 𝑦)'s can be moved to one side of the differential equation
	- all the (𝑑𝑥 & 𝑥)'s can be moved to another side of the differential equation
```merge-table
{
  "rows": [
    [
      {
        "content": "Order",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Form",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Specific Forms",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[First-Order Differential Equations|First-Order DE]]",
        "bg": "#F4F5F7"
      },
      "<font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(51,51,51);\">𝑦' = 𝐹(𝑦, 𝑥)</font></font>",
      "> [!expand]- Click here to expand...\n> - <font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(51,51,51);\"><strong>1<sup>st</sup>-Order Separable DE:</strong> 𝑃(𝑦, 𝑑𝑦) = 𝑄(𝑥, 𝑑𝑥)<font style=\"color: rgb(128,128,128);\"> \\# 𝑒.𝑔. </font><font style=\"color: rgb(128,128,128);\">𝑦' = 𝑥/𝑦</font></font></font>\n> - <font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(51,51,51);\"><strong>1<sup>st</sup>-Order Homogenous DE:</strong> 𝑦' = 𝐹(𝑦/𝑥) <font style=\"color: rgb(128,128,128);\">\\# 𝑒.𝑔. </font><font style=\"color: rgb(128,128,128);\">𝑦' = (𝑥<sup>2</sup> + 𝑦<sup>2</sup>)/𝑥𝑦</font></font></font>\n> - <font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(51,51,51);\"><strong>1<sup>st</sup>-Order Bernoulli DE:</strong> 𝑦' + 𝑃(𝑥)𝑦 = 𝑄(𝑥)𝑦<sup>𝑛</sup> <font style=\"color: rgb(128,128,128);\">\\# 𝑛∉{0,1}</font></font></font>\n> - <font style=\"color: rgb(128,0,0);\"><strong><font style=\"color: rgb(51,51,51);\">1<sup>st</sup>-Order Linear DE:</font> </strong>𝑓(𝑥) = 𝑃(𝑥)𝑦 + 𝑄(𝑥)𝑦'</font>\n> \t- <font style=\"color: rgb(128,0,0);\"><strong><font style=\"color: rgb(51,51,51);\">1<sup>st</sup>-Order Linear Homogenous DE:</font> </strong><font style=\"color: rgb(255,0,0);\">0</font> = 𝑃(𝑥)𝑦 + 𝑄(𝑥)𝑦'</font>\n> \t- <font style=\"color: rgb(128,0,0);\"><strong><font style=\"color: rgb(51,51,51);\">1<sup>st</sup>-Order Linear Constant Coefficient DE:</font> </strong>𝑓(𝑥) = 𝑝𝑦 + 𝑞𝑦'</font>\n> \t- <font style=\"color: rgb(128,0,0);\"><strong><font style=\"color: rgb(51,51,51);\">1<sup>st</sup>-Order Linear Constant Coefficient Homogenous DE:</font> </strong><font style=\"color: rgb(255,0,0);\">0</font> = 𝑝𝑦 + 𝑞𝑦'</font>"
    ],
    [
      {
        "content": "[[Second-Order Differential Equations|Second-Order DE]]",
        "bg": "#F4F5F7"
      },
      "<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(51,51,51);\">𝑦'' = 𝐹(𝑦', 𝑦, 𝑥)</font></font></font>",
      "> [!expand]- Click here to expand...\n> - <font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(128,0,0);\"><strong><font style=\"color: rgb(51,51,51);\"><strong><strong>2<sup>nd</sup></strong>-Order Separable DE:</strong> </font></strong></font></font>\n> - <font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(128,0,0);\"><strong><font style=\"color: rgb(51,51,51);\">2<sup>nd</sup>-Order Linear DE:</font> </strong>𝑓(𝑥) =</font><font style=\"color: rgb(128,0,0);\">𝑃</font><font style=\"color: rgb(128,0,0);\">(𝑥)𝑦 + </font><font style=\"color: rgb(128,0,0);\">𝑄</font><font style=\"color: rgb(128,0,0);\">(𝑥)𝑦'</font> + </font><font style=\"color: rgb(0,128,0);\">𝑅(𝑥)</font><font style=\"color: rgb(0,128,0);\">𝑦''</font>\n> \t- <font style=\"color: rgb(128,0,0);\"><strong><font style=\"color: rgb(51,51,51);\">2<sup>nd</sup>-Order Linear Homogenous DE:</font> </strong><font style=\"color: rgb(255,0,0);\">0</font> = 𝑃(𝑥)𝑦 + 𝑄(𝑥)𝑦'<font style=\"color: rgb(0,128,0);\"> + </font><font style=\"color: rgb(0,128,0);\">𝑅(𝑥)</font><font style=\"color: rgb(0,128,0);\">𝑦''</font></font>\n> \t- <font style=\"color: rgb(128,0,0);\"><strong><font style=\"color: rgb(51,51,51);\">2<sup>nd</sup>-Order Linear Constant Coefficient DE:</font> </strong>𝑓(𝑥) = 𝑝𝑦 + 𝑞𝑦'<font style=\"color: rgb(0,128,0);\"> + </font><font style=\"color: rgb(0,128,0);\">𝑟</font><font style=\"color: rgb(0,128,0);\">𝑦''</font></font>\n> \t- <font style=\"color: rgb(128,0,0);\"><strong><font style=\"color: rgb(51,51,51);\">2<sup>nd</sup>-Order Linear Constant Coefficient Homogenous DE:</font> </strong><font style=\"color: rgb(255,0,0);\">0</font> = 𝑝𝑦 + 𝑞𝑦'<font style=\"color: rgb(0,128,0);\"> + </font><font style=\"color: rgb(0,128,0);\">𝑟</font><font style=\"color: rgb(0,128,0);\">𝑦''</font></font>"
    ],
    [
      {
        "content": "N<sup>th</sup>-Order DE",
        "bg": "#F4F5F7"
      },
      "<font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(51,51,51);\">𝑦<sup>(𝑛)</sup> = 𝐹(𝑦<sup>(𝑛-1)</sup>, ..., 𝑦, 𝑥)</font></font>",
      "> [!expand]- Click here to expand...\n> - <font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(51,51,51);\"><strong><strong><strong><strong>N<sup>th</sup></strong>-Order Separable DE:</strong> </strong></strong></font></font>\n> - <font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(51,51,51);\"><strong>N<sup>th</sup>-Order Linear DE:</strong> </font>𝑓(𝑥) = 𝑃(𝑥)𝑦 + 𝑄(𝑥)𝑦'</font><font style=\"color: rgb(0,128,0);\"> + </font><font style=\"color: rgb(0,128,0);\">𝑅(𝑥)</font><font style=\"color: rgb(0,128,0);\">𝑦''</font><font style=\"color: rgb(255,102,0);\"> + ... + 𝑍(𝑥)𝑦<sup>(𝑛)</sup></font>\n> \t- <strong>N<sup>th</sup>-Order Linear Homogenous DE:</strong><font style=\"color: rgb(255,0,0);\">0</font><font style=\"color: rgb(128,0,0);\"> = 𝑃(𝑥)𝑦 + 𝑄(𝑥)𝑦'</font><font style=\"color: rgb(0,128,0);\"> + </font><font style=\"color: rgb(0,128,0);\">𝑅(𝑥)</font><font style=\"color: rgb(0,128,0);\">𝑦''<font style=\"color: rgb(255,102,0);\"> + ... + 𝑍(𝑥)𝑦<sup>(𝑛)</sup></font></font>\n> \t- <font style=\"color: rgb(0,128,0);\"><strong><font style=\"color: rgb(51,51,51);\">N<sup>th</sup>-Order Linear Constant Coefficient DE:</font> </strong>𝑓(𝑥) = 𝑝𝑦 + 𝑞𝑦' + 𝑟𝑦''<font style=\"color: rgb(255,102,0);\"> + ... + 𝑧𝑦<sup>(𝑛)</sup></font></font>\n> \t- <font style=\"color: rgb(128,0,0);\"><strong><font style=\"color: rgb(51,51,51);\">N<sup>th</sup>-Order Linear Constant Coefficient Homogenous DE:</font> </strong><font style=\"color: rgb(255,0,0);\">0</font> = 𝑝𝑦 + 𝑞𝑦'<font style=\"color: rgb(0,128,0);\"> + </font><font style=\"color: rgb(0,128,0);\">𝑟</font><font style=\"color: rgb(0,128,0);\">𝑦''<font style=\"color: rgb(255,102,0);\"> + ... + 𝑧𝑦<sup>(𝑛)</sup></font></font></font>"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# DE - Methods to Solve Differential Equations

Below is from[Physics Students Need to Know These 5 Methods for Differential Equations](https://www.youtube.com/watch?v=0kY3Wpvutfs)

```merge-table
{
  "rows": [
    [
      {
        "content": "Method",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Substitution",
        "bg": "#F4F5F7"
      },
      "TODO from the link above"
    ],
    [
      {
        "content": "Energy Conservation",
        "bg": "#F4F5F7"
      },
      "TODO from the link above"
    ],
    [
      {
        "content": "Series Expansion",
        "bg": "#F4F5F7"
      },
      "TODO from the link above"
    ],
    [
      {
        "content": "[[Laplace Transform - Inverse Laplace Transform|Laplace Transform]]",
        "bg": "#F4F5F7"
      },
      "![[Laplace Transform - Inverse Laplace Transform#^excerpt]]"
    ],
    [
      {
        "content": "Hamiltonian Flow",
        "bg": "#F4F5F7"
      },
      "TODO from the link above"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# DE - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

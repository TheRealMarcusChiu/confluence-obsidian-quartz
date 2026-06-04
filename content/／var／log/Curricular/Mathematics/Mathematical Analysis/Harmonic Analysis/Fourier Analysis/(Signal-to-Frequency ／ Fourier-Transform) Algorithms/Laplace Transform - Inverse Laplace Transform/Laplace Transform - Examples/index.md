---
title: "Laplace Transform - Examples"
created: 2023-12-13T13:15:48.229-06:00
modified: 2026-05-23T11:29:33.906-05:00
parent: "[[Laplace Transform - Inverse Laplace Transform]]"
children: []
---
# [[Laplace Transform - Inverse Laplace Transform|Laplace Transforms]] - Examples

```merge-table
{
  "rows": [
    [
      {
        "content": "$L\\{1\\} = 1/s$",
        "bg": "#F4F5F7"
      },
      "> [!expand]- Click here to expand...\n> - $L\\{1\\} = \\int_0^∞ e^{-st} 1 dt$\n> - $L\\{1\\} = lim_{A \\to ∞} \\int_0^A e^{-st}dt$\n> - $L\\{1\\} = lim_{A \\to ∞} \\;\\; [-\\frac{1}{s}e^{-st}]_0^A$\n> - $L\\{1\\} = lim_{A \\to ∞} \\;\\; (-\\frac{1}{s}e^{-sA} - - \\frac{1}{s})$\n> - $L\\{1\\} = lim_{A \\to ∞} \\;\\; (-\\frac{1}{s}e^{-sA} + \\frac{1}{s})$\n> - $L\\{1\\} = -\\frac{1}{s}e^{-s∞} + \\frac{1}{s}$\n> - $L\\{1\\} = \\frac{1}{s}$"
    ],
    [
      {
        "content": "$L\\{t^n\\} = n!/s^{n+1}$",
        "bg": "#F4F5F7"
      },
      "> [!expand]- Click here to expand...\n> Let's consider:\n> - $L\\{1\\} = 1/s$\n> - $L\\{f'(t)\\} = s L\\{f(t)\\} - f(0)$\n>\n> TODO"
    ],
    [
      {
        "content": "$L\\{e^{at}\\} = 1/(s - a) \\;\\;\\; \\text{for } a < s$",
        "bg": "#F4F5F7"
      },
      "> [!expand]- Click here to expand...\n> - $L\\{e^{at}\\} = \\int_0^∞ e^{-st} e^{at} dt$\n> - $L\\{e^{at}\\} = \\int_0^∞ e^{(a-s)t} dt$\n> - $L\\{e^{at}\\} = \\frac{1}{a - s} [e^{(a-s)t}]_0^∞$\n> - $L\\{e^{at}\\} = \\frac{1}{a - s} [0 - 1] \\;\\;\\; \\text{for } a < s$\n> - $L\\{e^{at}\\} = -\\frac{1}{a - s} \\;\\;\\; \\text{for } a < s$\n> - $L\\{e^{at}\\} = \\frac{1}{s - a} \\;\\;\\; \\text{for } a < s$"
    ],
    [
      {
        "content": "$L\\{sin(at)\\} = a/(s^2 + a^2)$",
        "bg": "#F4F5F7"
      },
      "> [!expand]- Click here to expand...\n> - $L\\{sin(at)\\} = \\int_0^∞ e^{-st} sin(at) dt$\n>\n> [[Integration by Parts|Integration by parts]] states:\n> - $∫𝑣·𝑑𝑢 = 𝑢·𝑣 - ∫𝑢·𝑑𝑣$\n>\n> Let's define:\n> - $du = e^{-st}$\n> - $u = -\\frac{1}{s}e^{-st}$\n> - $dv = a*cos(at)$\n> - $v = sin(at)$\n>\n> Thus:\n> - $\\int_0^∞ e^{-st} sin(at) dt = -\\frac{1}{s}e^{-st} sin(at) - \\int_0^∞ -\\frac{1}{s}e^{-st} a * cos(at) dt$\n>\n> Substituting in:\n> - $L\\{sin(at)\\} = \\int_0^∞ e^{-st} sin(at) dt$\n> - $L\\{sin(at)\\} = -\\frac{1}{s}e^{-st} sin(at) - \\int_0^∞ -\\frac{1}{s}e^{-st} a * cos(at) dt$\n> - $L\\{sin(at)\\} = -\\frac{e^{-st}}{s} sin(at) + \\frac{a}{s} \\int_0^∞ e^{-st} * cos(at) dt$\n>\n> Let's define:\n> - $du = e^{-st}$\n> - $u = -\\frac{1}{s}e^{-st}$\n> - $dv = -a*sin(at)$\n> - $v = cos(at)$\n>\n> Thus:\n> - $\\int_0^∞ e^{-st} * cos(at) dt = -\\frac{1}{s}e^{-st}cos(at) -  \\int_0^∞ -\\frac{1}{s}e^{-st}*(-a)*sin(at)$\n> - $\\int_0^∞ e^{-st} * cos(at) dt = -\\frac{1}{s}e^{-st}cos(at) -  \\int_0^∞ \\frac{a}{s}e^{-st}*sin(at)$\n>\n> Substituting in:\n> - $L\\{sin(at)\\} = -\\frac{e^{-st}}{s} sin(at) + \\frac{a}{s} \\int_0^∞ e^{-st} * cos(at) dt$\n> - $L\\{sin(at)\\} = -\\frac{e^{-st}}{s} sin(at) + \\frac{a}{s} [ -\\frac{1}{s}e^{-st}cos(at) -  \\int_0^∞ \\frac{a}{s}e^{-st}*sin(at) ]$\n> - $L\\{sin(at)\\} = -\\frac{e^{-st}}{s} sin(at) - \\frac{a}{s^2}e^{-st}cos(at) - \\frac{a^2}{s^2} \\int_0^∞ e^{-st}*sin(at)$\n> - $L\\{sin(at)\\} = -\\frac{e^{-st}}{s} sin(at) - \\frac{a}{s^2}e^{-st}cos(at) - \\frac{a^2}{s^2} \\int_0^∞ e^{-st}*sin(at)$\n> - $L\\{sin(at)\\} = -\\frac{e^{-st}}{s} sin(at) - \\frac{a}{s^2}e^{-st}cos(at) - \\frac{a^2}{s^2} L\\{sin(at)\\}$\n> - $L\\{sin(at)\\} + \\frac{a^2}{s^2} L\\{sin(at)\\} = -\\frac{e^{-st}}{s} sin(at) - \\frac{a}{s^2}e^{-st}cos(at)$\n> - $L\\{sin(at)\\} + \\frac{a^2}{s^2} L\\{sin(at)\\} = -e^{-st} [\\frac{1}{s} sin(at) + \\frac{a}{s^2}cos(at)]$\n> - $L\\{sin(at)\\} (1 + \\frac{a^2}{s^2}) = -e^{-st} [\\frac{1}{s} sin(at) + \\frac{a}{s^2}cos(at)]$\n> - $L\\{sin(at)\\} \\frac{s^2 + a^2}{s^2} = -e^{-st} [\\frac{1}{s} sin(at) + \\frac{a}{s^2}cos(at)]$\n> - $L\\{sin(at)\\} \\frac{s^2 + a^2}{s^2} = [-e^{-st} [\\frac{1}{s} sin(at) + \\frac{a}{s^2}cos(at)]]_0^∞$\n> - $L\\{sin(at)\\} \\frac{s^2 + a^2}{s^2} = [0 + 1(0 + \\frac{a}{s^2})]$\n> - $L\\{sin(at)\\} \\frac{s^2 + a^2}{s^2} = \\frac{a}{s^2}$\n> - $L\\{sin(at)\\} = \\frac{a}{s^2 + a^2}$"
    ],
    [
      {
        "content": "$L\\{cos(at)\\} = s/(s^2 + a^2)$",
        "bg": "#F4F5F7"
      },
      "> [!expand]- Click here to expand...\n> Consider the following:\n> - $L\\{f'(t)\\} = s L\\{f(t)\\} - f(0)$\n> - $L\\{sin(at)\\} = \\frac{a}{s^2 + a^2}$\n>\n> Let's define:\n> - $f'(t) = cos(at)$\n> - $f(t) = \\frac{1}{a} sin(at)$\n>\n> Thus:\n> - $L\\{cos(at)\\} = s L\\{\\frac{1}{a} sin(at)\\} - \\frac{1}{a} sin(a*0)$\n> - $L\\{cos(at)\\} = s L\\{\\frac{1}{a} sin(at)\\} - 0$\n> - $L\\{cos(at)\\} = \\frac{s}{a} L\\{sin(at)\\}$\n> - $L\\{cos(at)\\} = \\frac{s}{a} \\frac{a}{s^2 + a^2}$\n> - $L\\{cos(at)\\} = \\frac{s}{s^2 + a^2}$"
    ],
    [
      {
        "content": "$L\\{f'(t)\\} = s L\\{f(t)\\} - f(0)$",
        "bg": "#F4F5F7"
      },
      "> [!expand]- Click here to expand...\n> - $L\\{f'(t)\\} = \\int_0^∞ e^{-st} f'(t) dt$\n>\n> Integrating by parts states:\n> - $\\int uv' = uv - \\int u'v$\n>\n> Let's define:\n> - $u = e^{-st}$\n> - $du = -s*e^{-st}$\n> - $v = f(t)$\n> - $dv = f'(t)$\n>\n> Thus, with integration-by-parts:\n> - $\\int e^{-st} f'(t) dt = e^{-st} f(t) - \\int -s * e^{-st} f(t) dt$\n> - $\\int_0^∞ e^{-st} f'(t) dt = [e^{-st} f(t)]_0^∞ + s \\int_0^∞ e^{-st} f(t) dt$\n>\n> Substituting in yields:\n> - $L\\{f'(t)\\} = \\int_0^∞ e^{-st} f'(t) dt$\n> - $L\\{f'(t)\\} = [e^{-st} f(t)]_0^∞ + s \\int_0^∞ e^{-st} f(t) dt$\n> - $L\\{f'(t)\\} = [0 - f(0)] + s L\\{f(t)\\}$\n> - $L\\{f'(t)\\} = s L\\{f(t)\\} - f(0)$"
    ],
    [
      {
        "content": "$L\\{f''(t)\\} = s L\\{f'(t)\\} - f'(0)$",
        "bg": "#F4F5F7"
      },
      "> [!expand]- Click here to expand...\n> See explanation of:\n> - $L\\{f'(t)\\}$"
    ],
    [
      {
        "content": "Given:\n- $L\\{f(t)\\} = F(s)$\n\nThen:\n- $L\\{e^{at}f(t)\\} = F(s - a)$",
        "bg": "#F4F5F7"
      },
      "> [!expand]- Click here to expand...\n> - $L\\{e^{at}f(t)\\} = \\int_0^∞ e^{-st} e^{at} f(t) dt$\n> - $L\\{e^{at}f(t)\\} = \\int_0^∞ e^{at - st} f(t) dt$\n> - $L\\{e^{at}f(t)\\} = \\int_0^∞ e^{(a - s)t} f(t) dt$\n> - $L\\{e^{at}f(t)\\} = \\int_0^∞ e^{-(s - a)t} f(t) dt$\n>\n> Let's define:\n> - $L\\{f(t)\\} = \\int_0^∞ e^{-st} f(t) dt = F(s)$\n>\n> Thus:\n> - $L\\{e^{at}f(t)\\} = F(s - a)$"
    ]
  ]
}
```

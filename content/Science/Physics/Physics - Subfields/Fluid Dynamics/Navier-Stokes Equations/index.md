---
title: "Navier-Stokes Equations"
created: 2025-10-01T11:21:28.383-05:00
modified: 2025-10-01T11:57:34.852-05:00
parent: "[[Fluid Dynamics]]"
children: []
---
###### Navier-Stokes Equations
````excerpt
- are [[Differential Equations (DE) - Ordinary Differential Equations (ODEs) - Partial Differential Equations (PDEs)|partial differential equations]] which describe the motion of viscous fluid substances
- they come from applying Newton’s second law to a fluid element, combined with the assumption that stress is the sum of an isotropic pressure term and a viscous term proportional to the rate of strain
````
^excerpt

# Equations
- continuity equation - ensures mass conservation
- momentum equation - ensures Newton's 2nd law for fluids with viscous stresses
```merge-table
{
  "rows": [
    [
      {
        "content": "Conservation of Mass (Continuity Equation)",
        "bg": "#F4F5F7"
      },
      "For an incompressible fluid\n- $\\nabla \\cdot \\mathbf{u} = 0$\n\nFor a compressible fluid\n- $\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\mathbf{u}) = 0$\n\nwhere:\n- $\\rho = \\text{velocity field}$\n- $\\mathbf{u} = (u,v,w) = \\text{velocity field}$"
    ],
    [
      {
        "content": "Conservation of Momentum (Navier-Stokes Equation)",
        "bg": "#F4F5F7"
      },
      "- $\\rho \\left( \\frac{\\partial \\mathbf{u}}{\\partial t} + (\\mathbf{u} \\cdot \\nabla)\\mathbf{u} \\right) = -\\nabla p + \\mu \\nabla^2 \\mathbf{u} + \\left( \\frac{\\mu}{3} + \\lambda \\right) \\nabla (\\nabla \\cdot \\mathbf{u}) + \\rho \\mathbf{f}$\n\nwhere:\n- $p = \\text{pressure}$\n- $\\mu = \\text{dynamic viscosity}$\n- $\\lambda = \\text{second viscosity (often combined into bulk viscosity}$\n- $\\mathbf{f} = \\text{external body force per unit mass (e.g. gravity)}$"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "Incompressible Navier-Stokes Simplification",
        "bg": "#F4F5F7"
      },
      "For. constant density and incompressibility (𝛻·𝐮 = 0)\n- $\\frac{\\partial \\mathbf{u}}{\\partial t} + (\\mathbf{u} \\cdot \\nabla)\\mathbf{u} = -\\frac{1}{\\rho}\\nabla p + \\nu \\nabla^2 \\mathbf{u} + \\mathbf{f}$\n\nwhere:\n- $\\nu = \\mu / \\rho \\text{ is the kinematic viscosity}$"
    ]
  ]
}
```

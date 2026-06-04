---
title: "uv"
created: 2026-02-25T02:36:12.232-06:00
modified: 2026-02-25T02:39:31.783-06:00
parent: "[[Python - Managing Versions & Virtual Environments]]"
children: []
---
###### uv
````excerpt
- is an extremely fast Python package and project manager
- written in [[Rust]]
- it was created by Astral (the same team behind <code><font style="color: rgb(122,134,154);">ruff</font></code>)
- replaces several separate tools—like <code><font style="color: rgb(122,134,154);">pip</font></code>, <code><font style="color: rgb(122,134,154);">pip-tools</font></code>, <code><font style="color: rgb(122,134,154);">venv</font></code>, <code><font style="color: rgb(122,134,154);">poetry</font></code>, and <code><font style="color: rgb(122,134,154);">pyenv</font></code>—with a single, unified, and significantly faster executable
````
^excerpt

# Replaces
- <strong>Replaces <code><font style="color: rgb(122,134,154);">pip</font></code></strong>: For installing packages
- <strong>Replaces <code><font style="color: rgb(122,134,154);">venv</font></code></strong>: For managing virtual environments
- <strong>Replaces <code><font style="color: rgb(122,134,154);">pyenv</font></code></strong>: For installing different versions of Python (3.10, 3.12, etc.)
- <strong>Replaces <code><font style="color: rgb(122,134,154);">pip-tools</font></code></strong>: For creating "lockfiles" (<code><font style="color: rgb(122,134,154);">uv.lock</font></code>) to ensure everyone on a team uses the exact same versions

# Example Use Cases

```merge-table
{
  "rows": [
    [
      "<strong>Command</strong>",
      "<strong>What it does</strong>"
    ],
    [
      "<code><font style=\"color: rgb(122,134,154);\">uv python install 3.12</font></code>",
      "Downloads and installs Python 3.12 automatically"
    ],
    [
      "<code><font style=\"color: rgb(122,134,154);\">uv venv</font></code>",
      "Creates a virtual environment in a blink of an eye"
    ],
    [
      "<code><font style=\"color: rgb(122,134,154);\">uv pip install \\<package\\></font></code>",
      "The high-speed drop-in replacement for standard <code><font style=\"color: rgb(122,134,154);\">pip install</font></code>"
    ],
    [
      "<code><font style=\"color: rgb(122,134,154);\">uv run script.py</font></code>",
      "Runs a script, automatically handling the environment setup"
    ],
    [
      "<code><font style=\"color: rgb(122,134,154);\">uv sync</font></code>",
      "Synchronizes your environment with your <code><font style=\"color: rgb(122,134,154);\">pyproject.toml</font></code> and <code><font style=\"color: rgb(122,134,154);\">uv.lock</font></code>"
    ]
  ],
  "tableStyle": "margin-left: 0.0px;"
}
```

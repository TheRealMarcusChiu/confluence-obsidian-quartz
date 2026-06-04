---
title: "zsh dotfiles (.zshenv .zprofile .zshrc .zlogin .zlogout)"
created: 2020-06-29T15:54:29.167-05:00
modified: 2020-06-29T15:58:15.750-05:00
parent: "[[zsh (Z SHell)]]"
children: []
---
the following dotfiles are sourced in order

```merge-table
{
  "rows": [
    [
      {
        "content": "Dotfile",
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
        "content": ".zshenv",
        "header": true,
        "bg": "#F4F5F7"
      },
      "since <code>.zshenv</code> is always sourced, it often contains exported variables that should be available to other programs. For example, <code>\\$PATH</code>, <code>\\$EDITOR</code>, and <code>\\$PAGER</code> are often set in <code>.zshenv</code>. Also, you can set <code>\\$ZDOTDIR</code> in <code>.zshenv</code> to specify an alternative location for the rest of your zsh configuration"
    ],
    [
      {
        "content": ".zprofile",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<code>.zprofile</code> is basically the same as <code>.zlogin</code> except that it's sourced before <code>.zshrc</code> while <code>.zlogin</code> is sourced instead of directly after it. According to the zsh documentation, <em>\"<code>.zprofile</code> is meant as an alternative to <code>.zlogin</code> for ksh fans; the two are not intended to be used together, although this could certainly be done if desired.\"</em>"
    ],
    [
      {
        "content": ".zshrc",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<code>.zshrc</code> is for interactive shell configuration. You set options for the interactive shell there with the <code>setopt</code> and <code>unsetopt</code> commands. You can also load shell modules, set your history options, change your prompt, set up zle and completion, et cetera. You also set any variables that are only used in the interactive shell (e.g. <code>\\$LS\\_COLORS</code>)"
    ],
    [
      {
        "content": ".zlogin",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<code>.zlogin</code> is sourced on the start of a login shell but after <code>.zshrc</code> if the shell is also interactive. This file is often used to start X using <code>startx</code>. Some systems start X on boot, so this file is not always very useful"
    ],
    [
      {
        "content": ".zlogout",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<code>.zlogout</code> is sometimes used to clear and reset the terminal. It is called when exiting, not when opening"
    ]
  ]
}
```

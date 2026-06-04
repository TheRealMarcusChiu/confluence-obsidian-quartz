---
title: "OpenGL vs Vulkan"
created: 2021-09-02T23:00:56.485-05:00
modified: 2021-09-03T09:59:16.325-05:00
parent: "[[Graphics／Rendering Libraries／APIs]]"
children: []
---
Vulkan is replacing OpenGL

```merge-table
{
  "rows": [
    [
      {
        "content": "[[OpenGL Family|OpenGL]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Vulkan]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      "One single global state machine",
      "Object-based with no global state"
    ],
    [
      "State is tied to a single context",
      "All state concepts are localized to a [command buffer](https://en.wikipedia.org/wiki/Glossary_of_computer_graphics#command_buffer)"
    ],
    [
      "Operations can only be executed sequentially",
      "Multi-threaded programming is possible"
    ],
    [
      "GPU memory and synchronization are usually hidden",
      "Explicit control over memory management and synchronization"
    ],
    [
      "Extensive error checking",
      "Vulkan drivers do no error checking at runtime;\nthere is a validation layer for developers"
    ]
  ]
}
```

TL;DR: Choose your tool based on your requirements.
---

To get another analogy consider "Assembly vs C++" for now.

If you wrote in Assembly instead of C++, then you would be able to squeeze more performance out. But the bottom line is that a C++ compiler will most of the time do a better job.

If you're simply programming in Assembly because "It can be faster", then you're doing so for the wrong reasons. Manually written Assembly isn't by default faster, than what a compiler would output.

Compilers are able to keep a much broader overview, than what we're able to visualize in our brain. So while we might be able to optimize something better than a compiler. In the grand scheme of things, the compiler will do a better job.

LuaJIT is mostly written in C, but have parts written in Assembly. Those parts are written in Assembly, because the performance increase was that much greater. The price was however that LuaJIT has to have Assembly written for each architecture they wanted to support.
---

<em>The bottom line is...</em>

If you aren't going to take advantage of what Vulkan has to offer. Whether you need it or not, then you're overall just burdening yourself. Specifically if you don't need the advantages, then you're just adding on to the development time needed.

Say you need a small program doing some menial task. Say that program took 500 lines in Python and 500ms to execute. Would you still want to make it in C++, even if it in contrast required 5000 lines, but instead took 300ms to execute? Even though you just gain 200ms at the cost of 4500 lines?

Sure, in terms of computer graphics, then every millisecond counts. But if you're making 2D side scrolling game. Then would it be important if the difference was 100fps, but you already got 200fps with OpenGL?
---

Games such as [Battlefield 1](https://www.youtube.com/watch?v=c7nRTF2SowQ), can definitely benefit from Vulkan while also having the need. (<em>They would also have the time and money needed to make that a reality.</em>)

Games such as [Cuphead](https://www.youtube.com/watch?v=4TjUPXAn2Rg), while they can equally benefit from Vulkan, they don't have a real need. Thus they went with Unity, as it suits their needs without extending the development time for an unnecessary reason.

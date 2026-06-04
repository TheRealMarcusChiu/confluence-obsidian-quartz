---
title: "Design Patterns"
created: 2019-03-15T00:07:33.392-05:00
modified: 2022-02-18T15:51:42.270-06:00
parent: "[[Software／Fullstack Development]]"
children:
  - "[[API Design Patterns (API-DP)]]"
  - "[[Architectural／Architecture Design Patterns (ADP)]]"
  - "[[Database Design Patterns (DDP)]]"
  - "[[Software Architectural／Architecture Design Patterns (SADP)]]"
  - "[[Software Design Patterns (SDP)]]"
  - "[[User Interface Design Patterns (UI-DP)]]"
---
###### Design Pattern
- is a general solution to a common problem
- is more than just an implementation design, but also communicates intent and the problem being addressed

# Design Patterns - Scopes

```merge-table
{
  "rows": [
    [
      {
        "content": "Scope",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Visual Scope",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[User Interface Design Patterns (UI-DP)]]",
        "bg": "#F4F5F7"
      },
      "deals with the behavior of a UI/presentation (closely related to [[Behavioral Design Patterns]] especially [[Mediator Pattern|Mediator]] & [[Observer Pattern (Publisher-Subscriber Pattern)|Observer]] Pattern)",
      {
        "content": "![[Design Patterns/design-patterns.png|301]]",
        "rowspan": 6
      }
    ],
    [
      {
        "content": "[[API Design Patterns (API-DP)]]",
        "bg": "#F4F5F7"
      },
      "deals with designing [[Application Programming Interface (API) - Software Development Kit (SDK)|APIs]] which are used to integrate services together (these APIs usually use existing [[API - Network-Level|Network-Level APIs]])"
    ],
    [
      {
        "content": "[[Architectural／Architecture Design Patterns (ADP)|Architectural Design Patterns (ADP)]]",
        "bg": "#F4F5F7"
      },
      "deals with designing and integrating multiple services together"
    ],
    [
      {
        "content": "[[Software Architectural／Architecture Design Patterns (SADP)|Software Architectural Design Patterns (SADP)]]",
        "bg": "#F4F5F7"
      },
      "deals with designing and integrating a SINGLE service (micro or monolith)"
    ],
    [
      {
        "content": "[[Software Design Patterns (SDP)]]",
        "bg": "#F4F5F7"
      },
      "deals with software design (usually in the context between database and API endpoint)"
    ],
    [
      {
        "content": "[[Database Design Patterns (DDP)]]",
        "bg": "#F4F5F7"
      },
      "deals with designing schemas for [[Database Management Systems (DBMS)|databases]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Design Pattern - Scope Comparisons

> [!expand-ui]- Software Architecture vs Software Design
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "<strong>Software Architecture</strong>",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Software Design",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "is more about the design of the entire system",
>       "emphasizes on module/component/class level"
>     ],
>     [
>       "usually deals with what (is done) and where (it's done), but never with how",
>       "completes the-how that architecture doesn't (and shouldn't) talk about"
>     ],
>     [
>       "- provides a function description, the design provides enough detail to manufacture your widget\n- defines:\n\t- the blocks of your system\n\t- the function of each block\n- interfaces in enough detail to allow separate teams to implement those sections\n- provides a development and management structure for the project and a framework in which to express your design requirements\n- the architecture of a system is its 'skeleton'. It's the highest level of abstraction of a system. What kind of data storage is present, how do modules interact with each other, what recovery systems are in place? Just like design patterns, there are architectural patterns: MVC, 3-tier layered design, etc\n- Architecture is the bigger picture: the choice of frameworks, languages, scope, goals, and high-level methodologies (Rational, waterfall, agile, etc.)",
>       "- the design describes the implementation of each part of the system\n- Software design is about designing the individual modules/components. What are the responsibilities, functions, of module x? Of class Y? What can it do, and what not? What design patterns can be used?\n- Design is the smaller picture: the plan for how the code will be organized; how the contracts between different parts of the system will look; the ongoing <em>implementation</em> of the project's methodologies and goals. Specifications are written during this stage"
>     ]
>   ],
>   "tableStyle": "letter-spacing: 0.0px;width: 99.3491%;"
> }
> ```

> [!expand-ui]- System Architecture vs Software Architecture
> - system is the broadest term and typically highest level, least detailed
> - part of the system may be classified as software
> - part of the software may be described using class diagrams
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "System Architecture",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Software Architecture",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "- focuses on the entire system\n- Concept of Operations, Major Data & Control Flows, Major Components (hardware, software, networking, etc.), interfaces.\n- e.g. system architecture of an order entering system contains web front end, business layer service, and database",
>       "- focuses on the components\n- like system architecture, but restricted to the software involved (e.g., databases, web servers, major software modules)\n- for example, one component of the order entering the system is the web front end. It consists of Responsive User Interface, Model View Controller, Web Services, etc."
>     ]
>   ]
> }
> ```
# Textbooks
- [[Clean Architect.pdf]]
- [[Clean Code.pdf]]

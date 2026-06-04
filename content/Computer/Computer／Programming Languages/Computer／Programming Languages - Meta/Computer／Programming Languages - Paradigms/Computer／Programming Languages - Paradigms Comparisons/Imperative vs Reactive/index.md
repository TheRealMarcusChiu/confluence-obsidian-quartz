---
title: "Imperative vs Reactive"
created: 2022-02-14T20:04:00.107-06:00
modified: 2022-02-14T20:04:34.534-06:00
parent: "[[Computer／Programming Languages - Paradigms Comparisons]]"
children: []
---
in an [[Imperative Programming Paradigm|imperative programming]] setting:
- 𝐴 = 𝐵 + 𝐶 would mean that 𝐴 is being assigned the result of 𝐵 + 𝐶 in the instant the expression is evaluated, and later, the values of 𝐵 and 𝐶 can be changed with no effect on the value of 𝐴

in [[Reactive Programming Paradigm (Dataflow)|reactive programming]]:
- the value of 𝐴 is automatically updated whenever the values of 𝐵 or 𝐶 change, without the program having to re-execute the statement 𝐴 = 𝐵 + 𝐶 to determine the presently assigned value of 𝐴

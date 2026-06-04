---
title: "vavr - Try＜＞"
created: 2022-02-15T02:30:42.584-06:00
modified: 2022-02-15T02:37:47.755-06:00
parent: "[[Java - vavr (Javaslang)]]"
children: []
---
An instance of <code><font style="color: rgb(122,134,154);">Try\<\></font></code> can store either the:
- result
- exception

# When to Use

Use <code><font style="color: rgb(122,134,154);">Try\<\></font></code> whenever you want to collect the errors occurring for an element instead of terminating the Stream
# Example Code
###### Problem

We want to parse all the valid dates and return them IF at least half of them are parseable, otherwise, we should throw an exception. This time we can’t let an exception terminate the execution of our stream. Instead, we want to go through all of the items and collect both parsed dates and exceptions. For example, if we are given 3 correctly-formatted dates and 2 invalid ones, we should return the 3 ones that we were able to parse correctly
###### Solution
```
List<Try<Date>> tries = dateList.stream()
    .map(s -> Try.of(
        () -> format.parse(s) // throwing code
    ))
    .collect(toList());
```

If the <em>throwing code</em> crashes with an exception, the surrounding <code><font style="color: rgb(122,134,154);">Try.of</font></code> function will catch that exception and return a <strong>failed Try</strong>. Therefore, in the <code><font style="color: rgb(122,134,154);">tries</font></code> list above, there can be items with <code><font style="color: rgb(122,134,154);">isSuccess()</font></code> either <code><font style="color: rgb(122,134,154);">true</font></code> or <code><font style="color: rgb(122,134,154);">false</font></code>.

To count the success ratio:
```
double successRatio = tries.stream()
    .mapToInt(t -> t.isSuccess() ? 1 : 0)
    .average()
    .orElse(0);
```

Then,
```
if (successRatio > .5) {
    return tries.stream()
        .filter(Try::isSuccess)
        .map(Try::get)
        .collect(toList());
} else {
    throw new IllegalArgumentException("Too many invalid dates");
}
```

---
title: "Unicode Transformation Format (UTF-8)"
created: 2019-03-16T02:25:53.835-05:00
modified: 2023-04-29T15:00:34.011-05:00
parent: "[[Character Encoding (Character Set - Encoding Scheme)]]"
children: []
---
###### Unicode Transformation Format (UTF-8)
````excerpt
- [[Unicode]] maps a character to an integer, while UTF-8 maps a number to bytes
````
^excerpt

# How UTF-8 Works

Each byte starts with a few bits that tell you whether it's a single byte code-point, a multi-byte code point, or a continuation of a multi-byte code point. Like this:

0xxxxxxx A single-byte US-ASCII code (from the first 127 characters)

The multi-byte code-points each start with a few bits that essentially say "hey, you need to also read the next byte (or two, or three) to figure out what I am."

The start codes are:
```
  110xxxxx    1 more byte follows
  1110xxxx    2 more bytes follow
  11110xxx    3 more bytes follow
  111110xx    4 more bytes follow
  1111110x    5 more bytes follow
```

Finally, the bytes that follow these start codes all look like this:

10xx xxxx A continuation of one of the multi-byte characters

Since you can tell what kind of byte you're looking at from the first few bits, then even if something gets mangled somewhere, you don't lose the whole sequence.

[http://stackoverflow.com/questions/1543613/how-does-utf-8-variable-width-encoding-work](http://stackoverflow.com/questions/1543613/how-does-utf-8-variable-width-encoding-work)

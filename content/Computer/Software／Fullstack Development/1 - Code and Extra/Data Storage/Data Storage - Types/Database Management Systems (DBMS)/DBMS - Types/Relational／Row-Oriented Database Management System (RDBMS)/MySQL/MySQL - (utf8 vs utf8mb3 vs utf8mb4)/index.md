---
title: "MySQL - (utf8 vs utf8mb3 vs utf8mb4)"
created: 2025-04-27T10:19:51.138-05:00
modified: 2025-04-27T10:20:45.145-05:00
parent: "[[MySQL]]"
children: []
---
> - <code>utf8mb4</code>: A <em>UTF-8</em> encoding of the <em>Unicode</em> character set using <strong>one to four bytes</strong> per character.
> - <code>utf8mb3</code>: A <em>UTF-8</em> encoding of the <em>Unicode</em> character set using <strong>one to three bytes</strong> per character.

In <em>MySQL</em> <code>utf8</code> is currently an alias for <code>utf8mb3</code> which <strong>is deprecated</strong> and will be removed in a future <em>MySQL</em> release. At that point <code>utf8</code> <strong>will become a reference to</strong> <code>utf8mb4</code>.

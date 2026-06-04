---
title: "Java - Mockito - Enum Answers (RETURNS_MOCKS)"
created: 2021-07-15T20:36:32.181-05:00
modified: 2021-07-15T20:37:46.010-05:00
parent: "[[Java - Mockito - Enum Answers (CALLS_REAL_METHODS - RETURNS_DEEP_STUBS - RETURNS_DEFAULTS - RETURNS_MOCKS - RETURNS_SELF - RETURNS_SMART_NULLS)]]"
children: []
---
This implementation can be helpful when working with legacy code.

<code>RETURNS\_MOCKS</code> first tries to return ordinary values (zeros, empty collections, empty string, etc.) then it tries to return mocks. If the return type cannot be mocked (e.g. is final) then plain <code>null</code> is returned

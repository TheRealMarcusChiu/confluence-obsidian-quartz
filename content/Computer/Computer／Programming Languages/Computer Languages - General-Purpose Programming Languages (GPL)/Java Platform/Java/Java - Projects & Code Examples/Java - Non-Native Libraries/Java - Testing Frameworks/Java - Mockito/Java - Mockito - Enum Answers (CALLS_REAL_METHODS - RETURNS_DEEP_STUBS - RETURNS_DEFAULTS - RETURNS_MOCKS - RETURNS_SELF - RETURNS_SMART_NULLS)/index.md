---
title: "Java - Mockito - Enum Answers (CALLS_REAL_METHODS - RETURNS_DEEP_STUBS - RETURNS_DEFAULTS - RETURNS_MOCKS - RETURNS_SELF - RETURNS_SMART_NULLS)"
created: 2021-07-15T17:00:05.973-05:00
modified: 2021-07-15T20:47:08.092-05:00
parent: "[[Java - Mockito]]"
children:
  - "[[Java - Mockito - Enum Answer (CALLS_REAL_METHODS)]]"
  - "[[Java - Mockito - Enum Answers (RETURNS_DEFAULTS)]]"
  - "[[Java - Mockito - Enum Answers (RETURNS_MOCKS)]]"
  - "[[Java - Mockito - Enum Answers (RETURNS_SELF)]]"
  - "[[Java - Mockito - Enum Answers (RETURNS_SMART_NULLS)]]"
  - "[[Java - Mockito - Enum Answers (RETURN_DEEP_STUBS)]]"
---
# Enum Answer Types

```merge-table
{
  "rows": [
    [
      {
        "content": "<code><strong>[[Java - Mockito - Enum Answer (CALLS_REAL_METHODS)|CALLS_REAL_METHODS]]</strong></code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "An answer that calls the real methods (used for partial mocks)."
    ],
    [
      {
        "content": "<code><strong>[[Java - Mockito - Enum Answers (RETURN_DEEP_STUBS)|RETURNS_DEEP_STUBS]]</strong></code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "An answer that returns <strong>deep stubs</strong> (not mocks)."
    ],
    [
      {
        "content": "<code><strong>[[Java - Mockito - Enum Answers (RETURN_DEEP_STUBS)|RETURNS_DEFAULTS]]</strong></code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "The default configured answer of every mock."
    ],
    [
      {
        "content": "<code><strong>[[Java - Mockito - Enum Answers (RETURNS_MOCKS)|RETURNS_MOCKS]]</strong></code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "An answer that returns <strong>mocks</strong> (not stubs)."
    ],
    [
      {
        "content": "<code><strong>[[Java - Mockito - Enum Answers (RETURNS_SELF)|RETURNS_SELF]]</strong></code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "An answer that tries to return itself."
    ],
    [
      {
        "content": "<code><strong>[[Java - Mockito - Enum Answers (RETURNS_SMART_NULLS)|RETURNS_SMART_NULLS]]</strong></code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "An answer that returns smart-nulls."
    ]
  ]
}
```
# Example Use
```
@Test
void test() {
    Example example = mock(Example.class, Mockito.RETURNS_DEEP_STUBS);
    // use example...
}
```

or
```
@ExtendWith(MockitoExtension.class)
class ExampleTest {
	@Mock(answer = Mockito.RETURNS_DEEP_STUBS)
	private Example example;
	
	@Test
	void test() {
    	// use example ...
	}
}
```
# Resources
- [https://www.javadoc.io/doc/org.mockito/mockito-core/2.6.9/org/mockito/Answers.html](https://www.javadoc.io/doc/org.mockito/mockito-core/2.6.9/org/mockito/Answers.html)

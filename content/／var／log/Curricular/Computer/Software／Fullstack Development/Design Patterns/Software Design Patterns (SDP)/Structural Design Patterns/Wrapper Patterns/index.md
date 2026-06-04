---
title: "Wrapper Patterns"
created: 2026-01-10T17:49:46.824-06:00
modified: 2026-01-10T23:27:45.509-06:00
parent: "[[Structural Design Patterns]]"
children:
  - "[[Adapter Pattern]]"
  - "[[Bridge Pattern]]"
  - "[[Decorator (Wrapper - Smart Proxy) Pattern]]"
  - "[[Facade Pattern]]"
  - "[[Proxy Pattern]]"
---
# Wrapper Patterns (Proxy - Decorator - Adaptor - Bridge - Facade)
- all use composition, wrapping subject
- delegates the execution to the subject at some point
- often maps one method call to another one
- differ in intent and interface
```merge-table
{
  "rows": [
    [
      {
        "content": "Pattern",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Interface to Client",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Main Purpose",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Wraps Existing Object?",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Allows\nChaining?",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Designed When",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Constructor Behavior",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Examples",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Proxy Pattern|Proxy]]",
        "bg": "#F4F5F7"
      },
      "Same\n\n> [!expand]- show\n> provides same interface",
      "Control access to an object",
      "❌ (creates internally)",
      {
        "content": "❌",
        "align": "center"
      },
      "Runtime",
      "No subject passed in; creates object lazily",
      "> [!expand]- show\n> TODO"
    ],
    [
      {
        "content": "[[Decorator (Wrapper - Smart Proxy) Pattern|Decorator]]",
        "bg": "#F4F5F7"
      },
      "Same + enhanced\n\n> [!expand]- show\n> provides an enhanced interface",
      "Add behavior without subclassing",
      "✅",
      {
        "content": "✅",
        "align": "center"
      },
      "Runtime",
      "Takes existing object in constructor",
      "> [!expand]- show\n> [BufferedOutputStream](http://docs.oracle.com/javase/8/docs/api/java/io/BufferedOutputStream.html), [FilterOutputStream](http://docs.oracle.com/javase/8/docs/api/java/io/FilterOutputStream.html) and [ObjectOutputStream](http://docs.oracle.com/javase/8/docs/api/java/io/ObjectOutputStream.html) are decorators of [OutputStream](http://docs.oracle.com/javase/8/docs/api/java/io/OutputStream.html)"
    ],
    [
      {
        "content": "[[Adapter Pattern|Adapter]]",
        "bg": "#F4F5F7"
      },
      "Different\n\n> [!expand]- show\n> provides a new compatible interface to the client to interface with an existing subject",
      "Make incompatible interfaces compatible",
      "✅",
      {
        "content": "❌",
        "align": "center"
      },
      "After design",
      "Takes existing object in constructor",
      "> [!expand]- show\n> [JAXB Marshalling Adapter](https://bitbucket.org/espinosa/a-java-playground/src/078ae4a51f4a2f384fd87c727b7becbba3e4fe2f/src/main/java/my/code/a001/adapter/BinaryResourceBatchJaxbAdapter.java?at=master)"
    ],
    [
      {
        "content": "[[Facade Pattern|Facade]]",
        "bg": "#F4F5F7"
      },
      "New, simplified",
      "Simplify complex subsystem",
      "✅ (object graph)",
      {
        "content": "❌",
        "align": "center"
      },
      "After design",
      "Takes root of complex object graph",
      "> [!expand]- show\n> TODO"
    ],
    [
      {
        "content": "[[Bridge Pattern|Bridge]]",
        "bg": "#F4F5F7"
      },
      "Abstract",
      "Decouple abstraction & implementation",
      "✅ (abstract impl)",
      {
        "content": "❌",
        "align": "center"
      },
      "Before design",
      "Takes implementation abstraction",
      "> [!expand]- show\n> <code><font style=\"color: rgb(122,134,154);\">Collection</font></code> classes in <font style=\"color: rgb(122,134,154);\"><code>java.util</code>. <code>List</code></font> implemented by <code><font style=\"color: rgb(122,134,154);\">ArrayList</font></code>"
    ]
  ]
}
```

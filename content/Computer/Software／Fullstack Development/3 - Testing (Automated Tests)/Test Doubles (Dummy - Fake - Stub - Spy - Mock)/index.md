---
title: "Test Doubles (Dummy - Fake - Stub - Spy - Mock)"
created: 2020-12-23T14:52:47.826-06:00
modified: 2022-12-06T21:57:11.063-06:00
parent: "[[3 - Testing (Automated Tests)]]"
children: []
---
<strong>Test Double</strong> is the generic term for any kind of pretend object used in place of a real object for testing purposes

```merge-table
{
  "rows": [
    [
      {
        "content": "Test Double Type",
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
        "content": "Dummy",
        "bg": "#F4F5F7"
      },
      "- dummy objects are passed around but never actually used\n- usually, they are just used to fill parameter lists."
    ],
    [
      {
        "content": "Fake",
        "bg": "#F4F5F7"
      },
      "- fake objects actually have working implementations, but usually take some shortcut that makes them not suitable for production\n- behaves exactly the same as their real counterparts\n- an in-memory/embedded database is a fake of a real database"
    ],
    [
      {
        "content": "Stub",
        "bg": "#F4F5F7"
      },
      "- stubs provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test\n- can be used for state verification"
    ],
    [
      {
        "content": "Spy",
        "bg": "#F4F5F7"
      },
      "- records how they were called for behavior verification\n- usually wraps around an existing object\n- used for behavior verification"
    ],
    [
      {
        "content": "Mock",
        "bg": "#F4F5F7"
      },
      "- are pre-programmed with expectations that form a specification of the calls they are expected to receive\n- creates a new object\n- used for\n- can be used for behavior verification"
    ]
  ]
}
```
# Stub vs Mock - Lifecycle

Test lifecycle with stubs:
1. Setup - prepare the object that is being tested and its stubs collaborators
2. Exercise - test the functionality
3. Verify state - use asserts to check the object's state
4. Teardown - clean up resources

Test lifecycle with mocks:
1. Setup data - prepare the object that is being tested
2. <strong>Setup expectations</strong> - prepare expectations in mock that is being used by the primary object
3. Exercise - test the functionality
4. <strong>Verify expectations</strong> - verify those correct methods have been invoked in mock
5. Verify state - use asserts to check the object's state
6. Teardown - clean up resources

# Resources
- [https://martinfowler.com/bliki/TestDouble.html](https://martinfowler.com/bliki/TestDouble.html)
- [https://martinfowler.com/articles/mocksArentStubs.html](https://martinfowler.com/articles/mocksArentStubs.html)

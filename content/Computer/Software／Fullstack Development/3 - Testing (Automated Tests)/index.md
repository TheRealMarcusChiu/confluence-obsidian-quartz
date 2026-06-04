---
title: "3 - Testing (Automated Tests)"
created: 2021-03-17T09:31:17.542-05:00
modified: 2021-07-12T19:28:13.117-05:00
parent: "[[Software／Fullstack Development]]"
children:
  - "[[Load Testing]]"
  - "[[Programming Mistake Detector (PMD)]]"
  - "[[SonarQube - Sonar]]"
  - "[[Test Doubles (Dummy - Fake - Stub - Spy - Mock)]]"
  - "[[Test Driven Development (TDD) - Red-Green Refactor - Test-First Programming]]"
  - "[[TestInvariant - Invariant Testing]]"
  - "[[Testing Pyramids - Ice-Cream Cone]]"
  - "[[Web Application Test Frameworks]]"
---
<font style="color: rgb(128,128,128);"><em>program testing can be used very effectively to show the presence of bugs but never to show their absence.</em></font>
# <strong>1 - Overview</strong>

[Continuous Integration](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=9306123) relies heavily on automated testing

Writing tests (i.e. self-testing code) is a requirement for software developers. It is important to know that these tests can be categorized into different types (e.g. Unit Test, Acceptance Test, etc). Unfortunately, the internet contains varying definitions for each of these test types and it can be quite confusing to developers.

<strong>In this article you will learn about the different types of tests and how the Fabric-Team differentiates between them</strong>.

<strong>This article mainly focuses on testing back-end applications</strong>, however it can also be applied to front-end apps.
# <strong>2 - Test Types</strong>
broad-stack tests have the advantage of exercising the application with all its parts connected together and thus can find bugs in the interaction between components in the way that component tests cannot. However broad-stack tests also tend to be harder to maintain and slower to run than component tests

```merge-table
{
  "rows": [
    [
      {
        "content": "Test Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null,
      {
        "content": "Other",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Unit Test\n\nComponent Test",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "- the primary purpose of a single Unit Test is to test a single path/edge-case within a single unit of code (hence its name). A unit is often a class in Java but in some cases it may be a single method or a set of classes.\n- a Unit Test should be fast (e.g. \\~20 ms per test). Therefore, mock anything that is time consuming external to the unit\n- create just enough Unit Tests such that all paths/edge-cases of the unit is covered. These tests are typically within a single test class where its name follows the pattern: \\*Test.java (e.g. EmailServiceTest.java will contain all the Unit Tests that tests EmailService.java)\n- <font style=\"color: rgb(128,0,0);\">Unit Tests make sure that you're building the thing right</font>\n- [https://martinfowler.com/bliki/UnitTest.html](https://martinfowler.com/bliki/UnitTest.html)\n- [https://martinfowler.com/bliki/ComponentTest.html](https://martinfowler.com/bliki/ComponentTest.html)",
        "colspan": 2
      },
      null,
      "*Test.java"
    ],
    [
      {
        "content": "Integration Test",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "- the primary purpose of an Integration Test is to test the functionality of a subsystem. A subsystem is a set of 2 or more contiguous units. In Java this is often a set of classes that work together to produce a result (e.g. when creating a new user, test that the Rest API and business logic works. Or tests that the business logic and DAO layer works)\n- an Integration Test may take longer than 20 ms but when running them as part of the build they should be fast (e.g. \\~20 ms per test)\n- an Integration Test may not test every path/edge-case through the subsystem\n- an Integration Test can be used when a Unit Test is unable to test certain conditions\n- an Integration Test should generally mock calls to external systems\n- an Integration Test should include at least one End-to-End Test for each technical case",
        "colspan": 2
      },
      null,
      "*IT.java"
    ],
    [
      {
        "content": "End-to-End Test\n\nE2E Test\n\nFull-Stack Test\n\nBroad-Stack Test",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "- the primary purpose of an E2E Test is to test the system's workflow from beginning to end (e.g. when creating a new user, make sure the Rest API works and flows through the business logic and down to the DAO and the SQL is executed successfully)\n- an E2E Test is a type of Integration Test where subsystem = entire system\n- what we discussed so far is a Vertical E2E Test. There is also a Horizontal E2E Test. This is best explained with an example where we have customer on an eCommerce website. The checkout workflow starts with adding items to cart, checkout cart, choose shipment option, choose payment option, and finish\n- [https://martinfowler.com/bliki/BroadStackTest.html](https://martinfowler.com/bliki/BroadStackTest.html)",
        "colspan": 2
      },
      null,
      "\\*IT.java\n\nsame as Integration Test"
    ],
    [
      {
        "content": "Cross-System Test",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "- the primary purpose of Cross-System Test is to verify connectivity to an external system. An external system can be: an application with API endpoints, a database, a message queue, etc\n- a Cross-System Test may also verify the response of the external system (e.g. when fetching the weather from [http://sky.net](http://sky.net/) the response should be HTTP 200 and schema similar to {\"weather\":\"String\", etc})\n- a Cross-System Test is a type of Integration Test that verifies 2 systems at their integration point\n- at least 1 Cross-System Test should be created for each external system\n- a Cross-System Test is typically not part of the build process, as failures does not necessarily mean the deploying application is at fault, it could very much be a problem on the external system side. However, this can be ignored if the external system is highly predictable and fast",
        "colspan": 2
      },
      null,
      "*XT.java"
    ],
    [
      {
        "content": "Cross-System E2E Test",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "- a broader form of E2E Test that tests the workflow across 2 or more systems (e.g. testing OAuth's M2M Authorization which requires at least 3 systems)\n- a Cross-System E2E Test uses real external systems while a pure E2E Test will mock all calls to external systems\n- a Cross-System E2E Test is typically not part of the build process, as failures does not necessarily mean the deploying application is at fault, it could very much be a problem on the external system side. However, this can be ignored if the external system is highly predictable and fast",
        "colspan": 2
      },
      null,
      "?"
    ],
    [
      {
        "content": "Acceptance Test\n\nUser Acceptance Test",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "- the primary purpose of Acceptance Test is to test whether the requirements of specification or contract are met (e.g. user functionality, common use cases in production, etc)\n- an Acceptance Test has no time limit, but when running them as part of the build they should be fast\n\t- a long running test should not be part of a build (in some cases, you may choose to skip them in DEV builds and only run them in PROD or even UAT)\n- an Acceptance Test may not test every path/edge-case through the code\n- an Acceptance Test is an E2E Test, so it may resemble an Integration Test, but always for the full system\n- an Acceptance Test is driven by user requirements, not code\n- an Acceptance Test may include non-functional requirements testing (e.g. throughput)\n- <font style=\"color: rgb(128,0,0);\">Acceptance Tests make sure that you're building the right thing</font>",
        "colspan": 2
      },
      null,
      "*AT.java"
    ],
    [
      {
        "content": "<strong>Performance Test</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "- the primary purpose of a Performance Test is to test the throughput/execution-time of a subsystem or unit\n- a Performance Test has no time limit\n- a Performance Test should not be part of any build process (unless you are working on a performance critical application)",
        "colspan": 2
      },
      null,
      "*PT.java"
    ],
    [
      {
        "content": "[[Load Testing]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "- Load Testing is the process of putting demand on a system and measuring its response",
        "colspan": 2
      },
      null,
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# <strong>3 - Commonality Between All Test Types</strong>
###### Each Test Should be Predictable not Flaky

When running the same test multiple times it should either: always fail or always pass. A test like that is a Flaky Test. Mock anything that is unpredictable.
###### Each Test Should Mock External Systems (Generally), except Cross-System Test

When dealing with a datastore, queries are typically mocked. In other cases, an embedded datastore is used in place of the environment's datastore. This also prevents data corruption. I prefer using embedded databases for all tests, then have a Cross-System Test to assert connection to the actual database (maybe even test basic CRUD operations). If a test uses an actual database, make sure the database state is the same before and after running the test (e.g. if the test adds a row, delete it at the end of the test)

When dealing with an external application, do the same as with a datastore. For example, API calls should be mocked.
###### Long Running Tests Should Not be Part of the Build Process (Preferably)

We like builds to be to run as fast as possible.

If a long running test must be part of a build, then find ways to shorten it. Perhaps mock long running processes. Or cut down redundancy (e.g. instead of persisting 100 objects to a database, persist just 1 or 2).
###### Each Test Should have a Perfect Balance Between DAMP & DRY

Readability matters, it doesn't hurt to have duplication in tests, if it improves readability.
- DAMP (Descriptive and Meaningful Phrases) increases maintainability by reducing time necessary to read and understand code
- DRY (Don't Repeat Yourself) increases maintainability by isolating change (risk) to only parts of the system that must change

I lean towards DRY as reused code means less code to read
###### Each Test Should test the Function/Behavior Not the Implementation (when possible)

A test should concern itself with the result, not the steps to the result. For example, calling the method square(x) with argument 2 should return 4, we shouldn't worry about the bit manipulation.

A plus side is that refactoring code doesn't not require much change to the test. This is because, the implementation changed but not the behavior.
###### Each Test Should have the form: Given-When-Then (Preferably)

The idea is to break down a scenario/test into 3 sections:
- given - describes the state of the world before the behavior is tested (usually state setup is done within @Before or the within the actual test method)
- when - is the behavior that is being tested
- then - describes the changes expected or the state of the world after the specified behavior

Sometimes, we write this into the name of the test method. For example:
- <code>public void givenFourUsersInDB\_whenCreateNewUser\_thenFiveUsersInDB() { ... }</code>

> [!expand]- Click here to expand...
> - [https://martinfowler.com/bliki/GivenWhenThen.html](https://martinfowler.com/bliki/GivenWhenThen.html)
> - other similar styles:
> 	- [Meszaros](https://martinfowler.com/books/xunit) describes the pattern as [Four-Phase Test](http://xunitpatterns.com/Four%20Phase%20Test.html). His four phases are Setup (Given), Exercise (When), Verify (Then) and Teardown
> 	- Bill Wake came up with the formulation as [Arrange, Act, Assert](http://xp123.com/articles/3a-arrange-act-assert/)
###### <strong>Each Test Should have the form: Arrange Act Assert (AAA) (Preferably)</strong>

The idea is to group the code within a single test into 3 parts. Which somewhat reflects the Given-When-Then naming format

> [!expand]- Click here to expand...
> ```
> public void givenFourUsersInDB_whenCreateNewUser_thenFiveUsersInDB() {
> 	// 1 - Arrange
>     db.insert(user1)
> 	db.insert(user2)
> 	db.insert(user3)
> 	db.insert(user4)
>
> 	// 2 - Act
> 	testObject.createNewUser(...)
>
> 	// 3 - Assert
> 	assertEquals(5, db.findAllUsers().count())
> 	
> 	// 4 - Reset
> 	db.deleteAllUsers()
> }
> ```
# <strong>4 - Other</strong>
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [https://martinfowler.com/tags/testing.html](https://martinfowler.com/tags/testing.html)
- [[Microservices Architecture - Testing]]

# <strong>5 - Not Curated</strong>
- <strong>unit testing </strong>- testing one unit of code (sometimes a unit is translated to a java class)
	- should constrain the behavior of the unit under test. An unfortunate side effect is that sometimes, tests also constrain the implementation
- <strong>component testing</strong> - testing multiple units of code
- <strong>integration testing</strong> - testing between 2 units of code at their integration point
	- verifies the communication paths and interactions between units/components to detect interface defects
- <strong>end-to-end testing</strong> - testing across several units within a single application
	- the value of end-to-end testing: [https://www.symphonious.net/2015/04/30/making-end-to-end-tests-work/](https://www.symphonious.net/2015/04/30/making-end-to-end-tests-work/)
- <strong>test pyramid</strong> -
	- [https://martinfowler.com/articles/practical-test-pyramid.html](https://martinfowler.com/articles/practical-test-pyramid.html)
	- [https://martinfowler.com/bliki/TestPyramid.html](https://martinfowler.com/bliki/TestPyramid.html)
	- "the pyramid is based on the assumption that broad-stack tests are expensive, slow, and brittle compared to more focused tests, such as unit tests. While this is usually true, there are exceptions. If my high level tests are fast, reliable, and cheap to modify - then lower-level tests aren't needed
- <strong>assertion free testing</strong> - testing without assertions (usually done just to pass code coverage)
- <strong>integration testing</strong> - similar to end-to-end testing defined above
	- <strong>narrow integration tests</strong> - runs external dependencies locally
	- <strong>broad integration tests</strong> - calls out to real external dependencies
- <strong>code coverage</strong> - commonly mistaken as a quality target metric. code coverage only finds untested code and that is all
- It is important to constantly question the value a unit test provides versus the cost it has in maintenance or the amount it constrains your implementation. By doing this, it is possible to keep the test suite small, focussed and high value
- <strong>Business Facing Test</strong> -
	- usually these tests are defined via the Given-When-Then style (cucumber is a nice framework)
	- [https://martinfowler.com/bliki/BusinessFacingTest.html](https://martinfowler.com/bliki/BusinessFacingTest.html)
- <strong>Specification by Example (SBE)</strong> is a collaborative approach to defining requirements and business-oriented functional tests for software products based on capturing and illustrating requirements using realistic examples instead of abstract statements
	- In their original (and common) world view, each time you implement a new [UserStory](https://martinfowler.com/bliki/UserStory.html) you add one or more tests. This leads you to a simple tracing structure where each story is verified by one or more acceptance tests. But the problem with this approach is that over time the tests grow in complexity with much duplication. In their new world view there is a suite of acceptance tests that describe the application behavior in [SpecificationByExample](https://martinfowler.com/bliki/SpecificationByExample.html) style. Each time they play a new story, they decide how to update this suite to reflect the new behavior. This breaks the simple story-to-test relationship, but results in a much simpler and coherent suite of tests \~ excerpt from [https://martinfowler.com/bliki/NashvilleProject.html](https://martinfowler.com/bliki/NashvilleProject.html)
- <strong>Test Impact Analysis (TIA)</strong> - [https://martinfowler.com/articles/rise-test-impact-analysis.html#CreationOfSuitesAndTags](https://martinfowler.com/articles/rise-test-impact-analysis.html#CreationOfSuitesAndTags)

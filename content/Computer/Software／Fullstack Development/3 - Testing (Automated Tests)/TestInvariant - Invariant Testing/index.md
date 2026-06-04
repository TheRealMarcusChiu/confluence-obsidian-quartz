---
title: "TestInvariant - Invariant Testing"
created: 2021-03-21T12:43:10.191-05:00
modified: 2021-03-21T12:45:15.963-05:00
parent: "[[3 - Testing (Automated Tests)]]"
children: []
---
In Design by Contract (DbC) you define an invariant for each class. This invariant states the properties of the class that must always be true. A object must always satisfy its invariant (unless it's in the middle of doing anything.) A failure in the invariant throws an exception. (This checking may be turned off for production use if desired for performance.)

Applying this idea to [[Test Driven Development (TDD) - Red-Green Refactor - Test-First Programming|TDD]] means that you define a common method to test the invariant in your production classes and test it in your test code.

It's time for the usual trivial example.
```
public class Bowler ...
    int overs, runs, wickets;
```

A simple invariant for a bowler is that these values should all by non-negative. So you could have an invariant defined like this.
```
public boolean passesInvariant() {
	return (runs >= 0 && overs >= 0 && wickets >= 0);
}
```

You would then using during testing after the setup and exercise phases of the test.
```
public void testConcedingRunsAddsToRunsScore() {
    Bowler botham = new Bowler();       // setup - showing my age
    assert botham.passesInvariant();
    botham.concedeRuns(4);              //exercise
    assert botham.passesInvariant();
    assertEquals(4, botham.getRuns());  //verify
}
```

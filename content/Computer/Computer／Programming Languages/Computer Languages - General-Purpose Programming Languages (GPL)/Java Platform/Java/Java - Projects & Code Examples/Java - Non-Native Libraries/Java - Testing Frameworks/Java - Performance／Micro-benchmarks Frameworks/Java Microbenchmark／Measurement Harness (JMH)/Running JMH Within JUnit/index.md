---
title: "Running JMH Within JUnit"
created: 2021-10-09T19:42:17.893-05:00
modified: 2021-10-09T19:47:07.958-05:00
parent: "[[Java Microbenchmark／Measurement Harness (JMH)]]"
children: []
---
# Resources
- [https://stackoverflow.com/questions/30485856/how-to-run-jmh-from-inside-junit-tests](https://stackoverflow.com/questions/30485856/how-to-run-jmh-from-inside-junit-tests)
- [https://www.retit.de/continuous-benchmarking-with-jmh-and-junit-2/](https://www.retit.de/continuous-benchmarking-with-jmh-and-junit-2/)

# Code Example
```
<dependencies>
       <dependency>
              <groupId>org.openjdk.jmh</groupId>
              <artifactId>jmh-core</artifactId>
              <version>1.19</version>
              <scope>test</scope>
       </dependency>
       <dependency>
             <groupId>org.openjdk.jmh</groupId>
             <artifactId>jmh-generator-annprocess</artifactId>
             <version>1.19</version>
             <scope>test</scope>
       </dependency>
       <dependency>
             <groupId>junit</groupId>
             <artifactId>junit</artifactId>
             <version>4.12</version>
             <scope>test</scope>
       </dependency>
</dependencies>
```

Note that in addition to the dependency to <code><font style="color: rgb(122,134,154);">jmh-core</font></code>, you will also need a dependency to the <code><font style="color: rgb(122,134,154);">annotation-processor</font></code>. The annotation processor will parse your benchmarks and evaluate all the annotations you defined. If the annotation processor hasn’t run before your benchmark starts, JMH will complain about this error message:
```
java.lang.RuntimeException: ERROR: Unable to find the resource: /META-INF/BenchmarkList
```

When running Maven from the command line, the annotation processor should be executed automatically. If you want to run your tests in an IDE as well, you might first have to configure the annotation processor in the IDE – alternatively, you can just trigger the Maven build once from the command line, and it should then also work within the IDE.

Next up, we need our benchmark. For demonstration purposes, we will use a very simple benchmark like the following one:
```
@BenchmarkMode(Mode.Throughput)
public class JmhBenchmark {

       @Benchmark
       @Fork(3)
       public static double benchmarkPerformanceCriticalComponent() {
             return PerformanceCriticalComponent.performanceCriticalMethod();
       }
}
```

So this benchmark simply calls the method that we want to test. Ensure that you are actually consuming the result to avoid dead code elimination. You should also ensure that you are running your benchmark in a forked JVM and not in the JUnit JVM – if you want to, you can also parametrize the number of forks or iterations by defining it in the <code><font style="color: rgb(122,134,154);">Runner</font></code> in the next step.

Now comes the part where we deviate from the previously presented approach. Instead of using the <code><font style="color: rgb(122,134,154);">maven-shade-plugin</font></code> to package our benchmark into an uber JAR and executing that, we will call our benchmark from within JUnit by using JMH’s <code><font style="color: rgb(122,134,154);">Runner</font></code> class. This class will execute the benchmark with all the specified options for us, and also present us with a set of <code><font style="color: rgb(122,134,154);">RunResult</font></code> objects which we can evaluate. An example might look like this:
```
public class JmhBenchmarkTest {

       private static DecimalFormat df = new DecimalFormat("0.000");
       private static final double REFERENCE_SCORE = 37.132;

       @Test
       public void runJmhBenchmark() throws RunnerException {
             Options opt = new OptionsBuilder()
                          .include(JmhBenchmark.class.getSimpleName())
                          .build();
             Collection<RunResult> runResults = new Runner(opt).run();
             assertFalse(runResults.isEmpty());
             for(RunResult runResult : runResults) {
                    assertDeviationWithin(runResult, REFERENCE_SCORE, 0.05);
             }
       }

       private static void assertDeviationWithin(RunResult result, double referenceScore, double maxDeviation) {
             double score = result.getPrimaryResult().getScore();
             double deviation = Math.abs(score/referenceScore - 1);
             String deviationString = df.format(deviation * 100) + "%";
             String maxDeviationString = df.format(maxDeviation * 100) + "%";
             String errorMessage = "Deviation " + deviationString + " exceeds maximum allowed deviation " + maxDeviationString;
             assertTrue(errorMessage, deviation < maxDeviation);
       }
}
```

In this example test case, we simply create a new <code><font style="color: rgb(122,134,154);">Runner</font></code> object which gets initialized with our benchmark configuration defined using the <code><font style="color: rgb(122,134,154);">OptionsBuilder</font></code>. The <code><font style="color: rgb(122,134,154);">Runner</font></code> will take care of everything else. If you want to, you can define some assertions on the <code><font style="color: rgb(122,134,154);">RunResult</font></code> to ensure that the performance is the same as you would expect it to be – in this case, we check whether our score doesn’t deviate from a reference score by more than five percent. This of course assumes that your benchmark will always run under the same stable conditions, i.e., the test will most likely fail when executed on different hardware. In the example above, the reference score was simply the result of an earlier benchmark run, but you can also use values from your production environment or specific SLAs as reference for your benchmarks.

As you can see, writing a benchmark and integrating it with JUnit is fairly easy. By automatically executing the test for every build of your software, you can ensure that your component’s performance doesn’t deteriorate. The hardest part about this is to design a benchmark that is stable enough to be run continuously. To ensure this is the case, you have to think about how to isolate your benchmark from the rest of your build process (some dedicated performance testing environment might make sense), but also the test data and test setup should ensure that the test will be reliable on consecutive runs.

If done right, benchmarks can help you to identify performance regressions very quickly and early on in the development process, which is much cheaper than finding them in later stages of the process. This will help you to make sure your software performance stays good – and even when it’s not yet where you’d like it to be, you can only start improving it by measuring it.

---
title: "Java Microbenchmark／Measurement Harness (JMH)"
created: 2021-10-09T17:05:38.696-05:00
modified: 2021-10-09T19:48:24.154-05:00
parent: "[[Java - Performance／Micro-benchmarks Frameworks]]"
children:
  - "[[Running JMH Within JUnit]]"
---
###### Java Microbenchmark/Measurement Harness (JMH)
- is a Java harness for building, running, and analyzing nano/micro/milli/macro benchmarks written in Java and other languages targetting the JVM
- takes care of the things like JVM warm-up and code-optimization paths, making benchmarking as simple as possible

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://www.baeldung.com/java-microbenchmark-harness](https://www.baeldung.com/java-microbenchmark-harness)
- [http://tutorials.jenkov.com/java-performance/jmh.html#why-are-java-microbenchmarks-hard](http://tutorials.jenkov.com/java-performance/jmh.html#why-are-java-microbenchmarks-hard)

# Tutorial

> [!expand-ui]- Getting Started
> The easiest way to get started with JMH is to generate a new JMH project using the JMH Maven archetype. The JMH Maven archetype will generate a new Java project with a single, example benchmark Java class, and a Maven <code><font style="color: rgb(122,134,154);">pom.xml</font></code> file. The Maven <code><font style="color: rgb(122,134,154);">pom.xml</font></code> file contains the correct dependencies to compile and build your JMH microbenchmark suite.
>
> Here is the Maven command line needed to generate a JMH project template:
> ```
> mvn archetype:generate
>           -DinteractiveMode=false
>           -DarchetypeGroupId=org.openjdk.jmh
>           -DarchetypeArtifactId=jmh-java-benchmark-archetype
>           -DgroupId=com.marcus
>           -DartifactId=first-benchmark
>           -Dversion=1.0
> ```
>
> This is one long command. There should be no line breaks in the command. I just added them to make the command easier to read.
>
> This command line will create a new directory named <code><font style="color: rgb(122,134,154);">first-benchmark</font></code> (the <code><font style="color: rgb(122,134,154);">artifactId</font></code> specified in the Maven command). Inside this directory will be generated a new Maven source directory structure (<code><font style="color: rgb(122,134,154);">src/main/java</font></code>). Inside the <code>java</code> source root directory will be generated a single Java packaged named <code><font style="color: rgb(122,134,154);">com.marcus</font></code> (actually, a package named <code>com</code> with a subpackage named <code><font style="color: rgb(122,134,154);">marcus</font></code>). Inside the <code><font style="color: rgb(122,134,154);">com.marcus</font></code> package will be a JMH benchmark Java class named <code><font style="color: rgb(122,134,154);">MyBenchmark</font></code>.

> [!expand-ui]- Your First Benchmark
> It is time to write your first JMH benchmark class, or at least see how it is done.
>
> The generated <code><font style="color: rgb(122,134,154);">MyBenchmark</font></code> class is a JMH class template that you can use to implement your JMH benchmarks. You can either implement your benchmarks directly in the generated <code><font style="color: rgb(122,134,154);">MyBenchmark</font></code> class, or create a new class in the same Java package. To make it easy for you to write your first JMH benchmark I will just use the generated class in this example.
>
> Here is first how the generated <code><font style="color: rgb(122,134,154);">MyBenchmark</font></code> class looks:
> ```
> import org.openjdk.jmh.annotations.Benchmark;
>
> public class MyBenchmark {
>
>     @Benchmark
>     public void testMethod() {
>         // This is a demo/sample template for building your JMH benchmarks. Edit as needed.
>         // Put your benchmark code here.
>     }
> }
> ```
>
> You can put the code you want to measure inside the <code><font style="color: rgb(122,134,154);">testMethod()</font></code> method body. Here is an example:
> ```
> import org.openjdk.jmh.annotations.Benchmark;
>
> public class MyBenchmark {
>
>     @Benchmark
>     public void testMethod() {
>         // This is a demo/sample template for building your JMH benchmarks. Edit as needed.
>         // Put your benchmark code here.
>         int a = 1;
>         int b = 2;
>         int sum = a + b;
>     }
> }
> ```
>
> Note: This particular example is a bad benchmark implementation, as the JVM can see that <code>sum</code> is never used, and may thus eliminate the sum calculation. Well in fact the whole method body could be removed by JVM dead code elimination. For now, just imagine that the <code><font style="color: rgb(122,134,154);">testMethod()</font></code> body actually contained a good benchmark implementation. I will get back on how to implement better benchmarks with JMH later in this tutorial.

> [!expand-ui]- Building Your Benchmark
> You can now compile and build a benchmark JAR file from your JMH benchmark project using this Maven command:
> ```
> mvn clean install
> ```
>
> This Maven command must be executed from inside the generated benchmark project directory (in this example the <code><font style="color: rgb(122,134,154);">first-benchmark</font></code> directory).
>
> When this command is executed a JAR file will be created inside the <code><font style="color: rgb(122,134,154);">first-benchmark/target</font></code> directory. The JAR file will be named <code><font style="color: rgb(122,134,154);">benchmarks.jar</font></code>

> [!expand-ui]- The branchmark.jar
> When you build your JMH benchmarks, Maven will always generate a JAR file named <code><font style="color: rgb(122,134,154);">benchmarks.jar</font></code> in the <code>target</code> directory (Maven's standard output directory).
>
> The <code><font style="color: rgb(122,134,154);">benchmarks.jar</font></code> file contains everything needed to run your benchmarks. It contains your compiled benchmark classes as well as all JMH classes needed to run the benchmark.
>
> If your benchmarks have any external dependencies (JAR files from other projects needed to run your benchmarks), declare these dependencies inside the Maven <code><font style="color: rgb(122,134,154);">pom.xml</font></code>, and they will be included in the <code><font style="color: rgb(122,134,154);">benchmarks.jar</font></code> too.
>
> Since <code><font style="color: rgb(122,134,154);">benchmarks.jar</font></code> is fully self-contained, you can copy that JAR file to another computer to run your JMH benchmarks on that computer.

> [!expand-ui]- Running Your JMH Benchmarks
> Once you have built your JMH benchmark code you can run the benchmark using this Java command:
> ```
> java -jar target/benchmarks.jar
> ```
>
> This will start JMH on your benchmark classes. JMH will scan through your code and find all benchmarks and run them. JMH will print out the results to the command line.
>
> Running the benchmarks will take some time. JMH makes several warm-ups, iterations, etc. to make sure the results are not completely random. The more runs you have, the better average performance and high/low-performance information you get.
>
> You should let the computer alone while it runs the benchmarks, and you should close all other applications (if possible). If your computer is running other applications, these applications may take time from the CPU and give incorrect (lower) performance numbers.

> [!expand-ui]- JMH Benchmark Modes
> JMH can run your benchmarks in different modes. The benchmark mode tells JMH what you want to measure. JMH offers these benchmark modes:
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Throughput\n(DEFAULT)",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "Measures the number of operations per second, meaning the number of times per second your benchmark method could be executed."
>     ],
>     [
>       {
>         "content": "Average Time",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "Measures the average time it takes for the benchmark method to execute (a single execution)."
>     ],
>     [
>       {
>         "content": "Sample Time",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "Measures how long time it takes for the benchmark method to execute, including max, min time etc."
>     ],
>     [
>       {
>         "content": "Single Shot Time",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "Measures how long time a single benchmark method execution takes to run. This is good to test how it performs under a cold start (no JVM warm-up)."
>     ],
>     [
>       {
>         "content": "All",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "Measures all of the above."
>     ]
>   ],
>   "tableStyle": "width: 100.0%;"
> }
> ```
>
> You specify what benchmark mode your benchmark should use with the JMH annotation <code><font style="color: rgb(128,128,0);">@BenchmarkMode</font></code>. You put the <code><font style="color: rgb(128,128,0);">@BenchmarkMode</font></code> annotation on top of your benchmark method. Here is a JMH <code><font style="color: rgb(128,128,0);">@BenchmarkMode</font></code> example:
> ```
> import org.openjdk.jmh.annotations.Benchmark;
> import org.openjdk.jmh.annotations.BenchmarkMode;
> import org.openjdk.jmh.annotations.Mode;
>
> public class MyBenchmark {
>
>     @Benchmark
>     @BenchmarkMode(Mode.Throughput)
>     public void testMethod() {
>         // This is a demo/sample template for building your JMH benchmarks. Edit as needed.
>         // Put your benchmark code here.
>
>         int a = 1;
>         int b = 2;
>         int sum = a + b;
>     }
> }
> ```
>
> Notice the <code><font style="color: rgb(128,128,0);">@BenchmarkMode(Mode.Throughput)</font></code> annotation above the <code><font style="color: rgb(122,134,154);">testMethod()</font></code> method. That annotation specifies the benchmark mode. The <code><font style="color: rgb(122,134,154);">Mode</font></code> class contains constants for each possible benchmark mode.

> [!expand-ui]- Benchmark TimeUnits
> JMH enables you to specify what time units you want the benchmark results printed in. The time unit will be used for all benchmark modes your benchmark is executed in.
>
> You specify the benchmark time unit using the JMH annotation <code><font style="color: rgb(128,128,0);">@OutputTimeUnit</font></code>. The <code><font style="color: rgb(128,128,0);">@OutputTimeUnit</font></code> annotation takes a <code><font style="color: rgb(122,134,154);">java.util.concurrent.TimeUnit</font></code> as parameter to specify the actual time unit to use. Here is a JMH <code><font style="color: rgb(128,128,0);">@OutputTimeUnit</font></code> annotation example:
> ```
> import org.openjdk.jmh.annotations.Benchmark;
> import org.openjdk.jmh.annotations.BenchmarkMode;
> import org.openjdk.jmh.annotations.Mode;
> import org.openjdk.jmh.annotations.OutputTimeUnit;
>
> import java.util.concurrent.TimeUnit;
>
> public class MyBenchmark {
>
>     @Benchmark
>     @BenchmarkMode(Mode.Throughput)
>     @OutputTimeUnit(TimeUnit.MINUTES)
>     public void testMethod() {
>         // This is a demo/sample template for building your JMH benchmarks. Edit as needed.
>         // Put your benchmark code here.
>
>         int a = 1;
>         int b = 2;
>         int sum = a + b;
>     }
> }
> ```
>
> In this example, the time unit is specified in minutes. This means that you want the output shown using the time unit minutes (e.g. operations per minute).
>
> The <code><font style="color: rgb(122,134,154);">TimeUnit</font></code> class contains the following time unit constants:
> - <code><font style="color: rgb(122,134,154);">TimeUnit.NANOSECONDS</font></code>
> - <code><font style="color: rgb(122,134,154);">TimeUnit.MICROSECONDS</font></code>
> - <code><font style="color: rgb(122,134,154);">TimeUnit.MILLISECONDS</font></code>
> - <code><font style="color: rgb(122,134,154);">TimeUnit.SECONDS</font></code>
> - <code><font style="color: rgb(122,134,154);">TimeUnit.MINUTES</font></code>
> - <code><font style="color: rgb(122,134,154);">TimeUnit.HOURS</font></code>
> - <code><font style="color: rgb(122,134,154);">TimeUnit.DAYS</font></code>

> [!expand-ui]- Benchmark State
> Sometimes you may want to initialize some variables that your benchmark code needs, but you do not want to be part of the code your benchmark measures. Such variables are called "state" variables. State variables are declared in special state classes, and an instance of that state class can then be provided as a parameter to the benchmark method. This may sound a bit complicated, so here is a JMH benchmark state example:
> ```
> import org.openjdk.jmh.annotations.*;
> import java.util.concurrent.TimeUnit;
>
> public class MyBenchmark {
>
>     @State(Scope.Thread)
>     public static class MyState {
>         public int a = 1;
>         public int b = 2;
>         public int sum ;
>     }
>
>     @Benchmark
>     @BenchmarkMode(Mode.Throughput)
>     @OutputTimeUnit(TimeUnit.MINUTES)
>     public void testMethod(MyState state) {
>         state.sum = state.a + state.b;
>     }
> }
> ```
>
> In this example, I have added a nested static class named <code><font style="color: rgb(122,134,154);">MyState</font></code>. The <code><font style="color: rgb(122,134,154);">MyState</font></code> class is annotated with the JMH <code><font style="color: rgb(128,128,0);">@State</font></code> annotation. This signals to JMH that this is a state class. Notice that the <code><font style="color: rgb(122,134,154);">testMethod()</font></code> benchmark method now takes an instance of <code><font style="color: rgb(122,134,154);">MyState</font></code> as parameter.
>
> Notice also that the <code><font style="color: rgb(122,134,154);">testMethod()</font></code> body has now been changed to use the <code><font style="color: rgb(122,134,154);">MyState</font></code> object when performing its sum calculation.
> ### State Scope
>
> A state object can be reused across multiple calls to your benchmark method. JMH provides different "scopes" that the state object can be reused in. Their state scope is specified in the parameter of the <code><font style="color: rgb(122,134,154);">@State</font></code> annotation. In the example above the scope chosen was <code><font style="color: rgb(122,134,154);">Scope.Thread</font></code>
>
> The <code><font style="color: rgb(122,134,154);">Scope</font></code> class contains the following scope constants:
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "<font style=\"color: rgb(122,134,154);\"><code>Scope.</code>Thread</font>",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "Each thread running the benchmark will create its own instance of the state object."
>     ],
>     [
>       {
>         "content": "<font style=\"color: rgb(122,134,154);\"><code>Scope.</code>Group</font>",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "Each thread group running the benchmark will create its own instance of the state object."
>     ],
>     [
>       {
>         "content": "<code><font style=\"color: rgb(122,134,154);\">Scope.Benchmark</font></code>",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "All threads running the benchmark share the same state object."
>     ]
>   ]
> }
> ```
> ### State Class Requirements
>
> A JMH state class must obey the following rules:
> - The class must be declared <code><font style="color: rgb(122,134,154);">public</font></code>
> - If the class is a nested class, it must be declared <code><font style="color: rgb(122,134,154);">static</font></code> (e.g. <code><font style="color: rgb(122,134,154);">public static class</font> ...</code>)
> - The class must have a public no-arg constructor (no parameters to the constructor).
>
> When these rules are obeyed you can annotate the class with the <code><font style="color: rgb(128,128,0);">@State</font></code> annotation to make JMH recognize it as a state class.
> ### State Object <font style="color: rgb(128,128,0);">@Setup</font> and <font style="color: rgb(128,128,0);">@TearDown</font>
>
> You can annotate methods in your state class with the <code><font style="color: rgb(128,128,0);">@Setup</font></code> and <code><font style="color: rgb(128,128,0);">@TearDown</font></code> annotations. The <code><font style="color: rgb(128,128,0);">@Setup</font></code> annotation tells JMH that this method should be called to set up the state object before it is passed to the benchmark method. The <code><font style="color: rgb(128,128,0);">@TearDown</font></code> annotation tells JMH that this method should be called to clean up ("tear down") the state object after the benchmark has been executed.
>
> The setup and tear-down execution time are not included in the benchmark runtime measurements.
>
> Here is a JMH state object example that shows the use of the <code><font style="color: rgb(128,128,0);">@Setup</font></code> and <code><font style="color: rgb(128,128,0);">@TearDown</font></code> annotations:
> ```
> import org.openjdk.jmh.annotations.*;
> import java.util.concurrent.TimeUnit;
>
> public class MyBenchmark {
>
>     @State(Scope.Thread)
>     public static class MyState {
>
>         @Setup(Level.Trial)
>         public void doSetup() {
>             sum = 0;
>             System.out.println("Do Setup");
>         }
>
>         @TearDown(Level.Trial)
>         public void doTearDown() {
>             System.out.println("Do TearDown");
>         }
>
>         public int a = 1;
>         public int b = 2;
>         public int sum ;
>     }
>
>     @Benchmark @BenchmarkMode(Mode.Throughput) @OutputTimeUnit(TimeUnit.MINUTES)
>     public void testMethod(MyState state) {
>         state.sum = state.a + state.b;
>     }
> }
> ```
>
> Notice the two new methods in the <code><font style="color: rgb(122,134,154);">MyState</font></code> class named <code><font style="color: rgb(122,134,154);">doSetup()</font></code>and <code><font style="color: rgb(122,134,154);">doTearDown()</font></code>. These methods are annotated with the <code><font style="color: rgb(128,128,0);">@Setup</font></code> and <code><font style="color: rgb(128,128,0);">@TearDown</font></code> annotations. This example only shows two methods, but you could have more methods annotated with <code><font style="color: rgb(128,128,0);">@Setup</font></code> and <code><font style="color: rgb(128,128,0);">@TearDown</font></code>.
>
> Notice also that the annotations take a parameter. There are three different values this parameter can take. The value you set instructs JMH about when the method should be called. The possible values are:
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "<code><font style=\"color: rgb(122,134,154);\">Level.Trial</font></code>",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "The method is called once for each time for each full run of the benchmark. A full run means a full \"fork\" including all warmup and benchmark iterations."
>     ],
>     [
>       {
>         "content": "<code><font style=\"color: rgb(122,134,154);\">Level.Iteration</font></code>",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "The method is called once for each iteration of the benchmark."
>     ],
>     [
>       {
>         "content": "<code><font style=\"color: rgb(122,134,154);\">Level.Invocation</font></code>",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "The method is called once for each call to the benchmark method."
>     ]
>   ]
> }
> ```
>
> If you have any doubts about when a setup or tear-down method is called, try inserting a <code><font style="color: rgb(122,134,154);">System.out.println()</font></code> statement in the method. Then you will see. Then you can change the <code><font style="color: rgb(128,128,0);">@Setup</font></code> and <code><font style="color: rgb(128,128,0);">@TearDown</font></code> parameter values until your setup and tear-down methods are called at the right time.

> [!expand-ui]- Writing Good Benchmarks
> Now that you have seen how to use JMH to write benchmarks, it is time to discuss how to write <em>good benchmarks</em>. As mentioned at the beginning of this JMH tutorial there are a couple of pitfalls that you can easily fall into when implementing benchmarks. I will discuss some of these pitfalls in the following sections.
>
> One common pitfall is that the JVM may apply optimizations to your components when executed inside the benchmark which could not have been applied if the component was executed inside your real application. Such optimizations will make your code look faster than it will be in reality. I will discuss some of these optimizations later.

> [!expand-ui]- Loop Optimization
> It is tempting to put your benchmark code inside a loop in your benchmark methods, in order to repeat it more times per call to the benchmark method (to reduce the overhead of the benchmark method call). However, the JVM is very good at optimizing loops, so you may end up with a different result than what you expected. In general, you should avoid loops in your benchmark methods, unless they are part of the code you want to measure (and not <em>around</em> the code you want to measure).

> [!expand-ui]- Dead Code Elimination
> One of the JVM optimizations to avoid when implementing performance benchmarks is dead code elimination. If the JVM detects that the result of some computation is never used, the JVM may consider this computation <em>dead code</em> and eliminate it. Look at this benchmark example:
> ```
> import org.openjdk.jmh.annotations.Benchmark;
>
> public class MyBenchmark {
>
>     @Benchmark
>     public void testMethod() {
>         int a = 1;
>         int b = 2;
>         int sum = a + b;
>     }
>
> }
> ```
>
> The JVM can detect that the calculation of <code><font style="color: rgb(122,134,154);">a + b</font></code> which is assigned to <code><font style="color: rgb(122,134,154);">sum</font></code> is never used. Therefore the JVM can remove the calculation of <code><font style="color: rgb(122,134,154);">a + b</font></code> altogether. It is considered dead code. The JVM can then detect that the <code>sum</code> variable is never used and that subsequently <code>a</code> and <code>b</code> are never used. They too can be eliminated.
>
> In the end, there is no code left in the benchmark. The results from running this benchmark are thus highly misleading. The benchmarks do not actually measure the time of adding two variables and assigning the value to a third variable. The benchmarks measure nothing at all.
> ### Avoiding Dead Code Elimination
>
> To avoid dead code elimination you must make sure that the code you want to measure does not look like dead code to the JVM. There are two ways to do that.
> - Return the result of your code from the benchmark method.
> - Pass the calculated value into a "black hole" provided by JMH.
>
> I will show you examples of both methods in the following sections.
> ### Return Value From Benchmark Method
>
> Returning a computed value from the JMH benchmark method could look like this:
> ```
> import org.openjdk.jmh.annotations.Benchmark;
>
> public class MyBenchmark {
>
>     @Benchmark
>     public int testMethod() {
>         int a = 1;
>         int b = 2;
>         int sum = a + b;
>
>         return sum;
>     }
> }
> ```
>
> Notice how the <code><font style="color: rgb(122,134,154);">testMethod()</font></code>method now returns the <code>sum</code> variable. This way the JVM cannot just eliminate the addition, because the return value might be used by the caller. JMH will take of tricking the JVM into believing that the return value is actually used.
>
> If your benchmark method is calculating multiple values that might end up being eliminated as dead code, you can either combine the two values into a single and return that value (e.g. an object with both values in).
> ### Passing Value to a Black Hole
>
> An alternative to returning a combined value is to pass the calculated values (or returned/generated objects or whatever the result of your benchmark is) into a JMH <em>black hole</em>. Here is how passing values into a black hole looks:
> ```
> import org.openjdk.jmh.annotations.Benchmark;
> import org.openjdk.jmh.infra.Blackhole;
>
> public class MyBenchmark {
>
>     @Benchmark
>    public void testMethod(Blackhole blackhole) {
>         int a = 1;
>         int b = 2;
>         int sum = a + b;
>         blackhole.consume(sum);
>     }
> }
> ```
>
> Notice how the <code><font style="color: rgb(122,134,154);">testMethod()</font></code> benchmark method now takes a <code><font style="color: rgb(122,134,154);">Blackhole</font></code> object as a parameter. This will be provided to the test method by JMH when called.
>
> Notice also how the calculated sum in the <code><font style="color: rgb(122,134,154);">sum</font></code> variable is now passed to the <code><font style="color: rgb(122,134,154);">consume()</font></code>method of the <code><font style="color: rgb(122,134,154);">Blackhole</font></code> instance. This will fool the JVM into thinking that the <code><font style="color: rgb(122,134,154);">sum</font></code> variable is actually being used.
>
> If your benchmark method produces multiple results you can pass each of these results to a black hole, meaning calling <code><font style="color: rgb(122,134,154);">consume()</font></code> on the <code><font style="color: rgb(122,134,154);">Blackhole</font></code> instance for each value.

> [!expand-ui]- Constant Folding Elimination
> Constant folding is another common JVM optimization. A calculation that is based on constants will often result in the exact same result, regardless of how many times the calculation is performed. The JVM may detect that, and replace the calculation with the result of the calculation.
>
> As an example, look at this benchmark:
> ```
> import org.openjdk.jmh.annotations.Benchmark;
>
> public class MyBenchmark {
>
>     @Benchmark
>     public int testMethod() {
>         int a = 1;
>         int b = 2;
>         int sum = a + b;
>
>         return sum;
>     }
> }
> ```
>
> The JVM may detect that the value of <code><font style="color: rgb(122,134,154);">sum</font></code> is based on the two constant values <font style="color: rgb(122,134,154);">1</font> and <font style="color: rgb(122,134,154);">2</font> in <code><font style="color: rgb(122,134,154);">a</font></code> and <code><font style="color: rgb(122,134,154);">b</font></code>. It may thus replace the above code with this:
> ```
> import org.openjdk.jmh.annotations.Benchmark;
>
> public class MyBenchmark {
>
>     @Benchmark
>     public int testMethod() {
>         int sum = 3;
>         return sum;
>     }
> }
> ```
>
> Or even just <code><font style="color: rgb(122,134,154);">return 3;</font></code> directly. The JVM could even continue and never call the <code><font style="color: rgb(122,134,154);">testMethod()</font></code> because it knows it always returns <font style="color: rgb(122,134,154);">3</font>, and just inline the constant <font style="color: rgb(122,134,154);">3</font> wherever the <code><font style="color: rgb(122,134,154);">testMethod()</font></code> was to be called.
> ### Avoiding Constant Folding
>
> To avoid constant folding you must not hardcode constants into your benchmark methods. Instead, the input to your calculations should come from a state object. This makes it harder for the JVM to see that the calculations are based on constant values. Here is an example:
> ```
> import org.openjdk.jmh.annotations.*;
>
> public class MyBenchmark {
>
>     @State(Scope.Thread)
>     public static class MyState {
>         public int a = 1;
>         public int b = 2;
>     }
>
>     @Benchmark 
>     public int testMethod(MyState state) {
>         int sum = state.a + state.b;
>         return sum;
>     }
> }
> ```
>
> Remember, if your benchmark method calculates multiple values you can pass them through a black hole instead of returning them, to also avoid the dead code elimination optimization. For instance:
> ```
>     @Benchmark
>     public void testMethod(MyState state, Blackhole blackhole) {
>         int sum1 = state.a + state.b;
>         int sum2 = state.a + state.a + state.b + state.b;
>
>         blackhole.consume(sum1);
>         blackhole.consume(sum2);
>     } 
> ```

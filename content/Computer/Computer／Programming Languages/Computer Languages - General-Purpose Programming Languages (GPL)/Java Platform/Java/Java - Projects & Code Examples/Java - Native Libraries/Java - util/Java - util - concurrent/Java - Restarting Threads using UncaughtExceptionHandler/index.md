---
title: "Java - Restarting Threads using UncaughtExceptionHandler"
created: 2021-04-04T14:20:23.599-05:00
modified: 2021-04-04T14:25:23.053-05:00
parent: "[[Java - util - concurrent]]"
children: []
---
As program does not try to catch a [[Java - Throwable - Errors vs Exceptions - Unchecked vs Checked|RuntimeException]], exception floats through JVM level and thread gets killed. This is absolutely normal behavior but it MAY NOT be desired behavior
# Without UncaughtExceptionHandler
```
class Task implements Runnable {
   @Override
   public void run() {
      System.out.println(Integer.parseInt("123"));
      System.out.println(Integer.parseInt("234"));
      System.out.println(Integer.parseInt("345"));
      System.out.println(Integer.parseInt("XYZ")); //This will cause NumberFormatException
      System.out.println(Integer.parseInt("456"));
   }
}

public class DemoThreadExample {
   public static void main(String[] args) {
      Task task = new Task();
      Thread thread = new Thread(task);
      thread.start();
   }
}
```
###### output<code>123</code>
<code>234</code>
<code>345</code>
<code>Exception in thread</code><code>"Thread-0"</code> <code>java.lang.NumberFormatException: For input string:</code><code>"XYZ"</code>
<code></code><code>at java.lang.NumberFormatException.forInputString(Unknown Source)</code>
<code></code><code>at java.lang.Integer.parseInt(Unknown Source)</code>
<code></code><code>at java.lang.Integer.parseInt(Unknown Source)</code>
<code></code><code>at examples.algorithms.sleepingbarber.Task.run(DemoThreadExample.java:</code><code>24</code><code>)</code>
<code></code><code>at java.lang.Thread.run(Unknown Source)</code>
# With UncaughtExceptionHandler
```
class ExceptionHandler implements UncaughtExceptionHandler {
   public void uncaughtException(Thread t, Throwable e) {
      System.out.printf("An exception has been captured\n");
      System.out.printf("Thread: %s\n", t.getId());
      System.out.printf("Exception: %s: %s\n", e.getClass().getName(), e.getMessage());
      System.out.printf("Stack Trace: \n");
      e.printStackTrace(System.out);
      System.out.printf("Thread status: %s\n", t.getState());
      new Thread(new Task()).start();
   }
}

class Task implements Runnable {
   @Override
   public void run() {
      Thread.currentThread().setUncaughtExceptionHandler(new ExceptionHandler());
      System.out.println(Integer.parseInt("123"));
      System.out.println(Integer.parseInt("234"));
      System.out.println(Integer.parseInt("345"));
      System.out.println(Integer.parseInt("XYZ")); //This will cause NumberFormatException
      System.out.println(Integer.parseInt("456"));
   }
}
```
###### output

<code>123</code>
<code>234</code>
<code>345</code>
<code>An exception has been captured</code>
<code>Thread:</code><code>1394</code>
<code>Exception: java.lang.NumberFormatException: For input string:</code><code>"XYZ"</code>
<code>Stack Trace:</code>
<code>java.lang.NumberFormatException: For input string:</code><code>"XYZ"</code>
<code></code><code>at java.lang.NumberFormatException.forInputString(Unknown Source)</code>
<code></code><code>at java.lang.Integer.parseInt(Unknown Source)</code>
<code></code><code>at java.lang.Integer.parseInt(Unknown Source)</code>
<code></code><code>at examples.algorithms.sleepingbarber.Task.run(DemoThreadExample.java:</code><code>24</code><code>)</code>
<code></code><code>at java.lang.Thread.run(Unknown Source)</code>
<code>Thread status: RUNNABLE</code>
<code>123</code>
<code>234</code>
<code>345</code>
<code>An exception has been captured</code>
<code>Thread:</code><code>1395</code>
<code>Exception: java.lang.NumberFormatException: For input string:</code><code>"XYZ"</code>
<code>Stack Trace:</code>
<code>java.lang.NumberFormatException: For input string:</code><code>"XYZ"</code>
<code></code><code>at java.lang.NumberFormatException.forInputString(Unknown Source)</code>
<code></code><code>at java.lang.Integer.parseInt(Unknown Source)</code>
<code></code><code>at java.lang.Integer.parseInt(Unknown Source)</code>
<code></code><code>at examples.algorithms.sleepingbarber.Task.run(DemoThreadExample.java:</code><code>24</code><code>)</code>
<code></code><code>at java.lang.Thread.run(Unknown Source)</code>
<code>Thread status: RUNNABLE</code>
<code>123</code>
<code>234</code>
<code>345</code>...

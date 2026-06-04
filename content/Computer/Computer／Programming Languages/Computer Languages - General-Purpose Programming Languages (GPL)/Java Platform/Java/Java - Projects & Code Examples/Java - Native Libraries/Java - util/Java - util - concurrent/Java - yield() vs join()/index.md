---
title: "Java - yield() vs join()"
created: 2021-04-04T12:23:41.724-05:00
modified: 2021-04-04T12:28:32.708-05:00
parent: "[[Java - util - concurrent]]"
children: []
---
# <strong>Yield() Example</strong>
```
public class YieldExample {
   public static void main(String[] args) {
      Thread producer = new Producer();
      Thread consumer = new Consumer();
      producer.setPriority(Thread.MIN_PRIORITY); //Min Priority
      consumer.setPriority(Thread.MAX_PRIORITY); //Max Priority
      producer.start();
      consumer.start();
   }
}
 
class Producer extends Thread {
   public void run() {
      for (int i = 0; i < 5; i++) {
         System.out.println("I am Producer : Produced Item " + i);
         Thread.yield();
      }
   }
}
 
class Consumer extends Thread {
   public void run() {
      for (int i = 0; i < 5; i++) {
         System.out.println("I am Consumer : Consumed Item " + i);
         Thread.yield();
      }
   }
}
```
###### Output of above program “without” yield() method
<span style="white-space: pre-wrap"><code>I am Consumer : Consumed Item 0</code><br><code>I am Consumer : Consumed Item 1</code><br><code>I am Consumer : Consumed Item 2</code><br><code>I am Consumer : Consumed Item 3</code><br><code>I am Consumer : Consumed Item 4</code><br><code>I am Producer : Produced Item 0</code><br><code>I am Producer : Produced Item 1</code><br><code>I am Producer : Produced Item 2</code><br><code>I am Producer : Produced Item 3</code><br><code>I am Producer : Produced Item 4</code></span>

###### Output of above program “with” yield() method added
<span style="white-space: pre-wrap"><code>I am Producer : Produced Item 0</code><br><code>I am Consumer : Consumed Item 0</code><br><code>I am Producer : Produced Item 1</code><br><code>I am Consumer : Consumed Item 1</code><br><code>I am Producer : Produced Item 2</code><br><code>I am Consumer : Consumed Item 2</code><br><code>I am Producer : Produced Item 3</code><br><code>I am Consumer : Consumed Item 3</code><br><code>I am Producer : Produced Item 4</code><br><code>I am Consumer : Consumed Item 4</code></span>

# <strong>Join() Example</strong>
```
public class JoinExample {
   public static void main(String[] args) throws InterruptedException {

      Thread t1 = new Thread(new Runnable() {
         public void run() {
            System.out.println("First task started");
            System.out.println("Sleeping for 2 seconds");
            try {
               Thread.sleep(2000);
            } catch (InterruptedException e) {
                  e.printStackTrace();
            }
            System.out.println("First task completed");
         }
      });

      Thread t2 = new Thread(new Runnable() {
         public void run() {
               System.out.println("Second task completed");
         }
      });

      t1.start();
      t1.join();
      t2.start();
   }
}
```
###### Output
<span style="white-space: pre-wrap"><code>First task started</code><br><code>Sleeping for 2 seconds</code><br><code>First task completed</code><br><code>Second task completed</code></span>

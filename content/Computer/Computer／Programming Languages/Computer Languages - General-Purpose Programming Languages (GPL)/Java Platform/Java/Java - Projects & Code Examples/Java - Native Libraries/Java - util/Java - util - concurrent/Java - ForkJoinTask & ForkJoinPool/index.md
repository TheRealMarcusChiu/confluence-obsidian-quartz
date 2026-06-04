---
title: "Java - ForkJoinTask & ForkJoinPool"
created: 2021-04-24T12:29:22.607-05:00
modified: 2022-05-14T18:38:00.439-05:00
parent: "[[Java - util - concurrent]]"
children: []
---
prerequisites:
- [[Java - Future & CompletableFuture]]
- [[Java - ExecutorService & Executor]]
- [[Java - Runnable vs Callable]]

# 1 - Overview
- <strong><code><font style="color: rgb(122,134,154);">ForkJoinTask</font></code></strong> is like a [[Java - Runnable vs Callable|Runnable/Callable]] combined with [[Java - Future|Future]]
	- <strong><code><font style="color: rgb(122,134,154);">RecursiveTask</font></code></strong> - has return type (like <code><font style="color: rgb(122,134,154);">Callable</font></code>)
	- <strong><code><font style="color: rgb(122,134,154);">RecursiveAction</font></code></strong> - has void return type (like <code><font style="color: rgb(122,134,154);">Runnable</font></code>)
- <strong><code><font style="color: rgb(122,134,154);">ForkJoinPool</font></code></strong> is like [[Java - ExecutorService & Executor|ExecutorService]] that runs <code><font style="color: rgb(122,134,154);">ForkJoinTask</font></code>s

# 2 - Code Example

to compute 42 + 32 + 22 + 12 = 30 we:
```
public class FactorialSquareCalculator extends RecursiveTask<Integer> {
 
    private Integer n;

    public FactorialSquareCalculator(Integer n) {
        this.n = n;
    }

    @Override
    protected Integer compute() {
        if (n <= 1) {
            return n;
        }

        FactorialSquareCalculator calculator = new FactorialSquareCalculator(n - 1);

        calculator.fork();

        return n * n + calculator.join();
    }
}
```

next we create a ForkJoinPool to handle the execution:
```
ForkJoinPool forkJoinPool = new ForkJoinPool();
FactorialSquareCalculator calculator = new FactorialSquareCalculator(10);
forkJoinPool.execute(calculator);
```

---
title: "Java - Spring - TaskScheduler"
created: 2021-09-26T23:40:59.177-05:00
modified: 2021-09-26T23:42:28.891-05:00
parent: "[[Java - Spring - TaskExecutor & TaskScheduler]]"
children: []
---
###### TaskScheduler
- similar to <code>[[Java - Spring - TaskExecutor|TaskExecutor]]</code> but schedules tasks to run at some point in the future

# TaskScheduler - Class Definition
```
public interface TaskScheduler {
    default Clock getClock() {
        return Clock.systemDefaultZone();
    }

    @Nullable
    ScheduledFuture<?> schedule(Runnable task, Trigger trigger);

    default ScheduledFuture<?> schedule(Runnable task, Instant startTime) {
        return this.schedule(task, Date.from(startTime));
    }

    ScheduledFuture<?> schedule(Runnable task, Date startTime);

    default ScheduledFuture<?> scheduleAtFixedRate(Runnable task, Instant startTime, Duration period) {
        return this.scheduleAtFixedRate(task, Date.from(startTime), period.toMillis());
    }

    ScheduledFuture<?> scheduleAtFixedRate(Runnable task, Date startTime, long period);

    default ScheduledFuture<?> scheduleAtFixedRate(Runnable task, Duration period) {
        return this.scheduleAtFixedRate(task, period.toMillis());
    }

    ScheduledFuture<?> scheduleAtFixedRate(Runnable task, long period);

    default ScheduledFuture<?> scheduleWithFixedDelay(Runnable task, Instant startTime, Duration delay) {
        return this.scheduleWithFixedDelay(task, Date.from(startTime), delay.toMillis());
    }

    ScheduledFuture<?> scheduleWithFixedDelay(Runnable task, Date startTime, long delay);

    default ScheduledFuture<?> scheduleWithFixedDelay(Runnable task, Duration delay) {
        return this.scheduleWithFixedDelay(task, delay.toMillis());
    }

    ScheduledFuture<?> scheduleWithFixedDelay(Runnable task, long delay);
}
```

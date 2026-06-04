---
title: "Java - Spring - Enabling Scheduling (@EnableScheduling - @Scheduled - @Schedules)"
created: 2020-11-27T18:23:24.667-06:00
modified: 2021-06-14T19:05:39.553-05:00
parent: "[[Java - Spring Framework - Integration - Concurrency & Job／Task Scheduler／Manager Frameworks]]"
children: []
---
- article: [https://www.baeldung.com/spring-scheduled-tasks](https://www.baeldung.com/spring-scheduled-tasks)
- code: [https://github.com/SpringBootMarcusChiu/scheduling-example](https://github.com/SpringBootMarcusChiu/scheduling-example)

# @Schedules
```
@Schedules({ 
  @Scheduled(fixedRate = 10000), 
  @Scheduled(cron = "0 * * * * MON-FRI")
})
void checkVehicle() {
    // ...
}
```

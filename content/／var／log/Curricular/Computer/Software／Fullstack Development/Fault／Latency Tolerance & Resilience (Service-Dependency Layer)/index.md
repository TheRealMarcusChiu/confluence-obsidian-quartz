---
title: "Fault／Latency Tolerance & Resilience (Service-Dependency Layer)"
created: 2021-04-02T22:38:19.493-05:00
modified: 2021-04-11T19:22:24.618-05:00
parent: "[[Software／Fullstack Development]]"
children: []
---
Fault Tolerance is a Requirement, Not a Feature

[[Application Programming Interface (API) - Software Development Kit (SDK)|APIs]] interacts with dozens of systems in [[Microservices／μService Architecture - Service-Oriented Architecture (SOA)|service-oriented architecture]], which makes the API inherently more vulnerable to any system failures or latencies underneath it in the stack
# Principles of Resiliency

Here are some of the key principles that informed our thinking as we set out to make the API more resilient.
1. A failure in a service dependency should not break the user experience for members
2. The API should automatically take corrective action when one of its service dependencies fails
3. The API should be able to show us what’s happening right now, in addition to what was happening 15–30 minutes ago, yesterday, last week, etc

# Fallback Triggers

goes a little further than the basic CircuitBreaker pattern in that fallbacks can be triggered in a few ways:
1. A request to the remote service times out
2. The thread pool and bounded task queue used to interact with a service dependency are at 100% capacity
3. The client library used to interact with a service dependency throws an exception

These buckets of failures factor into a service’s overall error rate and when the error rate exceeds a defined threshold then we “trip” the circuit for that service and immediately serve fallbacks without even attempting to communicate with the remote service
# Fallback Types

Each service that’s wrapped by a circuit breaker implements a fallback using one of the following three approaches:
1. <strong>Custom fallback</strong> — in some cases a service’s client library provides a fallback method we can invoke, or in other cases we can use locally available data on an API server (eg, a cookie or local JVM cache) to generate a fallback response
2. <strong>Fail Silent</strong> — in this case the fallback method simply returns a null value, which is useful if the data provided by the service being invoked is optional for the response that will be sent back to the requesting client
3. <strong>Fail Fast</strong> — used in cases where the data is required or there’s no good fallback and results in a client getting a 5xx response. This can negatively affect the device UX, which is not ideal, but it keeps API servers healthy and allows the system to recover quickly when the failing service becomes available again.

Ideally, all service dependencies would have custom fallbacks as they provide the best possible user experience (given the circumstances). Although that is our goal, it’s also very challenging to maintain complete fallback coverage for many service dependencies. So the fail silent and fail fast approaches are reasonable alternatives
# Fault Tolerance Approaches

Implement a solution that uses a combination of fault tolerance approaches:
- network timeouts and retries
- separate threads on per-dependency thread pools
- semaphores (via a [tryAcquire](http://docs.oracle.com/javase/6/docs/api/java/util/concurrent/Semaphore.html#tryAcquire()), not a blocking call)
- circuit breakers

Each of these approaches to fault-tolerance has pros and cons but when combined together provide a comprehensive protective barrier between user requests and underlying dependencies
# Frameworks
- [[Java - Circuit Breaker Pattern & Fault／Latency Tolerance／Resilience Frameworks|Java - Circuit Breaker Pattern & Fault/Latency Tolerance/Resilience Frameworks]]

# Resources
- [https://netflixtechblog.com/making-the-netflix-api-more-resilient-a8ec62159c2d](https://netflixtechblog.com/making-the-netflix-api-more-resilient-a8ec62159c2d)
- [https://netflixtechblog.com/fault-tolerance-in-a-high-volume-distributed-system-91ab4faae74a](https://netflixtechblog.com/fault-tolerance-in-a-high-volume-distributed-system-91ab4faae74a)

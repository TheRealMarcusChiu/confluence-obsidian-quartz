---
title: "Java - Flow (Publisher - Subscriber - Subscription)"
created: 2022-02-14T21:58:56.665-06:00
modified: 2022-02-14T22:21:55.383-06:00
parent: "[[Java - util - concurrent]]"
children: []
---
These interfaces correspond to the [[Reactive Streams|Reactive-Streams]] specification
- <strong>Publisher</strong> is responsible for producing data. The only method in it is subscribe, which starts a new subscription after receiving a Subscriber
- <strong>Subscriber</strong> is responsible for subscribing to consumption data
- <strong>Subscription</strong> defines the context of a Subscription, such as canceling or notifying of obtaining the next N data entries
- <strong>Processor</strong> - both Subscriber and Publisher

# Comparison to Java 8 Streams

```merge-table
{
  "rows": [
    [
      {
        "content": "Flow / Reactive Streams",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Stream",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "```\nList<Integer> elements = new ArrayList<>();\nFlux.just(1, 2, 3, 4).subscribe(elements::add);\n```",
      "```\nList<Integer> elements = Stream.of(1, 2, 3, 4).collect(toList());\n```"
    ]
  ]
}
```

The core difference is that Reactive is a push model, whereas the Java 8 <em>Streams</em> are a pull model. <strong>In a reactive approach, events are <em>pushed </em>to the subscribers as they come in.</strong>

The next thing to notice is a <em>Streams </em>terminal operator is just that, terminal, pulling all the data and returning a result. With Reactive we could have an infinite stream coming in from an external resource, with multiple subscribers attached and removed on an ad hoc basis. We can also do things like combine streams, throttle streams, and apply backpressure, which we will cover next.
# Implementations
- [[Java - Project Reactor／Reactive Core (Mono - Flux)|Java - Project Reactor/Reactive Core (Mono - Flux)]]

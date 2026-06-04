---
title: "Microservices／μService Architecture - Service-Oriented Architecture (SOA)"
created: 2019-03-15T00:27:43.215-05:00
modified: 2026-05-21T14:14:52.214-05:00
parent: "[[Architectural／Architecture Design Patterns (ADP)]]"
children:
  - "[[Microservices Architecture - Amazon Flow Platform]]"
  - "[[Microservices Architecture - Fault Tolerance]]"
  - "[[Microservices Architecture - Testing]]"
  - "[[Service Discovery]]"
---
# Microservices Architecture vs Service-Oriented Architecture (SOA)
<strong>Microservices Architecture</strong> is a [[Architectural／Architecture Design Patterns (ADP)|software/architectural development technique]] —a variant of the <strong>Service-Oriented Architecture (SOA)</strong> structural style— that arranges an application as a collection of loosely coupled services
- <strong>Service-Oriented Architecture (SOA)</strong> has an enterprise scope
- <strong>Microservices Architecture</strong> has an application scope

![[Microservices／μService Architecture - Service-Oriented Architecture (SOA)/service-oriented-architecture-vs-microservice-architecture.png|600x174]]
# Service Types
- <strong>Stateful Service</strong> - a service that has a concept of a session or persistence, like a chat service.
- <strong>Stateless Service</strong> - a service that does <em>not</em> have a concept of a session, but rather performs individual self-contained tasks, like a video transcoding service

# Service Abstraction

```merge-table
{
  "rows": [
    [
      "![[Microservices／μService Architecture - Service-Oriented Architecture (SOA)/microservice-abstraction.png|400]]\n\n[[microservice-abstraction.drawio|service-abstraction.drawio]]"
    ]
  ]
}
```
# Operations Component Types & Tech Stacks

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Tech Stack",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Operations Component Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Netflix - [[Java - Spring Cloud|Spring Cloud]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Kubernetes]] & [[Docker]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "central configuration server",
        "bg": "#F4F5F7"
      },
      "[[Java - Spring Cloud Config|Config Server]], Consul, Archaius",
      "ConfigMap and Secrets"
    ],
    [
      {
        "content": "service discovery",
        "bg": "#F4F5F7"
      },
      "Eureka, Hashicorp Consul",
      "Kubernetes Service & Ingress Resources"
    ],
    [
      {
        "content": "dynamic routing and load balancing",
        "bg": "#F4F5F7"
      },
      "Ribbon",
      "Kubernetes Service"
    ],
    [
      {
        "content": "edge server - api gateway",
        "bg": "#F4F5F7"
      },
      "[[Java - Spring Cloud - Zuul API Gateway Proxy|Zuul]]",
      "Kubernetes Service & Ingress Resources"
    ],
    [
      {
        "content": "centralized log analysis",
        "bg": "#F4F5F7"
      },
      "[[Elasticsearch]], Logstash, Kibana (ELK Stack)",
      "Elasticsearch, Fluentd, Kibana (EFK Stack)"
    ],
    [
      {
        "content": "centralized metrics",
        "bg": "#F4F5F7"
      },
      "Spectator & Atlas",
      "Heapster, Prometheus, Grafana"
    ],
    [
      {
        "content": "distributed tracing",
        "bg": "#F4F5F7"
      },
      "Sleuth & Zipkin",
      "OpenTracing & Zipkin"
    ],
    [
      {
        "content": "resilience, fault tolerance, circuit breaker",
        "bg": "#F4F5F7"
      },
      "[[Java - Hystrix (deprecated)|Hystrix]]/[[Java - Resilience4j|Resilience4j]], Turbine & Ribbon",
      "Kubernetes Health Check & resource isolation"
    ],
    [
      {
        "content": "autoscaling and self-healing",
        "bg": "#F4F5F7"
      },
      "",
      "Kubernetes Health Check, Self Healing, Autoscaling"
    ],
    [
      {
        "content": "package deployment",
        "bg": "#F4F5F7"
      },
      "[[Java - Spring Family|Spring Boot]]",
      "Docker/Rkt, Kubernetes Scheduler & Deployment"
    ],
    [
      {
        "content": "job management",
        "bg": "#F4F5F7"
      },
      "Spring Batch",
      "Kubernetes Jobs & Scheduled Jobs"
    ],
    [
      {
        "content": "singleton application",
        "bg": "#F4F5F7"
      },
      "Spring Cloud Cluster",
      "Kubernetes Pod"
    ],
    [
      {
        "content": "monitoring",
        "bg": "#F4F5F7"
      },
      "Hystrix Dashboard & Turbine",
      ""
    ],
    [
      {
        "content": "[[Open Authorization (OAuth)]] protected [[Application Programming Interface (API) - Software Development Kit (SDK)|API's]]",
        "bg": "#F4F5F7"
      },
      "Spring Cloud Security + [[Java - Spring - Security (OAuth 2.0 & OpenID Connect)|Spring Security OAuth2]]",
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Video Resources![](https://www.youtube.com/watch?v=CZ3wIuvmHeM)![](https://www.youtube.com/watch?v=ymIZ5HhH0o4)![](https://www.youtube.com/watch?v=vu4Xkb1q8Tc)![](https://www.youtube.com/watch?v=K3v6B_70r9s)![](https://www.youtube.com/watch?v=j6ow-UemzBc)

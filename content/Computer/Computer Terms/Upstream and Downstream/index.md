---
title: "Upstream and Downstream"
created: 2021-08-17T17:35:55.207-05:00
modified: 2021-08-17T17:50:43.717-05:00
parent: "[[Computer Terms]]"
children: []
---
## Upstream and Downstream in Various Domains

> [!expand-ui]- assembly/production line
> ![[Upstream and Downstream/upstream-downstream-assembly-production.png|400]]
>
> A assembly/production process is very similar to a river, so it’s easy to grasp that as the process goes from one step to the next, we’re moving downstream.
>
> We can deduct the following rules:
> 1. <strong>Dependency Rule</strong>: each item depends on all the items upstream from its viewpoint
> 2. <strong>Value Rule</strong>: moving downstream, each step adds more value to the product

> [!expand-ui]- Software Dependencies
> ![[Upstream and Downstream/upstream-downstream-software-dependencies.png|400]]
>
> Most software components have dependencies to other components. So what’s an upstream dependency and a downstream dependency?
>
> Component C depends on component B which in turn depends on component A.
>
> Applying the Dependency Rule, we can safely say that component A is upstream from component B which is upstream from component C (even though the arrows point in the other direction).
>
> Applying the Value Rule here is a little more abstract, but we can say that component C holds the most value since it “imports” all the features of components B and A and adds its own value to those features, making it the downstream component.

> [!expand-ui]- Forking OpenSource Projects
> Another context where the words “upstream” and “downstream” are used a lot is in open source development. It’s actually very similar to the component dependencies discussed above.
>
> Consider the projects A and B, where A is an original project and B is a fork of A:
>
> ![[Upstream and Downstream/upstream-downstream-fork.png|300]]
>
> This is a rather common development style in open source projects: we create a fork of a project, fix a bug or add a feature in that fork and then submit a patch to the original project.
>
> In this context, the Dependency Rule makes project A the upstream project since it can very well live without project B but project B (the fork) wouldn’t even exist without project A (the original project).
>
> The Value Rule applies as well: since project B adds a new feature or bugfix, it has added value to the original project A.
>
> So, each time we contribute a patch to an open source project we can say that we have sent a patch upstream.

> [!expand-ui]- (Micro-)Services
> In systems consisting of microservices (or just plain old distributed services for the old-fashioned), there’s also talk about upstream and downstream services.
>
> ![[Upstream and Downstream/upstream-downstream-services.png|400]]
>
> Unsurprisingly, both the Dependency Rules and the Value Rule also apply to this context.
>
> Service B is the upstream service since service A depends on it. And service A is the downstream service since it adds to the value of service B.
>
> Note that the “stream” defining what is upstream and what is downstream in this case is not the stream of data coming into the system through service A but rather the stream of data from the heart of the system down to the user-facing services.
>
> The closer a service is to the user (or any other end-consumer), the farther downstream it is.

---
title: "C4 Model (Context - Components - Containers - Code)"
created: 2021-05-28T10:18:31.537-05:00
modified: 2021-09-21T01:54:36.286-05:00
parent: "[[Model vs Diagram]]"
children: []
---
###### C4 Model ([c4model.com](https://c4model.com/))
- is a type of [[Model vs Diagram|diagram]] for representing software systems

### Sections
- core/static structure
- supplemental diagrams
- notation
- software/tooling

# 1 - C4 Model (Core/Static Structure)

![](https://www.youtube.com/watch?v=x2-rSnhpw0g)
###### The C4 model considers the static structures in terms of:

> [!expand-ui]- Level 1 - Context
> ```merge-table
> {
>   "rows": [
>     [
>       "![[C4 Model (Context - Components - Containers - Code)/system-context.png|400]]",
>       "- contains a set of software-systems in which the target software-system communicates with"
>     ]
>   ]
> }
> ```

> [!expand-ui]- Level 2 - Containers
> ```merge-table
> {
>   "rows": [
>     [
>       "![[C4 Model (Context - Components - Containers - Code)/container.png]]",
>       "- contains a set of Containers"
>     ]
>   ]
> }
> ```

> [!expand-ui]- Level 3 - Components
> ```merge-table
> {
>   "rows": [
>     [
>       "![[C4 Model (Context - Components - Containers - Code)/components.png]]",
>       "- contains a set of Components"
>     ]
>   ]
> }
> ```

> [!expand-ui]- Level 4 - Code (UML or ERD)
> ```merge-table
> {
>   "rows": [
>     [
>       "![[C4 Model (Context - Components - Containers - Code)/code.png]]",
>       "- a code diagram of a single Component\n- utilizes either:\n\t- [[Unified Modeling Language (UML) Diagram]]\n\t- [[Entity-Relationship Model (ERM) - Entity-Relationship Diagram (ERD)]]"
>     ]
>   ]
> }
> ```
# 2 - C4 Model (Supplemental Diagrams) \*Optional

> [!expand-ui]- System Landscape Diagram (Larger Context)
> ```merge-table
> {
>   "rows": [
>     [
>       "![[C4 Model (Context - Components - Containers - Code)/system-landscape-diagram.png]]",
>       "- a bigger picture of \"Context Diagram\""
>     ]
>   ]
> }
> ```

> [!expand-ui]- Dynamic Diagram
> ```merge-table
> {
>   "rows": [
>     [
>       "![[C4 Model (Context - Components - Containers - Code)/dynamic-diagram.png]]",
>       "- dynamic diagram can be useful when you want to show how elements in a static model collaborate at runtime to implement a user story, use case, feature, etc\n- is based upon a [UML communication diagram](https://en.wikipedia.org/wiki/Communication_diagram) (previously known as a \"UML collaboration diagram\"). It is similar to a [UML sequence diagram](https://en.wikipedia.org/wiki/Sequence_diagram) although it allows a free-form arrangement of diagram elements with numbered interactions to indicate ordering"
>     ]
>   ]
> }
> ```

> [!expand-ui]- Deployment Diagram
> ```merge-table
> {
>   "rows": [
>     [
>       "![[C4 Model (Context - Components - Containers - Code)/deployment-diagram.png]]",
>       "- deployment diagram allows you to illustrate how software systems and/or containers in the static model are mapped to infrastructure. This deployment diagram\n- is based upon a [UML deployment diagram](https://en.wikipedia.org/wiki/Deployment_diagram), although simplified slightly to show the mapping between containers and deployment nodes. A deployment node is something like physical infrastructure (e.g. a physical server or device), virtualized infrastructure (e.g. IaaS, PaaS, a virtual machine), containerized infrastructure (e.g. a Docker container), an execution environment (e.g. a database server, Java EE web/application server, Microsoft IIS), etc. Deployment nodes can be nested"
>     ]
>   ]
> }
> ```
# 3 - C4 Model (Notation/Syntax) \*Optional

> [!expand-ui]- Icons Legend
> ![[C4 Model (Context - Components - Containers - Code)/diagram-legend.png|600]]

> [!expand-ui]- Icon Description Format
> ![[C4 Model (Context - Components - Containers - Code)/Screen Shot 2021-05-28 at 11.20.22 AM.png|700]]
# 4 - C4 Model (Software/Tooling) \*Optional
- [Structurizr](https://structurizr.org/)
- [Archi](https://www.archimatetool.com/blog/2020/04/18/c4-model-architecture-viewpoint-and-archi-4-7/)
- IcePanel
- Sparx Enterprise Architect
- Gaphor
- MooD
- Astah
- PlantUML
- diagrams.net
- OmniGraffle
- Microsoft Visio
- yED

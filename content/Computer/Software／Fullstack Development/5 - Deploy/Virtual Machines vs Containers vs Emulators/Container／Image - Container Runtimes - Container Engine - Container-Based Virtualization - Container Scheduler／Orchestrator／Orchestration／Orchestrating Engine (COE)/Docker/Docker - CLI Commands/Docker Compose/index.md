---
title: "Docker Compose"
created: 2019-10-15T22:54:55.294-05:00
modified: 2026-04-07T03:31:08.042-05:00
parent: "[[Docker - CLI Commands]]"
children:
  - "[[docker-compose stop VS docker-compose down]]"
---
###### Docker Compose
````excerpt
- is a [[Container／Image - Container Runtimes - Container Engine - Container-Based Virtualization - Container Scheduler／Orchestrator／Orchestration／Orchestrating Engine (COE)|container orchestration]] tool for defining and running multi-container [[Docker]] applications within a single server
- with Compose, you use a YAML file (i.e. docker-compose.yml) to configure your application's services
- is a declarative approach that replaces individual docker commands
````
^excerpt

# Declarative Approach vs Imperative Approach

```merge-table
{
  "rows": [
    [
      {
        "content": "Declarative",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Imperative",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "```\nservices:\n  api:\n    build: ./api\n    ports:\n      - \"3000:3000\"\n    environment:\n      - DATABASE_URL=postgres:// ...@db:5432/mydb\n    depends_on:\n      - db\n  db:\n    image: postgres:16\n    volumes:\n      - db-data:/var/lib/postgresql/data\n    environment:\n      - POSTGRES_PASSWORD=pass\n      - POSTGRES_USER=user\n      - POSTGRES_DB=my_db\n\nvolumes:\n  db-data:\n```",
      "```\n$ docker network create my-network\n$ docker volume create db-data\n$ docker build -t my-api ./api\n$ docker run -d --name db \\\n    --network my-network \\\n    -v db-data:/var/lib/... \\\n    -e POSTGRES_PASSWORD=pass \\\n    postgres:16\n$ docker run -d --name api \\\n    --network my-network \\\n    -p 3000:3000 \\\n    -e DATABASE_URL=... \\\n    my-api\n```"
    ]
  ]
}
```
# Versions

```merge-table
{
  "rows": [
    [
      {
        "content": "version",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "command",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "v1",
        "bg": "#F4F5F7"
      },
      "docker-compose",
      "deprecated"
    ],
    [
      {
        "content": "v2",
        "bg": "#F4F5F7"
      },
      "docker compose",
      "current"
    ]
  ]
}
```
# Other
- [[Docker Compose vs Docker Swarm]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```

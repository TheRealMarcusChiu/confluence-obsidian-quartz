---
title: "Azkaban"
created: 2019-03-16T01:30:05.579-05:00
modified: 2026-01-10T02:34:24.334-06:00
parent: "[[Job Scheduler - Batch Scheduling]]"
children: []
---
###### Azkaban
````excerpt
- is a [[Job Scheduler - Batch Scheduling|batch workflow job scheduler]] created at LinkedIn to run [[Apache Hadoop|Hadoop]] jobs
- resolves the ordering through job dependencies and provides an easy to use web user interface to maintain and track your workflows
````
^excerpt

# Azkaban 3.0

> [!expand]- Click here to expand...
> > [!expand]- solo-server
> > # Installation & Setup
> >
> > > [!expand]- Click here to expand...
> > > [http://azkaban.github.io/azkaban/docs/latest/#solo-setup](http://azkaban.github.io/azkaban/docs/latest/#solo-setup)
> > >
> > > <strong>0. requires git and gradle experience</strong>
> > >
> > > <strong>1. Clone the repo</strong>
> > > <span style="white-space: pre-wrap"><code>  git clone [https://github.com/azkaban/azkaban.git](https://github.com/azkaban/azkaban.git)</code></span>
> > >
> > > <strong>2. Build Azkaban and create an installation</strong>
> > > <span style="white-space: pre-wrap"><code>  cd azkaban</code><br><code>  ./gradlew build installDist</code></span>
> > >
> > > <strong>3. Start the server</strong>
> > > <span style="white-space: pre-wrap"><code>  cd azkaban-solo-server/build/install/azkaban-solo-server</code><br><code>  bin/azkaban-solo-start.sh</code></span>
> > >
> > > go to localhost:8081
> > >
> > > <strong>4. Stop server</strong>
> > > <span style="white-space: pre-wrap"><code>  bin/azkaban-solo-shutdown.sh</code></span>

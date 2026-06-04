---
title: "JProfiler - Remote Profiler Setup"
created: 2021-08-27T20:39:28.966-05:00
modified: 2021-08-27T20:41:21.872-05:00
parent: "[[JProfiler]]"
children: []
---
# Setup Guides

> [!expand-ui]- manual
> - Extract the JProfiler archive (not the installer) somewhere on the remote machine
> - In the installation directory call bin/jpenable and select the JVM you want to profile
> - On your local machine start JProfiler and create a new session of type "Attach to profiled JVM (local or remote)"
> - In the session configuration, enter the host name and the port as given by jpenable
> - Start the session and profile

> [!expand-ui]- setup wizard
> Since JProfiler 10.0, there is a remote attach feature that does not require any of the above steps, you just need SSH credentials to the remote machine

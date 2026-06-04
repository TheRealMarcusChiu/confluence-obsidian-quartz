---
title: "Systemd - Creating .service Files - Going Further"
created: 2019-11-19T19:50:12.288-06:00
modified: 2019-11-19T19:50:35.736-06:00
parent: "[[Systemd - Creating .service Files]]"
children: []
---
Now that your service (hopefully) works, it may be important to dive a bit deeper into the configuration options, and ensure that it will always work as you expect it to.
### Starting in The Right Order

You may have wondered what the <code>After=</code> directive did. It simply means that your service must be started <em>after </em>the network is ready. If your program expects the MySQL server to be up and running, you should add:
```
After=mysqld.service
```
### Restarting on Exit

By default, systemd does not restart your service if the program exits for whatever reason. This is usually not what you want for a service that must be always available, so we’re instructing it to always restart on exit:
```
Restart=always
```

You could also use <code>on-failure</code> to only restart if the exit status is not <code>0</code>.

By default, systemd attempts a restart after 100ms. You can specify the number of seconds to wait before attempting a restart, using:
```
RestartSec=1
```
### Avoiding the Trap: The Start Limit

I personally fell into this one more than once. By default, when you configure <code>Restart=always</code> as we did, systemd gives up restarting your service if it fails to start more than 5 times within a 10 seconds interval. Forever.

There are two <code>\[Unit\]</code> configuration [options](https://www.freedesktop.org/software/systemd/man/systemd.unit.html#StartLimitIntervalSec=) responsible for this:
```
StartLimitBurst=5
StartLimitIntervalSec=10
```

The <code>RestartSec</code> directive also has an impact on the outcome: if you set it to restart after 3 seconds, then you can never reach 5 failed retries within 10 seconds.

The simple fix that always works is to set <code>StartLimitIntervalSec=0</code>. This way, systemd will attempt to restart your service forever.

It’s a good idea to set <code>RestartSec</code> to at least 1 second though, to avoid putting too much stress on your server when things start going wrong.

As an alternative, you can leave the default settings, and ask systemd to restart your server if the start limit is reached, using <code>StartLimitAction=reboot</code>.

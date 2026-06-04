---
title: "Systemd - Creating .service Files"
created: 2019-11-19T16:10:49.918-06:00
modified: 2022-12-06T17:41:22.956-06:00
parent: "[[Systemd]]"
children:
  - "[[Systemd - Creating .service Files - Going Further]]"
---
# The Application Server

> [!expand]- Click here to expand...
> ```
> <?php
> $sock = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);
> socket_bind($sock, '0.0.0.0', 10000);
>
> for (;;) {
>     socket_recvfrom($sock, $message, 1024, 0, $ip, $port);
> 	echo "received: " . $message;
>     $reply = str_rot13($message);
>     socket_sendto($sock, $reply, strlen($reply), 0, $ip, $port);
> }
> ```
>
> Let’s start it:
> ```
> php server.php
> ```
>
> And test it in another terminal:
> ```
> $ nc -u 127.0.0.1 10000
> Hello, world!
> Uryyb, jbeyq!
> ```
# Turning Application Server into a Service

> [!expand]- Click here to expand...
> create service file named rot13.service
> ```
> sudo vim /lib/systemd/system/rot13.service
> or
> sudo vim /etc/systemd/system/rot13.service
> ```
>
> add the following contents
> ```
> [Unit]
> Description=ROT13 demo service
> After=network.target
> StartLimitIntervalSec=0
>
> [Service]
> Type=simple
> Restart=always
> RestartSec=1
> User=username
> ExecStart=/usr/bin/env php /path/to/server.php
> ExecStop=/path/to/stop/script
>
> [Install]
> WantedBy=multi-user.target
> ```
> - User - username that runs the application
> - ExecStart - path to start script
> - ExecStop - path to stop script
>
> load systemd service
> ```
> sudo systemctl daemon-reload
> ```
>
> now you can run the [[SysV／Upstart／Systemd／Launchd - Commands (service - chkconfig - systemctl - journalctl - launchctl)|systemd commands]]:
> ```
> systemctl enable rot13
> systemctl disable rot13
> systemctl start rot13
> systemctl stop rot13
> systemctl restart rot13
> systemctl status rot13
> ```
# Going further
- [https://www.freedesktop.org/software/systemd/man/systemd.service.html](https://www.freedesktop.org/software/systemd/man/systemd.service.html)
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```

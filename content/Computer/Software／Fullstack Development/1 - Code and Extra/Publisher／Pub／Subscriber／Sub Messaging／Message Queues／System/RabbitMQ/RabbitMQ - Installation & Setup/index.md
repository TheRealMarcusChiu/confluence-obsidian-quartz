---
title: "RabbitMQ - Installation & Setup"
created: 2020-05-26T19:40:31.083-05:00
modified: 2020-05-26T19:40:51.047-05:00
parent: "[[RabbitMQ]]"
children: []
---
### RabbitMQ - Installation

> [!expand]- setup erlang
> [https://www.freshlex.com/install-rabbitmq-and-minimal-erlang-on-amazon-linux.html](https://www.freshlex.com/install-rabbitmq-and-minimal-erlang-on-amazon-linux.html)
>
> <strong>0. pre-requisites</strong>
>
> setup RPM build system
> <span style="white-space: pre-wrap"><code>  sudo yum -y install rpm-build redhat-rpm-config</code></span>
>
> install development tools
> <span style="white-space: pre-wrap"><code>  sudo yum -y install autoconf gcc git ncurses-devel openssl-devel</code></span>
>
> <strong>1. clone RabbitMQ’s maintained version of erlang into machine you want RabbitMQ to be installed</strong>
> <span style="white-space: pre-wrap"><code>  git clone [https://github.com/rabbitmq/erlang-rpm.git](https://github.com/rabbitmq/erlang-rpm.git)</code></span>
>
> <strong>2. Make it, and wait for it to spit out a package</strong>
> <span style="white-space: pre-wrap"><code>  cd erlang-rpm</code><br><code>  make</code></span>
>
> <strong>3. install package with you package manager</strong>

> [!expand]- homebrew
> # Install
>
> <strong>0. install erlang</strong>
>
> <strong>1. install via homebrew</strong>
> <span style="white-space: pre-wrap"><code>  brew install rabbitmq</code></span>
>
> <strong>2. verify rabbitmq is installed</strong>
> <span style="white-space: pre-wrap"><code>  which rabbitmq-server</code></span>
>
> # Start Stop Restart
>
> <strong>1. To have launchd start rabbitmq now and restart at login:</strong>
> <span style="white-space: pre-wrap"><code>  brew services start rabbitmq</code><br><code>  brew services stop rabbitmq</code><br><code>  brew services restart rabbitmq</code></span>
>
> <strong>2. Or, if you don't want/need a background service you can just run:</strong>
> <span style="white-space: pre-wrap"><code>  rabbitmq-server</code></span>

> [!expand]- yum
> # Install
>
> <strong>1. install erlang (refer to \_setup\_erlang)</strong>
>
> <strong>2. install rabbitmq</strong>
> <span style="white-space: pre-wrap"><code>  wget [https://www.rabbitmq.com/releases/rabbitmq-server/v3.6.1/rabbitmq-server-3.6.1-1.noarch.rpm](https://www.rabbitmq.com/releases/rabbitmq-server/v3.6.1/rabbitmq-server-3.6.1-1.noarch.rpm)</code></span>
>
> optional
> <span style="white-space: pre-wrap"><code>  sudo rpm --import [https://www.rabbitmq.com/rabbitmq-signing-key-public.asc](https://www.rabbitmq.com/rabbitmq-signing-key-public.asc)</code><br><code>  sudo yum install rabbitmq-server-3.6.1-1.noarch.rpm</code></span>
>
> <strong>3. verify rabbitmq was installed</strong>
> <span style="white-space: pre-wrap"><code>  which rabbitmq-server</code></span>
>
> # Start Stop Restart
>
> <strong>1. To have service start rabbitmq</strong>
> <span style="white-space: pre-wrap"><code>  service rabbitmq-server start</code><br><code>  service rabbitmq-server stop</code><br><code>  service rabbitmq-server restart</code><br><code>  service rabbitmq-server status</code></span>
>
> <strong>2. Or, if you don't want/need a background service you can just run:</strong>
> <span style="white-space: pre-wrap"><code>  rabbitmq-server</code></span>
### RabbitMQ - UI Management Setup

> [!expand]- Click here to expand...
> The rabbitmq-management plugin provides an HTTP-based API for management and monitoring of your RabbitMQ server, along with a browser-based UI and a command line tool, rabbitmqadmin
>
> <strong>1. use rabbitmq plugins to enable WebUI management</strong>
> <span style="white-space: pre-wrap"><code>  rabbitmq-plugins enable rabbitmq\_management</code></span>
>
> <strong>2. test it</strong>
> <span style="white-space: pre-wrap"><code>  http://{hostname}:15672/</code></span>

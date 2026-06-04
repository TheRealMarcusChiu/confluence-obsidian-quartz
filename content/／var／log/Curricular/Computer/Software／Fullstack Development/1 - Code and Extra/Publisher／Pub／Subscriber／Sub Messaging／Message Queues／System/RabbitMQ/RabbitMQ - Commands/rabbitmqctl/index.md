---
title: "rabbitmqctl"
created: 2019-03-16T00:41:30.751-05:00
modified: 2019-03-16T00:42:06.311-05:00
parent: "[[RabbitMQ - Commands]]"
children: []
---
<strong>1. list queues and number of messages in each of them</strong>
<span style="white-space: pre-wrap"><code>  sudo rabbitmqctl list\_queues</code></span>

<strong>2. list unacknowledged and ready messages</strong>
<span style="white-space: pre-wrap"><code>  sudo rabbitmqctl list\_queues name messages\_ready messages\_unacknowledged</code></span>

<strong>3. list exchanges</strong>
<span style="white-space: pre-wrap"><code>  sudo rabbitmqctl list\_exchanges</code></span>

<strong>4. list bindings</strong>
<span style="white-space: pre-wrap"><code>  sudo rabbitmqctl list\_bindings</code></span>

> [!expand]- adding user
> <strong>1. you need to create a user for any vhost on that system (here I use default vhost "/")</strong>
> <span style="white-space: pre-wrap"><code>  rabbitmqctl add\_user \$(USERNAME) \$(PASSWORD)</code></span>
>
> <strong>2. Set the permissions for that user for default vhost</strong>
> <span style="white-space: pre-wrap"><code>  rabbitmqctl set\_permissions -p \$(VHOST:/) \$(USERNAME) ".\*" ".\*" ".\*"</code></span>
>
> <strong>3. Set the administrator tag for this user (to enable him access the management plugin)</strong>
> <span style="white-space: pre-wrap"><code>  rabbitmqctl set\_user\_tags \$(USERNAME) administrator</code></span>

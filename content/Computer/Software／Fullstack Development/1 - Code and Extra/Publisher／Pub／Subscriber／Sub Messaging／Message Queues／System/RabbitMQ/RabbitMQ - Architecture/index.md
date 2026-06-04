---
title: "RabbitMQ - Architecture"
created: 2020-05-26T19:32:49.081-05:00
modified: 2020-05-26T19:37:33.004-05:00
parent: "[[RabbitMQ]]"
children: []
---
### RabbitMQ - Architecture
![[RabbitMQ - Architecture/rabbitmq-exchanges-topic-fanout-direct.png|500]]
1. producer publishes a message to an exchange
2. exchange receives the message and is now responsible for routing the message. The exchange takes different message attributes into account, such as the routing key, depending on the exchange type (when creating an exchange, the type must be specified):
	1. <strong>direct</strong>: the message is routed to the queues whose binding key exactly matches the routing key of the message. For example, if the queue is bound to the exchange with the binding key <em>pdfprocess, a message published to</em> the exchange with a routing key <em>pdfprocess is routed to that queue.</em>
	2. <strong>fanout</strong>: a fanout exchange routes messages to all of the queues bound to it.
	3. <strong>topic</strong>: the topic exchange does a wildcard match between the routing key and the routing pattern specified in the binding.
	4. <strong>headers</strong>: headers exchanges use the message header attributes for routing
3. bindings must be created from the exchange to queues. In this case, there are two bindings to two different queues from the exchange. The exchange routes the message into the queues depending on message attributes.
4. messages stay in the queue until they are handled by a consumer
5. consumer handles the message

### RabbitMQ Components

Some important concepts need to be described before we dig deeper into RabbitMQ. The default virtual host, the default user, and the default permissions are used in the examples, so let’s go over the elements and concepts:
- <strong>Producer</strong>: Application that sends the messages.
- <strong>Consumer</strong>: Application that receives the messages.
- <strong>Queue</strong>: Buffer that stores messages.
- <strong>Message</strong>: Information that is sent from the producer to a consumer through RabbitMQ.
- <strong>Connection</strong>: A TCP connection between your application and the RabbitMQ broker.
- <strong>Channel</strong>: A virtual connection inside a connection. When publishing or consuming messages from a queue - it's all done over a channel.
- <strong>Exchange</strong>: Receives messages from producers and pushes them to queues depending on rules defined by the exchange type. To receive messages, a queue needs to be bound to at least one exchange.
- <strong>Binding</strong>: A binding is a link between a queue and an exchange.
- <strong>Routing Key</strong>: A key that the exchange looks at to decide how to route the message to queues. Think of the routing key like an <em>address for the message.</em>
- <strong>AMQP</strong>: Advanced Message Queuing Protocol is the protocol used by RabbitMQ for messaging.
- <strong>Users</strong>: It is possible to connect to RabbitMQ with a given username and password. Every user can be assigned permissions such as rights to read, write and configure privileges within the instance. Users can also be assigned permissions for specific virtual hosts.
- <strong>Virtual Host (Vhost)</strong>: Provides a way to segregate applications using the same RabbitMQ instance. Different users can have different permissions to different vhost and queues and exchanges can be created, so they only exist in one vhost

---
title: "Java - Spring - Spring Cloud Stream with Kafka, Apache Avro and Confluent Schema Registry"
created: 2023-01-01T16:47:06.060-06:00
modified: 2023-01-01T17:13:20.419-06:00
parent: "[[Java - Spring _Examples]]"
children: []
---
# Introduction
- [[Apache Kafka]] allows applications to exchange messages at scale
- [[Java - Spring Cloud Stream|Spring Cloud Stream]] is a framework that simplifies the integration of Kafka into our message-driven applications
- Conventionally, Kafka is used with the [[Apache Avro|Avro]] message format, supported by a [[Schema Registry|schema registry]]

In this tutorial, we'll use the [[Confluent Schema Registry]]. To integrate with Confluent Schema Registry we'll try both:
- Spring's implementation
- Confluent's native libraries

# Examples

> [!expand-ui]- 100% Manual
> ```
> {
>      "type": "record",
>      "namespace": "com.example",
>      "name": "Customer",
>      "version": "1",
>      "fields": [
>        { "name": "first_name", "type": "string", "doc": "First Name of Customer" },
>        { "name": "last_name", "type": "string", "doc": "Last Name of Customer" },
>        { "name": "age", "type": "int", "doc": "Age at the time of registration" },
>        { "name": "height", "type": "float", "doc": "Height at the time of registration in cm" },
>        { "name": "weight", "type": "float", "doc": "Weight at the time of registration in kg" },
>        { "name": "automated_email", "type": "boolean", "default": true, "doc": "Field indicating if the user is enrolled in marketing emails" }
>      ]
> }
> ```
> ```
> import com.example.Customer;
> import io.confluent.kafka.serializers.KafkaAvroDeserializer;
> import org.apache.kafka.clients.consumer.ConsumerRecord;
> import org.apache.kafka.clients.consumer.ConsumerRecords;
> import org.apache.kafka.clients.consumer.KafkaConsumer;
> import org.apache.kafka.common.serialization.StringDeserializer;
>
> import java.util.Calendar;
> import java.util.Collections;
> import java.util.Properties;
>
> public class KafkaAvroJavaConsumerV1Demo {
>
>     public static void main(String[] args) {
>         Properties properties = new Properties();
>         // normal consumer
>         properties.setProperty("bootstrap.servers","127.0.0.1:9092");
>         properties.put("group.id", "customer-consumer-group-v1");
>         properties.put("auto.commit.enable", "false");
>         properties.put("auto.offset.reset", "earliest");
>
>         // avro part (deserializer)
>         properties.setProperty("key.deserializer", StringDeserializer.class.getName());
>         properties.setProperty("value.deserializer", KafkaAvroDeserializer.class.getName());
>         properties.setProperty("schema.registry.url", "http://127.0.0.1:8081");
>         properties.setProperty("specific.avro.reader", "true");
>
>         KafkaConsumer<String, Customer> kafkaConsumer = new KafkaConsumer<>(properties);
>         String topic = "customer-avro";
>         kafkaConsumer.subscribe(Collections.singleton(topic));
>
>         System.out.println("Waiting for data...");
>
>         while (true){
>             System.out.println("Polling at " + Calendar.getInstance().getTime().toString());
>             ConsumerRecords<String, Customer> records = kafkaConsumer.poll(1000);
>
>             for (ConsumerRecord<String, Customer> record : records){
>                 Customer customer = record.value();
>                 System.out.println(customer);
>             }
>
>             kafkaConsumer.commitSync();
>         }
>     }
> }
> ```
# Resources
- TODO

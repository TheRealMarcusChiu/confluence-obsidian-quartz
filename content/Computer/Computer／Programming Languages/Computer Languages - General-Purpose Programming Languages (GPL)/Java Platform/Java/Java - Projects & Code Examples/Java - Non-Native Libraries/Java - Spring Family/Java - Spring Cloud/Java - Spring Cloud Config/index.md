---
title: "Java - Spring Cloud Config"
created: 2022-08-07T19:41:24.733-05:00
modified: 2022-12-22T09:50:44.815-06:00
parent: "[[Java - Spring Cloud]]"
children: []
---
# Standup Config Server

> [!expand]- Click here to expand...
> ### Dependencies
> ```
> 		<dependency>
> 			<groupId>org.springframework.cloud</groupId>
> 			<artifactId>spring-cloud-config-server</artifactId>
> 		</dependency>
> ```
> ### Application code
> ```
> @EnableConfigServer
> @SpringBootApplication
> public class ConfigurationServiceApplication {
>
>   public static void main(String[] args) {
>     SpringApplication.run(ConfigurationServiceApplication.class, args);
>   }
> }
> ```
> ### Config Repository Setup (Filesystem)
> - On the file system, create a new directory and run <code><font style="color: rgb(122,134,154);">git init</font></code> in it
> - Create a new file <code><font style="color: rgb(122,134,154);">a-bootiful-client.properties</font></code> and add the following
> - 
>     ```
>     message = This is from config server
>     ```
>
> ### Tell Config Server Where the Config Repository Is
> ```
> server.port=8888
> spring.cloud.config.server.git.uri=${HOME}/Desktop/config
> ```
# Standup Config Client

> [!expand]- Click here to expand...
> ### Dependencies
> ```
>  		<dependency>
> 			<groupId>org.springframework.cloud</groupId>
> 			<artifactId>spring-cloud-starter-config</artifactId>
> 		</dependency> 
>         <dependency>
> 			<groupId>org.springframework.boot</groupId>
> 			<artifactId>spring-boot-starter-actuator</artifactId>
> 		</dependency>
> 		<dependency>
> 			<groupId>org.springframework.boot</groupId>
> 			<artifactId>spring-boot-starter-web</artifactId>
> 		</dependency>
> ```
> ### App Code
> ```
> import org.springframework.beans.factory.annotation.Value;
> import org.springframework.cloud.context.config.annotation.RefreshScope;
> import org.springframework.web.bind.annotation.RequestMapping;
> import org.springframework.web.bind.annotation.RestController;
>
> @RefreshScope
> @RestController
> class DefaultController {
>
>     @Value("${message:Hello default}")
>     private String message;
>
>     @RequestMapping("/message")
>     String getMessage() {
>         return this.message;
>     }
> }
> ```
> ### App Properties
> ```
> spring.application.name=a-bootiful-client
> spring.config.import=optional:configserver:http://localhost:8888/
>
> # to enable the /refresh endpoint, to demonstrate dynamic configuration changes
> management.endpoints.web.exposure.include=*
> ```
# Test Dynamic Config Changes

> [!expand]- Click here to expand...
> - check message: [http://localhost:8080/message](http://localhost:8080/message)
> - change message property in <code><font style="color: rgb(122,134,154);">a-bootiful-client.properties</font></code> and commit
> - verify config-server picked up changes [http://localhost:8888/a-bootiful-client/default](http://localhost:8888/a-bootiful-client/default)
> - refresh config-client via hitting POST endpoint:
> 	- <code>curl localhost<font style="color: rgb(102,102,0);">:</font><font style="color: rgb(0,102,102);">8080</font><font style="color: rgb(102,102,0);">/</font>actuator<font style="color: rgb(102,102,0);">/</font>refresh <font style="color: rgb(102,102,0);">-</font>d <font style="color: rgb(102,102,0);">{}</font><font style="color: rgb(102,102,0);">-</font>H <font style="color: rgb(0,136,0);">"Content-Type: application/json"</font></code>
> - check updated message: [http://localhost:8080/message](http://localhost:8080/message)

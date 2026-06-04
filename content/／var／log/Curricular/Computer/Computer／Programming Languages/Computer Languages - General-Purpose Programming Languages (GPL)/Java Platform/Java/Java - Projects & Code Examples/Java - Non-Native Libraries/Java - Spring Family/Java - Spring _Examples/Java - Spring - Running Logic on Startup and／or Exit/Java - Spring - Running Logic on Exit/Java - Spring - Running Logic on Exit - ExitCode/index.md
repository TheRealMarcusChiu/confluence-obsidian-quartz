---
title: "Java - Spring - Running Logic on Exit - ExitCode"
created: 2020-10-20T00:23:05.049-05:00
modified: 2020-10-20T00:26:09.790-05:00
parent: "[[Java - Spring - Running Logic on Exit]]"
children: []
---
Each <code>SpringApplication</code> registers a shutdown hook with the JVM to ensure that the <code>ApplicationContext</code> closes gracefully on exit. All the standard Spring lifecycle callbacks (such as the <code>DisposableBean</code> interface or the <code>@PreDestroy</code> annotation) can be used.

In addition, beans may implement the <code>org.springframework.boot.ExitCodeGenerator</code> interface if they wish to return a specific exit code when <code>SpringApplication.exit()</code> is called. This exit code can then be passed to <code>System.exit()</code> to return it as a status code, as shown in the following example:
```
@SpringBootApplication
public class ExitCodeApplication {

    @Bean
    public ExitCodeGenerator exitCodeGenerator() {
        return () -> 42;
    }

    public static void main(String[] args) {
        System.exit(SpringApplication.exit(SpringApplication.run(ExitCodeApplication.class, args)));
    }

}
```

Also, the <code>ExitCodeGenerator</code> interface may be implemented by exceptions. When such an exception is encountered, Spring Boot returns the exit code provided by the implemented <code>getExitCode()</code> method

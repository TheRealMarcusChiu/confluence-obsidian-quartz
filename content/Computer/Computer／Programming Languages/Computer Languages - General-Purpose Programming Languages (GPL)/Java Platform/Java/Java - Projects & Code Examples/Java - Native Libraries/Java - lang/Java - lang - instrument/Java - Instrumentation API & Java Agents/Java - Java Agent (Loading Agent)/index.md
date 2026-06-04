---
title: "Java - Java Agent (Loading Agent)"
created: 2021-03-18T20:05:37.760-05:00
modified: 2021-03-18T20:06:28.518-05:00
parent: "[[Java - Instrumentation API & Java Agents]]"
children: []
---
see: [[Java - Instrumentation API & Java Agents]]

to use a [[Java - Instrumentation API & Java Agents|Java Agent]], you must load in 1 of the following ways:
- <strong>static load</strong> - makes use of the <em>premain</em> to load the agent using <code>-javaagent</code> option
- <strong>dynamic load</strong> - makes use of the <em>agentmain </em>to load the agent into the JVM using the [Java Attach API](https://docs.oracle.com/javase/7/docs/jdk/api/attach/spec/com/sun/tools/attach/package-summary.html)

### Static Load

Static load modifies the byte-code at startup time before any code is executed. Keep in mind that the static load uses the <em>premain</em> method, which will run before any application code runs, to get it running we can execute:
- <code>java -javaagent:java-agent-here.jar -jar application.jar</code>

IMPORTANT always put the <code>–</code><em><code>javaagent</code> </em>parameter before the <code>–</code><em><code>jar</code> </em>parameter
### Dynamic Load

create an <code>AgentLoader</code> class that dynamically loads our agent to the application
```
VirtualMachine jvm = VirtualMachine.attach(jvmPid);
jvm.loadAgent(agentFile.getAbsolutePath());
jvm.detach();
```

In the application main:
```
public class Launcher {
    public static void main(String[] args) throws Exception {
        if(args[0].equals("StartMyAtmApplication")) {
            new MyAtmApplication().run(args);
        } else if(args[0].equals("LoadAgent")) {
            new AgentLoader().run(args);
        }
    }
}
```

Starting the Application:
- <code>java -jar application.jar StartMyAtmApplication</code>

Attaching Java Agent (after the first operation, we attach the java agent to our JVM):
- <code>java -jar application.jar LoadAgent</code>

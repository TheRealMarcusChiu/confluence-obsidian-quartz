---
title: "Java - Java Agent (Creating Agent)"
created: 2021-03-18T20:06:36.206-05:00
modified: 2021-03-18T20:16:24.484-05:00
parent: "[[Java - Instrumentation API & Java Agents]]"
children: []
---
Since a java agent makes use of the Java Instrumentation API, let's see some of the most used methods:
- <strong><em>addTransformer</em></strong> – adds a transformer to the instrumentation engine
- <strong><em>getAllLoadedClasses</em></strong> – returns an array of all classes currently loaded by the JVM
- <strong><em>retransformClasses</em></strong> – facilitates the instrumentation of already loaded classes by adding byte-code
- <strong><em>removeTransformer</em></strong> – unregisters the supplied transformer
- <strong><em>redefineClasses</em></strong> – redefine the supplied set of classes using the supplied class files, meaning that the class will be fully replaced, not modified as with <em>retransformClasses</em>

### <em>Creating an Agent</em>
<em>every Java agent needs at least one of:</em>
- <em>premain</em> - used to statically load an agent into JVM
- <em>agentmain</em> - used to dynamically load an agent into JVM

### Example
```
public class MyInstrumentationAgent {
    private static Logger LOGGER = LoggerFactory.getLogger(MyInstrumentationAgent.class);

    public static void premain(String agentArgs, Instrumentation inst) {
        LOGGER.info("[Agent] In premain method");
        String className = "com.baeldung.instrumentation.application.MyAtm";
        transformClass(className,inst);
    }

    public static void agentmain(String agentArgs, Instrumentation inst) {
        LOGGER.info("[Agent] In agentmain method");
        String className = "com.baeldung.instrumentation.application.MyAtm";
        transformClass(className,inst);
    }

    private static void transformClass(String className, Instrumentation instrumentation) {
        Class<?> targetCls = null;
        ClassLoader targetClassLoader = null;

        // see if we can get the class using forName
        try {
            targetCls = Class.forName(className);
            targetClassLoader = targetCls.getClassLoader();
            transform(targetCls, targetClassLoader, instrumentation);
            return;
        } catch (Exception ex) {
            LOGGER.error("Class [{}] not found with Class.forName");
        }

        // otherwise iterate all loaded classes and find what we want
        for(Class<?> clazz: instrumentation.getAllLoadedClasses()) {
            if(clazz.getName().equals(className)) {
                targetCls = clazz;
                targetClassLoader = targetCls.getClassLoader();
                transform(targetCls, targetClassLoader, instrumentation);
                return;
            }
        }

        throw new RuntimeException("Failed to find class [" + className + "]");
    }

    private static void transform(Class<?> clazz, ClassLoader classLoader, Instrumentation instrumentation) {
        AtmTransformer dt = new AtmTransformer(clazz.getName(), classLoader);
        instrumentation.addTransformer(dt, true);

        try {
            instrumentation.retransformClasses(clazz);
        } catch (Exception ex) {
            throw new RuntimeException("Transform failed for class: [" + clazz.getName() + "]", ex);
        }
    }
}
```
### Resources
- [https://www.baeldung.com/java-instrumentation](https://www.baeldung.com/java-instrumentation)

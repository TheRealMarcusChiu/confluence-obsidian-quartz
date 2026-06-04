---
title: "JNDI - Serialization & Deserialization of a Java Object - Referenceable Reference"
created: 2022-05-28T03:10:04.565-05:00
modified: 2022-05-28T03:19:30.231-05:00
parent: "[[JNDI - Java Objects Serialization／Serialize／Serializing & Deserialization／Deserialize／Deserializing into Directory]]"
children: []
---
# Resources
- [https://docs.oracle.com/javase/jndi/tutorial/objects/storing/reference.html](https://docs.oracle.com/javase/jndi/tutorial/objects/storing/reference.html)

# Referencable Fruit Class
```
import javax.naming.NamingException;
import javax.naming.Reference;
import javax.naming.Referenceable;
import javax.naming.StringRefAddr;

public class Fruit implements Referenceable {
    String fruit;

    public Fruit(String f) {
        fruit = f;
    }

    public Reference getReference() throws NamingException {
        return new Reference(
                Fruit.class.getName(),
                new StringRefAddr("fruit", fruit),
                FruitFactory.class.getName(),
                null); // Factory location
    }

    public String toString() {
        return fruit;
    }
}
```
# ObjectFactory for Fruit Class
```
public class FruitFactory implements ObjectFactory {

    @Override
    public Object getObjectInstance(Object obj, Name name, Context nameCtx, Hashtable<?, ?> environment) throws Exception {
        if (Fruit.class.getName().equals(name)) {
            return new Fruit("sandbox");
        } else {
            return null;
        }
    }
} 
```
# Serializing & Deserializing Fruit Object
```
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.Name;
import javax.naming.spi.ObjectFactory;
import java.util.Hashtable;
import java.util.Properties;

public class Main {

    public static void main(String[] args) throws NamingException {
        // Create context
        Properties props = new Properties();
        props.setProperty(Context.INITIAL_CONTEXT_FACTORY, "org.apache.activemq.jndi.ActiveMQInitialContextFactory");
        props.setProperty(Context.PROVIDER_URL, "tcp://localhost:61616");
        Context ctx = new InitialContext(props);

        // Create the object to be bound
        Fruit fruit = new Fruit("orange");

        // Perform bind (i.e. serialization)
        ctx.bind("cn=favorite", fruit);

        // Perform lookup (i.e. deserialization)
        Fruit fruitGen = (Fruit) ctx.lookup("cn=favorite");

        System.out.println(fruitGen); // outputs "sandbox"
    }
}
```

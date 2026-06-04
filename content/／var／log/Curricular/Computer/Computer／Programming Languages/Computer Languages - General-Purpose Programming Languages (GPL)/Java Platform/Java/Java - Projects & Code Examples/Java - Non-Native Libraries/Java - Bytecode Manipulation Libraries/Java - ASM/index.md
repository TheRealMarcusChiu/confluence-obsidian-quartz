---
title: "Java - ASM"
created: 2022-06-05T16:07:59.745-05:00
modified: 2022-06-07T02:09:13.908-05:00
parent: "[[Java - Bytecode Manipulation Libraries]]"
children: []
---
###### ASM
- is a [[Java - Bytecode Manipulation Libraries|bytecode manipulation library]] for manipulating an existing Java class by adding fields, adding methods, and changing the behavior of existing methods
- using ASM directly is not encouraged because it requires good knowledge of the [[Java Virtual Machine (JVM)|JVM]], including class file format and the instruction set. Consider using [[Java - Code Generation Library (CGLIB)|CGLIB]]

# Dependencies

> [!expand]- maven dependencies
> ```
> <dependency>
>     <groupId>org.ow2.asm</groupId>
>     <artifactId>asm</artifactId>
>     <version>6.0</version>
> </dependency>
> <dependency>
>     <groupId>org.ow2.asm</groupId>
>     <artifactId>asm-util</artifactId>
>     <version>6.0</version>
> </dependency>
> ```
# ASM - 2 API Frameworks

The ASM API provides 2 styles of interacting with Java classes for transformation and generation:
- event-based
- tree-based

# ASM - Simple Code Example

Creating a class, adding a method, writing byte-array to file, and executing java class.
```
import org.objectweb.asm.ClassWriter;
import org.objectweb.asm.MethodVisitor;
import org.objectweb.asm.Opcodes;

import java.io.FileOutputStream;
import java.io.IOException;

public class Main {

    public static void main(String[] args) throws IOException {
        String className = "GeneratedClass";
        ClassWriter classWriter = generateClass(className);
        writeClassToFile(className, classWriter);
    }

    private static ClassWriter generateClass(String className) {
        ClassWriter cw = new ClassWriter(ClassWriter.COMPUTE_MAXS);
        cw.visit(Opcodes.V1_8, Opcodes.ACC_PUBLIC, className, null, "java/lang/Object", null);

        addMethod(cw);

        cw.visitEnd();
        return cw;
    }

    private static void addMethod(ClassWriter cw) {
        MethodVisitor mv = cw.visitMethod(Opcodes.ACC_PUBLIC + Opcodes.ACC_STATIC, "main", "([Ljava/lang/String;)V", null, null);
        mv.visitCode();
        mv.visitFieldInsn(Opcodes.GETSTATIC, "java/lang/System", "out", "Ljava/io/PrintStream;");
        mv.visitLdcInsn("Hello world!");
        mv.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "java/io/PrintStream", "println", "(Ljava/lang/String;)V", false);
        mv.visitInsn(Opcodes.RETURN);
        mv.visitMaxs(0, 0);
        mv.visitEnd();
    }

    private static void writeClassToFile(final String fileName, final ClassWriter cw) throws IOException {
        byte[] byteArray = cw.toByteArray();
        byte[] bytes = cw.toByteArray();
        try (FileOutputStream stream = new FileOutputStream("generated_classes/" + fileName + ".class")) {
            stream.write(bytes);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```
```
> java GeneratedClass
Hello world!
```
# Resources
- [https://www.baeldung.com/java-asm](https://www.baeldung.com/java-asm)
- [https://supunsetunga.medium.com/introduction-to-java-bytecode-manipulation-with-asm-9ae71049c7e0](https://supunsetunga.medium.com/introduction-to-java-bytecode-manipulation-with-asm-9ae71049c7e0)

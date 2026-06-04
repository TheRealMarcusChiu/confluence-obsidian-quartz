---
title: "Java - Designing With Exceptions"
created: 2021-01-24T19:08:00.076-06:00
modified: 2022-07-01T19:51:58.986-05:00
parent: "[[Java - Throwable - Errors vs Exceptions - Unchecked vs Checked]]"
children: []
---
original article: [https://www.infoworld.com/article/2076721/designing-with-exceptions.html](https://www.infoworld.com/article/2076721/designing-with-exceptions.html)
# The benefits of exceptions

Exceptions have several benefits. First, they allow you to separate error-handling code from normal code. You can surround the code that you expect to execute 99.9% of the time with a try block, and then place error-handling code in catch clauses -- code that you don't expect to get executed often, if ever. This arrangement has the nice benefit of making your "normal" code less cluttered.

If you feel that a method doesn't know how to handle a particular error, you can throw an exception from the method and let someone else deal with it. If you throw a "checked" exception, you enlist the help of the Java compiler to force client programmers to deal with the potential exception, either by catching it or declaring it in the <code>throws</code> clause of their methods. The fact that Java compilers make sure checked exceptions are handled helps make Java programs more robust.
# When to throw exceptions

When should you throw an exception? The answer can be summed up in one guideline:
> If your method encounters an abnormal condition that it can't handle, it should throw an exception.

Unfortunately, though this guideline may be easy to memorize and may sound impressive when you recite it at parties, it doesn't clear up the picture too much. It actually leads to a different question: What is an "abnormal condition?"

That, it turns out, is the 4,000 question. Deciding whether or not a particular event qualifies as an "abnormal condition" is a subjective judgment. The decision is not always obvious. It's one reason they pay you the big bucks.

A more helpful rule of thumb could be:
> Avoid using exceptions to indicate conditions that can reasonably be expected as part of the typical functioning of the method.

An abnormal condition, therefore, would be any condition that wouldn't reasonably be expected as part of the "normal functioning" of a method. To help you get a feel for what I mean by "normal functioning of a method," allow me to give a few examples.
# A few examples

As an illustration, consider the <code>FileInputStream</code> and <code>DataInputStream</code> classes from the <code>[java.io](http://java.io)</code> package. Here is an application that uses <code>FileInputStream</code> to print the text of a file to the standard output:
```
class Example9a {
	public static void main(String[] args) throws IOException {
		if (args.length == 0) {
			System.out.println("Must give filename as first arg.");
			return; 
		}
		
		FileInputStream in; 
		try { 
			in = new FileInputStream(args[0]); 
		} catch (FileNotFoundException e) {
			System.out.println("Can't find file: " + args[0]);
			return; 
		} 
		
		int ch; 
		while ((ch = in.read()) != -1) {
			System.out.print((char) ch);
		} 
		
		System.out.println(); in.close(); 
	}
}
```

This example shows that the <code>read()</code> method of <code>FileInputStream</code> reports an "end of file has been reached" condition not by throwing an exception, but by returning a special value: -1. In this method, reaching end of file is considered a "normal" part of using the method. It is not considered an "abnormal" condition. The usual way to read bytes is to keep on reading them until you hit the end.

The <code>DataInputStream</code> class, on the other hand, takes a different approach when reporting end of file:
```
class Example9b {
	public static void main(String[] args) throws IOException {
		if (args.length == 0) {
			System.out.println("Must give filename as first arg.");
			return;
		}
	
		FileInputStream fin;
		try {
			fin = new FileInputStream(args[0]);
		} catch (FileNotFoundException e) {
			System.out.println("Can't find file: " + args[0]);
			return;
		}
		
		DataInputStream din = new DataInputStream(fin);
		try {	
			int i;
			for (;;) { 
				i = din.readInt();
				System.out.println(i);
			}
		} catch (EOFException e) {
		}

		fin.close(); 
	} 
}
```

Each time the <code>readInt()</code> method of <code>DataInputStream</code> is invoked, it reads four bytes from the stream and interprets them as an <code>int</code>. When <code>readInt()</code> encounters end of file, it throws <code>EOFException</code>.

Throwing an exception is a reasonable approach for this method for two reasons. First, <code>readInt()</code> can't return a special value to indicate end of file, because all possible return values are valid <code>int</code>s. (It can't return -1 on end of file, for example, because it may read a -1 from the stream and need to return it as a valid <code>int</code> value.) Second, if <code>readInt()</code> encounters end of file after reading only one, two, or three bytes, that probably qualifies as an "abnormal condition." The method is supposed to read four bytes, but only one to three are available. Given that this exception is an integral part of using this class, it is a checked exception (a subclass of <code>Exception</code>). Client programmers are forced to deal with it.

A third approach to signaling an "end has been reached" condition is illustrated by the <code>StringTokenizer</code> and <code>Stack</code> classes in the following example:<font style="color: rgb(136,0,0);">x</font>
```
// In source packet in file except/ex9b/Example9c.java 
// This program prints the white-space separated tokens of an 
// ASCII file in reverse order of their appearance in the file.

class Example9c {
	public static void main(String[] args) throws IOException {
		if (args.length == 0) {
			System.out.println("Must give filename as first arg.");
			return;
		}
		
		FileInputStream in = null;
		try {
			in = new FileInputStream(args[0]);
		} catch (FileNotFoundException e) {
			System.out.println("Can't find file: " + args[0]); return;
		} 

		// Read file into a StringBuffer
		StringBuffer buf = new StringBuffer();
		try {
			int ch;
			while ((ch = in.read()) != -1) {
				buf.append((char) ch);
			}
		} finally {
			in.close();
		}

		// Separate StringBuffer into tokens and 
		// push each token into a Stack
		StringTokenizer tok = new StringTokenizer(buf.toString());
		Stack stack = new Stack();
		while (tok.hasMoreTokens()) {
			stack.push(tok.nextToken());
		}
		// Print out tokens in reverse order.
		while (!stack.empty()) {
			System.out.println((String) stack.pop());
		}
	}
}
```

This example reads in the bytes of a file, converts them to <code>char</code>s, and places the <code>char</code>s into a <code>StringBuffer</code>. It then uses a <code>StringTokenizer</code> to extract one white-space separated token (a <code>String</code>) at a time and push it onto a <code>Stack</code>. Next it pops all tokens from the <code>Stack</code> and prints them out one per line. Because <code>Stack</code> implements a Last In First Out (LIFO) stack, the tokens are printed in reverse order from their appearance in the file.

Both the <code>StringTokenizer</code> and the <code>Stack</code> must signal an "end has been reached" condition. The <code>StringTokenizer</code> constructor takes as a parameter the source <code>String</code> to tokenize. Each invocation of <code>nextToken()</code> returns a <code>String</code> that represents the next token of the source <code>String</code>. Eventually, all the tokens in the source <code>String</code> will be consumed, and <code>StringTokenizer</code> must somehow indicate that the end of tokens has been reached. In this case, there is a special return value, <code>null</code>, that could have been used to indicate the end of tokens. But the designer of this class took a different approach. A separate method, <code>hasMoreTokens()</code>, returns a boolean value indicating whether or not the end of tokens has been reached. You must invoke <code>hasMoreTokens()</code> each time you invoke <code>nextToken()</code>.

This approach shows that the designer did not consider reaching the end of tokens an abnormal condition. It is a normal way to use the class. After the end has been reached, however, if you don't check <code>hasMoreTokens()</code> and call <code>nextToken()</code>, you will be rewarded with the <code>NoSuchElementException</code>. Although this exception is thrown on an end of tokens condition, it is an unchecked exception (a subclass of <code>RuntimeException</code>). It is thrown more to indicate a software bug -- that you are not using the class correctly -- than to indicate the end of tokens condition.

Similarly, the <code>Stack</code> class has a method, <code>empty()</code>, that returns a boolean to indicate that the last object has been popped from the stack. You must invoke <code>empty()</code> each time you invoke <code>pop()</code>. If you neglect to invoke <code>empty()</code>and invoke <code>pop()</code> on an empty stack, you get an <code>EmptyStackException</code>. Although this exception is thrown when an "end of objects on the stack" condition is encountered, it is another unchecked runtime exception. It is intended to be more an indication of a software bug in the client code (the improper use of the <code>Stack</code> class) than the normal way to detect an empty stack.
# Exceptions indicate a broken contract

The examples above should give you a feel for when you would want to throw an exception instead of using some other means to communicate an event. One other way to think about exceptions, which may give you more insight into when you should use them, is that exceptions indicate a "broken contract."

One design approach often discussed in the context of object-oriented programming is the Design by Contract approach. This approach to software design says that a method represents a contract between the client (the caller of the method) and the class that declares the method. The contract includes preconditions that the client must fulfill and postconditions that the method itself must fulfill.

<strong>Precondition</strong>

One example of a method with a precondition is the <code>charAt(int index)</code> method of class <code>String</code>. This method requires that the <code>index</code> parameter passed by the client be between 0 and one less than the value returned by invoking <code>length()</code> on the <code>String</code> object. In other words, if the length of a <code>String</code> is 5, the <code>index</code> parameter must be between 0 and 4, inclusive.

<strong>Postcondition</strong>

The postcondition of <code>String</code>'s <code>charAt(int index)</code> method is that its return value will be the character at position <code>index</code> and the string itself will remain unchanged.

If the client invokes <code>charAt()</code> and passes -1 or some value <code>length()</code> or greater, the client has broken the contract. In this case, the <code>charAt()</code> method can't do its job correctly, and it signals this to the client by throwing a <code>StringIndexOutOfBoundsException</code>. This exception indicates that the client has some kind of software bug or has not used the class correctly.

If the <code>charAt()</code> method finds that it has received good input (the client has kept its part of the bargain), but for some reason is unable to return the character at the requested index (unable to fulfill its end of the contract), it would indicate this condition by throwing an exception. Such an exception would indicate that the method has some kind of bug or difficulty with runtime resources.

So, if an event represents an "abnormal condition" or a "broken contract," the thing to do in Java programs is to throw an exception.
# What to throw?

Once you have decided to throw an exception, you need to decide which exception to throw. You can throw an instance of class <code>Throwable</code>, or any subclass of <code>Throwable</code>. You can throw an already existing throwable object from the Java API, or define and throw one of your own. How do you decide?

<strong>Exceptions versus errors</strong>

In general, you should throw an exception and and never throw errors. <code>Error</code>, a subclass of <code>Throwable</code>, is intended for drastic problems, such as <code>OutOfMemoryError</code>, which would be reported by the JVM itself. On occasion an error, such as <code>java.awt.AWTError</code>, could be thrown by the Java API. In your code, however, you should restrict yourself to throwing exceptions (subclasses of class <code>Exception</code>). Leave the errors to the big guys.

<strong>Checked vs Unchecked exceptions</strong>

The big question, then, is whether to throw a "checked" or an "unchecked" exception. A checked exception is some subclass of <code>Exception</code> (or <code>Exception</code> itself), excluding class <code>RuntimeException</code> and its subclasses. Unchecked exceptions are <code>RuntimeException</code> and any of its subclasses. Class <code>Error</code> and its subclasses also are unchecked, but as you should be focusing on throwing exceptions only, your decision should be whether to throw a subclass of <code>RuntimeException</code> (an unchecked exception) or some other subclass of <code>Exception</code> (a checked exception).

If you throw a checked exception (and don't catch it), you will need to declare the exception in your method's <code>throws</code> clause. Client programmers who wish to call your method will then need to either catch and handle the exception within the body of their methods, or declare the exception in the throws clause of their methods. Making an exception checked forces client programmers to deal with the possibility that the exception will be thrown.

If you throw an unchecked exception, client programmers can decide whether to catch or disregard the exception, just as with checked exceptions. With an unchecked exception, however, the compiler doesn't force client programmers either to catch the exception or declare it in a throws clause. In fact, client programmers may not even know that the exception could be thrown. Either way, client programmers are less likely to think about what they should do in the event of an unchecked exception than they are in the case of an checked exception.

The simple guideline is:
> If you are throwing an exception for an abnormal condition that you feel client programmers should consciously decide how to handle, throw a checked exception.

In general, exceptions that indicate an improper use of a class should be unchecked. The <code>StringIndexOutOfBoundsException</code> thrown by <code>String</code>'s <code>charAt()</code> method is an unchecked exception. The designers of the <code>String</code> class didn't want to force client programmers to deal with the possibility of an invalid <code>index</code> parameter every time they called <code>charAt(int index)</code>.

The <code>read()</code> method of class <code>[java.io](http://java.io).FileInputStream</code>, on the other hand, throws <code>IOException</code>, which is a checked exception. This exception indicates some kind of error occurred while attempting to read from the file. It doesn't indicate that the client has used the <code>FileInputStream</code> class improperly. It just signals that the method itself is unable to fulfill its contractual responsibility of reading in the next byte from the file. The designers of the <code>FileInputStream</code> class considered this abnormal condition to be common enough, and important enough, to force client programmers to deal with it.

That is the trick, then, of deciding between a checked and an unchecked exception. If the abnormal condition is a failure of the method to fulfill its contract, and you feel it is common or important enough that client programmers should be forced to deal with the possibility of the exception, throw a checked exception. Otherwise, throw an unchecked exception.

<strong>Define a specific exception class</strong>

Finally, you must decide which exception class to instantiate and throw. The general rule here is to be specific. Don't just throw <code>Exception</code>, for example, with a string message indicating the kind of abnormal condition that caused the exception. Define or choose an already existing exception class for each kind of abnormal condition that may cause your method to throw an exception. This way, client programmers can define a separate catch clause for each kind of exception, or can catch some but not others, without having to query the object to determine the kind of abnormal condition that caused the exception.

You may wish to embed some information in the exception object, to give the catch clause more details about the exception. But you don't want to rely solely on embedded information to distinguish one type of exception from another. You don't want clients to have to query the exception object to determine, for example, whether the problem was an I/O error or an illegal argument.

Note that when <code>String.charAt(int index)</code> receives a bad input, it doesn't throw <code>RuntimeException</code> or even <code>IllegalArgumentException</code>. It throws <code>StringIndexOutOfBoundsException</code>. The type name indicates that the problem was a string index, and the program can query the object to find out what the bad index was.
# Conclusion

The most important point to take away from this article is that exceptions are there for <em>abnormal</em> conditions and shouldn't be used to report conditions that can be reasonably expected as part of the everyday functioning of a method. Although the use of exceptions can help make your code easier to read by separating the "normal" code from the error handling code, their inappropriate use can make your code harder to read.

Here is a collection of the exception guidelines put forth by this article:
- If your method encounters an abnormal condition that it can't handle, it should throw an exception.
- Avoid using exceptions to indicate conditions that can reasonably be expected as part of the normal functioning of the method.
- If your method discovers that the client has breached its contractual obligations (for example, by passing in bad input data), throw an unchecked exception.
- If your method is unable to fulfill its contract, throw either a checked or unchecked exception.
- If you are throwing an exception for an abnormal condition that you feel client programmers should consciously decide how to handle, throw a checked exception.
- Define or choose an already existing exception class for each kind of abnormal condition that may cause your method to throw an exception.

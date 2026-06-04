---
title: "Command Pattern"
created: 2021-07-10T10:54:02.375-05:00
modified: 2023-06-02T17:03:09.242-05:00
parent: "[[Behavioral Design Patterns]]"
children: []
---
###### Command Pattern
````excerpt
- is a [[Behavioral Design Patterns|behavioral design pattern]] that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as method arguments, delay or queue a request’s execution, and support undoable operations
````
^excerpt

# Code Structure

```merge-table
{
  "rows": [
    [
      "1. The Sender class (aka <strong><em>invoker</em></strong>) is responsible for initiating requests. This class must have a field for storing a reference to a command object. The sender triggers that command instead of sending the request directly to the receiver. Note that the sender isn’t responsible for creating the command object. Usually, it gets a pre-created command from the client via the constructor.\n2. The <strong>Command</strong> interface usually declares just a single method for executing the command.\n3. <strong>Concrete Commands</strong> implement various kinds of requests. A concrete command isn’t supposed to perform the work on its own, but rather to pass the call to one of the business logic objects. However, for the sake of simplifying the code, these classes can be merged. Parameters required to execute a method on a receiving object can be declared as fields in the concrete command. You can make command objects immutable by only allowing the initialization of these fields via the constructor.\n4. The <strong>Receiver</strong> class contains some business logic. Almost any object may act as a receiver. Most commands only handle the details of how a request is passed to the receiver, while the receiver itself does the actual work.\n5. The <strong>Client</strong> creates and configures concrete command objects. The client must pass all of the request parameters, including a receiver instance, into the command’s constructor. After that, the resulting command may be associated with one or multiple senders.",
      "![[Command Pattern/structure-indexed-2x.png|500]]"
    ]
  ]
}
```
# Code Example

> [!expand]- Click here to expand...
> ```
> interface Command {
> 	void execute();
> }
> ```
> ```
> class ConcreteCommand1 implements Command {
> 	void execute() { // logic 1 }
> }
>
> class ConcreteCommand2 implements Command {
> 	void execute() { // logic 2 }
> }
> ```
> ```
> interface CommandInvoker {
> 	setCommand(Command command);
> 	executeCommand();
> }
> ```
> ```
> abstract class BaseCommandInvoker implements CommandInvoker {
> 	Command command;
> 	setCommand(Command command) { this.command = command; }
> 	executeCommand() { command.execute(); }
> } 
>
> class Button_ConcreteCommandInvoker1 extends BaseCommandInvoker {
> 	Receiver receiver;
> 	Button_ConcreteCommandInvoker1(Receiver receiver, params) { this.receiver = receiver; }
> 	executeCommand() {
> 		receiver.operation(a, b, c);
> 	}
> }
>
> class Scroll_ConcreteCommandInvoker2 extends BaseCommandInvoker {
> 	// modify as needed
> }
> ```
> ```
> main() {
> 	Command command1 = new ConcreteCommand1();
> 	Command command2 = new ConcreteCommand2();
>
> 	Receiver receiver = new Receiver();
> 	CommandInvoker commandInvoker1 = new Button_ConcreteCommandInvoker1(receiver);
> 	CommandInvoker commandInvoker1 = new Scroll_ConcreteCommandInvoker2();
>
> 	commandInvoker1.setCommand(command1);
> 	commandInvoker2.setCommand(command2);
>
> 	// execute command
> 	commandInvoker1.execute();
> 	commandInvoker2.execute();
> }
> ```
# Comparisons

> [!expand]- Click here to expand...
> ![[Chain of Responsibility vs Command vs Mediator vs Observer#^excerpt]]
>
> ![[Chain of Responsibility Pattern vs Command Pattern#^excerpt]]
>
> ![[Command Pattern vs Prototype Pattern#^excerpt]]
>
> ![[Command Pattern vs Strategy Pattern#^excerpt]]
>
> ![[Command Pattern vs Visitor Pattern#^excerpt]]
>
> ![[Command vs Memento#^excerpt]]
# Resources
- [https://refactoring.guru/design-patterns/command](https://refactoring.guru/design-patterns/command)

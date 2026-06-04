---
title: "Memento Pattern"
created: 2021-03-15T22:46:51.387-05:00
modified: 2023-06-02T16:55:45.665-05:00
parent: "[[Behavioral Design Patterns]]"
children: []
---
###### Memento Pattern
````excerpt
- is a [[Behavioral Design Patterns|behavioral design pattern]] that lets you save and restore the previous state of an object without revealing the details of its implementation
````
^excerpt

# Code Structure
> [!tabs]
>
> === Nested Classes Implementation
>
> ![[Memento Pattern/memento-structure-1.png|700]]
>
> === Intermediate Interface Implementation
>
> ![[Memento Pattern/memento-structure-2.png|700]]
>
> === Stricter Encapsulation Implementation
>
> ![[Memento Pattern/memento-structure-3.png|700]]

# Code Example

> [!expand]- Click here to expand...
> Create Memento class
> ```
> public class Memento {
>    private String state;
>
>    public Memento(String state){
>       this.state = state;
>    }
>
>    public String getState(){
>       return state;
>    }	
> }
> ```
>
> Create Originator class
> ```
> public class Originator {
>    private String state;
>
>    public void setState(String state){
>       this.state = state;
>    }
>
>    public String getState(){
>       return state;
>    }
>
>    public Memento saveStateToMemento(){
>       return new Memento(state);
>    }
>
>    public void getStateFromMemento(Memento memento){
>       state = memento.getState();
>    }
> }
> ```
>
> Create CareTaker class
> ```
> import java.util.ArrayList;
> import java.util.List;
>
> public class CareTaker {
>    private List<Memento> mementoList = new ArrayList<Memento>();
>
>    public void add(Memento state){
>       mementoList.add(state);
>    }
>
>    public Memento get(int index){
>       return mementoList.get(index);
>    }
> }
> ```
>
> Use <em>CareTaker</em> and <em>Originator</em> objects
> ```
> public class MementoPatternDemo {
>    public static void main(String[] args) {
>    
>       Originator originator = new Originator();
>       CareTaker careTaker = new CareTaker();
>       
>       originator.setState("State #1");
>       originator.setState("State #2");
>       careTaker.add(originator.saveStateToMemento());
>       
>       originator.setState("State #3");
>       careTaker.add(originator.saveStateToMemento());
>       
>       originator.setState("State #4");
>       System.out.println("Current State: " + originator.getState());		
>       
>       originator.getStateFromMemento(careTaker.get(0));
>       System.out.println("First saved State: " + originator.getState());
>       originator.getStateFromMemento(careTaker.get(1));
>       System.out.println("Second saved State: " + originator.getState());
>    }
> }
> ```
>
> Verify the output
> ```
> Current State: State #4
> First saved State: State #2
> Second saved State: State #3
> ```
# Comparisons

> [!expand]- Click here to expand...
> - You can use [[Command Pattern|Command]] and Memento together when implementing “undo”. In this case, commands are responsible for performing various operations over a target object, while mementos save the state of that object just before a command gets executed.
> - You can use Memento along with [[Iterator Pattern|Iterator]] to capture the current iteration state and roll it back if necessary.
> - Sometimes [[Prototype Pattern|Prototype]] can be a simpler alternative to Memento. This works if the object, the state of which you want to store in the history, is fairly straightforward and doesn’t have links to external resources, or the links are easy to re-establish

---
title: "Composite Pattern - Object Tree Pattern"
created: 2021-04-26T19:06:42.549-05:00
modified: 2023-06-02T16:51:17.263-05:00
parent: "[[Structural Design Patterns]]"
children: []
---
###### Composite Pattern - Object Tree Pattern
````excerpt
- <strong>Composite</strong> is a [[Structural Design Patterns|structural design pattern]] that composes objects into tree structures to represent part-whole hierarchies
- <strong>Composite</strong> lets clients treat individual objects and compositions of objects uniformly
````
^excerpt

# Real-World Example

> [!expand-ui]- Printing - Sentence Word Character - Example
> Every sentence is composed of words that are in turn composed of characters. Each of these objects is printable and they can have something printed before or after them like a sentence always ends with a full stop and a word always has space before it.
# Code Example

> [!expand-ui]- Printing - Sentence Word Character - Example
> Take our sentence example from above. Here we have the base class <code>LetterComposite</code> and the different printable types <code>Letter</code>, <code>Word</code> and <code>Sentence</code>.
> ```
> public abstract class LetterComposite {
>
>   private final List<LetterComposite> children = new ArrayList<>();
>
>   public void add(LetterComposite letter) {
>     children.add(letter);
>   }
>
>   public int count() {
>     return children.size();
>   }
>
>   protected void printThisBefore() {
>   }
>
>   protected void printThisAfter() {
>   }
>
>   public void print() {
>     printThisBefore();
>     children.forEach(LetterComposite::print);
>     printThisAfter();
>   }
> }
>
> public class Letter extends LetterComposite {
>
>   private final char character;
>
>   public Letter(char c) {
>     this.character = c;
>   }
>
>   @Override
>   protected void printThisBefore() {
>     System.out.print(character);
>   }
> }
>
> public class Word extends LetterComposite {
>
>   public Word(List<Letter> letters) {
>     letters.forEach(this::add);
>   }
>
>   public Word(char... letters) {
>     for (char letter : letters) {
>       this.add(new Letter(letter));
>     }
>   }
>
>   @Override
>   protected void printThisBefore() {
>     System.out.print(" ");
>   }
> }
>
> public class Sentence extends LetterComposite {
>
>   public Sentence(List<Word> words) {
>     words.forEach(this::add);
>   }
>
>   @Override
>   protected void printThisAfter() {
>     System.out.print(".");
>   }
> }
> ```
>
> Then we have a messenger to carry messages:
> ```
> public class Messenger {
>
>   LetterComposite messageFromOrcs() {
>
>     var words = List.of(
>         new Word('W', 'h', 'e', 'r', 'e'),
>         new Word('t', 'h', 'e', 'r', 'e'),
>         new Word('i', 's'),
>         new Word('a'),
>         new Word('w', 'h', 'i', 'p'),
>         new Word('t', 'h', 'e', 'r', 'e'),
>         new Word('i', 's'),
>         new Word('a'),
>         new Word('w', 'a', 'y')
>     );
>
>     return new Sentence(words);
>
>   }
>
>   LetterComposite messageFromElves() {
>
>     var words = List.of(
>         new Word('M', 'u', 'c', 'h'),
>         new Word('w', 'i', 'n', 'd'),
>         new Word('p', 'o', 'u', 'r', 's'),
>         new Word('f', 'r', 'o', 'm'),
>         new Word('y', 'o', 'u', 'r'),
>         new Word('m', 'o', 'u', 't', 'h')
>     );
>
>     return new Sentence(words);
>
>   }
>
> }
> ```
>
> And then it can be used as:
> ```
> var messenger = new Messenger();
>
> LOGGER.info("Message from the orcs: ");
> messenger.messageFromOrcs().print();
>
> LOGGER.info("Message from the elves: ");
> messenger.messageFromElves().print();
> ```
>
> The console output:
> ```
> Message from the orcs: 
>  Where there is a whip there is a way.
> Message from the elves: 
>  Much wind pours from your mouth.
> ```
# What problems can the Composite design pattern solve?
- A part-whole hierarchy should be represented so that clients can treat part and whole objects uniformly.
- A part-whole hierarchy should be represented as a tree structure.

When defining <strong><code><font style="color: rgb(128,128,128);">Part</font></code></strong> objects and <font style="color: rgb(128,128,128);"><strong><code>Whole</code></strong></font> objects that act as containers for <font style="color: rgb(128,128,128);"><strong><code>Part</code></strong></font> objects, clients must treat them separately, which complicates client code.

Composite should be used when clients ignore the difference between compositions of objects and individual objects. If programmers find that they are using multiple objects in the same way, and often have nearly identical code to handle each of them, then composite is a good choice; it is less complex in this situation to treat primitives and composites as homogeneous
# What solution does the Composite design pattern describe?
- Define a unified <font style="color: rgb(128,128,128);"><strong><code>Component</code></strong></font> interface for both part <font style="color: rgb(128,128,128);"><strong><code>Leaf</code></strong></font> objects and whole <font style="color: rgb(128,128,128);"><strong><code>Composite</code></strong></font> objects.
- Individual <font style="color: rgb(128,128,128);"><strong><code>Leaf</code></strong></font> objects implement the <font style="color: rgb(128,128,128);"><strong><code>Component</code></strong></font> interface directly, and <font style="color: rgb(128,128,128);"><strong><code>Composite</code></strong></font> objects forward requests to their child components.

This enables clients to work through the <font style="color: rgb(128,128,128);"><strong><code>Component</code></strong></font> interface to treat <font style="color: rgb(128,128,128);"><strong><code>Leaf</code></strong></font> and <font style="color: rgb(128,128,128);"><strong><code>Composite</code></strong></font> objects uniformly: <font style="color: rgb(128,128,128);"><strong><code>Leaf</code></strong></font> objects perform a request directly, and <font style="color: rgb(128,128,128);"><strong><code>Composite</code></strong></font> objects forward the request to their child components recursively downwards the tree structure. This makes client classes easier to implement, change, test, and reuse
# Class Diagram
<strong>![[Composite Pattern - Object Tree Pattern/composite-pattern.png|600]]</strong>[[composite-pattern.drawio]]
# Resources
- [https://java-design-patterns.com/patterns/composite/](https://java-design-patterns.com/patterns/composite/)
- [https://refactoring.guru/design-patterns/composite](https://refactoring.guru/design-patterns/composite)

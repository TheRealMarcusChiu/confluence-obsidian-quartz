---
title: "Java - (？ extends T) vs (？ super T)"
created: 2021-04-23T21:46:22.186-05:00
modified: 2022-03-31T19:22:31.723-05:00
parent: "[[Java - Native Libraries]]"
children:
  - "[[Java - When to Use Foo＜？＞]]"
---
- [https://www.youtube.com/watch?v=V1vQf4qyMXg&t=1344s&ab_channel=UserGroupsatGoogle](https://www.youtube.com/watch?v=V1vQf4qyMXg&t=1344s&ab_channel=UserGroupsatGoogle)
- [https://stackoverflow.com/questions/4343202/difference-between-super-t-and-extends-t-in-java](https://stackoverflow.com/questions/4343202/difference-between-super-t-and-extends-t-in-java)

# 1 - PECS (Producer Extends, Consumer Super)

USED IN METHOD PARAMETER - AVOID IN RETURN TYPE
- <strong>"Producer Extends"</strong> - <code>public void method(List\<? extends T\> list)</code>
	- cannot add any object to this list
	- can guarantee object of type T to be read from this list
- <strong>"Consumer Super"</strong> - <code>public void method(List\<? super T\> list)</code>
	- can add objects of type T and subtypes of T to this list
	- cannot guarantee what type of object you may read from this list
- If you need to both read from and write to a list, you need to declare it exactly with no wildcards (e.g. <code>List\<T\></code>)
```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2,
        "rowspan": 2
      },
      null,
      {
        "content": "Parameter Produces <code>T</code> Instances?",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "YES",
        "align": "center"
      },
      {
        "content": "NO",
        "align": "center"
      }
    ],
    [
      {
        "content": "Parameter Consumes T Instances?",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "YES",
        "align": "center"
      },
      "<code>Foo\\<T\\></code><font style=\"color: rgb(122,134,154);\">(Invariant in T)</font>",
      "<code>Foo\\<? super T\\></code>\n<font style=\"color: rgb(122,134,154);\">(Contravariant in T)</font>"
    ],
    [
      {
        "content": "NO",
        "align": "center"
      },
      "<code>Foo\\<? extends T\\></code>\n<font style=\"color: rgb(122,134,154);\">(Covariant in T)</font>",
      "<code>Foo\\<?\\> Foo\\<? extends Object\\> Foo</code>\n<font style=\"color: rgb(122,134,154);\">(Independent of T) Legacy/Raw List [[Java - When to Use Foo＜？＞|example use cases]]</font>"
    ]
  ],
  "tableStyle": "width: 60.537%;"
}
```
# 2 - Examples
###### <strong>Example 1</strong>

Note how the source list <code>src</code> (the producing list) uses <code>extends</code>, and the destination list <code>dest</code> (the consuming list) uses <code>super</code>:
```
public static <T> void copy(List<? extends T> src, List<? super T> dest) {
	for (int i = 0; i < src.size(); i++) {
    	T t = src.get(i);
//		T t = dest.get(i); <-- compiler error
//		T t = (T) dest.get(i); <-- may throw ClassCastException

    	dest.set(i, t);
//		src.set(i, t); <-- compiler error
	}
}
```
###### Example 2
```
public class SortedList<T extends Comparable<? super T>> extends LinkedList<T>
```

<code>T extends Comparable\<? super T\></code> is saying that EITHER:
- type <code>T</code> has to implement Comparable
- type <code>T</code>'s superclass has to implement Comparable

So consider <code>java.util.Date</code>. It implements <code>Comparable\<Date\></code>. But what about <code>java.sql.Date</code>? It implements <code>Comparable\<java.util.Date\></code> as well.

Without the super signature, <code>SortedList</code> would not be able accept the type of <code>java.sql.Date</code>, because it doesn't implement a <code>Comparable</code> of itself, but rather of a super class of itself
###### Example 3
```java
<R> Stream<R> map(Function<? super T, ? extends R> mapper);
```

having <code>map</code> take in the parameter <code>Function\<? super T, ? extends R\></code> allows the following:
```java
Function<Number, String> func = String::valueOf;

List<Integer> list = List.of(1, 2);
Stream<String> stream = list.stream().map(func);

List<Long> list = List.of(1L, 2L);
Stream<String> stream = list.stream().map(func);
```
# 3 - Explanation

Imagine having this hierarchy

```merge-table
{
  "rows": [
    [
      "![[Java - (？ extends T) vs (？ super T)/java-extends-vs-super-1.png|301]]",
      "```\ninterface A1{}\ninterface A2{}\ninterface A3{}\ninterface A4{}\n\ninterface B1 extends A1{}\ninterface B2 extends A1,A2{}\ninterface B3 extends A3,A4{}\ninterface B4 extends A4{}\n\ninterface C1 extends B2{}\ninterface C2 extends B2,B3{}\ninterface C3 extends B3{}\n\ninterface D1 extends C1,C2{}\ninterface D2 extends C2{}\n\ninterface E1 extends D1{}\ninterface E2 extends D1{}\ninterface E3 extends D2{}\ninterface E4 extends D2{}\n```"
    ]
  ]
}
```
## 3.1 - Extends

By writing
<span style="white-space: pre-wrap"><code>    List\<? extends C2\> list = </code></span>

you are saying that <code>list</code> will be able to reference an object of type (for example) <code>ArrayList</code> whose generic type is one of the 7 <strong>subtypes</strong> of <code>C2</code> (<code>C2</code> included):
1. <code>new ArrayList\<C2\>() - can list.add: C2 D1 D2 E1 E2 E3 E4</code>
2. <code>new ArrayList\<D1\>() - can list.add:    D1    E1 E2</code>
3. <code>new ArrayList\<D2\>() - can list.add:       D2       E3 E4</code>
4. <code>new ArrayList\<E1\>() - can list.add:          E1</code>
5. <code>new ArrayList\<E2\>() - can list.add:             E2</code>
6. <code>new ArrayList\<E3\>() - can list.add:                E3</code>
7. <code>new ArrayList\<E4\>() - can list.add:                   E4</code>

We have a set of "storable" types for each possible case: 7 sets here graphically represented

![[Java - (？ extends T) vs (？ super T)/java-extends-vs-super-2.png|600]]

As you can see, there is not a <em>safe type</em> that is common to every case:
- you cannot <code>list.add(new C2())</code> because it could be <code>list = new ArrayList\<D1\>();</code>
- you cannot <code>list.add(new D1())</code> because it could be <code>list = new ArrayList\<D2\>();</code>

and so on.
## 3.2 - Super

By writing
<span style="white-space: pre-wrap"><code>    List\<? super C2\> list = </code></span>

you are saying that <code>list</code> will be able to reference an object of type (for example) <code>ArrayList</code> whose generic type is one of the 7 <strong>supertypes</strong> of <code>C2</code> (<code>C2</code> included):
1. <code>new ArrayList\<A1\>() - can list.add: A1          B1 B2       C1 C2    D1 D2 E1 E2 E3 E4</code>
2. <code>new ArrayList\<A2\>() - can list.add:    A2          B2       C1 C2    D1 D2 E1 E2 E3 E4</code>
3. <code>new ArrayList\<A3\>() - can list.add:       A3          B3       C2 C3 D1 D2 E1 E2 E3 E4</code>
4. <code>new ArrayList\<A4\>() - can list.add:          A4       B3 B4    C2 C3 D1 D2 E1 E2 E3 E4</code>
5. <code>new ArrayList\<B2\>() - can list.add:                B2       C1 C2    D1 D2 E1 E2 E3 E4</code>
6. <code>new ArrayList\<B3\>() - can list.add:                   B3       C2 C3 D1 D2 E1 E2 E3 E4</code>
7. <code>new ArrayList\<C2\>() - can list.add:                            C2    D1 D2 E1 E2 E3 E4</code>

We have a set of "storable" types for each possible case: 7 sets here graphically represented

![[Java - (？ extends T) vs (？ super T)/java-extends-vs-super-3.png|600]]

As you can see, here we have seven <em>safe types</em> that are common to every case: <code>C2</code>, <code>D1</code>, <code>D2</code>, <code>E1</code>, <code>E2</code>, <code>E3</code>, <code>E4</code>.
- you can <code>list.add(new C2(){})</code> because, regardless of the kind of List we're referencing, <code>C2</code> is allowed
- you can <code>list.add(new D1(){})</code> because, regardless of the kind of List we're referencing, <code>D1</code> is allowed

and so on. You probably noticed that these types correspond to the hierarchy starting from type <code>C2</code>.

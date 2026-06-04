---
title: "Java - Optional"
created: 2020-12-04T18:20:14.886-06:00
modified: 2020-12-04T18:34:19.737-06:00
parent: "[[Java - util]]"
children: []
---
In this tutorial, we're going to show the <em>Optional</em> class that was introduced in Java 8.

The purpose of the class is to provide a type-level solution for representing optional values instead of <em>null</em> references.

To get a deeper understanding of why we should care about the <em>Optional</em> class, take a look at [the official Oracle article](http://www.oracle.com/technetwork/articles/java/java8-optional-2175753.html).
## Tutorials

> [!expand-ui]- Creating Optional Objects
> There are several ways of creating <em>Optional</em> objects.
>
> To create an empty <em>Optional</em> object, we simply need to use its <em>empty()</em> static method:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> whenCreatesEmptyOptional\_thenCorrect() {</code><br><code>    Optional\<String\> empty = Optional.empty();</code><br><code>    assertFalse(empty.isPresent());</code><br><code>}</code></span>
>
> Note that we used the <em>isPresent()</em> method to check if there is a value inside the <em>Optional</em> object. A value is present only if we have created <em>Optional</em> with a non-<em>null</em> value. We'll look at the <em>isPresent()</em> method in the next section.
>
> We can also create an <em>Optional</em> object with the static method <em>of()</em>:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenNonNull\_whenCreatesNonNullable\_thenCorrect() {</code><br><code>    String name = <font style="color: rgb(38,116,56);">"baeldung"</font>;</code><br><code>    Optional\<String\> opt = Optional.of(name);</code><br><code>    assertTrue(opt.isPresent());</code><br><code>}</code></span>
>
> However, the argument passed to the <em>of()</em> method can't be <em>null.</em> Otherwise, we'll get a <em>NullPointerException</em>:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test(expected = NullPointerException.class)</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenNull\_whenThrowsErrorOnCreate\_thenCorrect() {</code><br><code>    String name = <font style="color: rgb(38,116,56);">null</font>;</code><br><code>    Optional.of(name);</code><br><code>}</code></span>
>
> But in case we expect some <em>null</em> values, we can use the <em>ofNullable()</em> method:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenNonNull\_whenCreatesNullable\_thenCorrect() {</code><br><code>    String name = <font style="color: rgb(38,116,56);">"baeldung"</font>;</code><br><code>    Optional\<String\> opt = Optional.ofNullable(name);</code><br><code>    assertTrue(opt.isPresent());</code><br><code>}</code></span>
>
> By doing this, if we pass in a <em>null</em> reference, it doesn't throw an exception but rather returns an empty <em>Optional</em> object:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenNull\_whenCreatesNullable\_thenCorrect() {</code><br><code>    String name = <font style="color: rgb(38,116,56);">null</font>;</code><br><code>    Optional\<String\> opt = Optional.ofNullable(name);</code><br><code>    assertFalse(opt.isPresent());</code><br><code>}</code></span>

> [!expand-ui]- Checking Value Presence: isPresent() and isEmpty()
> When we have an <em>Optional</em> object returned from a method or created by us, we can check if there is a value in it or not with the <em>isPresent()</em> method:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenOptional\_whenIsPresentWorks\_thenCorrect() {</code><br><code>    Optional\<String\> opt = Optional.of(<font style="color: rgb(38,116,56);">"Baeldung"</font>);</code><br><code>    assertTrue(opt.isPresent());</code><br><code></code><br><code>    opt = Optional.ofNullable(<font style="color: rgb(38,116,56);">null</font>);</code><br><code>    assertFalse(opt.isPresent());</code><br><code>}</code></span>
>
> This method returns <em>true</em> if the wrapped value is not <em>null.</em>
>
> Also, as of Java 11, we can do the opposite with the <em>isEmpty </em>method:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenAnEmptyOptional\_thenIsEmptyBehavesAsExpected() {</code><br><code>    Optional\<String\> opt = Optional.of(<font style="color: rgb(38,116,56);">"Baeldung"</font>);</code><br><code>    assertFalse(opt.isEmpty());</code><br><code></code><br><code>    opt = Optional.ofNullable(<font style="color: rgb(38,116,56);">null</font>);</code><br><code>    assertTrue(opt.isEmpty());</code><br><code>}</code></span>

> [!expand-ui]- Conditional Action With ifPresent()
> The <em>ifPresent()</em> method enables us to run some code on the wrapped value if it's found to be non-<em>null</em>. Before <em>Optional</em>, we'd do:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">if</font>(name != <font style="color: rgb(38,116,56);">null</font>) {</code><br><code>    System.out.println(name.length());</code><br><code>}</code></span>
>
> This code checks if the name variable is <em>null</em> or not before going ahead to execute some code on it. This approach is lengthy, and that's not the only problem — it's also prone to error.
>
> Indeed, what guarantees that after printing that variable, we won't use it again and then forget to perform the null check?
>
> This can result in a <em>NullPointerException</em> at runtime if a null value finds its way into that code. When a program fails due to input issues, it's often a result of poor programming practices.
>
> <em>Optional</em> makes us deal with nullable values explicitly as a way of enforcing good programming practices.
>
> Let's now look at how the above code could be refactored in Java 8.
>
> In typical functional programming style, we can execute perform an action on an object that is actually present:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenOptional\_whenIfPresentWorks\_thenCorrect() {</code><br><code>    Optional\<String\> opt = Optional.of(<font style="color: rgb(38,116,56);">"baeldung"</font>);</code><br><code>    opt.ifPresent(name -\> System.out.println(name.length()));</code><br><code>}</code></span>
>
> In the above example, we use only two lines of code to replace the five that worked in the first example: one line to wrap the object into an <em>Optional</em> object and the next to perform implicit validation as well as execute the code.

> [!expand-ui]- Default Value With orElse()
> The <em>orElse()</em> method is used to retrieve the value wrapped inside an <em>Optional</em> instance. It takes one parameter, which acts as a default value. The <em>orElse() </em>method returns the wrapped value if it's present, and its argument otherwise:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> whenOrElseWorks\_thenCorrect() {</code><br><code>    String nullName = <font style="color: rgb(38,116,56);">null</font>;</code><br><code>    String name = Optional.ofNullable(nullName).orElse(<font style="color: rgb(38,116,56);">"john"</font>);</code><br><code>    assertEquals(<font style="color: rgb(38,116,56);">"john"</font>, name);</code><br><code>}</code></span>

> [!expand-ui]- Default Value With orElseGet()
> The <em>orElseGet()</em> method is similar to <em>orElse()</em>. However, instead of taking a value to return if the <em>Optional</em> value is not present, it takes a supplier functional interface, which is invoked and returns the value of the invocation:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> whenOrElseGetWorks\_thenCorrect() {</code><br><code>    String nullName = <font style="color: rgb(38,116,56);">null</font>;</code><br><code>    String name = Optional.ofNullable(nullName).orElseGet(() -\> <font style="color: rgb(38,116,56);">"john"</font>);</code><br><code>    assertEquals(<font style="color: rgb(38,116,56);">"john"</font>, name);</code><br><code>}</code></span>

> [!expand-ui]- Difference Between orElse and orElseGet()
> To a lot of programmers who are new to <em>Optional</em> or Java 8, the difference between <em>orElse()</em> and <em>orElseGet()</em> is not clear. As a matter of fact, these two methods give the impression that they overlap each other in functionality.
>
> However, there's a subtle but very important difference between the two that can affect the performance of our code drastically if not well understood.
>
> Let's create a method called <em>getMyDefault()</em> in the test class, which takes no arguments and returns a default value:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">public</font> String getMyDefault() {</code><br><code>    System.out.println(<font style="color: rgb(38,116,56);">"Getting Default Value"</font>);</code><br><code>    <font style="color: rgb(38,116,56);">return</font> <font style="color: rgb(38,116,56);">"Default Value"</font>;</code><br><code>}</code></span>
>
> Let's see two tests and observe their side effects to establish both where <em>orElse()</em> and <em>orElseGet() </em>overlap and where they differ:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> whenOrElseGetAndOrElseOverlap\_thenCorrect() {</code><br><code>    String text = <font style="color: rgb(38,116,56);">null</font>;</code><br><code></code><br><code>    String defaultText = Optional.ofNullable(text).orElseGet(<font style="color: rgb(38,116,56);">this</font>::getMyDefault);</code><br><code>    assertEquals(<font style="color: rgb(38,116,56);">"Default Value"</font>, defaultText);</code><br><code></code><br><code>    defaultText = Optional.ofNullable(text).orElse(getMyDefault());</code><br><code>    assertEquals(<font style="color: rgb(38,116,56);">"Default Value"</font>, defaultText);</code><br><code>}</code></span>
>
> In the above example, we wrap a null text inside an <em>Optional</em> object and attempt to get the wrapped value using each of the two approaches.
>
> The side effect is:
> <span style="white-space: pre-wrap"><code>Getting default value...</code><br><code>Getting default value...</code></span>
>
> The <em>getMyDefault()</em> method is called in each case. It so happens that when the wrapped value is not present, then both <em>orElse()</em> and <em>orElseGet()</em> work exactly the same way.
>
> Now let's run another test where the value is present, and ideally, the default value should not even be created:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> whenOrElseGetAndOrElseDiffer\_thenCorrect() {</code><br><code>    String text = <font style="color: rgb(38,116,56);">"Text present"</font>;</code><br><code></code><br><code>    System.out.println(<font style="color: rgb(38,116,56);">"Using orElseGet:"</font>);</code><br><code>    String defaultText </code><br><code>      = Optional.ofNullable(text).orElseGet(<font style="color: rgb(38,116,56);">this</font>::getMyDefault);</code><br><code>    assertEquals(<font style="color: rgb(38,116,56);">"Text present"</font>, defaultText);</code><br><code></code><br><code>    System.out.println(<font style="color: rgb(38,116,56);">"Using orElse:"</font>);</code><br><code>    defaultText = Optional.ofNullable(text).orElse(getMyDefault());</code><br><code>    assertEquals(<font style="color: rgb(38,116,56);">"Text present"</font>, defaultText);</code><br><code>}</code></span>
>
> In the above example, we are no longer wrapping a <em>null</em> value, and the rest of the code remains the same.
>
> Now let's take a look at the side effect of running this code:
> <span style="white-space: pre-wrap"><code>Using orElseGet:</code><br><code>Using orElse:</code><br><code>Getting default value...</code></span>
>
> Notice that when using <em>orElseGet()</em> to retrieve the wrapped value, the <em>getMyDefault()</em> method is not even invoked since the contained value is present.
>
> However, when using <em>orElse()</em>, whether the wrapped value is present or not, the default object is created. So in this case, we have just created one redundant object that is never used.
>
> In this simple example, there is no significant cost to creating a default object, as the JVM knows how to deal with such. However, when a method such as <em>getMyDefault()</em> has to make a web service call or even query a database, the cost becomes very obvious.

> [!expand-ui]- Exceptions With orElseThrow()
> The <em>orElseThrow()</em> method follows from <em>orElse()</em> and <em>orElseGet()</em> and adds a new approach for handling an absent value.
>
> Instead of returning a default value when the wrapped value is not present, it throws an exception:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test(expected = IllegalArgumentException.class)</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> whenOrElseThrowWorks\_thenCorrect() {</code><br><code>    String nullName = <font style="color: rgb(38,116,56);">null</font>;</code><br><code>    String name = Optional.ofNullable(nullName).orElseThrow(</code><br><code>      IllegalArgumentException::<font style="color: rgb(38,116,56);">new</font>);</code><br><code>}</code></span>
>
> Method references in Java 8 come in handy here, to pass in the exception constructor.
>
> Java 10 introduced a simplified no-arg version of <em>orElseThrow()</em> method. In case of an empty <em>Optional</em> it throws a <em>NoSuchElelementException</em>:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test(expected = NoSuchElementException.class)</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> whenNoArgOrElseThrowWorks\_thenCorrect() {</code><br><code>    String nullName = <font style="color: rgb(38,116,56);">null</font>;</code><br><code>    String name = Optional.ofNullable(nullName).orElseThrow();</code><br><code>}</code></span>

> [!expand-ui]- Returning Value With get()
> The final approach for retrieving the wrapped value is the <em>get()</em> method:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenOptional\_whenGetsValue\_thenCorrect() {</code><br><code>    Optional\<String\> opt = Optional.of(<font style="color: rgb(38,116,56);">"baeldung"</font>);</code><br><code>    String name = opt.get();</code><br><code>    assertEquals(<font style="color: rgb(38,116,56);">"baeldung"</font>, name);</code><br><code>}</code></span>
>
> However, unlike the previous three approaches, <em>get()</em> can only return a value if the wrapped object is not <em>null</em>; otherwise, it throws a no such element exception:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test(expected = NoSuchElementException.class)</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenOptionalWithNull\_whenGetThrowsException\_thenCorrect() {</code><br><code>    Optional\<String\> opt = Optional.ofNullable(<font style="color: rgb(38,116,56);">null</font>);</code><br><code>    String name = opt.get();</code><br><code>}</code></span>
>
> This is the major flaw of the <em>get()</em> method. Ideally, <em>Optional</em> should help us avoid such unforeseen exceptions. Therefore, this approach works against the objectives of <em>Optional</em> and will probably be deprecated in a future release.
>
> So, it's advisable to use the other variants that enable us to prepare for and explicitly handle the <em>null</em> case.

> [!expand-ui]- Conditional Return With filter()
> We can run an inline test on our wrapped value with the <em>filter</em> method. It takes a predicate as an argument and returns an <em>Optional</em> object. If the wrapped value passes testing by the predicate, then the <em>Optional</em> is returned as-is.
>
> However, if the predicate returns <em>false</em>, then it will return an empty <em>Optional</em>:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> whenOptionalFilterWorks\_thenCorrect() {</code><br><code>    Integer year = 2016;</code><br><code>    Optional\<Integer\> yearOptional = Optional.of(year);</code><br><code>    <font style="color: rgb(38,116,56);">boolean</font> is2016 = yearOptional.filter(y -\> y == 2016).isPresent();</code><br><code>    assertTrue(is2016);</code><br><code>    <font style="color: rgb(38,116,56);">boolean</font> is2017 = yearOptional.filter(y -\> y == 2017).isPresent();</code><br><code>    assertFalse(is2017);</code><br><code>}</code></span>
>
> The <em>filter</em> method is normally used this way to reject wrapped values based on a predefined rule. We could use it to reject a wrong email format or a password that is not strong enough.
>
> Let's look at another meaningful example. Say we want to buy a modem, and we only care about its price.
>
> We receive push notifications on modem prices from a certain site and store these in objects:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">class</font> Modem {</code><br><code>    <font style="color: rgb(38,116,56);">private</font> Double price;</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">public</font> Modem(Double price) {</code><br><code>        <font style="color: rgb(38,116,56);">this</font>.price = price;</code><br><code>    }</code><br><code>    <font style="color: rgb(38,116,56);">// standard getters and setters</font></code><br><code>}</code></span>
>
> We then feed these objects to some code whose sole purpose is to check if the modem price is within our budget range.
>
> Let's now take a look at the code without <em>Optional</em>:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">boolean</font> priceIsInRange1(Modem modem) {</code><br><code>    <font style="color: rgb(38,116,56);">boolean</font> isInRange = <font style="color: rgb(38,116,56);">false</font>;</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">if</font> (modem != <font style="color: rgb(38,116,56);">null</font> && modem.getPrice() != <font style="color: rgb(38,116,56);">null</font> </code><br><code>      && (modem.getPrice() \>= 10 </code><br><code>        && modem.getPrice() \<= 15)) {</code><br><code></code><br><code>        isInRange = <font style="color: rgb(38,116,56);">true</font>;</code><br><code>    }</code><br><code>    <font style="color: rgb(38,116,56);">return</font> isInRange;</code><br><code>}</code></span>
>
> Pay attention to how much code we have to write to achieve this, especially in the <em>if</em> condition. The only part of the <em>if</em> condition that is critical to the application is the last price-range check; the rest of the checks are defensive:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> whenFiltersWithoutOptional\_thenCorrect() {</code><br><code>    assertTrue(priceIsInRange1(<font style="color: rgb(38,116,56);">new</font> Modem(10.0)));</code><br><code>    assertFalse(priceIsInRange1(<font style="color: rgb(38,116,56);">new</font> Modem(9.9)));</code><br><code>    assertFalse(priceIsInRange1(<font style="color: rgb(38,116,56);">new</font> Modem(<font style="color: rgb(38,116,56);">null</font>)));</code><br><code>    assertFalse(priceIsInRange1(<font style="color: rgb(38,116,56);">new</font> Modem(15.5)));</code><br><code>    assertFalse(priceIsInRange1(<font style="color: rgb(38,116,56);">null</font>));</code><br><code>}</code></span>
>
> Apart from that, it's possible to forget about the null checks over a long day without getting any compile-time errors.
>
> Now let's look at a variant with <em>Optional\#filter</em>:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">boolean</font> priceIsInRange2(Modem modem2) {</code><br><code>     <font style="color: rgb(38,116,56);">return</font> Optional.ofNullable(modem2)</code><br><code>       .map(Modem::getPrice)</code><br><code>       .filter(p -\> p \>= 10)</code><br><code>       .filter(p -\> p \<= 15)</code><br><code>       .isPresent();</code><br><code> }</code></span>
>
> The <em>map</em> call is simply used to transform a value to some other value. Keep in mind that this operation does not modify the original value.
>
> In our case, we are obtaining a price object from the <em>Model</em> class. We will look at the <em>map()</em> method in detail in the next section.
>
> First of all, if a <em>null</em> object is passed to this method, we don't expect any problem.
>
> Secondly, the only logic we write inside its body is exactly what the method name describes — price-range check. <em>Optional</em> takes care of the rest:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> whenFiltersWithOptional\_thenCorrect() {</code><br><code>    assertTrue(priceIsInRange2(<font style="color: rgb(38,116,56);">new</font> Modem(10.0)));</code><br><code>    assertFalse(priceIsInRange2(<font style="color: rgb(38,116,56);">new</font> Modem(9.9)));</code><br><code>    assertFalse(priceIsInRange2(<font style="color: rgb(38,116,56);">new</font> Modem(<font style="color: rgb(38,116,56);">null</font>)));</code><br><code>    assertFalse(priceIsInRange2(<font style="color: rgb(38,116,56);">new</font> Modem(15.5)));</code><br><code>    assertFalse(priceIsInRange2(<font style="color: rgb(38,116,56);">null</font>));</code><br><code>}</code></span>
>
> The previous approach promises to check price range but has to do more than that to defend against its inherent fragility. Therefore, we can use the <em>filter</em> method to replace unnecessary <em>if</em> statements and reject unwanted values.

> [!expand-ui]- Transforming Value With map()
> In the previous section, we looked at how to reject or accept a value based on a filter.
>
> We can use a similar syntax to transform the <em>Optional</em> value with the <em>map() </em>method:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenOptional\_whenMapWorks\_thenCorrect() {</code><br><code>    List\<String\> companyNames = Arrays.asList(</code><br><code>      <font style="color: rgb(38,116,56);">"paypal"</font>, <font style="color: rgb(38,116,56);">"oracle"</font>, <font style="color: rgb(38,116,56);">""</font>, <font style="color: rgb(38,116,56);">"microsoft"</font>, <font style="color: rgb(38,116,56);">""</font>, <font style="color: rgb(38,116,56);">"apple"</font>);</code><br><code>    Optional\<List\<String\>\> listOptional = Optional.of(companyNames);</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">int</font> size = listOptional</code><br><code>      .map(List::size)</code><br><code>      .orElse(0);</code><br><code>    assertEquals(6, size);</code><br><code>}</code></span>
>
> In this example, we wrap a list of strings inside an <em>Optional</em> object and use its <em>map</em> method to perform an action on the contained list. The action we perform is to retrieve the size of the list.
>
> The <em>map</em> method returns the result of the computation wrapped inside <em>Optional</em>. We then have to call an appropriate method on the returned <em>Optional</em> to retrieve its value.
>
> Notice that the <em>filter</em> method simply performs a check on the value and returns a <em>boolean</em>. The <em>map</em> method however takes the existing value, performs a computation using this value, and returns the result of the computation wrapped in an <em>Optional</em> object:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenOptional\_whenMapWorks\_thenCorrect2() {</code><br><code>    String name = <font style="color: rgb(38,116,56);">"baeldung"</font>;</code><br><code>    Optional\<String\> nameOptional = Optional.of(name);</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">int</font> len = nameOptional</code><br><code>     .map(String::length)</code><br><code>     .orElse(0);</code><br><code>    assertEquals(8, len);</code><br><code>}</code></span>
>
> We can chain <em>map</em> and <em>filter</em> together to do something more powerful.
>
> Let's assume we want to check the correctness of a password input by a user. We can clean the password using a <em>map</em> transformation and check its correctness using a <em>filter</em>:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenOptional\_whenMapWorksWithFilter\_thenCorrect() {</code><br><code>    String password = <font style="color: rgb(38,116,56);">" password "</font>;</code><br><code>    Optional\<String\> passOpt = Optional.of(password);</code><br><code>    <font style="color: rgb(38,116,56);">boolean</font> correctPassword = passOpt.filter(</code><br><code>      pass -\> pass.equals(<font style="color: rgb(38,116,56);">"password"</font>)).isPresent();</code><br><code>    assertFalse(correctPassword);</code><br><code></code><br><code>    correctPassword = passOpt</code><br><code>      .map(String::trim)</code><br><code>      .filter(pass -\> pass.equals(<font style="color: rgb(38,116,56);">"password"</font>))</code><br><code>      .isPresent();</code><br><code>    assertTrue(correctPassword);</code><br><code>}</code></span>
>
> As we can see, without first cleaning the input, it will be filtered out — yet users may take for granted that leading and trailing spaces all constitute input. So, we transform a dirty password into a clean one with a <em>map</em> before filtering out incorrect ones.

> [!expand-ui]- Transforming Value With flatMap()
> Just like the <em>map()</em> method, we also have the <em>flatMap()</em> method as an alternative for transforming values. The difference is that <em>map</em> transforms values only when they are unwrapped whereas <em>flatMap</em> takes a wrapped value and unwraps it before transforming it.
>
> Previously, we created simple <em>String</em> and <em>Integer</em> objects for wrapping in an <em>Optional</em> instance. However, frequently, we will receive these objects from an accessor of a complex object.
>
> To get a clearer picture of the difference, let's have a look at a <em>Person</em> object that takes a person's details such as name, age and password:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">class</font> Person {</code><br><code>    <font style="color: rgb(38,116,56);">private</font> String name;</code><br><code>    <font style="color: rgb(38,116,56);">private</font> <font style="color: rgb(38,116,56);">int</font> age;</code><br><code>    <font style="color: rgb(38,116,56);">private</font> String password;</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">public</font> Optional\<String\> getName() {</code><br><code>        <font style="color: rgb(38,116,56);">return</font> Optional.ofNullable(name);</code><br><code>    }</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">public</font> Optional\<Integer\> getAge() {</code><br><code>        <font style="color: rgb(38,116,56);">return</font> Optional.ofNullable(age);</code><br><code>    }</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">public</font> Optional\<String\> getPassword() {</code><br><code>        <font style="color: rgb(38,116,56);">return</font> Optional.ofNullable(password);</code><br><code>    }</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">// normal constructors and setters</font></code><br><code>}</code></span>
>
> We would normally create such an object and wrap it in an <em>Optional</em> object just like we did with String.
>
> Alternatively, it can be returned to us by another method call:
> <span style="white-space: pre-wrap"><code>Person person = <font style="color: rgb(38,116,56);">new</font> Person(<font style="color: rgb(38,116,56);">"john"</font>, 26);</code><br><code>Optional\<Person\> personOptional = Optional.of(person);</code></span>
>
> Notice now that when we wrap a <em>Person</em> object, it will contain nested <em>Optional</em> instances:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenOptional\_whenFlatMapWorks\_thenCorrect2() {</code><br><code>    Person person = <font style="color: rgb(38,116,56);">new</font> Person(<font style="color: rgb(38,116,56);">"john"</font>, 26);</code><br><code>    Optional\<Person\> personOptional = Optional.of(person);</code><br><code></code><br><code>    Optional\<Optional\<String\>\> nameOptionalWrapper  </code><br><code>      = personOptional.map(Person::getName);</code><br><code>    Optional\<String\> nameOptional  </code><br><code>      = nameOptionalWrapper.orElseThrow(IllegalArgumentException::<font style="color: rgb(38,116,56);">new</font>);</code><br><code>    String name1 = nameOptional.orElse(<font style="color: rgb(38,116,56);">""</font>);</code><br><code>    assertEquals(<font style="color: rgb(38,116,56);">"john"</font>, name1);</code><br><code></code><br><code>    String name = personOptional</code><br><code>      .flatMap(Person::getName)</code><br><code>      .orElse(<font style="color: rgb(38,116,56);">""</font>);</code><br><code>    assertEquals(<font style="color: rgb(38,116,56);">"john"</font>, name);</code><br><code>}</code></span>
>
> Here, we're trying to retrieve the name attribute of the <em>Person</em> object to perform an assertion.
>
> Note how we achieve this with <em>map()</em> method in the third statement, and then notice how we do the same with <em>flatMap()</em> method afterwards.
>
> The <em>Person::getName</em> method reference is similar to the <em>String::trim</em> call we had in the previous section for cleaning up a password.
>
> The only difference is that <em>getName()</em> returns an <em>Optional</em> rather than a String as did the <em>trim()</em> operation. This, coupled with the fact that a <em>map</em> transformation wraps the result in an <em>Optional</em> object, leads to a nested <em>Optional</em>.
>
> While using <em>map()</em> method, therefore, we need to add an extra call to retrieve the value before using the transformed value. This way, the <em>Optional</em> wrapper will be removed. This operation is performed implicitly when using <em>flatMap</em>.

> [!expand-ui]- Chaining Optionals
> Sometimes, we may need to get the first non-empty <em>Optional</em> object from a number of <em>Optional</em>s. In such cases, it would be very convenient to use a method like <em>orElseOptional()</em>. Unfortunately, such operation is not directly supported in Java 8.
>
> Let's first introduce a few methods that we'll be using throughout this section:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">private</font> Optional\<String\> getEmpty() {</code><br><code>    <font style="color: rgb(38,116,56);">return</font> Optional.empty();</code><br><code>}</code><br><code></code><br><code><font style="color: rgb(38,116,56);">private</font> Optional\<String\> getHello() {</code><br><code>    <font style="color: rgb(38,116,56);">return</font> Optional.of(<font style="color: rgb(38,116,56);">"hello"</font>);</code><br><code>}</code><br><code></code><br><code><font style="color: rgb(38,116,56);">private</font> Optional\<String\> getBye() {</code><br><code>    <font style="color: rgb(38,116,56);">return</font> Optional.of(<font style="color: rgb(38,116,56);">"bye"</font>);</code><br><code>}</code><br><code></code><br><code><font style="color: rgb(38,116,56);">private</font> Optional\<String\> createOptional(String input) {</code><br><code>    <font style="color: rgb(38,116,56);">if</font> (input == <font style="color: rgb(38,116,56);">null</font> || <font style="color: rgb(38,116,56);">""</font>.equals(input) || <font style="color: rgb(38,116,56);">"empty"</font>.equals(input)) {</code><br><code>        <font style="color: rgb(38,116,56);">return</font> Optional.empty();</code><br><code>    }</code><br><code>    <font style="color: rgb(38,116,56);">return</font> Optional.of(input);</code><br><code>}</code></span>
>
> In order to chain several <em>Optional</em> objects and get the first non-empty one in Java 8, we can use the <em>Stream</em> API:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenThreeOptionals\_whenChaining\_thenFirstNonEmptyIsReturned() {</code><br><code>    Optional\<String\> found = Stream.of(getEmpty(), getHello(), getBye())</code><br><code>      .filter(Optional::isPresent)</code><br><code>      .map(Optional::get)</code><br><code>      .findFirst();</code><br><code>    </code><br><code>    assertEquals(getHello(), found);</code><br><code>}</code></span>
>
> The downside of this approach is that all of our <em>get </em>methods are always executed, regardless of where a non-empty <em>Optional</em> appears in the <em>Stream</em>.
>
> If we want to lazily evaluate the methods passed to <em>Stream.of()</em>, we need to use the method reference and the <em>Supplier</em> interface:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenThreeOptionals\_whenChaining\_thenFirstNonEmptyIsReturnedAndRestNotEvaluated() {</code><br><code>    Optional\<String\> found =</code><br><code>      Stream.\<Supplier\<Optional\<String\>\>\>of(<font style="color: rgb(38,116,56);">this</font>::getEmpty, <font style="color: rgb(38,116,56);">this</font>::getHello, <font style="color: rgb(38,116,56);">this</font>::getBye)</code><br><code>        .map(Supplier::get)</code><br><code>        .filter(Optional::isPresent)</code><br><code>        .map(Optional::get)</code><br><code>        .findFirst();</code><br><code></code><br><code>    assertEquals(getHello(), found);</code><br><code>}</code></span>
>
> In case we need to use methods that take arguments, we have to resort to lambda expressions:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenTwoOptionalsReturnedByOneArgMethod\_whenChaining\_thenFirstNonEmptyIsReturned() {</code><br><code>    Optional\<String\> found = Stream.\<Supplier\<Optional\<String\>\>\>of(</code><br><code>      () -\> createOptional(<font style="color: rgb(38,116,56);">"empty"</font>),</code><br><code>      () -\> createOptional(<font style="color: rgb(38,116,56);">"hello"</font>)</code><br><code>    )</code><br><code>      .map(Supplier::get)</code><br><code>      .filter(Optional::isPresent)</code><br><code>      .map(Optional::get)</code><br><code>      .findFirst();</code><br><code></code><br><code>    assertEquals(createOptional(<font style="color: rgb(38,116,56);">"hello"</font>), found);</code><br><code>}</code></span>
>
> Often, we'll want to return a default value in case all of the chained <em>Optional</em>s are empty. We can do so just by adding a call to <em>orElse()</em> or <em>orElseGet()</em>:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenTwoEmptyOptionals\_whenChaining\_thenDefaultIsReturned() {</code><br><code>    String found = Stream.\<Supplier\<Optional\<String\>\>\>of(</code><br><code>      () -\> createOptional(<font style="color: rgb(38,116,56);">"empty"</font>),</code><br><code>      () -\> createOptional(<font style="color: rgb(38,116,56);">"empty"</font>)</code><br><code>    )</code><br><code>      .map(Supplier::get)</code><br><code>      .filter(Optional::isPresent)</code><br><code>      .map(Optional::get)</code><br><code>      .findFirst()</code><br><code>      .orElseGet(() -\> <font style="color: rgb(38,116,56);">"default"</font>);</code><br><code></code><br><code>    assertEquals(<font style="color: rgb(38,116,56);">"default"</font>, found);</code><br><code>}</code></span>

> [!expand-ui]- or() Method
> Sometimes, when our <em>Optional</em> is empty, we want to execute some other action that also returns an O<em>ptional.</em>
>
> Prior Java 9 the <em>Optional </em>class had only the <em>orElse() </em>and <em>orElseGet() </em>methods but both need to return unwrapped values.
>
> Java 9 introduces the <em>or() </em>method that returns another <em>Optional</em> lazily if our <em>Optional</em> is empty. If our first <em>Optional </em>has a defined value, the lambda passed to the <em>or() </em>method will not be invoked, and value will not be calculated and returned:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenOptional\_whenPresent\_thenShouldTakeAValueFromIt() {</code><br><code>    <font style="color: rgb(38,116,56);">//given</font></code><br><code>    String expected = <font style="color: rgb(38,116,56);">"properValue"</font>;</code><br><code>    Optional\<String\> value = Optional.of(expected);</code><br><code>    Optional\<String\> defaultValue = Optional.of(<font style="color: rgb(38,116,56);">"default"</font>);</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">//when</font></code><br><code>    Optional\<String\> result = value.or(() -\> defaultValue);</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">//then</font></code><br><code>    assertThat(result.get()).isEqualTo(expected);</code><br><code>}</code></span>
>
> In the case of<em> Optional</em> bei<em>ng</em> empty, the returned <em>result </em>will be the same as the <em>defaultValue:</em>
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenOptional\_whenEmpty\_thenShouldTakeAValueFromOr() {</code><br><code>    <font style="color: rgb(38,116,56);">// given</font></code><br><code>    String defaultString = <font style="color: rgb(38,116,56);">"default"</font>;</code><br><code>    Optional\<String\> value = Optional.empty();</code><br><code>    Optional\<String\> defaultValue = Optional.of(defaultString);</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">// when</font></code><br><code>    Optional\<String\> result = value.or(() -\> defaultValue);</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">// then</font></code><br><code>    assertThat(result.get()).isEqualTo(defaultString);</code><br><code>}</code></span>

> [!expand-ui]- ifPresentOrElse() Method
> When we have an <em>Optional</em> instance, often we want to execute a specific action on the underlying value of it. On the other hand, if the <em>Optional </em>is <em>empty</em> we want to log it or track that fact by incrementing some metric.
>
> The <em>ifPresentOrElse() </em>method is created exactly for such scenarios. We can pass a <em>Consumer </em>that will be invoked if the <em>Optional</em> is defined, and <em>Runnable </em>that will be executed if the <em>Optional</em> is empty.
>
> Let's say that we have a defined <em>Optional </em>and we want to increment a specific counter if the value is present:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenOptional\_whenPresent\_thenShouldExecuteProperCallback() {</code><br><code>    <font style="color: rgb(38,116,56);">// given</font></code><br><code>    Optional\<String\> value = Optional.of(<font style="color: rgb(38,116,56);">"properValue"</font>);</code><br><code>    AtomicInteger successCounter = <font style="color: rgb(38,116,56);">new</font> AtomicInteger(0);</code><br><code>    AtomicInteger onEmptyOptionalCounter = <font style="color: rgb(38,116,56);">new</font> AtomicInteger(0);</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">// when</font></code><br><code>    value.ifPresentOrElse(</code><br><code>      v -\> successCounter.incrementAndGet(), </code><br><code>      onEmptyOptionalCounter::incrementAndGet);</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">// then</font></code><br><code>    assertThat(successCounter.get()).isEqualTo(1);</code><br><code>    assertThat(onEmptyOptionalCounter.get()).isEqualTo(0);</code><br><code>}</code></span>
>
> Note, that the callback passed as the second argument was not executed.
>
> In the case of an empty <em>Optional,</em> the second callback gets executed:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenOptional\_whenNotPresent\_thenShouldExecuteProperCallback() {</code><br><code>    <font style="color: rgb(38,116,56);">// given</font></code><br><code>    Optional\<String\> value = Optional.empty();</code><br><code>    AtomicInteger successCounter = <font style="color: rgb(38,116,56);">new</font> AtomicInteger(0);</code><br><code>    AtomicInteger onEmptyOptionalCounter = <font style="color: rgb(38,116,56);">new</font> AtomicInteger(0);</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">// when</font></code><br><code>    value.ifPresentOrElse(</code><br><code>      v -\> successCounter.incrementAndGet(), </code><br><code>      onEmptyOptionalCounter::incrementAndGet);</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">// then</font></code><br><code>    assertThat(successCounter.get()).isEqualTo(0);</code><br><code>    assertThat(onEmptyOptionalCounter.get()).isEqualTo(1);</code><br><code>}</code></span>

> [!expand-ui]- stream() Method
> The last method, which is added to the <em>Optional</em> class in the Java 9, is the <em>stream() </em>method.
>
> Java has a very fluent and elegant <em>Stream</em> API that can operate on the collections and utilizes many functional programming concepts. The newest Java version introduces the <em>stream() </em>method on the <em>Optional </em>class that allows us to treat the <em>Optional</em> instance as a <em>Stream.</em>
>
> Let's say that we have a defined <em>Optional </em>and we are calling the <em>stream() </em>method on it. This will create a <em>Stream </em>of one element on which we can use all the methods that are available in the <em>Stream </em>API<em>:</em>
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenOptionalOfSome\_whenToStream\_thenShouldTreatItAsOneElementStream() {</code><br><code>    <font style="color: rgb(38,116,56);">// given</font></code><br><code>    Optional\<String\> value = Optional.of(<font style="color: rgb(38,116,56);">"a"</font>);</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">// when</font></code><br><code>    List\<String\> collect = value.stream().map(String::toUpperCase).collect(Collectors.toList());</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">// then</font></code><br><code>    assertThat(collect).hasSameElementsAs(List.of(<font style="color: rgb(38,116,56);">"A"</font>));</code><br><code>}</code></span>
>
> On the other hand, if <em>Optional</em> is not present, calling the <em>stream() </em>method on it will create an empty <em>Stream:</em>
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">@Test</font><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">void</font> givenOptionalOfNone\_whenToStream\_thenShouldTreatItAsZeroElementStream() {</code><br><code>    <font style="color: rgb(38,116,56);">// given</font></code><br><code>    Optional\<String\> value = Optional.empty();</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">// when</font></code><br><code>    List\<String\> collect = value.stream()</code><br><code>      .map(String::toUpperCase)</code><br><code>      .collect(Collectors.toList());</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">// then</font></code><br><code>    assertThat(collect).isEmpty();</code><br><code>}</code></span>
>
> We can now quickly filter [<em>Streams</em> of <em>Optionals.</em>](https://www.baeldung.com/java-filter-stream-of-optional)
>
> Operating on the empty <em>Stream</em> will not have any effect, but thanks to the <em>stream()</em> method we can now chain the <em>Optional</em> API with the <em>Stream </em>API. This allows us to create more elegant and fluent code.

> [!expand-ui]- Misuse of Optionals
> Finally, let's see a tempting, however dangerous, way to use <em>Optional</em>s: passing an <em>Optional</em> parameter to a method.
>
> Imagine we have a list of <em>Person</em> and we want a method to search through that list for people with a given name. Also, we would like that method to match entries with at least a certain age, if it's specified.
>
> With this parameter being optional, we come with this method:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">static</font> List\<Person\> search(List\<Person\> people, String name, Optional\<Integer\> age) {</code><br><code>    <font style="color: rgb(38,116,56);">// Null checks for people and name</font><font style="color: rgb(38,116,56);">return</font> people.stream()</code><br><code>            .filter(p -\> p.getName().equals(name))</code><br><code>            .filter(p -\> p.getAge().get() \>= age.orElse(0))</code><br><code>            .collect(Collectors.toList());</code><br><code>}</code></span>
>
> Then we release our method, and another developer tries to use it:
> <span style="white-space: pre-wrap"><code>someObject.search(people, <font style="color: rgb(38,116,56);">"Peter"</font>, <font style="color: rgb(38,116,56);">null</font>);</code></span>
>
> Now the developer executes its code and gets a <em>NullPointerException.</em> There we are, having to null check our optional parameter, which defeats our initial purpose in wanting to avoid this kind of situation.
>
> Here are some possibilities we could have done to handle it better:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">static</font> List\<Person\> search(List\<Person\> people, String name, Integer age) {</code><br><code>    <font style="color: rgb(38,116,56);">// Null checks for people and name</font><font style="color: rgb(38,116,56);">final</font> Integer ageFilter = age != <font style="color: rgb(38,116,56);">null</font> ? age : 0;</code><br><code></code><br><code>    <font style="color: rgb(38,116,56);">return</font> people.stream()</code><br><code>            .filter(p -\> p.getName().equals(name))</code><br><code>            .filter(p -\> p.getAge().get() \>= ageFilter)</code><br><code>            .collect(Collectors.toList());</code><br><code>}</code></span>
>
> There, the parameter's still optional, but we handle it in only one check.
>
> Another possibility would have been to create two overloaded methods:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">static</font> List\<Person\> search(List\<Person\> people, String name) {</code><br><code>    <font style="color: rgb(38,116,56);">return</font> doSearch(people, name, 0);</code><br><code>}</code><br><code></code><br><code><font style="color: rgb(38,116,56);">public</font> <font style="color: rgb(38,116,56);">static</font> List\<Person\> search(List\<Person\> people, String name, <font style="color: rgb(38,116,56);">int</font> age) {</code><br><code>    <font style="color: rgb(38,116,56);">return</font> doSearch(people, name, age);</code><br><code>}</code><br><code></code><br><code><font style="color: rgb(38,116,56);">private</font> <font style="color: rgb(38,116,56);">static</font> List\<Person\> doSearch(List\<Person\> people, String name, <font style="color: rgb(38,116,56);">int</font> age) {</code><br><code>    <font style="color: rgb(38,116,56);">// Null checks for people and name</font><font style="color: rgb(38,116,56);">return</font> people.stream()</code><br><code>            .filter(p -\> p.getName().equals(name))</code><br><code>            .filter(p -\> p.getAge().get().intValue() \>= age)</code><br><code>            .collect(Collectors.toList());</code><br><code>}</code></span>
>
> That way we offer a clear API with two methods doing different things (though they share the implementation).
>
> So, there are solutions to avoid using <em>Optional</em>s as method parameters. The intent of Java when releasing <em>Optional</em> was to use it as a return type, thus indicating that a method could return an empty value. As a matter of fact, the practice of using <em>Optional</em> as a method parameter is even [discouraged by some code inspectors](https://rules.sonarsource.com/java/RSPEC-3553).

> [!expand-ui]- Optional and Serialization
> As discussed above, <em>Optional</em> is meant to be used as a return type. Trying to use it as a field type is not recommended.
>
> Additionally, using <em>Optional</em> in a serializable class will result in a <em>NotSerializableException</em>. Our article [Java <em>Optional</em> as Return Type](https://www.baeldung.com/java-optional-return) further addresses the issues with serialization.
>
> And, in [Using <em>Optional</em> With Jackson](https://www.baeldung.com/jackson-optional), we explain what happens when <em>Optional</em> fields are serialized, along with a few workarounds to achieve the desired results.

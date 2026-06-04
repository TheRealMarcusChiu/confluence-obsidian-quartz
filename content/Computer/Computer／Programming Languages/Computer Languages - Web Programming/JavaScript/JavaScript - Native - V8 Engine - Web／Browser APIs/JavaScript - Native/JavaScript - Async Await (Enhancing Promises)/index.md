---
title: "JavaScript - Async Await (Enhancing Promises)"
created: 2019-12-18T16:58:47.794-06:00
modified: 2022-02-14T20:19:21.709-06:00
parent: "[[JavaScript - Native]]"
children: []
---
read: [[JavaScript - Promise]]
# Simple Async Function

> [!expand]- Click here to expand...
> > <span style="white-space: pre-wrap"><code>async <font style="color: rgb(59,120,231);">function</font> myFirstAsyncFunction() {</code><br><code>  <font style="color: rgb(59,120,231);">try</font> {</code><br><code>    <font style="color: rgb(59,120,231);">const</font> fulfilledValue = await promise;</code><br><code>  } <font style="color: rgb(59,120,231);">catch</font> (rejectedValue) {</code><br><code>    <font style="color: rgb(216,27,96);">// …</font></code><br><code>  }</code><br><code>}</code></span>
>
> If you use the <strong><code>async</code></strong> keyword before a function definition, you can then use <strong><code>await</code></strong> within the function. When you <strong><code>await</code></strong> a promise, the function is paused in a non-blocking way until the promise settles. If the promise fulfills, you get the value back. If the promise rejects, the rejected value is thrown.
# Promises vs Async/Await

> [!expand]- fetch URL and console.log response
> ###### Implementation With [[JavaScript - Promise|Promises]]
> > <span style="white-space: pre-wrap"><code><font style="color: rgb(59,120,231);">function</font> logFetch(url) {</code><br><code>  <font style="color: rgb(59,120,231);">return</font> fetch(url)</code><br><code>    .<font style="color: rgb(59,120,231);">then</font>(response =\> response.text())</code><br><code>    .<font style="color: rgb(59,120,231);">then</font>(text =\> {</code><br><code>      console.log(text);</code><br><code>    }).<font style="color: rgb(59,120,231);">catch</font>(err =\> {</code><br><code>      console.error(<font style="color: rgb(13,144,79);">'fetch failed'</font>, err);</code><br><code>    });</code><br><code>}</code></span>
> ###### Implementation With Async/Await (easier to read)
> > <span style="white-space: pre-wrap"><code>async <font style="color: rgb(59,120,231);">function</font> logFetch(url) {</code><br><code>  <font style="color: rgb(59,120,231);">try</font> {</code><br><code>    <font style="color: rgb(59,120,231);">const</font> response = await fetch(url);</code><br><code>    console.log(await response.text());</code><br><code>  }</code><br><code>  <font style="color: rgb(59,120,231);">catch</font> (err) {</code><br><code>    console.log(<font style="color: rgb(13,144,79);">'fetch failed'</font>, err);</code><br><code>  }</code><br><code>}</code></span>

> [!expand]- fetch multiple URLs and console.log responses in order
> say we wanted to fetch a series URLs and log them as soon as possible, in the correct order.
> ###### Implementation With [[JavaScript - Promise|Promises]]
> > <span style="white-space: pre-wrap"><code><font style="color: rgb(59,120,231);">function</font> logInOrder(urls) {</code><br><code>  <font style="color: rgb(216,27,96);">// fetch all the URLs</font></code><br><code>  <font style="color: rgb(59,120,231);">const</font> textPromises = urls.map(url =\> {</code><br><code>    <font style="color: rgb(59,120,231);">return</font> fetch(url).<font style="color: rgb(59,120,231);">then</font>(response =\> response.text());</code><br><code>  });</code><br><code></code><br><code>  <font style="color: rgb(216,27,96);">// log them in order</font></code><br><code>  textPromises.reduce((chain, textPromise) =\> {</code><br><code>    <font style="color: rgb(59,120,231);">return</font> chain.<font style="color: rgb(59,120,231);">then</font>(() =\> textPromise)</code><br><code>      .<font style="color: rgb(59,120,231);">then</font>(text =\> console.log(text));</code><br><code>  }, <font style="color: rgb(156,39,176);">Promise</font>.resolve());</code><br><code>}</code></span>
> ###### Implementation With Async/Await
> > <span style="white-space: pre-wrap"><code>async <font style="color: rgb(59,120,231);">function</font> logInOrder(urls) {</code><br><code>  <font style="color: rgb(216,27,96);">// fetch all the URLs in parallel</font></code><br><code>  <font style="color: rgb(59,120,231);">const</font> textPromises = urls.map(async url =\> {</code><br><code>    <font style="color: rgb(59,120,231);">const</font> response = await fetch(url);</code><br><code>    <font style="color: rgb(59,120,231);">return</font> response.text();</code><br><code>  });</code><br><code></code><br><code>  <font style="color: rgb(216,27,96);">// log them in sequence</font></code><br><code>  <font style="color: rgb(59,120,231);">for</font> (<font style="color: rgb(59,120,231);">const</font> textPromise of textPromises) {</code><br><code>    console.log(await textPromise);</code><br><code>  }</code><br><code>}</code></span>
# Async Return Values
async functions always returns a [[JavaScript - Promise|promise]], whether you use <code>await</code> or not

> [!expand]- Click here to expand...
> > <span style="white-space: pre-wrap"><code>async <font style="color: rgb(59,120,231);">function</font> hello() {</code><br><code>  await new <font style="color: rgb(156,39,176);">Promise</font>(r =\> setTimeout(r, 2000));</code><br><code> return <font style="color: rgb(13,144,79);">'world'</font>;</code><br><code>}</code></span>
>
> calling <code>hello()</code> returns a promise that <em>fulfills</em> with <code>"world"</code>.
> > <span style="white-space: pre-wrap"><code>async <font style="color: rgb(59,120,231);">function</font> hello() {</code><br><code>  await new <font style="color: rgb(156,39,176);">Promise</font>(r =\> setTimeout(r, 2000));</code><br><code> throw <font style="color: rgb(156,39,176);">Error</font>(<font style="color: rgb(13,144,79);">'bar'</font>);</code><br><code>}</code></span>
>
> calling <code>hello()</code> returns a promise that <em>rejects</em> with <code>Error('bar')</code>
# Careful! Avoid going too sequential

> [!expand]- Click here to expand...
> Although you're writing code that looks synchronous, ensure you don't miss the opportunity to do things in parallel.
> > <span style="white-space: pre-wrap"><code>async <font style="color: rgb(59,120,231);">function</font> series() {</code><br><code>  await wait(<font style="color: rgb(197,57,41);">500</font>); <font style="color: rgb(216,27,96);">// Wait 500ms…</font></code><br><code>  await wait(<font style="color: rgb(197,57,41);">500</font>); <font style="color: rgb(216,27,96);">// …then wait another 500ms.</font></code><br><code>  <font style="color: rgb(59,120,231);">return</font> <font style="color: rgb(13,144,79);">"done!"</font>;</code><br><code>}</code></span>
>
> The above takes 1000ms to complete, whereas:
> > <span style="white-space: pre-wrap"><code>async <font style="color: rgb(59,120,231);">function</font> parallel() {</code><br><code>  <font style="color: rgb(59,120,231);">const</font> wait1 = wait(<font style="color: rgb(197,57,41);">500</font>); <font style="color: rgb(216,27,96);">// Start a 500ms timer asynchronously…</font></code><br><code>  <font style="color: rgb(59,120,231);">const</font> wait2 = wait(<font style="color: rgb(197,57,41);">500</font>); <font style="color: rgb(216,27,96);">// …meaning this timer happens in parallel.</font></code><br><code>  await wait1; <font style="color: rgb(216,27,96);">// Wait 500ms for the first timer…</font></code><br><code>  await wait2; <font style="color: rgb(216,27,96);">// …by which time this timer has already finished.</font></code><br><code>  <font style="color: rgb(59,120,231);">return</font> <font style="color: rgb(13,144,79);">"done!"</font>;</code><br><code>}</code></span>

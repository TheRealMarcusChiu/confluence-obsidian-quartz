---
title: "Android App - Looper & Handler (Pipeline Thread)"
created: 2020-07-06T13:16:55.642-05:00
modified: 2020-07-06T13:41:19.879-05:00
parent: "[[Android Development Studio Applications]]"
children: []
---
###### Looper & Handler (Pipeline Thread)
- executes tasks on a single Thread in a sequential manner
- a wrapper for these 2 classes see: [[Android App - HandlerThread|HandlerThread]]

Loopers & Handlers basically implement a common concurrency pattern called Pipeline Thread. Here’s how it works:
- the Pipeline Thread holds a queue of tasks which are just some units of work that can be executed or processed.
- other threads can safely push new tasks into the Pipeline Thread’s queue at any time.
- the Pipeline Thread processes the queued tasks one after another. If there are no tasks queued, it blocks until a task appears in the queue.
- sometimes tasks can called messages and other names

their responsibility:
- [Looper](http://developer.android.com/reference/android/os/Looper.html)<font style="color: rgb(180,174,164);"> <font style="color: rgb(51,51,51);">is a class that turns a thread into a Pipeline Thread</font></font>
- [Handler](http://developer.android.com/reference/android/os/Handler.html)<font style="color: rgb(180,174,164);"> <font style="color: rgb(51,51,51);">gives you a mechanism to push tasks into Pipeline Thread from any other threads</font></font>

### <font style="color: rgb(180,174,164);"><font style="color: rgb(51,51,51);">Example</font></font>
Here’s what you should put into a Thread's run() method to turn it into a Pipeline Thread and to create a Handler so that other threads can assign tasks to it
```java
@Override
public void run() {
	try {
		// preparing a looper on current thread			
		// the current thread is being detected implicitly
		Looper.prepare();

		// now, the handler will automatically bind to the
		// Looper that is attached to the current thread
		// You don't need to specify the Looper explicitly
		handler = new Handler();
			
		// After the following line the thread will start
		// running the message loop and will not normally
		// exit the loop unless a problem happens or you
		// quit() the looper (see below)
		Looper.loop();
	} catch (Throwable t) {
		Log.e(TAG, "halted due to an error", t);
	} 
}
```

<font style="color: rgb(180,174,164);"><font style="color: rgb(51,51,51);">After that, you can just pass the handler to any other thread. It has a thread-safe interface that includes many operations, but the most straightforward ones are postMessage() and its relatives</font></font>

For example, imagine another thread has a reference to the handler that was created in our Pipeline Thread. Here’s how that other thread can schedule an operation to be executed in the Pipeline Thread:
```java
handler.post(new Runnable() {
	@Override
	public void run() { 
		// this will be done in the Pipeline Thread 
	}
});
```
### Android UI Thread

By the way, the UI thread has a <strong>Looper</strong> created for it implicitly, so you can just create a Handler in activity’s <strong>onCreate()</strong> and it will work fine:
```
@Override
public void onCreate(Bundle savedInstanceState) {
	super.onCreate(savedInstanceState);
	setContentView(R.layout.main);

	// Create the Handler. It will implicitly bind to the Looper
	// that is internally created for this thread (since it is the UI thread)
	handler = new Handler();
}
```

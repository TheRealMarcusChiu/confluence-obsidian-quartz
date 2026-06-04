---
title: "Android App - HandlerThread"
created: 2020-07-06T13:32:44.858-05:00
modified: 2020-07-06T13:43:15.809-05:00
parent: "[[Android Development Studio Applications]]"
children: []
---
###### <strong>HandlerThread</strong>
- is wrapper for [[Android App - Looper & Handler (Pipeline Thread)|Looper & Handler]] (so read that first in order to understand HandlerThread)
- executes tasks on a single Thread in a sequential manner

### Example Implementation 1
```
HandlerThread handlerThread = new HandlerThread("MyHandlerThread");
handlerThread.start();
Looper looper = handlerThread.getLooper();
Handler handler = new Handler(looper);
```

now to use handler object:
```
handler.post(new Runnable(){...});
```

<font style="color: rgb(255,0,0);">IMPORTANT: Remember to call handlerThread.quit() when you are done with the background thread or on your activities onDestroy() method.</font>
### Example Implementation 2

If you have a few different tasks you would like to perform on the background thread, it may be a better idea to extend handler
```
HandlerThread handlerThread = new HandlerThread("MyHandlerThread");
handlerThread.start();
Looper looper = handlerThread.getLooper();
Handler handler = new Handler(looper) {
        @Override
        public void handleMessage(Message msg) {
            switch (msg.what) {
                case SOMETHING_ACTION: {
                    doSomething();
                    break;
                }
                case SOMETHING_ELSE_ACTION:
                    doMoreThings();
                    break;
                default:
                    break;
            }
        }
    };
```

usage
```
handler.obtainMessage(SOMETHING_ACTION, ""); 
handler.sendMessage(msg);
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
    Handler handler = new Handler(context.getMainLooper());
    or
    Handler handler = new Handler(); 
}
```

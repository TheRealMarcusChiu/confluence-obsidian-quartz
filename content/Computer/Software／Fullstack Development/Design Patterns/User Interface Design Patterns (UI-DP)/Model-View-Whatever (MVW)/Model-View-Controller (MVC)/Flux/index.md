---
title: "Flux"
created: 2020-01-27T21:51:31.091-06:00
modified: 2020-01-27T21:51:40.110-06:00
parent: "[[Model-View-Controller (MVC)]]"
children: []
---
### Flux Infrastructure
1. ACTION - a simple class that defines the events that components may trigger
2. DISPATCHER - a class that dispatches the events from the ACTION to the different STOREs
3. STORE - a store catches the events, processes them and then fires a completion event that components may subscribe to

![[Flux/flux-diagram.png]]
### Flux Flow Example
- when a button is clicked, it will call an action, which will trigger "INCREASE" event
- a STORE will respond to the event, calling to the server and actually modify the product's quantity
- then the STORE will fire a "QUANTITY\_WAS\_CHANGED" event to notify whoever listens
- then each component that subscribed to the event will be notified and act accordingly

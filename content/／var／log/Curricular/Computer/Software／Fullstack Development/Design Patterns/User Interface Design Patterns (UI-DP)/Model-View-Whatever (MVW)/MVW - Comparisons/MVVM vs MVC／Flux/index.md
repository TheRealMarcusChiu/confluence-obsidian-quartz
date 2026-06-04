---
title: "MVVM vs MVC／Flux"
created: 2019-12-23T14:28:29.898-06:00
modified: 2025-10-20T22:48:18.575-05:00
parent: "[[MVW - Comparisons]]"
children: []
---
- MVVM - [[Model-View-ViewModel (MVVM) - Model-View-Binder (MVB)]]
- MVC/Flux - [[Model-View-Controller (MVC)]]

# MVVM Pros
- simple DOM Manipulation
- data-binding: one-way or two-way
- allows SPA (single page application)
- fetch only a single page, and easily navigate through different sections/pages in the website while avoiding a trip to the server for rendering the next page

# MVVM Cons
- works best only for the apps where most of the page content is rendered once and is static and the user's changes don't affect different parts of the page
- doesn't provide an out of the box solution for cross component communication, we need to create extensions/workarounds (e.g. store everything in common ancestor component or use shared services)

# Flux Infrastructure
1. ACTION - a simple class that defines the events that components may trigger
2. DISPATCHER - a class that dispatches the events from the ACTION to the different STOREs
3. STORE - a store catches the events, processes them and then fires a completion event that components may subscribe to

# Flux Flow Example
- when a button is clicked, it will call an action, which will trigger "INCREASE" event
- a STORE will respond to the event, calling to the server and actually modify the product's quantity
- then the STORE will fire a "QUANTITY\_WAS\_CHANGED" event to notify whoever listens
- then each component that subscribed to the event will be notified and act accordingly

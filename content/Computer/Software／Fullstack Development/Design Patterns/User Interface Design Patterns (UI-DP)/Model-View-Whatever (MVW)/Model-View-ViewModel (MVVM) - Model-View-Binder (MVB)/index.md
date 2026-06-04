---
title: "Model-View-ViewModel (MVVM) - Model-View-Binder (MVB)"
created: 2019-12-23T00:11:42.348-06:00
modified: 2025-10-20T22:47:29.808-05:00
parent: "[[Model-View-Whatever (MVW)]]"
children: []
---
###### Model-View-ViewModel (MVVM) or Model-View-Binder (MVB)
````excerpt
- is a derivation of [[Model-View-Presenter (MVP)]]
````
^excerpt

# MVVM/MVB - Components

```merge-table
{
  "rows": [
    [
      {
        "content": "Group",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Models",
        "bg": "#F4F5F7"
      },
      "- hold application data\n- they’re usually structs or simple classes"
    ],
    [
      {
        "content": "Views",
        "bg": "#F4F5F7"
      },
      "- display visual elements and controls on the screen\n- they’re typically subclasses of UIView\n- It displays a representation of the model and receives the user's interaction with the view (clicks, keyboard, gestures, etc.), and it forwards the handling of these to the ViewModel via the data binding (properties, event callbacks, etc.) that is defined to link the view and ViewModel"
    ],
    [
      {
        "content": "ViewModels\n\nBinders",
        "bg": "#F4F5F7"
      },
      "- transform model information into values that can be displayed on a view\n- they’re usually classes, so they can be passed around as references\n- is a value converter, meaning the view model is responsible for exposing (converting) the data objects from the model in such a way that objects are easily managed and presented\n- is an abstraction of the view exposing public properties and commands. Instead of the controller of the MVC pattern, or the presenter of the MVP pattern, MVVM has a <em>binder</em>, which automates communication between the view and its bound properties in the view model. The view model has been described as a state of the data in the model. The main difference between the view model and the Presenter in the MVP pattern, is that the presenter has a reference to a view whereas the view model does not. Instead, a view directly binds to properties on the view model to send and receive updates. To function efficiently, this requires a binding technology or generating boilerplate code to do the binding"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

MVVM was designed to make use of [data binding](https://en.wikipedia.org/wiki/Data_binding)

![[Model-View-ViewModel (MVVM) - Model-View-Binder (MVB)/model-view-view-model-mvvm.png|500]]
# MVVM/MVB - When Should You Use It?

Use this pattern when you need to transform Models into another representation for a View. For example, you can use a ViewModel to transform a <code>Date</code> into a date-formatted <code>String</code>, a <code>Decimal</code> into a currency-formatted <code>String</code>, or many other useful transformations

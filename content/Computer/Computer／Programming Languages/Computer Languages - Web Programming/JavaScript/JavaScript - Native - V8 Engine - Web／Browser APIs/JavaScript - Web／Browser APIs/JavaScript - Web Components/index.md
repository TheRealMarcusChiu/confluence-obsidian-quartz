---
title: "JavaScript - Web Components"
created: 2019-12-20T15:10:25.140-06:00
modified: 2019-12-21T01:00:09.400-06:00
parent: "[[JavaScript - Web／Browser APIs]]"
children: []
---
<strong>Web Components</strong> is a suite of different technologies allowing you to create reusable custom elements

web components consists of 3 main technologies:
- <strong>custom elements</strong>: A set of JavaScript APIs that allow you to define custom elements and their behaviour, which can then be used as desired in your user interface.
- <strong>shadow DOM</strong>: A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element — which is rendered separately from the main document DOM — and controlling associated functionality. In this way, you can keep an element's features private, so they can be scripted and styled without the fear of collision with other parts of the document.
- <strong>HTML templates</strong>: The [<code>\<template\></code>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) and [<code>\<slot\></code>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) elements enable you to write markup templates that are not displayed in the rendered page. These can then be reused multiple times as the basis of a custom element's structure

the basic approach for implementing a web component generally looks something like this:
1. Create a class or a function in which you specify your web component functionality. If using a class, use the ECMAScript 2015 class syntax (see [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) for more information).
2. Register your new custom element using the [<code>CustomElementRegistry.define()</code>](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) method, passing it the element name to be defined, the class or function in which its functionality is specified, and optionally, what element it inherits from.
3. If required, attach a shadow DOM to the custom element using [<code>Element.attachShadow()</code>](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow) method. Add child elements, event listeners, etc., to the shadow DOM using regular DOM methods.
4. If required, define an HTML template using [<code>\<template\></code>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) and [<code>\<slot\></code>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot). Again use regular DOM methods to clone the template and attach it to your shadow DOM.
5. Use your custom element wherever you like on your page, just like you would any regular HTML element.

### TODO
- [https://developer.mozilla.org/en-US/docs/Web/Web_Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)

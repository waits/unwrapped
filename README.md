unwrapped.js
============

Simple performance-focused Javascript DOM extensions and utilities. For those times when jQuery is too much.

### Browser Support
Chrome 42+
Firefox 38+
Internet Explorer 11+
Safari 8+

### Helper Functions
```javascript
create(String type[, (String||Array||NodeList) content][, Object attrs]) // creates an element of the given type, optionally with content as a String, Array, or NodeList, and provided attributes
id(id) // returns Element
classes(String klass) // returns NodeList
names(String name) // returns NodeList
tags(String tag) // returns NodeList
typeOf(Object obj) // returns shortened class name
```

### DOM
```javascript
Element.classes(String klass) // returns NodeList
Element.names(String name) // returns NodeList
Element.tags(String tag) // returns NodeList
NodeList.first() // first Element or null
NodeList.last() // last Element or null
NodeList.remove() // removes all elements in NodeList from the DOM
Document.on(String event, Function callback) // adds event listener to document object
Element.on(String event, Function callback) // adds event listener to element
NodeList.on(String event, Function callback) // adds event listener to each element
Element.closest({class: String, name: String, tag: String}) // returns nearest parent matching provided selectors
Element.next() // returns next sibling or null
Element.prev() // returns previous sibling or null
Element.siblings() // returns NodeList of siblings excluding self
Element.index() // returns index of element in its parent container
```

### AJAX
```javascript
ajax(String method, String url[, Object data][, Function callback]) // sends an XMLHttpRequest with the data urlencoded for GET requests or serialized into JSON otherwise
HTMLFormElement.stringify() // returns url-encoded string of parameters and values
```
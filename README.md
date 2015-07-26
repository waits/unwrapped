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
create(type[, content, attributes]) // creates an element of the given type, optionally with content as a String, Array of Nodes, or NodeList, and provided attributes
id(id) // returns Element
classes(name) // returns NodeList
names(name) // returns NodeList
tags(name) // returns NodeList
typeOf(object) // returns shortened class name
```

### DOM
```javascript
Element.classes(name) // returns NodeList
Element.names(name) // returns NodeList
Element.tags(name) // returns NodeList
NodeList.first() // first Element or null
NodeList.last() // last Element or null
NodeList.remove() // removes all elements in NodeList from the DOM
Document.on(event, callback) // adds event listener to document object
Element.on(event, callback) // adds event listener to element
NodeList.on(event, callback) // adds event listener to each element
Element.closest(classname) // returns nearest parent with given class or null
Element.next() // returns next sibling or null
Element.prev() // returns previous sibling or null
Element.siblings() // returns NodeList of siblings excluding self
Element.index() // returns index of element in its parent container
```

### AJAX
```javascript
ajax(method, url, data, callback) // sends an XMLHttpRequest with the data urlencoded for GET requests or serialized into JSON otherwise
HTMLFormElement.stringify() // returns url-encoded string of parameters and values
```
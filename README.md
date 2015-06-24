unwrapped.js
======

Simple performance-focused Javascript DOM extensions and utilities. For those times when jQuery is too much.

### Browser Support
Chrome 38+
Firefox 33+
Internet Explorer 11+
Opera 25+
Safari 8+

### Helper Functions
```javascript
create(type[, content, attributes]) // creates an element of the given type, optionally with content as a String, Array of Nodes, or NodeList, and provided attributes
get(id) // returns Element
getClass(name) // returns NodeList
getName(name) // returns NodeList
getTag(name) // returns NodeList
is(object) // returns shortened class name
```

### DOM
```javascript
Document.ready(callback) // adds event listener to document object for load and page:ready, and calls function immediately
Element.getClass(name) // returns NodeList
Element.getName(name) // returns NodeList
Element.getTag(name) // returns NodeList
Element.empty() // clears innerHTML and returns self
NodeList.first() // first Element or null
NodeList.last() // last Element or null
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
```
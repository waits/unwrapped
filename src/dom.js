function get(id) {return document.getElementById(id) || document.createDocumentFragment().childNodes;}
function getClass(name) {return document.getElementsByClassName(name);}
function getName(name) {return document.getElementsByName(name);}
function getTag(name) {return document.getElementsByTagName(name);}

function create(type, textContent, options) {
	var el = document.createElement(type);
	
	for (var k in options) {
		if (k == 'style' || k == 'data') {
			if (k == 'data') {
				k = 'dataset';
				options.dataset = options.data;
			}
			for (var j in options[k]) {
				el[k][j] = options[k][j];
			}
		}
		else {
			el[k] = options[k];
		}
	}
	
	var text = document.createTextNode(textContent);
	el.appendChild(text);
	
	return el;
}

Document.prototype.ready = function(callback) {
	callback(this);
	document.addEventListener('load', callback);
	document.addEventListener('page:load', callback);
};

Element.prototype.getClass = function(name) {
	return this.getElementsByClassName(name);
};

Element.prototype.getName = function(name) {
	return this.getElementsByName(name);
};

Element.prototype.getTag = function(name) {
	return this.getElementsByTagName(name);
};

Document.prototype.on = Element.prototype.on = function(event, callback) {
	this.addEventListener(event, function(e) {
		callback.call(this, e);
	});
};

HTMLCollection.prototype.on = NodeList.prototype.on = function(event, callback) {
	for (var i in this) {
		var node = this[i];
		if (node.nodeType == 1) {
			node.on(event, callback);
		}
	}
};

HTMLCollection.prototype.each = NodeList.prototype.each = function(callback) {
	Array.prototype.forEach.call(this, function(el, i) {
		callback(el);
	});
};

HTMLCollection.prototype.first = NodeList.prototype.first = function() {
	return this[0] || null;
};
HTMLCollection.prototype.last = NodeList.prototype.last = function() {
	return this[this.length-1] || null;
};

Element.prototype.empty = function() {
	this.innerHTML = '';
	return this;
};

Element.prototype.closest = function(name) {
	var el = this;
	do {
    if (el.classList && el.classList.contains(name)) {
      return el;
    }
  } while (el = el.parentNode);

  return null;
};

Element.prototype.next = function() {return this.nextElementSibling;};
Element.prototype.prev = function() {return this.previousElementSibling;};
Element.prototype.siblings = function() {
	var el = this;
	return Array.prototype.filter.call(this.parentNode.children, function(child) {
	  return child !== el;
	});
};

Element.prototype.index = function() {
	return [].slice.call(this.parentNode.children).indexOf(this);
};
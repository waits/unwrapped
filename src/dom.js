function id(str) {return document.getElementById(str);}
function classes(str) {return document.getElementsByClassName(str);}
function names(str) {return document.getElementsByName(str);}
function tags(str) {return document.getElementsByTagName(str);}

function create(type, child, options) {
	var el = document.createElement(type);
	
	if (options) {
		for (var k in options) {
			if (k === 'style') {
				for (var s in options.style) {
					el.style[s] = options.style[s];
				}
			}
			else if (k === 'data') {
				for (var d in options.data) {
					el.dataset[d] = options.data[d];
				}
			}
			else {
				el.setAttribute(k, options[k]);
			}
		}
	}
	
	switch (typeOf(child)) {
		case "Null":
		case "Undefined":
			break;
		case "String":
			el.appendChild(document.createTextNode(child));
			break;
		case "NodeList":
			child = Array.prototype.slice.call(child);
		case "Array":
			for (var c in child) el.appendChild(child[c]);
			break;
		default:
			el.appendChild(child);
	}
	
	return el;
}

Element.prototype.classes = function(name) {
	return this.getElementsByClassName(name);
};

Element.prototype.names = function(arg) {
	var returnList = [];
	(function(start) {
		for (var child in start) {
			if (start[child].nodeType !== 1) continue;
			if (start[child].name === arg) returnList.push(start[child]);
			if (start[child].childNodes.length > 0) {
				arguments.callee(start[child].childNodes);
			}
		}
	})(this.childNodes);
	return returnList;
};

Element.prototype.tags = function(name) {
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
		if (node.nodeType === 1) {
			node.on(event, callback);
		}
	}
};

HTMLCollection.prototype.each = NodeList.prototype.each = function(callback) {
	Array.prototype.forEach.call(this, function(el, i) {
		callback.call(el, i);
	});
};

HTMLCollection.prototype.first = NodeList.prototype.first = function() {
	return this[0] || null;
};
HTMLCollection.prototype.last = NodeList.prototype.last = function() {
	return this[this.length-1] || null;
};

HTMLCollection.prototype.remove = NodeList.prototype.remove = function() {
	var arr = Array.prototype.slice.call(this);
	for (var i in arr) {
		var el = arr[i];
		if (el.nodeType === 1) {
			el.remove();
		}
	}
};

Element.prototype.closest = function(name) {
	var el = this;
	do {
		if (el.nodeType === 1 && el.classList.contains(name)) {
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
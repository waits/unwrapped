/*! unwrapped.js ~ v0.1.0-alpha ~ created by Dylan Waits ~ https://github.com/waits/unwrapped */

(function() {
	'use strict';
	window.typeOf = function(object) {
		return Object.prototype.toString.call(object).slice(8, -1);
	};
})();

(function() {
	'use strict';
	window.id = function(str) {return document.getElementById(str);};
	window.classes = function(str) {return document.getElementsByClassName(str);};
	window.names = function(str) {return document.getElementsByName(str);};
	window.tags = function(str) {return document.getElementsByTagName(str);};

	Element.create = function(type, child, options) {
		var el = document.createElement(type);

		if (options) {
			for (var k in options) {
				if (options.hasOwnProperty(k)) {
					if (k === 'style') {
						for (var s in options.style) {
							if (options.hasOwnProperty(k)) {el.style[s] = options.style[s];}
						}
					}
					else if (k === 'data') {
						for (var d in options.data) {
							if (options.hasOwnProperty(k)) {el.dataset[d] = options.data[d];}
						}
					}
					else {
						el.setAttribute(k, options[k]);
					}
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
				for (var c in child) {if (child.hasOwnProperty(c)) {el.appendChild(child[c]);}}
				break;
			default:
				el.appendChild(child);
		}

		return el;
	};

	Element.prototype.classes = function(name) {
		return this.getElementsByClassName(name);
	};

	Element.prototype.names = function(arg) {
		var returnList = [];
		(function(start) {
			for (var child in start) {
				if (start.hasOwnProperty(child) && start[child].nodeType !== 1) {
					if (start[child].name === arg) {returnList.push(start[child]);}
					if (start[child].childNodes.length > 0) {
						this.names(start[child].childNodes);
					}
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
			if (this.hasOwnProperty(i)) {
				var node = this[i];
				if (node.nodeType === 1) {
					node.on(event, callback);
				}
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
			if (this.hasOwnProperty(i)) {
				var el = arr[i];
				if (el.nodeType === 1) {
					el.remove();
				}
			}
		}
	};

	Element.prototype.closest = function(options) {
		if (options.class && !this.classList.contains(options.class) ||
			options.name && this.name !== options.name ||
			options.tag && this.tagName !== options.tag.toUpperCase()) {
				if (this.parentNode.nodeType === 1) {return this.parentNode.closest(options);}
				else {return null;}
		} else {
			return this;
		}
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
})();

(function() {
	'use strict';
	HTMLFormElement.prototype.stringify = function() {
		var values = [];
		var tags = ['input', 'select', 'textarea'];
		for (var t=0; t<tags.length; t++) {
			var inputs = this.tags(tags[t]);
			for (var i in inputs) {
				if (inputs.hasOwnProperty(i) && inputs[i].nodeType === 1) {
					if (inputs[i].type === 'radio') {
						if (inputs[i].checked) {values.push(inputs[i].name + '=' + encodeURIComponent(inputs[i].value));}
					}
					else {values.push(inputs[i].name + '=' + encodeURIComponent(inputs[i].value));}
				}
			}
		}
		return values.join('&');
	};
})();

window.HTTP = (function() {
	'use strict';

	var HTTP = {};

	function sendEmptyRequest(method, url, callback) {
		var request = new XMLHttpRequest();
		request.open(method, url, true);
		if (callback) {request.onload = callback;}
		request.send();
	}

	function sendDataRequest(method, url, data, callback) {
		var request = new XMLHttpRequest();
		request.open('method', url, true);
		if (callback) {request.onload = callback;}
		if (typeOf(data) === 'Object') {
			request.setRequestHeader("Content-Type", "application/json");
			request.send(JSON.stringify(data));
		}
		else {
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send(data);
		}
	}

	HTTP.get = function(url, data, callback) {
		if (data) {
			url += '?';
			for (var p in data) {
				if (data.hasOwnProperty(p)) {url += p + '=' + encodeURIComponent(data[p]) + '&';}
			}
		}
		sendEmptyRequest('GET', url, data, callback);
	};

	HTTP.post = function(url, data, callback) {
		sendDataRequest('POST', url, data, callback);
	};

	HTTP.patch = function(url, data, callback) {
		sendDataRequest('PATCH', url, data, callback);
	};

	HTTP.put = function(url, data, callback) {
		sendDataRequest('PUT', url, data, callback);
	};

	HTTP.delete = function(url, callback) {
		sendEmptyRequest('DELETE', url, callback);
	};

	return HTTP;
})();

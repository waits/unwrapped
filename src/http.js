var HTTP = {
	get: function(url, data, callback) {
		var request = new XMLHttpRequest();
		if (data) {
			url += '?';
			for (var p in data) url += p + '=' + encodeURIComponent(data[p]) + '&';
		}
		request.open('GET', url, true);
		if (callback) request.onload = function() {callback.call(this);};
		request.send();
	},
	post: function(url, data, callback) {
		var request = new XMLHttpRequest();
		request.open('POST', url, true);
		if (callback) request.onload = function() {callback.call(this);};
		if (typeOf(data) === 'Object') {
			request.setRequestHeader("Content-Type", "application/json");
			request.send(JSON.stringify(data));
		}
		else {
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send(data);
		}
	},
	patch: function(url, data, callback) {
		var request = new XMLHttpRequest();
		request.open('POST', url, true);
		if (callback) request.onload = function() {callback.call(this);};
		if (typeOf(data) === 'Object') {
			request.setRequestHeader("Content-Type", "application/json");
			request.send(JSON.stringify(data));
		}
		else {
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send(data);
		}
	},
	delete: function(url, data, callback) {
		var request = new XMLHttpRequest();
		request.open('DELETE', url, true);
		if (callback) request.onload = function() {callback.call(this);};
		request.send();
	}
};

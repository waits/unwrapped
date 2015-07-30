window.HTTP = (function() {
	var HTTP = {};

	function sendEmptyRequest(method, url, callback) {
		var request = new XMLHttpRequest();
		request.open(method, url, true);
		if (callback) request.onload = callback;
		request.send();
	}

	function sendDataRequest(method, url, data, callback) {
		var request = new XMLHttpRequest();
		request.open('method', url, true);
		if (callback) request.onload = callback;
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
			for (var p in data) url += p + '=' + encodeURIComponent(data[p]) + '&';
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

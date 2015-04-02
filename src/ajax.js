function ajax(method, url, data, callback) {
	method = method.toUpperCase();
	var request = new XMLHttpRequest();
	if (data) {
		if (method == 'get' && data) {
			url += '?';
			for (var p in data) url += p + '=' + encodeURIComponent(data[p]) + '&';
		}
		else {
			data = JSON.stringify(data);
		}
	}
	request.open(method, url, true);
	if (callback) request.onload = function() {callback.call(this);};
	if (method == 'get' || method == 'delete' || !data) {
		request.send();
	}
	else {
		request.setRequestHeader("Content-Type", "application/json");
		request.send(data);
	}
}
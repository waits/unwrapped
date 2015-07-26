function ajax(method, url, data, callback) {
	method = method.toUpperCase();
	var request = new XMLHttpRequest();
	if (data && method === 'GET') {
		url += '?';
		for (var p in data) url += p + '=' + encodeURIComponent(data[p]) + '&';
	}
	request.open(method, url, true);
	if (callback) request.onload = function() {callback.call(this);};
	if (method === 'GET' || !data) {
		request.send();
	}
	else {
		if (typeOf(data) === 'Object') {
			request.setRequestHeader("Content-Type", "application/json");
			request.send(JSON.stringify(data));
		}
		else {
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send(data);
		}
	}
}

HTMLFormElement.prototype.stringify = function() {
	var values = [];
	var tags = ['input', 'select'];
	for (var t=0; t<tags.length; t++) {
		var inputs = this.tags(tags[t]);
		for (var i in inputs) {
			var input = inputs[i];
			if (input.nodeType === 1) {
				if (input.type === 'radio') {
					if (input.checked)
						values.push(input.name + '=' + encodeURIComponent(input.value));
				}
				else
					values.push(input.name + '=' + encodeURIComponent(input.value));
			}
		}
	}
	return values.join('&');
};
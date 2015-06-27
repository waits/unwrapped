function stringifyForm(form) {
	var output = '';
	var tags = ['input', 'select'];
	for (var t=0; t<tags.length; t++) {
		var inputs = form.getTag(tags[t]);
		for (var i in inputs) {
			var input = inputs[i];
			if (input.nodeType == 1) {
				if (input.type == 'radio') {
					if (input.checked)
						output += input.name + '=' + encodeURIComponent(input.value) + '&';
				}
				else
					output += input.name + '=' + encodeURIComponent(input.value) + '&';
			}
		}
	}
	return output;
}

function ajax(method, url, data, callback) {
	method = method.toUpperCase();
	var request = new XMLHttpRequest();
	if (data) {
		if (method == 'GET' && data) {
			url += '?';
			for (var p in data) url += p + '=' + encodeURIComponent(data[p]) + '&';
		}
		else {
			if (is(data) == "Object")
				data = JSON.stringify(data);
		}
	}
	request.open(method, url, true);
	if (callback) request.onload = function() {callback.call(this);};
	if (method == 'GET' || !data) {
		request.send();
	}
	else {
		request.setRequestHeader("Content-Type", is(data) == "Object" ? "application/json" : "application/x-www-form-urlencoded");
		request.send(data);
	}
}
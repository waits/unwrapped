function ajax(method, url, data, callback) {
	var request = new XMLHttpRequest();
	var fdata = '';
	if (data) 
		for (var p in data) fdata += p + '=' + encodeURIComponent(data[p]) + '&';
	if (method == 'get') {
		url += '?' + fdata;
		fdata = null;
	}
	request.open(method, url, true);
	request.onload = function() {callback.call(this);};
	request.onerror = function() {};
	if (method != 'get' && method != 'delete')
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	request.send(fdata);
}
HTMLFormElement.prototype.stringify = function() {
	var values = [];
	var tags = ['input', 'select', 'textarea'];
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

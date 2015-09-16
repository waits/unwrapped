(function() {
	'use strict';
	HTMLFormElement.prototype.stringify = function() {
		var values = [];
		var tags = ['input', 'select', 'textarea'];
		for (var t=0; t<tags.length; t++) {
			var inputs = this.tags(tags[t]);
			for (var i in inputs) {
				if (inputs.hasOwnProperty(i) && inputs[i].nodeType === 1) {
    				if (inputs[i].type === 'checkbox') {
        				if (inputs[i].checked) {values.push(inputs[i].name + '=' + encodeURIComponent(inputs[i].value));}
    				}
					else if (inputs[i].type === 'radio') {
						if (inputs[i].checked) {values.push(inputs[i].name + '=' + encodeURIComponent(inputs[i].value));}
					}
					else {values.push(inputs[i].name + '=' + encodeURIComponent(inputs[i].value));}
				}
			}
		}
		return values.join('&');
	};
})();

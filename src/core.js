(function() {
	'use strict';
	window.typeOf = function(object) {
		return Object.prototype.toString.call(object).slice(8, -1);
	};
})();

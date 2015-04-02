function is(object) {
	return Object.prototype.toString.call(object).replace(/^\[object (.+)\]$/, "$1");
}
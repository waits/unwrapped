function is(object) {
	return Object.prototype.toString.call(object).slice(8, -1);
}
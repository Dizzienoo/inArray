module.exports = (needle, haystack) => {
	try {
		for (let i = 0; i < haystack.length; i++) {
			if(haystack[i] == needle) {
				return true;
			}
		}
		return false;
	}
	catch (err) {
		return false;
	}
};
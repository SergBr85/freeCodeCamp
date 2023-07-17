function getMiddle(s) {
	console.log((s.length - 1)/2);
	return s.length % 2 == 0? s[s.length/2-1]+s[s.length/2]: s[(s.length - 1)/2];
}
console.log(getMiddle('teghjyklst'));
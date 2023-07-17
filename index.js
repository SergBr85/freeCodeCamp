function removeChar([...str]){
	console.log(str)
	str.pop();
	str.shift();
	
	return str.join("");
}
console.log(removeChar('eloquent'))
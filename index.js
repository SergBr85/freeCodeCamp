let a = [1, 2, 3, 4, 5];

function nextInLine(arr, args) {
	arr.push(args),
	
	console.log(arr)
	console.log(args)
	return arr.shift()
}
console.log(nextInLine(a, 3))
const summation = function (num) {
	let sum = 0;
	for(let i = 1;i <= num; sum += i, i++) {
		console.log(i, sum)
	}
	return sum
}
console.log(summation(1))
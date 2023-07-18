function countSheeps(arrayOfSheep) {
	let sum = 0;
	arrayOfSheep.forEach(value => { value? sum += 1:0})
	return sum;
};

let array1 = [true,  true,  true,  false,
	true,  true,  true,  true ,
	true,  false, true,  false,
	true,  false, false, true ,
	true,  true,  true,  true ,
	false, false, true,  true ];

	console.log(countSheeps(array1))
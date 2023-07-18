function countSheeps(arr) {
//	return arr.filter(Boolean).length;
	return arr.filter(a =>a);
}

let array1 = [true,  true,  true,  false,
	true,  true,  true,  true ,
	true,  false, true,  false,
	true,  false, false, true ,
	true,  true,  true,  true ,
	false, false, true,  true ];

	console.log(countSheeps(array1))
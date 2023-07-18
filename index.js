function century(year) {
	
	return year % 100? Number(year.toString().slice(0,-2))+1 : year / 100;
	
	
}
console.log(century(2000))
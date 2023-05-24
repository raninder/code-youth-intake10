//1. create marks array with 7-8 elements
//2 . find the size of marks array
//3. display all elements of his array
//4. access first element, 5th lement and last element


let marks = [22,33,44,56,78,12];
console.log("array size",marks.length);
console.log("array",marks);
console.log("element1", marks[0]);
console.log("element5",marks[4]);
console.log("last element", marks[marks.length-1]);
//change value of any array element
marks[1] = 100;
console.log("array",marks);

//access every elemnt of array
for(i=0;i<marks.length;i++){
	marks[i] = marks[i]+2;
	console.log(marks[i]);
}


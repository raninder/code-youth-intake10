let a=4;
let b=5;
let c;
c=a+b;


let data1 = [12,34,56,2];
let data2 = [2,4,6,7];
let data3=[];
for(let i=0;i<data1.length;i++){
	// data3[i] = data1[i] + data2[i];
	data3.push(data1[i] + data2[i])
	// data3[1] = data1[1] + data2[1];
}
console.log(data3);
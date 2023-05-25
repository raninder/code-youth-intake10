const data = [2,5,8,12,34];
// data[0] //2
// data[1] //5
// data[3]  //12
// data[4] , data[data.length-1]
// data.length  //size of array-5

// data[2]= 80
// data[5] = 22;

console.log(data);

let newData = [];
//accessing each element of array-traversing any array
for(let i=0;i<data.length;i++){
	newData[i] = data[i] *2;
	console.log("new",newData[i])  //data[0]  data[1]
	console.log("old",data[i]);
}


// let a=15;
// let b;
b = a*2;


let a=4,b=5;
let c=a+b;


const data1 = [];
const data2 = [];

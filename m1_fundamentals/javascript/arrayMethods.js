//array methods
// push() -  to insert elements at the end of an array

const data = [2,5,7,22,67];
console.log("original array",data);
data.push(23);
console.log("push-array",data);
data.push(34,45);
console.log("push-array",data);


//pop()- to delete element from end of an array
 let ele = data.pop();
console.log("pop-array",data);
console.log("deleted element",ele);

//unshift() - to add elemnt at beginning of an array
data.unshift(100);
console.log("unshift-array",data);

//shift()-  removes first elemnt of array
let firstele = data.shift();
console.log("shift-array",data);
console.log("deleted element",firstele);

//slice()- to take part of an array
//slice(start_index,end_index-1)  

let sliceArray  = data.slice(1,4);
console.log("original array", data);
console.log("sliced array",sliceArray);

//splice - to add, remove, replace array elements
//splice(start_index,count_of_delete,add_elem1,add_elem2...)

//using splice for removing

let spliceArr = data.splice(2,3);
console.log("original array", data);
console.log("spliced array",spliceArr);

//using splice to insert

spliceArr = data.splice(3,0,11,22,44);
console.log("original array", data);
console.log("spliced array",spliceArr);

//using splice to replace

spliceArr = data.splice(2,1,222);
console.log("original array", data);
console.log("spliced array",spliceArr);


//sort
const stringArray = ['white','blue','green','grey','purple'];
console.log(stringArray.sort());
const data1 = [2,15,77,22,67];
console.log("sorting",data1.sort());

function arrSort(a,b){
	return a-b;
}

console.log("sorting",data1.sort(arrSort));

//reverse
// for(i=data.length-1;i>=0;i--){
// 	console.log(data1[i])
// }

console.log("reversing", data1.reverse());

//join
let joinArr = stringArray.join(' ') 
console.log("join-",joinArr);
let splitArr = joinArr.split(' ');
console.log("split-", splitArr)



const data2 = [2,15,77,22,67];
let mapArray = data2.map((item)=> item+5);
console.log("mapped", mapArray);
 let filtredArray = data2.filter((element)=> element<25);
 console.log("filtered", filtredArray);

 let reduced = data2.reduce((sum,current)=>sum*current);
 console.log("reduce", reduced);


 console.log("array type", typeof data2);
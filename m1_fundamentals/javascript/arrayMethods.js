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
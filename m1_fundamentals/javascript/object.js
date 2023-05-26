const user1 = ['Bob',20,50,'Canada'];
let username='bob', age=20, maths=50,address='canada';

//syntax of an object declaration
// const objectname = {
// key1: value1 ,
// key2:value2
// }

const user = { 
	name:'Bob',
	age:20,
	marks:[50,25,67,56],
	address:{
		city:"Toronto",
		country:'canada',
		pcode:'L5X T5Y'
}
};
//add a property
user.ph= 123445555;
console.log(user);
//accessing object values using dot notation
console.log("address", user.address.city);
//accessing object values using square bracket notation
console.log("address", user["address"]["city"]);

//delete a property
delete user.age;
console.log("afetr deletion",user);



const book = {};
book.title='Pride and Prejudice';
book.author = 'XYZ';
book.year = 2000;
console.log(book);

// console.log("length", Object.length(user));
console.log("keys", Object.keys(user));
console.log("object size", Object.keys(user).length);
console.log("values", Object.values(user));

for(let key in book){
	console.log(key,book[key]);
}


//example without any parameter
//function declaration


//function call
display();
display();
function display(){
	let a=5;
	console.log("Hello Bob",a);
}
console.log(a);
display();
display();



function show(name){  //name='bobby'   name='alex'
	console.log('hello '+name);
}

show('bobby');  
show('alex');


function showMessage(name,message){
	console.log("hello ",name, message);
}
showMessage('Carol','How are you');


function square(num){  //num=15
	let result = num*num;
	console.log("square of a number",result);
}

square(3);
square(15);
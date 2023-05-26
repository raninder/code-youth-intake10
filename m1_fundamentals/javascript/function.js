// -declaring a function

// function name_of_function(params){
// 	//body
// }

// e.g. 
function display(){
	console.log("my name is Bob")
}
// - calling a function
// name_of_function(args)

display();
display();
display();

function show(name){   //name="Alex"
	console.log(name);
}

show("Alex");
show("Bob");
show("carol");


function square(num){   //num=34
	console.log("square of a number:",num*num);
}

square(5);
square(34);
square(56);

//arrow functions
const square = (num) => num*num;


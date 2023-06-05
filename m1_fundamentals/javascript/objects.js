// const students = ['budry','ahmed','comnnor'];
const students = {
	data:[
	{
		name:'Budry',
		city:'Toronto'
	},
	{
		name:'Hakim',
		city:'Toronto'
	},
	{
		name:'Connor',
		city:'Ottawa'
	},
	{
		name:'Nadia',
		city:'NB'
	},
	{
		name:'Ahmed',
		city:'Toronto'
	}
]
};

for(let i=0;i<students.data.length;i++){
	console.log(students.data[i].name, students[i].city);
}

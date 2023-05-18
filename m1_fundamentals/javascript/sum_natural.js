1+2+3+4+5+6+7+8+9+10
// sum=0
// sum = sum+i
// sum=	0 +1 =1
// sum = 1+2 =3
// sum = 3+3 =6

// 1x2x3x4x5
// prod=1
// prod = prod*i
let sum = 0;
for(let i=1;i<=20;i++){
	sum = sum+i;
	console.log("sum:",sum);
}
console.log("sum:",sum);
console.log("Average",sum/20);
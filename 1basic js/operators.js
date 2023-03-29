//arithmetic operators
console.log(10+2);//add
console.log(10-2);//minus
console.log(10*2);//multiplication
console.log(10/2); //division
console.log(10%2);//remainder
console.log(10**2);//expo
//if we want to have floor division
//1 way is parseInt(5/2)
//2 way is Math.floor(5/2)
console.log(Math.floor(5/2))
console.log(parseInt(5/2))
//assignment Operator
let x=10;
console.log(x);
x+=2;
console.log(x);
x-=2;
console.log(x);
x*=2;
console.log(x);
x/=2;
console.log(x);
x%=2;
console.log(x);

//Logical Operators
//And = &&
//OR = ||
//NOT = !
console.log((10>5)&&(10<11));
console.log((10>5)||(10>11));
console.log((4 && 0));
console.log((4 || 0));
console.log((0 && 4));
console.log((0 || 4));
console.log((null || 4));
console.log((4 || 5));
console.log((-4 || 5));
console.log((-4 && 3));
console.log((33 && 3));
console.log((-0 && 9));
//Comparison Operators
/* > greater then 
< less than 
>= greater than equals to 
<= less than equals to
!= abstract not equals to
!== strict not equals to
== abstract  equality
=== strict  equality
*/
//String based Opertors
//+ concatenate two strings and return a new one
console.log(("HBM")+("tech"));
//Bitwise Operators (binary)
//These operators doesnt directly operates on numbers, bit instead operate on binary representation of number 
/*
Bitwise and &  
bitwise or |
bitwise Xor ^
Bitwise not ~
left shift << increse it by 2 times
right shift >>  decrese by 2 times
*/
console.log(5&3);
console.log(8|1);
console.log(3^3);
console.log(5<<2);
console.log(5>>1);
//Ternary Operator
/* (condition) ?(expression 1):(expresssion 2)
true then exp1
false then exp 2 */
console.log((2>1)? "harsh":"balwani");
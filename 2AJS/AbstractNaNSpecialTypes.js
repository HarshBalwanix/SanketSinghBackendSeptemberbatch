console.log(null==undefined);//true mentioned in document
console.log(undefined == null);//true mentioned in document
console.log(10 == 12);//false strict equality as types are same 
console.log(10 == "10");//true as types are not same JS applied ToNumber() to "10" and got the value as 10 
console.log(false == 0);//true as types are not same JS says value of false is 0
console.log(true == 1);//true as types are not same JS says value of true is 1
console.log(10=={valueOf(){return 10}});

let a=5;
if(a){
    console.log("Hi There"); //this line will be printed as 5 is true
}
if(a==true)
{
    console.log("hello there");//this line will not be printed as true=1 and 5==1 is compared hence it is false
}
/*
NaN is invalid number 
for strict equality if either of them is NaN it will return false 

isNaN() function
this func coerces the argument before checking for NaN. Now as string is not a number but when we convert  it into a number it gives NaN and hence isNaN() returns true.
*/
let x="10";
let y="harsh";
let d=10-y;
console.log(a,x,y,d);
console.log(isNaN(a));
console.log(isNaN(x));
console.log(isNaN(y));
console.log(isNaN(d));
//to check NaN 
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("harsh")); // it will just check for NaN and it doesnt allow coercion

function checkdirection(val)
{
    if(val==0)
    {
        console.log("neutral");
    }
    else if(val>0)
    {
        console.log("right");
    }
    else{
        console.log("left");
    }
}
checkdirection(5);
checkdirection(-1);
checkdirection(0);
/*
When to use == and === ??
prefer == over === as it uses === automatically when type is same
*/
console.log("abc".length);
/*
Boxing 
It is a phenomenon in JS where it tries to convert primitive to objects.
*/
console.log(Number(9).toString());
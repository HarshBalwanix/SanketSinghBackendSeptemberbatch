/*
""   0
"0"  0
"-0" 0
"3.123"  3.123
"0."  0
".0"  0
"."   NaN
"$"   NaN
"0xaf" 175   valid hexadecimal number 
"ab34"  NaN
undefined  NaN
[""]  0
["0"]  0
["-0"]  -0
[null]  0
[undefined]  0
[1,2,3]  NaN
[(())]  0

*/
console.log(12-4); //8
console.log(undefined-4);// results NaN as undefined does not have any value
console.log(null-4); // results -4 as null's value is 0 
console.log("132"-4); //results 128 as 132 is converted to its value 
console.log("1xfa"-4);// results NaN as 1xfa is a string and not a number
console.log("0xaf"-4);//results 171 as 0xfd is hexadecimal of 175 we need to start with 0x to start writing hexadecimal number
console.log(4-true);//results 3 as true's value is 1
// console.log(Symbol(4)-5);//typerror
console.log("0o11"-8);// gives 1 as 11 is octal notation of 9 and we start with 0o to denote octal numbers 
console.log([(0)]-8);

//Addition Operator
/*toprimitive() to left then toprimitive() to right and then check either of them is a string if one of them is then convert both of them in string 
otherwise Tonumber is applied from left to right then it returns addition value
0 and -0 becomes 0
[null, undefined] becomes ","
[] beccomes " "
*/
console.log("harsh"+"balwani"); //both are string hence harshbalwani
console.log(undefined+"balwani"); //undefined gets converted to string undefined  hence undefinedbalwani
console.log("5"+null); // 5null
console.log("harsh"+[null,undefined]);
//ToPrimitive 
/*
takes input and tries to convert to non object type(primitive type), if it cant convert, it throws error.
prefered type- if we have 2 or more then 2 values that can become answer, this optional argument helps us.
if prefered type is not given, hint="default".
else if prefered type is string. hint="String".
else if prefered type is number, hint="number"

    if hint is default we will make hint="Number"

    if hint is a string 
    toString() if result is non object return result, if it is object then return 
    valueOf() if result is non object return result, if it is object throw error 

    if hint is a number 
    valueOf() if result is non object return result, if it is object then return 
    toString() if result is non object return result, if it is object throw error 

    valueOf and noString() are not abstract operations
    by default toString on an onject returns [object Object]
    by default valueOf on an onject returns same object
    for array toString print array without brackets 
    for array valueOf print array with brackets 
*/
let a={"english":90,"maths":100};
console.log(a.toString());
console.log(a.valueOf());
console.log("harsh"+{"a":10}); //preferd type is not given hence hint will become default then number and then valueOf() is passed and gets the object again and then toString() is passed and hence we get object Object as result 
console.log(10-{"a":45}); //10 is a number and a:45 is going to convert into a number and hence hint =number,then call valueof() which returns same object again and then toString() which results [object Object] then we pass it again in toNumber() which converts it into NaN and hence 10-NaN is NaN

let x={"b":90,valueOf(){return 2;}}; //valueOf() modeification is done to return 2 hence result is 2 now
console.log(x-10); //2-10 is -8
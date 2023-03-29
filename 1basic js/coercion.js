// 4 pillars coercion ,objects and classes,asynchronus,Scopes
//coercion is type interconversion which are of two types implicit(donr by lang) and explicit(done by you)
//here in js type is exxist for values
/*
How js handles coercion
#Abstract Operations //not part of Js
these are internal operations of Js which we cannot use but language uses it 
First abstract operation is ToPrimitive
ToPrimitive abstract operation is an input argument and an optional Preferred type argument 
This operation converts the input to a non object type value. if an argument is capable of getting converted into more then one type then function uses preferred type argument to resolve it.
As we said this is also ana abstract operation, that means it is conceptual,we cannot  invoke it but Js internally can.
example 
console.log(1-"1"); //0 converts string 1 to number 1

Ordinary to primitive 
if prefered type is number then our input argument we call valueof() function to get a number and if it doesnt give u pritive we call tostring() function
if preferedtype is  string then we first call to string() & then valueof()
example
console.log("10"+Null); // return 10Null as if even one of them is string it converts both of them to string
console.log(10+10); //returns 20
undefined gets converted to Nan 
Null gets converted to +0
true gets converted to 1
false gets converted to 0
console.log(1-"abcd"); returns Nan
Whenever in an numeric operation we dont have a number, ToNumber() is called 
example= Subtraction operation.

Tostring
console.log(10-{a:1}) //NaN
*/
console.log(10-{"a":1,valueOf(){return 5;}}); //5
console.log(10-{"a":10,valueOf(){return {}},toString(){return "5";}});//5


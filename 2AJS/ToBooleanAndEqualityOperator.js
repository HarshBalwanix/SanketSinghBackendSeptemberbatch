/*
ToBoolean()
The ToBoolean Abstract operation converts the givn type to a boolean value.
ToBoolean works a bit differently when compared to ToString() or ToNumber()
it maintains a list of values which when received as an argument returns False.And everything apart from the list of values returns True.
List of Falsy values 
null 
undefiend
+0
-0
NaN
""(empty string)
false

apart from these everything is true in JS

Q How can we test ToBoolean() operation?
We can use logical Not Operator(!)

What is the difference between == and ===?
== operator(abstract equality) check value as well as type but if type is same it call === operator. 
=== operator(strict equality) checks value as well as type if type is different it returns false.
abstract equality(==) does coercion if types are not same.
strict equalty(===) never does coercion.
if any one of the argument is NaN then it always returns false in equality, it means NaN is only value which is not equals to itself.

*/
console.log(!0); //ToBoolean on 0 returns False and !False is true
console.log(!-4);//ToBoolean on -4 returns True and !True is false
console.log(NaN ===23);
console.log(NaN ===NaN);
console.log(+0 ===-0);
console.log(33 ===33);
console.log(null ===null);
console.log(undefined ===undefined);
console.log("harsh" ==="harsh");
console.log({} ==={});
console.log(Symbol('harsh') ===Symbol('harsh'));
let y=Symbol('harsh');
console.log(y===y);
/*
Scopes 
Scope is simply where to look for things like variables and functions.
3 Scopes 
1 Global
2 Function
3 Block

GLobal Scope
if a variable is present in a global scope then it is accessable everywhere in a JsFile.
To declare or define a variable outside any function then it is global scope.


function scope
when visibility of function is just inside the function block.

block Scope
In js we can use a pair of curly braces to declare a block.
{
    ...
    ...
    ...
}
Now if a variable is only accessible inside a block then it will be having a block scope.
*/
//Global var name
var name ="harsh";
function greet(){
    var x=10; // function scope
    console.log("greetings!",name);
    console.log(x);
}

function fun()
{
    console.log("have fun",name);
}
greet();
fun();
//block scope
{
    let x=45;
    console.log(x);
}
/*
Difference btw let,var,const
var-> whenver we use a var anywhere inside a function, variable gets fn scope,otherwise it is accessible everywhere.
let -> Whenever it is initialised with let, it always gets the scope of enclosing BLOCK.
        if u initialise a variable with let outside any block, then also it will not become accessible completely in the global scope.
const- it also has block scope same as let, only difference is it does not allow reassignment.
    you cannot reassign the variable in const.
*/
//var
function fun()
{
    console.log(x);//undefined due to lexical scoping
    var x=01;
    console.log(x);
}
// console.log(x); not scope as x is defined inside a fn

{
    var a=20;
}
console.log(a);

//let
{
    let z=12;
}
// console.log(z); //throgh error as it is not accessible outside the block
function fun1()
{
    // console.log(y);// cant access, will through error
    let y=13;
    console.log(y);
    y=23;
    console.log(y);
}
fun1();
/*
Every variable in your code will be used in any of the following ways-
1 Either it will get value assigned ie used as a target  //x=10
2 it will be used to retrieve a value ie it will be  used as source. // y=x+10
Js start parsing phase outside every thing it maintains global scope, but the moment it goes inside the fn it starts maintaining scope of that fn also.
formal declaration is when we declare a variable with let,var and const.
Autoglobals created when used as targert reference, without const,var,let.
*/
var teacher='sanket';  //global
function fun2()
{
console.log(subject); //undefiend as in phase 1 it just assigned space but not the content inside the variable hence it shows undefiened
var teacher='pulkit'; //function scope 
var subject='JS'; // function scope
teachingassisstant = 'vaibhav'; //autoglobal
console.log(teacher);
console.log(teachingassisstant);
}
fun2();
console.log(teacher);
console.log(teachingassisstant);
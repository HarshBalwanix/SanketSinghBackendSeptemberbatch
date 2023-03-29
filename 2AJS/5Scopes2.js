var teacher='sanket';
function fun()
{
    var teacher='pulkit';
    console.log(teachingassistant,teacher);//error as teachingassistant is autoglobal and it is undeclared, will assign value in execution phase
    teachingassistant='vaibhav'; //autogloble
}

function gun()
{
    console.log(subject);//undefined as subject is declared but it is empty before execution phase
    var subject ="JS";
    console.log(teacher);
}

console.log(teacher);
// fun();
gun();
/*
undefiend is a varible state when the scpes already knows about it but in the execution phase we have not alocated it a value 
undeclared is a variable state when we never formally declared a variable and before assigning the value so that it has chance to become autoglobal, we try to use it..

*/
function fun2()
{
    teachingassistant='Vaibhav';
    console.log(teachingassistant);
    var teachingassisstant = "JD";
}
fun2();// vaibhav

var fun4=10;
function fun3()
{
  console.log("hello world");
}
fun3();
// fun4(); //type error

//Hoisting - its a result of lexical scoping due to which we are able to access some fn and variables before declaring them.
gun1()

    function gun1()
    {
        console.log("Shoot");

    }

//Strict mode restricts autoglobals
//example
function fun5()
{
    ta="vaibhav";
    console.log(ta);
}
function gun5()
{
    'use strict'; // strict mode enabled now we cannot make autoglobals
    ta="vaibhav";
    console.log(ta);
}
fun5();
gun5();

var teacher1="sanket";
function fun7()
{
    teacher="pulkit";
    console.log("HI",teacher);
}
fun7();
console.log(teacher);


// IIFE Immediately invoked function expression
//function expresion is when we call a function without using keyword function
function fun8() //function
{

}
let gun9= function() //function expression
{

}
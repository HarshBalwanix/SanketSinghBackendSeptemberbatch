/*
function expressions
like 
var f = function(arg){
//code
}
or 
(function(){})
In jS we can pass fn as an argument to another function.
function expressions are of two types 
1 Anoymous 
2 Named
*/
function fun()
{
    console.log("fun called");
}

function gun(fn){
    console.log("inside gun");
    fn();
    console.log("leaving gun");
    console.trace();
}


gun(function(){
    console.log("new function passed");

})
gun(fun);

/*
Anonymous functions are hard to debug.
recursion is also tricky here.
*/
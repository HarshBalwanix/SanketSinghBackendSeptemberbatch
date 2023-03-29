/*
Closures 
help of these 2 functions to understand clousers
    setTimeout
    setInterval
these 2 fn are not by default given to us by js.

setTimeout
it is a fn that helps to exeute some task after a certain timer.
setTimeout(taskcallback(),time in milisec);

setInterval
it is a fn that helps to execute some task again and again after a given interval.
setInterval(taskcallback,interval in ms);
//Callbacks
A callback is a fn that is passed to another fn.
f(g(x)) this g(x) is callback

*/
function fun(x,fn) //consuming the callback
{
    /*
    x is number 
    fn is callback fn
    */
   for(let i=0;i<x;i++)
   {
    console.log(i);
   }
   fn(); // calling the callback
}

fun(10,function log()
// this is a callback function
{console.log("Custom logger")});

let arr=[1,2,3,4,5,6];
let x=arr.map(function process(v,i){
    /*
    v is value
    i is index
    */
    console.log(v,i);
    return v*v;
}
)
console.log(x);


function mapper(arr,fn){
    let result=[];
    for(let i=0;i<arr.length;i++)
    {
        let res=fn(arr[i],i);
        result.push(res);
    }
    return result;
}
 let array=[1,2,3,4,5];
 let y= mapper(array,function cuber(v,i){
    
    return v*v*v;
 });
 console.log(y,array);

///set Time out
let id1=setTimeout(function(){
    console.log("task completed")
},10000); //will print after 10 sec
let id2=setTimeout(function execute(){
    console.log("task completed 2");
    clearTimeout(id1);
},5000);

//setInterval
let id3=setInterval(function(){console.log("Task completed again")},3000);
setTimeout(function(){clearInterval(id3);},13000);
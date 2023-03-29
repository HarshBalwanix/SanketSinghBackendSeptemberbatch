function fun(inputString,fn)
{
    let output=inputString.split(',');
    for(let i=0;i<output.length;i++){
      fn(output[i]);  
    }
}
fun("name:harsh,subject:cse",function progress(input){
  let arr=input.split(":");
  console.log("{",arr[0], "->",arr[1], "}");
});
/*
Inversion of control- if there is some part of code whose control we are passing to someone else,and we dont know how that part will be executed
this problem is called inversion of control. 

Solution is Promises
Promises- these are special js objects that are also considered readability enhances. they get immediately returned from a fn setup to return a promise.
they act as placeholder for the data we hope to get back from some future task.
we also attach the functionality we want to defer until the future task is done.And promise object automatically handles execution of this functionality.
so promises do 2 things 1 inside js and 1 outside JS
1 it signs up the process requried to run in the runtime and gives a placeholder in JS, which has a value properly.


1 How to create a promise
2 How to consume a promise.
*/
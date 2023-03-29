console.log("Start");
setTimeout(function fun(){
    console.log("task completed");
},7000);
console.log("end");
//setTimeout is not a feature of JS
/*
Js Runtime
it was made to run inside browser only.
setTimeout is a timer based function provided by browser hence it is not working synchronously.
Node is the new  JS runtime(provides a lot of features).
as we know that runtime also provides functionalities that can be leveraged by js but how js handles them?
 

*/
/*
how js handles async operations?
js is single threaded language.
js by default only supports synchronous code execution.
the above property of synchronous code execution only works for operation natively known to js.

*/
console.log("start");
for(let  i=0;i<1000000000;i++)
{

}
console.log("Task completed");
console.log("end");

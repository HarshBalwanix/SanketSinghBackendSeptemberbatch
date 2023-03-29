/*
clousers
how task is being used by fun() even after todo() is completed 
this is happening due to closure, Closure is when a fm "remembers" its lexical scope even when the fn is executed outside the lexical scope.
*/
function todo(task){
    setTimeout(function fun(){
        console.log("Completed",task);
    },2000);
}
console.log("starting");
todo("Assignments"); //at the time instance when function fun will be called,the todo function is already over
console.log("ending");
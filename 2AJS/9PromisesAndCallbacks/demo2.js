function todo(task){
    console.log("starting todo");
    setTimeout(function fun(){
        console.log("Completed",task);
    },2000);
    task="dayananda"; //it remembers the variable
    console.log("end of todo");
}
console.log("starting");
todo("Assignments"); 
console.log("ending");
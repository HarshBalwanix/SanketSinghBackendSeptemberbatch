function process()
{
    console.log("start");
    setTimeout(function exec(){
        console.log("executed some task1")
    },3000);
    setTimeout(function exec(){
        console.log("executed some task2")
    },1000);
    for(let i=0;i<100000000;i++)
    {
        //some task
    }
    console.log("end");
};
process();
/*
q1 we can easily do tasks that take a lot of time to complete without blocking the code flow how?
 the condition to start executing the tasks from event queue is that:
   1 the call stack should be empty ie no fn in the call stack is left to be executed
   2 the global code is also done.

 setTimeout is stored in event queue.
*/
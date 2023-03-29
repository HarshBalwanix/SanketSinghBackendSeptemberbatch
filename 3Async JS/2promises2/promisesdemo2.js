function demo1()
{
    return new Promise(function(resolve,reject){
        console.log("Hi");
        setTimeout(function process()
        {
            console.log("task done");
            resolve("Students are the best");
        },5000);
        console.log("by");
    });
}


function demo2(val)
{
    return new Promise(function(resolve,reject){
       console.log("Start");
       setTimeout(function process(){
           console.log("Completed Timer");
           if(val%2==0){
            resolve("Even");
           }
           else{
            reject("Odd");
           }
       },10000);
       console.log("somewhere"); 
    });
};
 a =demo2(10);
console.log(a);
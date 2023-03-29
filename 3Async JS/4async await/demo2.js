function dummyPromise()
{
    return new Promise(function (resolve,reject)
    {
        setTimeout(function()
        {
            resolve("Timers promise");
        },10000);
    });
}
console.log("start of the file");
setTimeout(function timer1() {
    console.log("Timer 1 done");
    let y=dummyPromise();
    y.then(function promise(value)
    {
        console.log("Whose promise?", value);
    } )
}, 0);
for(let i=0;i<1000000;i++)
{
    //something
}
 let x =Promise.resolve("harsh's promise");
 x.then(function processPromise(value){
    console.log("Whose promise?",value);
 })
 setTimeout(function timer2() {
    console.log("Timer 2 done");
}, 0);

console.log("End of the file");
//promise goes in microtask queue and microtask queue will be given higher priority then event queue.
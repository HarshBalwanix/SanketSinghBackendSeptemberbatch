async function fun()
{
    console.log("Started");
    let x = await 20;// behaves like await Promise.resolve(20);
    console.log("exiting");
    return x;
};
console.log("start");
let val=fun();
val.then(function fun(value)
{
    console.log("Value is",value);
})
console.log("End"); 
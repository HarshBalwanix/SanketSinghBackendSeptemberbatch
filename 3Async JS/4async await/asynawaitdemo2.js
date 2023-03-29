function fetchData(url)
{
    return new Promise(function(resolve,reject)
    {
        console.log("Download started from",url);
        setTimeout(function process()
        {
            console.log("download completed");
            let data="dummy data";
            resolve(data);
        },5000);
    });
};
async function processing()
{
    console.log("Entering processing");
    let value1 =await fetchData(www.youtube.com);
    console.log("Youtube downloading done");
    let value2 =await fetchData(www.google.com);
    console.log("Google downloading done");
    console.log("Exiting processing");
    return value1+value2;
}
console.log("start");
setTimeout(function timer1(){
    console.log("TImer 1 ");
}, 0);
console.log("After setting timer 1");
let x=processing();
x.then(function(value)
{
    console.log("finally processing promise resolves with",value);
});
setTimeout(function timer2(){
    console.log("TImer 2 ");
}, 1000);
setTimeout(function timer3(){
    console.log("TImer 3 ");
}, 0);
console.log("End");
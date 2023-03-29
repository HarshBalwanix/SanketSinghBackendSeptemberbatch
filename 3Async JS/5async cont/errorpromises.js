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
let x=fetchData("fdsfdd");
x.then(function success(value)
{
    console.log("value is ",value);
}, function error(err){
    console.log("error is",err);
});
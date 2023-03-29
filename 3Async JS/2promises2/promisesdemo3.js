function fetchData(url)
{
    return new Promise(function(resolve,reject)
    {
        console.log("GOing to start download");
        setTimeout(function process(){
            let data="dummy data";
            console.log("download completed");
            resolve(data);
        },4000);
        console.log("Timer to mimic download started");
    });
}
console.log("starting the program");
console.log("We are expecting to mimic a downloader");
x= fetchData('www.google.com');
console.log("New promise object created successfully but downloading still going on");
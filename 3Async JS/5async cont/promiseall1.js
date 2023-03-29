/*
Write a function to download data from url
Write a function to write data in a file and return it
Write a function to upload  file to a new url
*/
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


function writeFile(data)
{
    return new Promise( function(resolve,reject)
    {
        console.log("Started writing",data,"in a file");
        setTimeout(function processwriting()
        {
            let output ="data.txt";
            console.log("writing completed");
            resolve(output);
        },3000);
    });
};

function uploadFile(file,newUrl)
{
 return new Promise(function(resolve,reject)
 {
    console.log("uploading the file",file,"to",newUrl);
    setTimeout(function processupload()
    {
        let result="sucess";
        console.log("uploading completed");
        resolve(result);
    },5000);
 });
};
async function processing1()
{
let downloadedData= await fetchData('www.group.com');
let writtenData= await writeFile(downloadedData); 
let uploadData= await uploadFile(writtenData,'www.gdrive.com'); 
return uploadData;
}
async function processing2()
{
let downloadedData= await fetchData('www.grup.com');
let writtenData= await writeFile(downloadedData); 
let uploadData= await uploadFile(writtenData,'www.gdrive.com'); 
return uploadData;
}
async function processing3()
{
let downloadedData= await fetchData('www.rup.com');
let writtenData= await writeFile(downloadedData); 
let uploadData= await uploadFile(writtenData,'www.gdrive.com'); 
return uploadData;
}
console.log("start");
Promise.all([processing1(),processing2(),processing3()]).then(function pro(value) //do all promises together parallely and return a promise array 
{
    console.log(value);
})


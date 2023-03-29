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


/*
we have to use .then() function on the promise object,to bind the fn we want to execute once we fulfill a promise
the .then() takes fn as an argument that we want to execute after promise fulfills,and the argument fn takes value property as parameters.

*/
// let downloadpromise=fetchData('www.datadrive.com');
// downloadpromise.then(function processDowload(value){
//     console.log("Download promise fulfilled");
//     let writePromise=writeFile(value);
//     writePromise.then(function processwriting(value){
//         console.log('writing done');
//         console.log('filename is',value);
//     })
// } );

/*
promise hell created but above code solves inversion of control.

*/
let downloadPromise=fetchData('www.datadrive.com');
downloadPromise
.then(function processDownload(value)
{
    console.log('Downloading done with value',value);
    return value;
})
.then(function processwrite(value)
{
    return writeFile(value);
    
})
.then(function processFile(value)
{
   return uploadFile(value,'www.gdrive.com');
})
.then(function process()
{
    console.log("done");
});
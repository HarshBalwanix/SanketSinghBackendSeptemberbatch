function fetchCustom(url,fn){
    //download content of url 
    // it takes 3 sec to download
    //we will download the content from the url and pass it to the callback.
    console.log("start downloading");
    setTimeout(function process(){
        console.log("Download completed");
        let response="Dummy Data";
        fn(response);
       
    },3000);

}

function writefile(data,fn)
{
    console.log("started writing  data",data);
    setTimeout(function process(){
        console.log("writing completed");    
        let filename="output.txt";
        fn(filename);
    },4000);
}

function uploadfile(filename,newurl,fn)
{
    console.log("started uploading");
    setTimeout(function process(){
        console.log(filename,"upload completed on ",newurl);
        let uploadResponse="success";
        fn(uploadResponse);
    },2000);
}
fetchCustom('www.google.com',function downloadCallback(response){
    console.log("Download response is:",response);
    
    writefile(response,function writecallback(filenameResponse){
        console.log("New file written is",filenameResponse);
        uploadfile(filenameResponse,'www.googledrive.com',function uploadcallback(uploadResponse){
            console.log("successfully uploaded",uploadResponse);
            console.log("ending the function");
        });
    });
});

// using http module we can setup a basic server 
const http=require('http');
const PORT=3000;
/*
http module contains a function called as createServer
this createServer function takes a callback as the input
inside the callback we get two arguments 
 -request ->this argument contains all the details about the incoming req
 - response ->this argument contains functions using which we can prepare the response
the createServer function returns us the server object.
*/
const server=http.createServer(function exec(request,response){
    console.log(request.method);
    if(request.url=='/home')
    {
        response.end("Welcome to home");
    }
    else if(request.url=='/faq')
    {
        response.end("Welcome to FAQ section");
    }
    else{
        response.end("Welcome");
    }
});
server.listen(PORT, function process(){
    console.log("Started the port ",PORT);
});
/*
PORT-
pORT is given along with the IP address to uniquely identify the port
example 13.16.24.5:5050  here 5050 is port number 

*/
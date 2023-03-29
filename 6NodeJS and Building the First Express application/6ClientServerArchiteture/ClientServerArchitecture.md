Client Server Architecture
Any user facing interctive end
Server -> Server can be a hardware or a software
It is a hardware or a computer program that provides a service to anther computer program or a different machine.

How communication is done bw client and server
client sends http req server process and sends http  response to client
we have to prepare API contrat
what url to hit
what type of request to hit
what data to send
how to send the data 
we have so many conventions
REST
SOAP
gRPC etc
REST is most common 

REST API
Repersentational State Transfer 
->Every real life entity is expected to be represented as a resource. 
-> Everytime with a RESTful API request we have to send a type/methods of the request
->URLs


->http request can have different types
by following REST conventions
 get -> retreives info about a resource 
 post -> create side effects on a resource
 put -> make complete update to a resource
 patch -> make partial update to a resource
 delete-> delete a resource

Get 
in get req data is send in url, that means it get saved in our history, we can log it cache it etc.
Post 
in post req data is not expected to be sent in URL, rather than in req body/payload.

3 ways to send data 
-> request Params  ex /movies/blackpanther
-> Query Params    ex /categories/electronics?company=samsung&price=1200   means for filteration
-> request body ex payload/body

In REST convention,data/msgs sent apart from url are sent in JSON.

REST Api for a blog

CREATE- Post 
url /blogs
req body -> {

 name : '  '
 desc : '  '
}
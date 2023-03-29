Network protocols are set of rules and regulations setup to communicate and share information over a network.

Ex HTTP,UDP,TCP,SMTP etc.

Packets
In order to share data, we cant send big chunk of data over the network.So we divide the data into smaller chunks.
these small chunks are packets.

Address
Sending msgs over the network requires the destination details.This detail uniquely identify the end system is called as address.

Ports
Any machine could be runnning many network apps.
In order to distinguish these apps for receiving msgs we use ports.(port number).
Port helps you get the packets to specific process on the host.
Every process has a 16bit port number.
   0 to 2^16 =65535(range of ports)
   0 to 1023 are well known ports
   ex port 80 http
           443 https
    
   1024-49152 Registered ports
   They are used by specific, potentially properitery apps/process that are known but not system defined.
   Ex - Sql 1433
        mongo 27017
    
    49152-65535 - dynamic ports
    for future purpose

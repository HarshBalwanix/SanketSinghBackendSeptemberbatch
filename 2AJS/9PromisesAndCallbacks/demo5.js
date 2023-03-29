function test(){
    for(let i=0;i<3;i++)
    {
        setTimeout(function exec(){
            console.log(`i :`+ i);
        },i*1000);
    }
}
test();
//timer i=0 , 0ms
        // i=1; 1ms
        //i=2; 2ms
        //i=3,3ms as i is 3 we will get i:0 i:1 i:2
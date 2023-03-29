
/*
how promises work behind the scene?
promise object have 4 major propereties
1 status
2 value
3 onfulfillment
4 onReject

status- it shows current promise status
    1 pending state     going on 
    2 fulfilled state   success
    3 reject state      error

value- when status of promise is pending, this value property is undefined,the moment promise is resolved the value property is updated from undefined to the new value.
(value can be considered as return value)
So the value property sets like a placeholder till the time promise finishes.

onfulfillment-this is an array,which contains functions that we attach to our promise object.
(To a promise object we can attach some fun using .then() method.)
when the value property is updated from undefined, to the new value, js gives chance to these attached function one by one with the value property as their argument(if there is no piece of code in callstack and global code left.)




*/
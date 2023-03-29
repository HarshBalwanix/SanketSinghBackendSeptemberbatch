/*
is console.log asynchrous or synchronous?
console.log is provided by runtime and is not a feature of Js.

console.log is niether synchronous nor asynchronous as it depends upon your system.
for files io console.log is synchronous.
in production level code, we dont use console.log().
console.log() goes to callstack.



In event queue we receive callbacks

Disadvantages of callbacks
1 callback hell(callback inside callback and so on )
    Promises is solution of callback hell
    but we also have promise hell

2 Inversion of control is the biggest disadvantage.
*/

function a(name){
    return function b(){
        console.log(name);
    }
}
let x=a("harsh");
console.log(x);
x();
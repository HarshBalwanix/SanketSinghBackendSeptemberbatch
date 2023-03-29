// Conditionals
// if else else if are keywords
if(10<20)
{
    console.log(5);
}
if(10%2==1)
{
    console.log("Even number");
}
else if(10==10)
{
    console.log("else if");
}
else{
    console.log(23);
}
console.log((2>1)&&"Harsh");
//while loops
let i=0;
while(i<10)
{
    console.log(i);
    i++;
}
//for loops
for(let i=0;i<10;i++)
{
    console.log(i);
}

//break and continue keyword
for(i=0;i<5;i++)
{
    let str="";
    for(j=0;true;j++)
    {
        str=str+"*";
        if(j==i)
        {
            break; }
}
console.log(str);
}
//Continue
for(let i=0;i<10;i++)
{
    if(i%3==0)
    {
        continue;
    }
    console.log(i);
}
//Switch case 
let exp="*";
let a=10;
let b=2;
switch(exp)
{
    case "+":
        console.log(a+b);
        break;
    case "-":
            console.log(a-b);
            break;
    case "*":
            console.log(a*b);
            break;
    case "/":
            console.log(a/b);
             break;
    case "%":
             console.log(a%b);
            break;
    default:    
    console.log("Invalid Input");

}
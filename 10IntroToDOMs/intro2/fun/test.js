// select the buttons
let yesbtn=document.getElementById('yes');
let nobtn=document.getElementById('no');

yesbtn.addEventListener('click',submit);
nobtn.addEventListener('click',submit);
nobtn.addEventListener('mouseover',function()
{
    nobtn.innerHTML='Yes';
    yesbtn.innerHTML='No';

})
nobtn.addEventListener('mouseout',function()
{
    yesbtn.innerHTML='Yes';
    nobtn.innerHTML='No';

})
function submit()
{
    window.alert("congrats you got a date with me!");
}
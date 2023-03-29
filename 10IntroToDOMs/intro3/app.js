//grab the form element
let form=document.getElementById('form');
//add the event listener
form.addEventListener('submit',function()
{
    console.log("I will handle the submission");
    let username=document.getElementById('username');
    let password=document.getElementById('password');
    event.preventDefault();
    this.reset();
})
//check right input

//then submit
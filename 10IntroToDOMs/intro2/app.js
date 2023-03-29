
function changetheme(){

    let head=document.getElementsByTagName('head')[0];
    //select the current link css tag
    let linktag=document.getElementById('css');
    //remove the css link tag
    head.removeChild(linktag);
    //create a new linktag
    let newlinktag = document.createElement('link');
    newlinktag.setAttribute('id','cssnew');
    newlinktag.setAttribute('rel','stylesheet');
    //add the new href
    newlinktag.setAttribute('href','darktheme.css');
    //add it to head
    head.append(newlinktag);
}
//select the button
let button=document.getElementById('btn');
//add the event listener
button.addEventListener('click',changetheme);
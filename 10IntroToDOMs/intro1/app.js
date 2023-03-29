let x;
x=document.getElementById('text');
y=document.getElementsByClassName('items');
z=document.querySelectorAll('h1');
a=document.querySelectorAll('.items');
console.log(x);
console.log(y);
console.log(z);
console.log(a);
let h=document.createElement('li');
h.className='items';
h.innerText='item5';
h.style.color='blue';
let ul=document.getElementById('list');
ul.append(h);

var items=document.getElementsByTagName('li');
for(let i=0;i<items.length;i++)
{
    const item=items[i];
    let link= item.querySelector('a');
    link.setAttribute('href','https://www.google.com/search?q='+link.innerText);
}
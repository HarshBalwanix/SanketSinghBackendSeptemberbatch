function Product(n,p)
{
    this.name=n;
    this.price=p;
    //if we dont write return even then also it will return this automatically because of  new keyword
    //return this;
    this.display =function(){
        console.log(this.name, this.price);
    }
}
const p1= new Product("iphone",100000);
console.log(p1);
p1.display();
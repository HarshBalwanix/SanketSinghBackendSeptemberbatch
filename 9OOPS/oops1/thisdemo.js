const obj= {
    name:"harsh",
    display:function(){
        console.log(this,"is the calling site");
    }
    
}
const obj1= {
    name:"Sanket",
    display:()=>{
        console.log(this,"is the calling site");
    }
    
}
obj.display();
obj1.display();
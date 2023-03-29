Class( blueprint)
 In JS we have a class keyword.
 inside class-
    1 Properties -> name,desc,price,rating  known as data members
    2 Behaviour -> update,key,display

To define member function we can just write normal fun in the class
But we need a very special fun as well which doesnt qualify as a member fun

# Constructor
new objects can be created by calling the function

To define a data member we need to initialize inside the constructor function. we use this keyword to do it.
 
 constructor(n,p)
 {
    this.name=n;
    this.price=p;
 }

 # this keyword
 this keyword belong to the calling side

 # new keyword
 executes 4 step process
 1 creates brand new empty object
 2 it does a process of linking
 3 it calls the function with the this property assigned to the empty object it created.
 4 the function execution starts.(this refer to the calling side)
At last if the funtion desnt return any specific object it automatically returns this.
otherwise it returns the object returned by you.
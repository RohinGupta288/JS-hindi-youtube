//literals se singleton nhi banega 
//constructor se banega

// Object.create(); <= singleton banata hai
const mySym = Symbol("key1")
const JsUser = {
    name: "rohin",
    [mySym]: "mykey1",
    "fullName": "rohin gupta",//<=this can be accessed only using the sqaure notation
    age: 18,
    loaction: "Jaipur",
    email: "rohin@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday","Saturday"]
}

//2 ways to access values
// console.log(JsUser.email);//notice the difference in call
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);<= symbols are called like this

//reassigning
JsUser.email = "rohin@micrSoft.com";
//Object.freeze(JsUser);//all further changes are ignored

// we can further add attributes and functions in the object

JsUser.greeting = function(){
    console.log("hello JS user");
}
console.log(JsUser.greeting());//<=if done like JsUser.greeting it gives
                               //only the reference of 
JsUser.greeting2 = function(){
    console.log(`hello JS user, ${this.name}`);
}
console.log(JsUser.greeting2());
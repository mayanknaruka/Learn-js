// singleton
// object.create - it is a constructor 

// object literals

const mySym = Symbol("key1")

const Jsuser = {
    name:"mayank",                      //name is "key" & mayank is "value" keep it mind 
    "full name" : "mayank naruka",
    [mySym] : "mykey1",
    age: 18,
    city : "jaipur",
    email: "mayank@google.com",
    isLoggeding : false,
    lastLogindays : ["monday", "tuesday"]
}

// console.log(Jsuser.email);          //this good for use 
// console.log(Jsuser["email"]);        // but this one is better for use 
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "mayankchatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "mayankmicrosoft.com"
// console.log(Jsuser);


Jsuser.greeting = function (){
    console.log("hello js user");
}
Jsuser.greetingtwo = function (){
    console.log(`hello js usesr, ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());


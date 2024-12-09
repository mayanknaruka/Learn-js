const userEmail = []

if (userEmail) {
    console.log("got user email");
    
} else {
    console.log("Dont't get user email ");
    
}

// falsy values 

// false, 0. -0, Bigint 0n, "", Null, undefined, NaN

// truthy values 
// "0", 'false', " " [], {}, funtion(){}

// if (userEmail.length===0){
//     console.log("array is empty");   
// }

const emptyObj = {}

if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");   
}

// Nullish coalescing operator (??): null undefined 

let val1
// val1 = 10 ?? 5
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniory operator

// condition ? true : false 

const iceteaprice = 100
iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80");


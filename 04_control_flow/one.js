// IF
// const isUserLoggedIn = true 
// const temperature = 41

// if (temperature === 41){
//     console.log("is less than 50");
// } else {
//     console.log("is greater than 50 ");

// }
// console.log("executed");
// <, > <=, >=, !=, ==, ===, !== 

// const score = 200 
// if (score > 100) {
//     let power = "fly"
//     console.log(`user power ${power}`);

// }

// console.log(`user power ${power}`);


// const balance = 1000
// if (balance > 500) console.log("test"), console.log("test 2");  dont use this method it is not a practice for coding 

// if (balance < 500) {
//     console.log("less than 500");

// } else if (balance < 700) {
//     console.log("less than 700");

// } else if (balance < 900) {
//     console.log("less than 900");

// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true 
const debitCard = true
const loggedInFromGoggle = false 
const loggedInFromEmail = true 

if (userLoggedIn && debitCard) {
    console.log("allow buy an item");
}

if (loggedInFromGoggle || loggedInFromEmail) {
    console.log("user logged in");

}
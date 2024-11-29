function sayMyName() {
    console.log("m");
    console.log("a");
    console.log("y");
    console.log("a");
    console.log("n");
    console.log("k");
    
}
// sayMyName()

function addTwoNumber(number1, number2){      //ye hai perameter 
    console.log(number1 + number2);
    
}

function addTwoNumber(number1, number2){     
//   let result = number1+ number2
//   return result
   return number1 + number2
    
}

const result = addTwoNumber(3, 5)   // ye hai apke arguement 

// console.log("return: " , result);


function userLoggedIn(username = "johny") {
    if (!username) {
        console.log("please enter your name");
        return
    }
    return `${username} just logged in `
}

// console.log(userLoggedIn("mayank"));
// console.log(userLoggedIn());


function calulateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calulateCartPrice(200, 400, 500, 700));

const user = {
    username : "mayank",
    price : 299
}

function handleobject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleobject(user)
handleobject({
    username: "manku",
    price : 199 
})

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getarray) {
    return getarray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,3000,6544]))
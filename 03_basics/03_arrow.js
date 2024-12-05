const user = {
    username: "mayank",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website `)
        console.log(this);

    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); 

// function chai (){
//     let username = "mankuu"
//     // console.log(this.username)
// }

// chai()

// const chai = function(){
//     let username = "mankuu"
//     console.log(this.username)
// }

// const chai = () => {
//     let username = "mankuu"
//     console.log(this)
// }

// chai()


// const addtwo = (num1, num2) => {
//      return num1 + num2
// }

// const addtwo = (num1, num2) =>  num1 + num2

// const addtwo = (num1, num2) =>  (num1 + num2)

const addtwo = (num1, num2) =>  ({username : "manku"})


console.log(addtwo(3,7));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// date is a OBJECT play with date and times

let myDate = new Date();

// console.log(myDate.toString())
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date (2023, 0, 19)
// let myCreatedDate = new Date (2023, 0, 19,5,3)
let myCreatedDate = new Date ("01-19-2024")
// console.log(myCreatedDate.toString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
console.log(Math.round(Date.now()/1000 ));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

`${newDate.getDay()}and the time is`

// const newDate = new Date(); // Create a new Date object example by chatgpt
// console.log(`${newDate.getDay()} and the time is ${newDate.toLocaleTimeString()}`);

newDate.toLocaleString('default',{
    weekday: "long"
})



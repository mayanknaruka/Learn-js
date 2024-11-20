const score = 400;
// console.log(score);

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length);    //use tostring for make string
// console.log(balance.toFixed(2));          //use fixed for .00 like a divide

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));    //use for approxmetily number find

const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'));   // use for zeros to help for counting and understandable


// ---------------------------------Maths----------------------------------------------------------------------
// the maths is come from js and it is library for defualt use #maths is a object 

// console.log(Math)
// console.log(Math.abs(-4))  //negtive value change to postive value 

// console.log(Math.round(4.6))
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));

// console.log(Math.min(4,3,8,5));
// console.log(Math.max(4,3,8,5));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor (Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min );



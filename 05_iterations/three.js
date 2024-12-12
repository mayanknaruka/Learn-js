// for of loop 

// ["" "" ""]
[{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);    
}

const greeting = "Hello world!"
for (const greet of greeting) {
    // console.log(`each char is ${greet}`);   
}

// Maps 

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "france")
map.set("IN", "India")


console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-" ,value)   
}

const myObject = {
    game1: "BGMI",
    game2: "GTA5"
}

for (const [key, value] of myObject) {
    // for (const [key, value] of Object.entries(myObject)) {  // this is how it works object is not iterable 

    console.log(key, ":-" ,value);
    
}
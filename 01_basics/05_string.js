const name ="mayank "
const repocount= 50

 // console.log(name + repocount + " value ")  => don't use this one

console.log(`hello my name is ${name}and my repo count is ${repocount}`)

const gamename = new String('mayankk')

console.log(gamename[0]);
console.log(gamename.__proto__)


console.log(gamename.length)
console.log(gamename.toUpperCase())

console.log(gamename.charAt(2))
console.log(gamename.indexOf('y'))

const newString = gamename.substring(0,4);
console.log(newString);

const anotherString = gamename.slice(-3,4);
console.log(anotherString);

const newstringone = "  mayank  ";
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://www.youtube.com/mayanknaruka"

console.log(url.replace('%10', '-'));

console.log(url.includes('mayank'));

console.log(gamename.split("-"));





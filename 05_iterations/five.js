const coding = ["js", "python", "java", "ruby", "cpp"]

coding.forEach(function (value) {
    // console.log(value);
    
})

// coding.forEach( (item) => {
//         console.log(item);
        
// } )

// function printMe (item){
//       console.log(item);
      
// }
// coding.forEach(printMe)

coding.forEach( (item, index, Arr) => {
    console.log(item, index, Arr);
    
})

const mycoding = [
    {
        language : "javascipt",
        languagefilename : "js"
    },
    {
        language : "java",
        languagefilename: "java"
    },
    {
        language : "python",
        languagefilename: "py"
    },
]

mycoding.forEach( (item) => {
    console.log(item.language, item.languagefilename);
    
})
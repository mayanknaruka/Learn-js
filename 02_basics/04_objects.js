// const tinderuser = new Object()  -----> singleton objects 
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "manku"
tinderuser.isLoggedIn = true

// console.log(tinderuser);

const regularUser = {
    email:"regular@gmail.com",
    fullname:{
        userfullname:{
            firstname:"mayank",
            lastname:"naruka"
        }

    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}    //this is spread method it was used 90% of time 
// console.log(obj3);


 const user =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
 ]

 user[1].email
//  console.log(tinderuser);

//  console.log(Object.keys(tinderuser));
//  console.log(Object.values(tinderuser));
//  console.log(Object.entries(tinderuser));

//  console.log(tinderuser.hasOwnProperty("isLoggedIn"));

// --------------------object de-structure and JSON API----------------------------


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

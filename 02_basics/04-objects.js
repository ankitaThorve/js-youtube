// const claudeUser = new Object()
const claudeUser = {}

claudeUser.id = "123abc"
claudeUser.name = "Sam"
claudeUser.isLoggedIn = false

// console.log(claudeUser)

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ankita",
            lastname: "thorve"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 }

// console.log(obj3)

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email
// console.log(claudeUser)

// console.log(Object.keys(claudeUser))
// console.log(Object.values(claudeUser))
// console.log(Object.entries(claudeUser))

// console.log(claudeUser.hasOwnProperty('isLogged'))

const course = {
    coursename: "js on hindi",
    price: 999,
    courseInstructor: "hitesh",
}

// course.courseInstructor 
const {courseInstructor: instructor} = course

// console.log(courseInstructor)
console.log(instructor)

// {
//     'name': "ankita",
//     'coursename': "js in hindi",
//     'price': "free"
// }

[
    {},
    {},
    {}
]
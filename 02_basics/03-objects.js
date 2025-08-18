// Singleton
// object.create

// object literals
const mysym = Symbol("Key1")

const jsUser = {
    name: "Ankita",
    "full name": "Ankita Thorve",
    [mysym]: "mykey1",
    age: 18,
    location: "Pune",
    email: "ankita@google.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Thursday', 'Saturday']
}

// console.log(jsUser.email)
// console.log(jsUser['email'])
// console.log(jsUser["full name"])
// console.log(jsUser[mysym])

jsUser.email = "ankita@openAI.com"
// console.log(jsUser)
// Object.freeze(jsUser)
jsUser.email = "ankita@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello Js User")
}

jsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())
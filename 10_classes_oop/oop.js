const user = {
    username: 'ankita',
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from DB")
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

const promiseOne = new Promise() // new
const date = new Date() // new

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User('ankita', 12, true)
const userTwo = new User('cookie', 19, false)

console.log(userOne.constructor)
console.log(userTwo)
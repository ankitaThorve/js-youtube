//  ES6

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const cookie = new User('cookie', 'c@km.com', '123')
console.log(cookie.encryptPassword())
console.log(cookie.changeUserName())

// behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const cake = new User('cake', 'c@km.com', '123')

console.log(cake.encryptPassword())
console.log(cake.changeUserName())

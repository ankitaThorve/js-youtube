class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, passowrd){
        super(username)
        this.email = email
        this.passowrd = passowrd
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const cookie = new Teacher('coo', 'coo@h.com', '123')

cookie.addCourse()

const food = new User('masalamaggie')

food.logMe()

console.log(cookie instanceof Teacher)
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const ankita = new User('ankita')
// console.log(ankita.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const info = new Teacher('John', 'john@school.com')
console.log(info.logMe())
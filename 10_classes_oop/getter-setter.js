class user {
    constructor(email, password){
        this.email= email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}ankita`
    }

    set password(value){
        this._password = value
    }
}

const ankita = new user('ankita@ai.com', 'abc')
console.log(ankita.password)
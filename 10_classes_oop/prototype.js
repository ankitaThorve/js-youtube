let myName = "Ankita       "

console.log(myName.trueLength)

let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spider Power is ${this.spiderman}`)
    }
}

Object.prototype.ankita = function(){
    console.log(`ankita is present is all objects`)
}

Array.prototype.heyAnkita = function(){
    console.log(`Ankita says hello`)
}

// heroPower.ankita()
myHeros.ankita()
myHeros.heyAnkita()

// heroPower.heyAnkita()

//  Inheritance -----

const user = {
    name: "coffee",
    email: "coffee@google.com"
}

const Teacher = {
    makeVideo: true
}

const teachingSupport= {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: teachingSupport
}

Teacher.__proto__ = user

//  Modern Syntax -------
Object.setPrototypeOf(teachingSupport, Teacher)

let anotherUserName = "CookieeAndCode"

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength()
"ankita".trueLength()
"coffee".trueLength()
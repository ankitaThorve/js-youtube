// Premitive

//  7 types: string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 345776873868697965n

// Reference (non premitive)

// Array, Objects, Functions

const heros = ["shaktiman", "ironman", "thor", "bucky", ""];

let myObj = {
    name: "ankita",
    age: 18,
}

const myFunction = function(){
    console.log('hello world!')
}

myFunction()

console.log(typeof isLoggedIn)
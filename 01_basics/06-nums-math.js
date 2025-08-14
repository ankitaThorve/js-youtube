const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// // methods---
// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNum = 23.756
// console.log(otherNum.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

// ------------------------------Maths------------------------------------

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.abs(6))
console.log(Math.round(23.78))
console.log(Math.ceil(23.18))
console.log(Math.floor(23.68))
console.log(Math.min(2,5,9,12,0,34))
console.log(Math.max(2,5,9,12,0,34))

console.log(Math.random()) //0 to 1 value
console.log(Math.random()*10) //above 1 to 9
console.log((Math.random()*10) + 1) // 0 case avoide

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1))+min)
const name = "ankita"
const repoCount = 25

// console.log(name + repoCount + " " + "value")

console.log(`hello, my name is ${name} & my repo count is ${repoCount}.`)

const gameName = new String ("ankietaa-thorve-boo");

// console.log(gameName[4])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4)
console.log(newString)
const anotherString = gameName.slice(1, 4)
console.log(anotherString)


const string1 = "    ankita    "
console.log(string1)
console.log(string1.trim())

const url = "https://ankita.com/ankita%20thorve"

console.log(url.replace('%20', '-'))
console.log(url.includes('ankita'))
console.log(url.includes('mudra'))

console.log(gameName.split('-'))
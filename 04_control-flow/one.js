// if

/*if (true) {
    // scope code will execute
}

if (false) {
    // scope code will not execute
}

if (2 == 2) {
    console.log('executed')
}

const temp = 41
if (temp < 50) {
    console.log('temperature is less than 50')
} else {
    console.log('temperature is greater than 50')
}

console.log('temperature check')

const score = 200

if(score < 100){
    var power = 'fly'
    console.log(`User power: ${power}`)
}
// console.log(`User power: ${power}`)
*/

// const balance = 1000

// if (balance > 500) console.log('test');

// if (balance < 500) {
//     console.log('less than 500')
// } else if (balance < 750) {

//     console.log('less than 750')
// }
// else if (balance > 900) {
//     console.log('greater than 900')

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log('Allowed to buy course')
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log('User logged in')
}
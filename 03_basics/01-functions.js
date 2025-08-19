
function sayMyName() {
    console.log("A")
    console.log("N")
    console.log("K")
    console.log("I")
    console.log("T")
    console.log("A")
}

// sayMyName() //function call

// function addTwoNumbers(number1, number2) { // parameters
//     console.log(number1 + number2)
// }



function addTwoNumbers(number1, number2) { // parameters
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// addTwoNumbers(2,4) //function call with arguments
const result = addTwoNumbers(2, 4) //function call with arguments

// console.log(`Result is : ${result}`) //undefined
// console.log("Result: ", result)

function loginUsermessage(username = "sam"){
    // if (username === undefined) {
    if (!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUsermessage("ankita"))
// console.log(loginUsermessage(""))
// console.log(loginUsermessage('ankita'))

function calculateCartPrice (...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 600, 2000))

const user = {
    username: "ankita",
    prices: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`)
}

// handleObject(user)
handleObject({
    username: 'sam',
    prices: 300,
})

const newArray = [200, 400, 600, 800, 1000]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(newArray))
console.log(returnSecondValue([10,20,30,40]))
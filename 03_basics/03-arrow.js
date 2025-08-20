const user = {
    username: "ankita",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`) //this - current context
        // console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam" // change context 
// user.welcomeMessage()
// console.log(this); // empty object

// function coffee(){
//     let username = 'ankita'
//     console.log(this.username)
// }
// coffee()

// const coffee = () => {
//     let username = 'ankita'
//     console.log(this)
// }
// coffee()

const addTwo = (num1, num2) => { //arrow function
    return num1 + num2
}

// console.log(addTwo(3,4))

// const multitwo = (num1, num2) => num1 * num2 //explicite return
// const multitwo = (num1, num2) => (num1 * num2) // parenthesis 
const multitwo = (num1, num2) => ({username: "ankita"})  
console.log(multitwo(2,3))


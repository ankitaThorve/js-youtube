// let a = 10
// const b = 20
// var c = 30
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a)
    // var c = 30
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "ankita"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}

// one()

if (true) {
    const username = "ankita"
    if (username === "ankita") {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
    // console.log(username)
}

// ------------------------------Interesting--------------------------------
console.log(addone(5)) //before initialization
function addone(num){
    return num + 1
}


addtwo(5) // can not access here
const addtwo = function(num){ // function expression
    return num + 2
}

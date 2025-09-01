const coding = ['js', 'ruby', 'java', 'html', 'php']

// coding.forEach( function (language){ //callback function
//     console.log(language)
// } )

coding.forEach( (language) =>{ // arrow functions
    // console.log(language)
} )

function printMe (language){
    // console.log(language)
}

// coding.forEach(printMe) // function call

coding.forEach( (language, index, arr)=>{
    // console.log(language, index, arr)
})

const myCoding =[
    {
        langName: 'javascript',
        langFileName: 'js'
    },
    {
        langName: 'java',
        langFileName: 'java'
    },
    {
        langName: 'html',
        langFileName: 'css'
    },
]

myCoding.forEach( (item)=> {
    console.log(`${item.langName} with extension ${item.langFileName}`)
} )
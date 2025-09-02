const myNums = [1, 2, 3, 4, 5]

// const newNum = myNums.map( (num)=>{ return num + 10} )
/*const newNum = myNums.forEach( (num)=>{
    return num +  10
    
} )*/
const newNum = myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num >= 40)

console.log(newNum)
const myNum = [1,2,3]

// const myTotal = myNum.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)

const myTotal = myNum.reduce((acc, curr)=>(acc + curr),0)
// console.log(myTotal)

const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999,
    },
    {
        itemName: 'py course',
        price: 999,
    },
    {
        itemName: 'dsa course',
        price: 10999,
    }
]

const priceToPay = shoppingCart.reduce((acc, item)=>acc + item.price,0)

console.log(priceToPay)
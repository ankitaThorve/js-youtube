const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes)

const another_array = [1,2,3,[4,5],6,7,[8,9,10,[1,2,3]]]
const real_array = another_array.flat(2)
// console.log(real_array)

console.log(Array.isArray("Ankita"))
console.log(Array.from("Ankita"))
console.log(Array.from({name: "ankita"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
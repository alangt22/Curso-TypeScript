// 1 numbers
let x: number = 10

console.log(x)

x = 16

console.log(typeof x)

const y: number = 15.584848

console.log(typeof y)

console.log(y)
console.log(y.toPrecision(3))



// 2 string

const firstName: string = "Alan"

console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Nunes"

fullName = firstName + " " + lastName

console.log(fullName.toUpperCase())


// 3 boolean

let a: boolean = false
console.log(a)
console.log(typeof a)
a = true
console.log(a)


// 4 inference e anotation
let ann: string = "teste"

let inf = "teste"

// ann = 1
// inf = 1

console.log("testando")
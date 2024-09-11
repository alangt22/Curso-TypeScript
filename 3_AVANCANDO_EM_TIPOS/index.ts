//1 arrays

let numbers: number[] = [1,2,3]
numbers.push(5)

console.log(numbers[2])

// numbers = "teste"

const nomes: string[] = ["Alan", "joão"]
// nomes.push(4)

console.log(nomes)

// 2 outra sintaxe array

const nums: Array<number> = [100,200] 

nums.push(300)

console.log(nums)

console.log(nums[2])

// 3 any

const arr1: any = [1, "teste", true, [], {nome:"Alan"}]

console.log(arr1)

// 4 parametros tipados

function soma(a:number, b:number) {
    console.log(a + b)
}

soma(4, 5)

//5 retorno de função

function greeting(name:string): string {
    return `Ola ${name}`
}

console.log(greeting("Alan"))


//6 função anonima

setTimeout(function() {
    const salary: number = 1000

    // console.log(parseFloat(salary))

    //   console.log(salary)
}, 2000);


//7 tipos de objeto

function passCoordinates(coord: {x: number, y: number}) {
    console.log("X coordinates: " + coord.x)
    console.log("Y coordinates: " + coord.y)
}

const objcoord = {x: 329, y: 84.2}

passCoordinates(objcoord)

//8 props opcionais

function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    if(c) {
        console.log("C: " + c)
    }
    
}

showNumbers(1,2,3)
showNumbers(4,5,6)

//9 validando argumento opcional

function advancedGreeting(firstName: string, lastName?: string) {
        if(lastName !== undefined) {
            return `Olá, ${firstName} ${lastName}, tudo bem?`
        }

        return `Olá ${firstName}, tudo bem?`
}

console.log(advancedGreeting("Alan", "Nunes"))
console.log(advancedGreeting("Alan"))


//10 union type

function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance("500")

//11 avançando em onion types

function showUserRole( role: boolean | string) {
    if(typeof role === "boolean") {
        return "Usuario não aprovado!"
    }
    return `A função do usuário é: ${role}` 
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))


//12 type alias
type ID = string | number 
function showId(id: ID) {
    console.log(`O ID é: ${id}`)
}

showId(1)
showId("200")

//13 interface

interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj:Point={
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)

//14 interface x type alias 

interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Alan", age: 28}

console.log(somePerson)

//15 literal types

let test: "testando"

test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center" ) {
        console.log(`A direção é: ${direction}`)
}

showDirection("left")

// 16 non-null Assertion Operator
const p = document.getElementById("some-p")

console.log(p!.innerText)

//17 bigint

let n: bigint

n = 1000n

console.log(n)

//18 symbol

let symbolA:symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)



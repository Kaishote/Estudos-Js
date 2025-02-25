//Quanto menos var, melhor!
var a = 3 // Devo evitar o uso de var (pq dá hoisting) 
let b = 4

var a = 30
b = 40

console.log(a,b)

a = 300
b = 400

console.log(a,b)

// Quanto mais constantes, melhor!
const c = 5
// c = 50
console.log(c)
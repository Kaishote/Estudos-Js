const valores = [7.7, 8.9, 6.3, 9.2, 3.3, 5.2]
console.log(valores[0], valores[3], valores[2])
console.log(valores[4]) // js n vai dá erro caso o valor n esteja definido

valores [4] = 10
console.log(valores)
console.log(valores.length)

console.log(valores.pop()) // remove um valor da array
delete valores[0] //apaga um valor, mas o espaço do valor continua
console.log(valores)

console.log(typeof valores) // array é do tipo objeto

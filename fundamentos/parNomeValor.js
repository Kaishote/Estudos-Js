 // par nome/valor
const saudacao = 'opa' // contexto léxico 1 = local no qual a variável foi definida no código

function exec() {
    const saudacao = 'falaaaaa' // contexto léxico 2
    return saudacao
}

// objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco: {
        rua: 'Esmeraldo cardoso lobo',
        numero: 500,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Ebaaa, passou!!! ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(5.2)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)

n1 = Number(prompt("Digite um número"))
n2 = Number(prompt("Digite outro número"))

function soma(n1, n2){
    resultadoSoma = n1 + n2
    return resultadoSoma
}

function subtracao(n1, n2){
    resultadoSub = n1 - n2
    return resultadoSub
}

function multiplicacao(n1, n2){
    resultadoMult = n1 * n2
    return resultadoMult
}

function divisao(n1, n2){
    resultadoDiv = n1 / n2
    return resultadoDiv
}
soma(n1, n2)
subtracao(n1, n2)
multiplicacao(n1, n2)
divisao(n1, n2)

alert(`O resultado da soma é: ${resultadoSoma}
O resultado da subtração é: ${resultadoSub}
O resultado da multiplicacao é: ${resultadoMult}
O resultado da divisão é: ${resultadoDiv}`)
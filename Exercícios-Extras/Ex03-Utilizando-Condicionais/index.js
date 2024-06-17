// let piloto = prompt('Insira seu nome:')
// let vel = 0
// let novaVel = parseFloat(prompt('A que velocidade quer acelerar a nave?'))

// if (vel < novaVel) {
//     vel += novaVel
//     confirmacao = confirm('Confirma que a nave será acelerada a ' + vel + 'Km/s?')
//     if (confirmacao) {
//         alert(`Nave a ${vel} Km/s`)
//     }
// }

let pilotName = prompt("Qual seu nome, piloto?")
let velocity = 0
let newVelocity = prompt("A que velocidade você gostaria de acelerar?")
let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "km/s")
if(confirmVelocity) {
    velocity = newVelocity
}
if(velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if(velocity < 40) {
    alert("Você está devagar. Podemos aumentar mais.")
} else if(velocity < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if(velocity < 100) {
    alert("Velocidade alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}
alert("Piloto: " + pilotName + "\nVelocidade: " + velocity + "km/s")


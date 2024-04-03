let nomeVelha = prompt('Insira o nome da pessoa mais Velha')
let idadeVelha = parseFloat(prompt('Insira a idade da pessoa mais Velha'))

let nomeNova = prompt('Insira o nome da pessoa mais Nova')
let idadeNova = parseFloat(prompt('insira a idade da pessoa mais Nova'))

alert(`
o nome da pessoa mais velha é: ${nomeVelha}\n
A sua idade é: ${idadeVelha}\n\n
O nome da pessoa mais nova é ${nomeNova}\n
A sua idade é: ${idadeNova}\n\n
A diferença de idade é de ${idadeVelha - idadeNova} anos!

`)


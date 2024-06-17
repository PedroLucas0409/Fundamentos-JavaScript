let nave = prompt('Insira o nome da nave:')
let menu = prompt('Deseja entrar em dobra espacial?\n1- Sim\n2- Não')
let contagem = 0
while(menu === '1'){
    contagem += 1
    menu = prompt('Deseja entrar em dobra espacial?\n1- Sim\n2- Não')
}

alert("Nave: " + nave + "\nQuantidade de dobras: " + contagem)
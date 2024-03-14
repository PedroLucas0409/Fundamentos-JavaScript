/* 
Sintaxe:

for (inicializacao; condicao; finalizacao) {
  // ...
}
 */

let nome = 'Pedro' // tamanho 5 = 0, 1, 2, 3, 4

for(let i = 0; i<nome.length; i++){
    console.log(nome[i])
    break
    i++
}
 
//ou//

for(let indice= 0;indice < nome.length; indice++){
    console.log(nome[indice])
}


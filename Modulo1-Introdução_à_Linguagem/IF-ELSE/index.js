// IF:

// if (condicao) {
//   // ...
// }

// IF ELSE:

// if (condicao) {
//   // ...
// } else {
//   // ...
// }

// IF ELSE IF:

// if (condicao1) {
//   // ...
// } else if (condicao2) {
//   // ...
// } else {
//   // ...
// }

const idade = prompt("Informe sua idade: ")

if(idade > 18){
    alert("Você é maior de idade")
}else if(idade > 12){
    alert("Você é menor de idade")
}else if(idade > 4){
    alert("Você é criança")
}else{
    alert("...")
}
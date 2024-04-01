// switch (expressao) {
//     case "a":
//       // ...
//     case "b":
//       // ...
//       break
//     case "c":
//       // ...
//     default:
//       // ...
//   }

const resultado = prompt("Escolha uma alternativa \na) \nb) \nc)")

const resultadoNumerico = parseFLoat(resultado)

switch (resultadoNumerico){
    case 1:
        alert("O resultado é A")
        break
    case 2:
        alert("O resutlado é B")
        break
    case 3:
        alert("O resultado é C")
        break
    default:
        alert("Finalizando..")
}
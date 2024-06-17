let anosluz = parseFloat(prompt('Insira a distância em Anos-Luz'))
let menu = prompt('1- Parsec(pc)\n2- Unidade astronômica(AU)\n3- Quilômetros(Km)')


switch(menu){
    case '1':
        let parsec = anosluz * 0.306601
        alert(`Distância em Anos-luz em Parsec(pc): ${anosluz} x 0.306601 = ${parsec}`)
    break
    case '2':
        let AU = anosluz * 63241.1
        alert(`Distância em Anos-luz em Unidade astronômica(AU): ${anosluz} x 63241.1 = ${AU}`)
    break
    case '3':
        let km = anosluz * (9.5 * Math.pow(10,12))
        alert(`Distância em Anos-luz em Quilômetros(Km): ${anosluz} x (9,5 x 10¹²) = ${km}`)
    break

    default:
        alert('Comando Inválido!')
}

// let distanceInLY = prompt("Digite a distância em anos-luz")
// let chosenOption = prompt("Para qual unidade deseja conveter?\n1. Parse(pc)\n2. Unidade Astronômica (AU)" +
//                         "\n3. Quilômetros (km)\n\n(Digite o número da opção desejada)")
// let chosenUnity
// let convertedDistance
// switch(chosenOption) {
//     case "1":
//         chosenUnity = "Parsec"
//         convertedDistance = distanceInLY * 0.306601
//         break
//     case "2":
//         chosenUnity = "Unidade Astronômica"
//         convertedDistance = distanceInLY * 63241.1
//         break
//     case "3":
//         chosenUnity = "Quilômetros"
//         convertedDistance = distanceInLY * 9.5 * Math.pow(10, 12)
//         break
//     default:
//         chosenUnity = "Unidade não identificada"
//         convertedDistance = "Conversão fora do escopo"
// }
// alert("Distância em Anos-luz: " + distanceInLY + "\n" + chosenUnity + ": " + convertedDistance)
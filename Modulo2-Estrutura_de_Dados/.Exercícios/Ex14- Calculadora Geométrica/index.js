// Definição das funções de cálculo fora do loop
function calcularTriangulo() {
    let base = parseFloat(prompt('Insira a base:'));
    let altura = parseFloat(prompt('Insira a altura:'));
    return (base * altura) / 2;
}

function calcularRetangulo() {
    let base = parseFloat(prompt('Insira a base:'));
    let altura = parseFloat(prompt('Insira a altura:'));
    return base * altura;
}

function calcularQuadrado() {
    let lado = parseFloat(prompt('Insira o lado: '));
    return lado * lado;
}

function calcularTrapezio() {
    let baseMaior = parseFloat(prompt('Insira a base maior: '));
    let baseMenor = parseFloat(prompt('Insira a base menor: '));
    let altura = parseFloat(prompt('Insira a altura: '));
    return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularCirculo() {
    let raio = parseFloat(prompt('Insira o Raio: '));
    let pi = 3.14;
    return pi * raio * raio;
}

// Loop do menu
let menu = "";

do {
    menu = prompt('Calculadora Geométrica \nEscolha qual fórmula a ser utilizada: \n1- Área do Triângulo \n2- Área do Retângulo \n3- Área do Quadrado \n4- Área do Trapézio \n5- Área do Círculo \n6= Sair');

    switch (menu) {
        case "1":
            alert('O resultado é: ' + calcularTriangulo());
            break;
        case "2":
            alert('O resultado é: ' + calcularRetangulo());
            break;
        case "3":
            alert('O resultado é: ' + calcularQuadrado());
            break;
        case "4":
            alert('O resultado é: ' + calcularTrapezio());
            break;
        case "5":
            alert('O resultado é: ' + calcularCirculo());
            break;
        case "6":
            alert('Finalizando...');
            break;
        default:
            alert('Comando não reconhecido!');
    }
} while (menu !== "6");

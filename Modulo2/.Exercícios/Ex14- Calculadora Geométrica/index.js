const menu = prompt('Calculadora Geométrica \nEscolha qual fórmula a ser utilizada: \n1- Área do Triângulo \n2- Área do Retângulo \n3- Área do Quadrado \n4- Área do Trapézio \n5- Área do Círculo \n6= Sair')
do {
    switch (menu) {
        case "1":
            function calcularTriangulo() {
                let base = parseFloat(prompt('Insira a base'))
                let altura = parseFloat(prompt('Insira a altura'))
                return ((base * altura) / 2)
            }
            alert('O resultado é: ' + calcularTriangulo())
            break
        case "2":
            function calcularRetangulo() {
                let base = parseFloat(prompt('Insira a base:'))
                let altura = parseFloat(prompt('Insira a altura:'))
                return (base * altura)
            }
            alert('O resultado é: ' + calcularRetangulo())
            break
        case "3":
            function calcularQuadrado(lado) {
                lado = parseFloat(prompt('Insira o lado: '))
                return lado ^ 2
            }
            alert(`O Resultado é: ${calcularQuadrado()}`)
            break
        case "4":
            function calcularTrapezio(baseMaior, baseMenor, altura) {
                baseMaior = parseFloat(prompt('Insira a base maior: '))
                baseMenor = parseFloat(prompt('Insira a base menor: '))
                altura = parseFloat(prompt('Insira a altura: '))
                return ((baseMaior + baseMenor) * altura) / 2
            }
            alert(`O Resultado é: ${calcularTrapezio()}`)
            break
        case "5":
            function calcularCirculo(pi, raio) {
                raio = parseFloat(prompt('Insira o Raio: '))
                pi = parseFloat(3.14)
                return pi * raio ^ 2
            }
            alert(`O Resultado é: ${calcularCirculo()}`)
            break
        default:
            alert('Comando não reconhecido!')
    }
} while (menu !== 6)

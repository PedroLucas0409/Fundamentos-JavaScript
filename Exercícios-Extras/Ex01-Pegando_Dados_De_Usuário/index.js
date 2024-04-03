alert("Bem-Vindo! A seguir pediremos que informe alguns dados.")


const nomeUsuario = prompt("Qual seu Nome?")
const cal = parseInt(prompt("Qual ano você nasceu?"))

confirmacao = confirm(`Então você tem ${2024 - cal} anos?`)

if (confirmacao) {
    alert(`Nome: ${nomeUsuario}
    \nIdade: ${cal}`)
}
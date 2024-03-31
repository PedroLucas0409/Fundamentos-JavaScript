const vagas = []

function listarVagas() {
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += indice + ". "
    textoFinal += vaga.nomeVaga
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
    return textoFinal
  }, "")

  alert(vagasEmTexto)
}

function novaVaga() {
    const nomeVaga = prompt("Insira o nome da Vaga")
    const descricao = prompt("Informe a Descricao")
    const dataLimite = prompt("Informa uma data limite")

    const confirmacao = confirm(`Quer confirmar as informações?\n ${nomeVaga}, ${descricao}, ${dataLimite} `)
    if (confirmacao) {
        const novaVaga = { nomeVaga, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert("vaga criada!")
    }
}

function vizualizarVaga() {
    const indice = prompt("Informe o índice da vaga:")
    const vaga = vagas[indice]

    const candidatosEmTexto = vagas.reduce((textoFinal, candidato) => textoFinal + "\n -" + candidato, "")

    alert(
        "Vaga n°" + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos:" + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const candidato = prompt("Insira o nome do Candidato")
    const indice = prompt("Informe o Indice da vaga")
    const vaga = vagas[indice]

    const confirmacao = confirm("Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite)

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert('Caditatura realizada!')
    }
}

function excluirVaga() {
    const indice = prompt("Informe o Índice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const confirmacao = confirm("Deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite)

    if (confirmacao) {
        vagas.splice(indice - 1)
        alert('Vaga Excluída!')
    }
}

function exibirMenu() {
    const opcao = prompt(
      "Cadastro de Vagas de Emprego" +
      "\n\nEscolha uma das opções" +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um(a) candidato(a)" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
    )
  
    return opcao
  }
  function executar() {
    let opcao = ""
  
    do {
      opcao = exibirMenu()
  
      switch (opcao) {
        case "1":
          listarVagas()
          break
        case "2":
          novaVaga()
          break
        case "3":
          vizualizarVaga()
          break
        case "4":
          inscreverCandidato()
          break
        case "5":
          excluirVaga()
          break
        case "6":
          alert("Saindo...")
          break
        default:
          alert("Opção inválida.")
      }
  
    } while (opcao !== "6");
  }
  
  executar()
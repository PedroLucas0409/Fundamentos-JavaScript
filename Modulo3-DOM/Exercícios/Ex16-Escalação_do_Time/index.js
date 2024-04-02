function addJogador() {
  const escalacao = document.getElementById('escalacao')
  const posicao = document.getElementById('posicao').value
  const name = document.getElementById('name').value
  const numCamisa = document.getElementById('number').value

  const ul = document.createElement('ul')

  const posicaoText = document.createElement('li')
  posicaoText.innerText = `Posicao: ${posicao}`
  ul.appendChild(posicaoText)
  ul.appendChild(document.createElement('br'))

  const nameText = document.createElement('li')
  nameText.innerText = `Nome: ${name}`
  ul.appendChild(nameText)
  ul.appendChild(document.createElement('br'))

  const numberText = document.createElement('li')
  numberText.innerText = `Número: ${numCamisa}`
  ul.appendChild(numberText)
  ul.appendChild(document.createElement('br'))

  const confirmacao = confirm(`Confirma que o Jogador ${name} que joga de ${posicao} e veste a camisa ${numCamisa} será escalado?`)
  if (confirmacao) {
    alert('Jogador Escalado!')
  }

  escalacao.append(ul)
}

function removeJogador() {
  const escalacao = document.getElementById('escalacao')

  const jogadores = document.getElementsByTagName('ul')

  escalacao.removeChild(jogadores[jogadores.length - 1])
}

/*
function addPlayer() {
  const position = document.getElementById("position").value
  const name = document.getElementById("name").value
  const number = document.getElementById("number").value

  const confirmation = confirm("Escalar " + name + " como " + position + "?")

  if (confirmation) {
    const teamList = document.getElementById("team-list")
    const playerItem = document.createElement("li")
    playerItem.id = "player-" + number
    playerItem.innerText = position + ": " + name + " (" + number + ")"
    teamList.appendChild(playerItem)

    document.getElementById("position").value = ""
    document.getElementById("name").value = ""
    document.getElementById("number").value = ""
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value
  const playerToRemove = document.getElementById("player-" + number)

  const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?")

  if (confirmation) {
    document.getElementById("team-list").removeChild(playerToRemove)
    document.getElementById("numberToRemove").value = ""
  }
}

*/
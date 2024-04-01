const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

// MAP: Obtém um array contendo apenas os nomes dos personagens
const nomes = personagens.map(function (personagem) {
    return personagem.nome;
});

// FILTER: Obtém um array contendo apenas os personagens da raça "Orc"
const orcs = personagens.filter(function (personagem) {
    return personagem.raca === "Orc";
});

// REDUCE: Calcula o nível total dos personagens
const nivelTotal = personagens.reduce(function (acumulador, personagem) {
    return acumulador + personagem.nivel;
}, 0);

// REDUCE: Organiza os personagens por raça em um objeto
const racas = personagens.reduce(function (acumulador, personagem) {
    if (acumulador[personagem.raca]) {
        acumulador[personagem.raca].push(personagem);
    } else {
        acumulador[personagem.raca] = [personagem];
    }
    return acumulador;
}, {});

// SORT: Ordena os personagens pelo nível (do menor para o maior)
personagens.sort(function (a, b) {
    return a.nivel - b.nivel;
});

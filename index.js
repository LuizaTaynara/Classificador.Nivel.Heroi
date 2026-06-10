console.log("Insira o nome do seu Héroi")

//variável
let nameHeroi = "Eleven"

console.log("Bem Vindo(a) " + nameHeroi)

//variável
let xp = 10500
let nivel = ""

// Estrutura de decisão
//Na orintação do XP para o nível ferro diz
//Se for menor do que 1000 então ferro
//Mas não diz o que fazer com o 1000 
//Então alterei para <= 1000
if (xp <= 1000) {
  nivel = "Ferro"
} else if (xp <= 2000) {
    nivel = "Bronze"
} else if (xp <= 5000) {
    nivel = "Prata"
} else if (xp <= 7000) {
    nivel = "Ouro"
} else if (xp <= 8000) {
    nivel = "Platina"
} else if (xp <= 9000) {
    nivel = "Ascendente"
} else if (xp <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

//mensagem de saída final
console.log("O Herói de nome " + nameHeroi + " está no nível " + nivel)

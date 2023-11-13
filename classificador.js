// Variável para armazenar o nome e a experiência do herói
let nomeHeroi = "Nome do Herói"; // Substitua com o nome do herói
let experienciaHeroi = 3000; // Substitua com a quantidade de experiência do herói
let nivelHeroi;

// Estrutura de decisão para classificar o nível do herói
if (experienciaHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (experienciaHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (experienciaHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (experienciaHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (experienciaHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (experienciaHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (experienciaHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

// Exibindo a mensagem final
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);

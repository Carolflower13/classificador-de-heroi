// Definindo a variável para o nome e a quantidade de experiência (XP) do herói
let nome = "The Mystic Smasher"; // Altere o nome conforme desejado
let xp = 7100; // Defina a quantidade de experiência (XP) do herói

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para classificar o nível com base na XP
if (xp < 1000) {
  nivel = "ferro";
} else if (xp >= 1001 && xp <= 2000) {
  nivel = "bronze";
} else if (xp >= 2001 && xp <= 5000) {
  nivel = "prata";
} else if (xp >= 6001 && xp <= 7000) {
  nivel = "ouro";
} else if (xp >= 7001 && xp <= 8000) {
  nivel = "platina";
} else if (xp >= 8001 && xp <= 9000) {
  nivel = "ascendente";
} else if (xp >= 9001 && xp <= 10000) {
  nivel = "imortal";
} else if (xp >= 10001) {
  nivel = "radiante";
}

// Saída final
console.log(`O herói de nome ${nome} está no nível de ${nivel}`);

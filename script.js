// Variáveis para armazenar o nome e a quantidade de experiência do herói
var nomeHeroi = "Super Herói";
var xpHeroi = 9000; // Você pode alterar o valor da experiência conforme necessário

// Função para obter o título com base na experiência
function obterTituloPorExperiencia(experiencia) {
  if (experiencia < 1000) {
    return "Ferro";
  } else if (experiencia >= 1001 && experiencia <= 2000) {
    return "Bronze";
  } else if (experiencia >= 2001 && experiencia <= 5000) {
    return "Prata";
  } else if (experiencia >= 5001 && experiencia <= 6000) {
    return "Ouro";
  } else if (experiencia >= 6001 && experiencia <= 7000) {
    return "Platina";
  } else if (experiencia >= 7001 && experiencia <= 8000) {
    return "Diamante";
  } else if (experiencia >= 8001 && experiencia <= 9000) {
    return "Ascendente";
  } else if (experiencia >= 9001 && experiencia <= 10000) {
    return "Imortal";
  } else {
    return "Radiante";
  }
}

// Mensagem inicial
console.log(`Nome do herói: ${nomeHeroi}`);
console.log(`Experiência do herói: ${xpHeroi}`);

// Obter o título do herói
var tituloHeroi = obterTituloPorExperiencia(xpHeroi);
console.log(`Título do herói: ${tituloHeroi}`);

// Exibir a mensagem final com o nível do herói
console.log(`O herói ${nomeHeroi} está no nível de ${tituloHeroi}.`);

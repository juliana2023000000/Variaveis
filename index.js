//https://emojidb.org/discord-server-emojis

const prompt = require('prompt-sync')
const entrada = prompt();

//let anoAtual = 2025;
//const nomeCompleto = "Juliana de Lima Golinelli";
//let idade = 20;
//const cursoFacul = "Engenharia de Software";
//let cidadeAtual = "Sao paulo";

//console.log(`Hello I'm ${nomeCompleto}, I'm ${idade}, I live in ${cidadeAtual}, I wanna, next year, stury ${cursoFacul}, in ${anoAtual} I wanna buy my pirates games.`);

console.log("▄︻デ══━一💥");

//agencia de viagens
console.log(`----------------------`);
console.log(`|       LOGIN       |`);
console.log(`----------------------`);

const loginCerto = "Alan3";
const senhaCerta = 12345;

var login = entrada("👤 Digite seu login: ");
var senha = entrada("🔐 Digite sua senha: ");

while(login != loginCerto) {
  console.log(`❌ Login não encontrado.`);
  login = entrada(`Digite novamente seu login: `);
}

while(senha != senhaCerta) {
  console.log(`❌ Senha não encontrada.`)
  senha = entrada(`Digite novamente sua senha: `);
}
https://emojidb.org/discord-server-emojis

var nomeComprador = entrada("Qual seu nome? ");
var CPF = entrada("Qual seu cfp? ");
var idadeComprador = entrada("Qual sua idade? ");
const listaDestinos = new Array(
  "Japão",
  " Canada",
  " Mexico",
  " França",
  " China"
);
/*
//console.log(`olá sr. ${nomeComprador}, do CPF ${CPF}, suas opções de destino são: ${listaDestinos}`);

console.log(listaDestinos[0]);
console.log();
console.log(`Adicionamos um novo destino a sua lista`);

listaDestinos.push("Londres");*/


if(idadeComprador < 18) {
  console.log(`infelizmente não podemos lhe vender uma passagem, pois o senhor(a) é menor de idade`);
} 

if(idadeComprador > 18) {
  console.log(`podemos lhe vender a passage, aqui estão os destinos ${listaDestinos}`)
}
// Faça um programa JavaScript em que o usuário informará a sua idade e o programa emitirá uma mensagem(alert) dizendo se o usuário é ou não menor de idade 

// Receber a idade do usuário
var idade = parseInt(prompt("Informe a sua idade:"));

// Verificar se o usuário é menor de idade
if (idade < 18) {
  alert("Você é menor de idade.");
} else {
  alert("Você é maior de idade.");
}
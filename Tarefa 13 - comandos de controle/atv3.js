// Tarefa 13 - comandos de controle

// Atividade 3

// Faça um programa JavaScript em que o usuário informará a sua idade e o programa emitirá uma mensagem(alert) dizendo se o usuário é ou não menor de idade 

var soma = 0;

for (var i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    soma += i;
  }
}

document.write("A soma dos múltiplos de 3 ou 5 abaixo de 1000 é: " + soma);
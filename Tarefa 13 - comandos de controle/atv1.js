// Tarefa 13 - comandos de controle

// Atividade 1

// Faça um programa JavaScript que receba 3 números informados pelo usuário e em seguida apresente uma mensagem de alerta(alert) informando qual é o maior número dentre os números informados

var numero1 = parseInt(prompt("Informe o primeiro número:"));
var numero2 = parseInt(prompt("Informe o segundo número:"));
var numero3 = parseInt(prompt("Informe o terceiro número:"));

var maiorNumero = numero1;

if (numero2 > maiorNumero) {
  maiorNumero = numero2;
}

if (numero3 > maiorNumero) {
  maiorNumero = numero3;
}

alert("O maior número é: " + maiorNumero);
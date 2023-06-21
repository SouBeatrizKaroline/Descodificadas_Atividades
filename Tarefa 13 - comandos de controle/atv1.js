// Faça um programa JavaScript que receba 3 números informados pelo usuário e em seguida apresente uma mensagem de alerta(alert) informando qual é o maior número dentre os números informados

// Receber os números informados pelo usuário
var numero1 = parseInt(prompt("Informe o primeiro número:"));
var numero2 = parseInt(prompt("Informe o segundo número:"));
var numero3 = parseInt(prompt("Informe o terceiro número:"));

// Verificar qual é o maior número
var maiorNumero = numero1;

if (numero2 > maiorNumero) {
  maiorNumero = numero2;
}

if (numero3 > maiorNumero) {
  maiorNumero = numero3;
}

// Exibir o resultado
alert("O maior número é: " + maiorNumero);
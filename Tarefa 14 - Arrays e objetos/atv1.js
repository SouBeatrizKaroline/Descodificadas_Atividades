// Tarefa 14 - Arrays e objetos

// atividade 1

// Faça um projeto que dada uma sequência de caracteres, inverta o seu conteúdo e apresente ao usuário o resultado invertido na tela. 

function inverterSequencia() {
    var sequencia = document.getElementById("sequencia").value;

    var arraySequencia = sequencia.split("");

    var arrayInvertido = arraySequencia.reverse();

    var sequenciaInvertida = arrayInvertido.join("");

    document.getElementById("resultado").innerHTML = sequenciaInvertida;
  }
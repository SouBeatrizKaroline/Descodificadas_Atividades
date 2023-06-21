// Faça um projeto que dada uma sequência de caracteres, inverta o seu conteúdo e apresente ao usuário o resultado invertido na tela. 

function inverterSequencia() {
    var sequencia = document.getElementById("sequencia").value;
    
    // Converter a sequência em um array
    var arraySequencia = sequencia.split("");
    
    // Inverter o array
    var arrayInvertido = arraySequencia.reverse();
    
    // Converter o array invertido de volta para uma string
    var sequenciaInvertida = arrayInvertido.join("");
    
    // Exibir o resultado invertido na tela
    document.getElementById("resultado").innerHTML = sequenciaInvertida;
  }
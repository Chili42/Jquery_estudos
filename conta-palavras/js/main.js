var frase = $(".frase").text()
var numpalavras = frase.split(" ").length;
var tamanhoFrase = $('#tamanhoFrase')
tamanhoFrase.text(numpalavras)
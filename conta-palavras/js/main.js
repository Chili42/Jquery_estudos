var frase = $(".frase").text();
var numpalavras = frase.split(" ").length;
var tamanhoFrase = $('#tamanhoFrase');
tamanhoFrase.text(numpalavras);

var campo = $(".campo-digitacao")
campo.on("input", function(){
    var conteudo = (campo.val())

    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $('#contaPalavras').text(qtdPalavras)

    var qtdCaracteres = conteudo.length
    $("#contaCaracteres").text(qtdCaracteres)
})
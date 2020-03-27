var tempoInicial = $("#tempo").text()
var frase = $(".frase").text()
var numpalavras = frase.split(" ").length;
var tamanhoFrase = $('#tamanhoFrase')
tamanhoFrase.text(numpalavras)

var campo = $(".campo-digitacao")
campo.on("input", function(){
    var conteudo = (campo.val())

    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $('#contaPalavras').text(qtdPalavras)

    var qtdCaracteres = conteudo.length
    $("#contaCaracteres").text(qtdCaracteres)
})

var tempo = $("#tempo").text()
campo.one("focus", function(){
    var cronometro = setInterval(function(){
        tempo--
        $("#tempo").text(tempo)
        if(tempo < 1){
        campo.attr("disabled", true)
        clearInterval(cronometro)
        campo.css("background-color","FireBrick")
        }
    },1000)
})

$('#reiniciar').click(function(){
    campo.attr("disabled", false)
    campo.val("")
    $("#contaPalavras").text("0")
    $("#contaCaracteres").text("0")
    $("#tempo").text(tempoInicial)

})
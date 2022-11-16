let tempoInicial = $("#contadorTempo").text();
let campoDigitacao = $(".campoDigitacao");
let btnReiniciarJogo = $("#btnReiniciar");
let contadorCaracteres = $("#contadorCaracteres");
let contadorPalavras = $("#contadorPalavras");

function atualizaTempoInicial(tempo) {
    tempoInicial = tempo;
    $("#contadorTempo").text(tempo);
}

function atualizaTamanhoFrase() {
    let frase = $(".frase").text();
    let contadorPalavrasFrase = $("#tamanhoFrase");
    let numeroPalavras = frase.split(" ").length;

    return contadorPalavrasFrase.text(numeroPalavras);
}

function inicializaContadores() {
    campoDigitacao.on("input", () => {
        let conteudoCampo = campoDigitacao.val();
        contadorCaracteres.text(conteudoCampo.length);

        let separarEmPalavras = conteudoCampo.split(/\S+/);
        contadorPalavras.text(separarEmPalavras.length - 1);
    });
}

function inicializaCronometro() {
    campoDigitacao.one("focus", () => {
        let tempoRestante = $("#contadorTempo").text();
        btnReiniciarJogo.attr("disabled", true);
        let cronometroId = setInterval(function () {
            tempoRestante--;
            $("#contadorTempo").text(tempoRestante);

            if (tempoRestante == 0) {
                clearInterval(cronometroId);
                finalizaJogo();
            }
        }, 1000);
    });
}

function reiniciaJogo() {
    campoDigitacao.attr("disabled", false);
    campoDigitacao.removeClass("campoDesativado");
    campoDigitacao.removeClass("bordaVerde");
    campoDigitacao.removeClass("bordaVermelha");
    campoDigitacao.val("");
    contadorCaracteres.text(0);
    contadorPalavras.text(0);
    $("#contadorTempo").text(tempoInicial);
    inicializaCronometro();
}

function marcaBorda() {
    campoDigitacao.on("input", () => {
        let frase = $(".frase").text();
        let conteudoDigitado = campoDigitacao.val();

        if (frase.startsWith(conteudoDigitado)) {
            campoDigitacao.removeClass("bordaVermelha");
            campoDigitacao.addClass("bordaVerde");
        } else {
            campoDigitacao.addClass("bordaVermelha");
            campoDigitacao.removeClass("bordaVerde");
        }
    });
}

function finalizaJogo() {
    campoDigitacao.attr("disabled", true);
    campoDigitacao.addClass("campoDesativado");
    btnReiniciarJogo.attr("disabled", false);
    inserePlacar();
}

btnReiniciarJogo.click(reiniciaJogo);

$(() => {
    atualizaTamanhoFrase();
    inicializaContadores();
    reiniciaJogo();
    marcaBorda();

    $("#usuarios").selectize({
        create: true,
        sortField: "text",
        allowEmptyOption: false,
    });
    $("#btnSync").tooltipster({
        trigger: "custom",
    });
});

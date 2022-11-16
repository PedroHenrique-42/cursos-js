let btnFrase = $("#btnFrase");
let btnBusca = $("#btnBusca");
let frase = $(".frase");
let contadorTempo = $("#contadorTempo");
let erro = $("#erro");

function fraseAleatoria() {
    $("#spinner").show();

    $.get("http://localhost:3000/frases", (data) => {
        let numeroAleatorio = parseInt(Math.random() * data.length);

        frase.text(data[numeroAleatorio].texto);
        atualizaTamanhoFrase();
        atualizaTempoInicial(data[numeroAleatorio].tempo);
    })
        .fail(() => {
            erro.text("Ocorreu um erro, por favor tente novamente.");
            erro.show();

            setTimeout(() => {
                erro.hide();
            }, 3000);
        })
        .always(() => {
            $("#spinner").hide();
        });
}

function buscarFrases() {
    $("#spinner").show();
    let idFrase = $("#frase-id").val();
    let busca = {
        id: idFrase,
    };

    $.get("http://localhost:3000/frases", busca, (dados) => {
        frase.text(dados.texto);
        atualizaTamanhoFrase();
        atualizaTempoInicial(dados.tempo);
    })
        .fail(() => {
            erro.text("Não foi possível buscar a frase, por favor tente novamente.");
            erro.show();

            setTimeout(() => {
                erro.hide();
            }, 3000);
        })
        .always(() => {
            $("#spinner").hide();
        });
}

btnFrase.click(fraseAleatoria);
btnBusca.click(buscarFrases);

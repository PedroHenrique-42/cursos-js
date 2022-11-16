let placar = $(".placar");
let btnSync = $("#btnSync");

function novaLinha(usuario, palavras) {
    let tr = $("<tr>");
    let colunaUsuario = $("<td>").text(usuario);
    let colunaPalavras = $("<td>").text(palavras);
    let colunaRemover = $("<td>");
    let link = $("<a>").addClass("botaoRemover").attr("href", "#");
    var icone = $("<i>").addClass("material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);
    tr.append(colunaUsuario);
    tr.append(colunaPalavras);
    tr.append(colunaRemover);

    return tr;
}

function removeLinha() {
    let linha = $(this).parent().parent();
    event.preventDefault();
    linha.fadeOut(400, () => {
        linha.remove();
    });
}

function scrollPlacar() {
    let posicaoPlacar = placar.offset().top;

    $("body, html").animate(
        {
            scrollTop: posicaoPlacar + "px",
        },
        1000
    );
}

function inserePlacar() {
    let corpoTabela = placar.find("tbody");
    let usuario = $("#usuarios").val();
    let numPalavras = contadorPalavras.text();

    let linha = novaLinha(usuario, numPalavras);
    linha.find(".botaoRemover").click(removeLinha);

    corpoTabela.prepend(linha);
    placar.slideDown();
    scrollPlacar();
}

function mostraPlacar() {
    placar.stop().slideToggle(500);
}

function sincronizaPlacar() {
    let arrayPlacar = [];
    let linhas = $("tbody > tr");

    linhas.each(function () {
        let usuario = $(this).find("td:nth-child(1)").text();
        let palavras = $(this).find("td:nth-child(2)").text();

        let score = {
            usuario: usuario,
            pontos: palavras,
        };

        arrayPlacar.push(score);
    });

    let dados = {
        placar: arrayPlacar,
    };

    $.post("http://localhost:3000/placar", dados, () => {
        $("#btnSync").tooltipster("open").tooltipster("content", "Sucesso ao sincronizar");
    })
        .fail(() => {
            $("#btnSync").tooltipster("open").tooltipster("content", "Falha ao sincronizar");
        })
        .always(() => {
            setTimeout(() => {
                $("#btnSync").tooltipster("close");
            }, 2000);
        });
}

function atualizaPlacar() {
    $.get("http://localhost:3000/placar", function (dados) {
        $(dados).each(function () {
            let linha = novaLinha(this.usuario, this.pontos);
            $("tbody").append(linha);
            linha.find(".botaoRemover").click(removeLinha);
        });
    });
}

$("#btnPlacar").click(mostraPlacar);
$("#btnPlacar").click(scrollPlacar);
$("#btnSync").click(sincronizaPlacar);

$(() => {
    atualizaPlacar();
});

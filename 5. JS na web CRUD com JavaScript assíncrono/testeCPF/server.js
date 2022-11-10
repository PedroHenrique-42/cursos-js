const btnPesquisarCEP = document.querySelector("#btnPesquisar");
const btnLimpar = document.querySelector("#btnLimpar");
const form = document.querySelector("form");

function atribuirValoresCampos(dadosParaAtribuir) {
    const rua = document.querySelector("#rua");
    const complemento = document.querySelector("#complemento");
    const bairro = document.querySelector("#bairro");
    const cidade = document.querySelector("#cidade");
    const estado = document.querySelector("#estado");

    rua.value = dadosParaAtribuir.logradouro;
    complemento.value = dadosParaAtribuir.complemento;
    bairro.value = dadosParaAtribuir.bairro;
    cidade.value = dadosParaAtribuir.localidade;
    estado.value = dadosParaAtribuir.uf;
}

btnPesquisarCEP.addEventListener("click", event => {
    event.preventDefault();

    const inputDoCep = document.querySelector("#cep");
    const valorDoCep = inputDoCep.value;
    const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;

    fetch(url).then(response => {
        return response.json();
    }).then(dados => {
        if (dados.erro) {
            console.log(url, dados.erro);
            alert("O CEP DIGITADO É INVÁLIDO")
            return;
        } else {
            atribuirValoresCampos(dados);
        }
    }).catch(() => {
        alert("Erro, não foi possível encontrar o CPF");
        form.reset();
    })

})

btnLimpar.addEventListener("click", event => {
    event.preventDefault();
    form.reset();
})
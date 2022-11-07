let form = document.querySelector("#form-adiciona");
let btnFormulario = document.querySelector("#adicionar-paciente");

function dadosNovoPaciente(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTd(texto, classe) {
    let td = document.createElement("td");
    td.textContent = texto;
    td.classList.add(classe)
    return td;
}

function montaTr(paciente) {
    let ul = document.querySelector("#mensagens-erro").innerHTML = "";
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function validaPaciente(paciente) {
    let erros = [];

    if (paciente.nome.length == 0) erros.push("Nome é inválido");
    if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");
    if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");
    if (paciente.gordura.length == 0) erros.push("Gordura é inválida");

    return erros;
}

function exibeMensagensDeErro(erros) {
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach((erro) => {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function adicionaPacienteTabela(paciente){
    let pacienteTr = montaTr(paciente);
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

btnFormulario.addEventListener("click", (event) => {
    let tabela = document.querySelector("#tabela-pacientes");
    event.preventDefault();

    let paciente = dadosNovoPaciente(form);
    let pacienteTr = montaTr(paciente);
    let erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }
    
    adicionaPacienteTabela(paciente);
    form.reset();
});

let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

function validaPeso(peso){
    if(peso > 0 && peso < 500){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 3){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura){
    let imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

for (let i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);

    if (!pesoValido) {
        pesoValido = false;
        paciente.classList.toggle("paciente-invalido");
        tdPeso.textContent = "Peso inválido";
    }

    if (!alturaValida) {
        alturaValida = false;
        paciente.classList.toggle("paciente-invalido");
        tdAltura.textContent = "Altura inválida";
    }

    if (pesoValido && alturaValida) {
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}
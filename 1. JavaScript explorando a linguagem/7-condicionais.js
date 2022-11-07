console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log(`Destinos possíveis: ${listaDeDestinos} \n`);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade.");
//     listaDeDestinos.splice(1, 2);
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado de um maior de idade.");
//     listaDeDestinos.splice(1, 2);
// } else {
//     console.log("Não é maior de idade, não posso vender.")
// }

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(1, 2);
} else {
    console.log("Não é maior de idade, não posso vender.")
}

console.log(listaDeDestinos);

console.log("Embarque: \n\n")
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!")
} else {
    console.log("Você não pode embarcar.")
}

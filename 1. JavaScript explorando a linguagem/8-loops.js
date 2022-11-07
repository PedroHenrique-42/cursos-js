console.log("Trabalhando com loops");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
let destinoExiste = false;

console.log(`Destino existe: ${destinoExiste}`);

if(podeComprar && destinoExiste) {
    console.log("\nBoa viagem!")
} else {
    console.log("\n[ERRO] - Reveja as informações digitadas anteriormente.")
}

for(let i = 0; i < 3; i++) {  
    if(listaDeDestinos[i] == destino) {
        destinoExiste = true;
        break;
    } 
}
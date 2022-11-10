const lista = document.querySelector("[lista]");
const conteudoLista = lista.querySelectorAll("[cor]");

const mostrarBtn = document.querySelector("[mostrar]");
const apagarBtn = document.querySelector("[apagar]");

mostrarBtn.addEventListener("click", () => {
    conteudoLista.forEach((item) => {
        item.style = "opacity: 1"
    })
})

apagarBtn.addEventListener("click", () => {
    conteudoLista.forEach((item) => {
        item.style = "opacity: 0"
    })
})



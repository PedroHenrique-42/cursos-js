let tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", (event) => {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(() => {
        event.target.parentNode.remove();
    }, 400)
})

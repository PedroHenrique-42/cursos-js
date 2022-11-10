const listaClientes = async () => {
    const resposta = await fetch("http://localhost:3000/profile");
    if (resposta.ok) {
        return resposta.json();
    }
    throw new Error("Não foi possível listar os clientes");
};

const criaCliente = async (nome, email) => {
    const resposta = await fetch("http://localhost:3000/profile", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
        }),
    });
    if (resposta.ok) {
        return resposta.body;
    }
    throw new Error("Não foi possível criar o cliente");
};

const removeCliente = async (id) => {
    const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
        method: "DELETE",
    });
    if (!resposta.ok) {
        throw new Error("Não foi possível remover o cliente");
    }
}

const detalhaCliente = async (id) => {
    const resposta = await fetch(`http://localhost:3000/profile/${id}`);
    if (resposta.ok) {
        return resposta.json();
    }
    throw new Error("Não foi possível detalhar o clientes");
}

const atualizaCliente = async (id, nome, email) => {
    const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome,
            email
        })
    });
    if (resposta.ok) {
        return resposta.json();
    }
    throw new Error("Não foi possível atualizar o cliente");

}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
};

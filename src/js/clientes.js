import {Api} from "./api.js";

const tagUl = document.querySelector(".container")

function listandoClientes(clientes){
     clientes.forEach(cliente => {
        const endereco = cliente.endereco
        let clienteCriado = criarCliente(cliente)
        tagUl.appendChild(clienteCriado)
    });
}

const clientesApi = await Api.listarClientes()

listandoClientes(clientesApi)

function criarCliente(cliente){
    const tagLi   = document.createElement("li")
    const tagH2   = document.createElement("h2")
    const tagDiv1 = document.createElement("div")
    const tagH3_1 = document.createElement("h3")
    const tagP1   = document.createElement("p")
    const tagP2   = document.createElement("p")
    const tagP3   = document.createElement("p")
    const tagP4   = document.createElement("p")
    const tagDiv2 = document.createElement("div")
    const tagH3_2 = document.createElement("H3")
    const tagP5   = document.createElement("p")
    const tagP6   = document.createElement("p")
    const tagP7   = document.createElement("p")
    const tagP8   = document.createElement("p")
    const tagP9   = document.createElement("p")
    const tagP10  = document.createElement("p")

    tagLi.classList.add("card")
    tagH2.innerText   = cliente.nome
    tagH3_1.innerText = "Dados Pessoais"
    tagP1.innerText   = cliente.email
    tagP2.innerText   = cliente.idade
    tagP3.innerText   = cliente.cpf
    tagP4.innerText   = cliente.sexo
    tagH3_2.innerText = "Endereço"
    tagP5.innerText   = cliente.endereco.cep
    tagP6.innerText   = cliente.endereco.estado
    tagP7.innerText   = cliente.endereco.cidade
    tagP8.innerText   = cliente.endereco.bairro
    tagP9.innerText   = cliente.endereco.rua
    tagP10.innerText   = cliente.endereco.numero

    tagLi.appendChild(tagH2)
    tagLi.appendChild(tagDiv1)
    tagDiv1.appendChild(tagH3_1)
    tagDiv1.appendChild(tagP1)
    tagDiv1.appendChild(tagP2)
    tagDiv1.appendChild(tagP3)
    tagDiv1.appendChild(tagP4)
    tagLi.appendChild(tagDiv2)
    tagDiv2.appendChild(tagH3_2)
    tagDiv2.appendChild(tagP5)
    tagDiv2.appendChild(tagP6)
    tagDiv2.appendChild(tagP7)
    tagDiv2.appendChild(tagP8)
    tagDiv2.appendChild(tagP9)
    tagDiv2.appendChild(tagP10)

    return tagLi
}
import {Api} from "./api.js"

const clientesApi = await Api.listarClientes()

const select = document.getElementById("selectDelete")

function selecionaCliente(){
        clientesApi.forEach(cliente => {
            const nomes = cliente.nome
            const idDelete = cliente.id
            let opçãoCriada = criarOpção(nomes, idDelete)
            select.appendChild(opçãoCriada)
        });
        
    }

selecionaCliente()

const btnDelete = document.getElementById("delete")
        btnDelete.addEventListener("click", (event) =>{
            let opçãoValor = select.options[select.selectedIndex].value
            console.log(opçãoValor)
            if(opçãoValor <= 6){
                alert("Você não pode DELETAR este Cliente!")
            }
            Api.deletarCliente(opçãoValor)
        })

function criarOpção(nomes, id){
    const tagOp = document.createElement("option")
    tagOp.value = id
    tagOp.innerText = nomes
    return tagOp
}
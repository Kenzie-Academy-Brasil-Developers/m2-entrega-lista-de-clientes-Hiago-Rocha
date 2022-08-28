import {Api} from "./api.js"

const clientesApi = await Api.listarClientes()

const select = document.getElementById("selectEdit")

function selecionaCliente(){
    clientesApi.forEach(cliente => {
        const nomes = cliente.nome
        const idEdit = cliente.id
        let opçãoCriada = criarOpção(nomes, idEdit)
        select.appendChild(opçãoCriada)
    });
    
}
selecionaCliente()

function criarOpção(nomes, id){
    const tagOp = document.createElement("option")
    tagOp.value = id
    tagOp.innerText = nomes
    return tagOp
}



const btnBuscar = document.getElementById("btnBuscar")
btnBuscar.addEventListener("click", (event) =>{
    event.preventDefault()
    let opçãoValor = select.options[select.selectedIndex].value
    console.log(opçãoValor)
        const inputName    = document.getElementById('nome')
        const inputEmail   = document.getElementById('email')
        const inputIdade   = document.getElementById('idade')
        const inputCpf     = document.getElementById('cpf')
        const inputSexo    = document.getElementById('sexo')
        const inputCep     = document.getElementById('cep')
        const inputRua     = document.getElementById('rua')
        const inputNumero  = document.getElementById('numero')
        const inputBairro  = document.getElementById('bairro')
        const inputCidade  = document.getElementById('cidade')
        const inputEstado  = document.getElementById('estado')

    clientesApi.forEach(cliente => {
        if(cliente.id == opçãoValor){
            inputName.value    = cliente.nome
            inputEmail.value   = cliente.email
            inputIdade.value   = cliente.idade
            inputCpf.value     = cliente.cpf     
            inputSexo.value    = cliente.sexo   
            inputCep.value     = cliente.endereco.cep 
            inputRua.value     = cliente.endereco.rua    
            inputNumero.value  = cliente.endereco.numero  
            inputBairro.value  = cliente.endereco.bairro  
            inputCidade.value  = cliente.endereco.cidade
            inputEstado.value  = cliente.endereco.estado
        }
    })
})

const btnEditar = document.getElementById("btnEditar")

btnEditar.addEventListener('click', async (event) => {
    event.preventDefault()
    let opçãoValor = select.options[select.selectedIndex].value
        const inputName    = document.getElementById('nome')
        const inputEmail   = document.getElementById('email')
        const inputIdade   = document.getElementById('idade')
        const inputCpf     = document.getElementById('cpf')
        const inputSexo    = document.getElementById('sexo')
        const inputCep     = document.getElementById('cep')
        const inputRua     = document.getElementById('rua')
        const inputNumero  = document.getElementById('numero')
        const inputBairro  = document.getElementById('bairro')
        const inputCidade  = document.getElementById('cidade')
        const inputEstado  = document.getElementById('estado')
    const data = {
        nome: inputName.value,
        idade: inputIdade.value,
        cpf: inputCpf.value,
        sexo: inputSexo.value,
        email: inputEmail.value,
        endereco:{
            cep: inputCep.value,
            rua: inputRua.value,
            numero: inputNumero.value,
            bairro: inputBairro.value,
            cidade: inputCidade.value,
            estado: inputEstado.value
        }
    }
    await Api.editarCliente(opçãoValor, data)
})
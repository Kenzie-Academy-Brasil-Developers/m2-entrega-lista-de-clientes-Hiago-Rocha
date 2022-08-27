import {Api} from "./api.js"

class cadastro {

    static criarNovoCliente() {
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
        const btnCadastrar = document.getElementById("cadastrar")
        

        btnCadastrar.addEventListener('click', async (event) => {
            event.preventDefault()
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
            await Api.cadastrarCliente(data)
        })
            
    }
}

cadastro.criarNovoCliente()


class Api {
  
    static async listarClientes(){
        const data = await fetch("https://atividade-api-clientes.herokuapp.com/clientes",{
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        return await data.json()
    }

    static async cadastrarCliente(data){
    }

    static async editarCliente(id, data){

    }

    static async deletarCliente(id){

    }

}

export {Api}
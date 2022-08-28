class Api {
  
    static async listarClientes(){
        const data = await fetch("https://atividade-api-clientes.herokuapp.com/clientes",{
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        return await data.json()
    }

    static async cadastrarCliente(data){
        const newCliente = await fetch("https://atividade-api-clientes.herokuapp.com/clientes",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            window.location.assign("../../index.html")
            return res
        })
        .catch(err => console.log(err))

        return newCliente
    }   

    static async editarCliente(id, data){
        const EditaCliente = await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            window.location.assign("../../index.html")
            return res
        })
        .catch(err => console.log(err))

        return newCliente
            


    }

    static async deletarCliente(id){
        const data = await fetch( `https://atividade-api-clientes.herokuapp.com/clientes/${id}`,{
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
    }

}

export {Api}
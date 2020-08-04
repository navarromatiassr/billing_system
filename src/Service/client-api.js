import axios from 'axios';
const BASE = 'http://localhost:3005/';

class ClientApi{

    async getClients(){
       const query = await axios.get(`${BASE}clients-api`)
       const data = query.data
       return data;
    }

    async getClientByName(name){
       const query = await axios.get(`${BASE}clients-api?name=${name}`)
       const data = query.data
       return data;
    }

    async getClientById(id){
        const query = await axios.get(`${BASE}clients-api/${id}`)
        const data = query.data
        return data;
    }

    async editClient(client){
        console.log(client)
        const clientJSON = JSON.stringify(client)
        const query = await axios.patch(`${BASE}clients-api`, clientJSON, {
            headers:{
                "Content-Type" : "application/json"
            }
        })
        const data = query.data
        return data;
    }

    async addClient(client){
       const clientJSON = JSON.stringify(client)
       const query = await axios.post(`${BASE}clients-api`, clientJSON, {
           headers:{
               "Content-Type" : "application/json"
           }
       })
       const data = query.data
       return data;
    }

    async deleteClient(dni){
       const query = await axios.delete(`${BASE}clients-api/${dni}`, {
           headers: {
               "Content-Type": "application/json"
           }
       });
       console.log("Delete success!")
       const data = query.data;
       return data;
    }

}export default ClientApi;



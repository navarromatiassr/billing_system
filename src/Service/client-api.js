import axios from 'axios';
const BASE = 'http://localhost:8080/api/';

class ClientApi{

    async getClients(){
       const query = await axios.get(`${BASE}clients/all`)
       const data = query.data
       return data;
    }

    async getClientByDNI(dni){
        const query = await axios.get(`${BASE}search?dni=${dni}`)
        const data = query.data
        return data;
    }

    async getClientById(id){
        const query = await axios.get(`${BASE}clients/find/${id}`)
        const data = query.data
        return data;
    }

    async editClient(client){
        console.log(client)
        const clientJSON = JSON.stringify(client)
        const query = await axios.put(`${BASE}clients/edit`, clientJSON, {
            headers:{
                "Content-Type" : "application/json",
            }
        })
        const data = query.data
        return data;
    }

    async addClient(client){
       const clientJSON = JSON.stringify(client)
       const query = await axios.post(`${BASE}clients`, clientJSON, {
           headers:{
               "Content-Type" : "application/json"
           }
       })
       const data = query.data
       return data;
    }

    async deleteClient(id){
       const query = await axios.put(`${BASE}clients/delete/${id}`, {
           headers: {
               "Content-Type": "application/json",
           }
       });
       console.log("Delete success!")
       const data = query.data;
       return data;
    }

}export default ClientApi;



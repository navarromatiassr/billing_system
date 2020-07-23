import axios from 'axios';
const BASE = 'http://localhost:3000/api/client';

class ClientApi{

    async getClients(){
       const query = await axios.get(`${BASE}clients`)
       const data = query.data
       return data;
    }

    async getClientByDNI(dni){
       const query = await axios.get(`${BASE}clients/${dni}`)
       const data = query.data
       return data;
    }

    async getClientByName(name){
       const query = await axios.get(`${BASE}clients/search?query=${name}`)
       const data = query.data
       return data;
    }

    async addClient(client){
       const clientJSON = JSON.stringify(client)
       const query = await axios.post(`${BASE}clients`, clientJSON, {
           headers:{
               "Content-Type" : "app/json"
           }
       })
       const data = query.data
       return data;
    }

    async deleteClient(id){
       const query = await axios.put(`${BASE}clients/${id}`, {
           headers: {
               "Content-Type": "application/json"
           }
       });
       const data = query.data;
       return data;
    }



}export default ClientApi;



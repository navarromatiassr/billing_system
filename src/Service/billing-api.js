import axios from 'axios';
const BASE = 'http://localhost:3005/'

class BillingApi {
    async getBillings(){
        const query = await axios.get(`${BASE}billings-api`);
        const data = query.data;
        return data;
    }

    async getBillingById(id){
        const query = await axios.get(`${BASE}billings-api/${id}`);
        const data = query.data;
        return data;
    }

    async getBillingByIdClient(id){
        const query = await axios.get(`${BASE}billings-api?billHeader.client.id=${id}`);
        const data = query.data;
        return data;
    }

    async createBilling(billing){
        const billingJson = JSON.stringify(billing);
        const query = await axios.post(`${BASE}billings-api`, billingJson,{
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = query.data;
        return data;
    }

    async deleteBilling(id){
        const query = await axios.put(`${BASE}billings-api/${id}`, {
           headers: {
               "Content-Type": "application/json",
           }
       });
       console.log("Delete success!")
       const data = query.data;
       return data;
    }
}
export default BillingApi;
